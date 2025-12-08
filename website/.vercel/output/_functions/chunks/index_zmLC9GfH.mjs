import { cg as register, ca as logger, b3 as getAudioContext, cz as getFrequency } from './MiniRepl_Ntj7iAxy.mjs';

const csd = "<CsoundSynthesizer>\n<CsInstruments>\n\nsr=48000\nksmps=64\nnchnls=2\n0dbfs=1\n\n</CsInstruments>\n</CsoundSynthesizer>";

const presetsOrc = "; returns value of given key in given \"string map\"\n; keymap(\"freq\", \"note/c3/freq/220/gain/0.5\")\n; yields \"220\"\nopcode keymap, S, SS\n  Skey, Smap xin\n  idelimiter = strindex(Smap, strcat(Skey, \"/\"))\n  ifrom = idelimiter + strlen(Skey) + 1\n  Svalue = strsub(Smap, ifrom, strlen(Smap))\n  Svalue = strsub(Svalue, 0, strindex(Svalue, \"/\"))\n  xout Svalue\nendop\n\n; TODO add incredibly dope synths\ninstr organ\n    iduration = p3\n    ifreq = p4\n    igain = p5\n    ioct = octcps(ifreq)\n\n    asig = vco2(igain, ifreq, 12, .5) ; my edit\n    kpwm = oscili(.1, 5)\n    asig = vco2(igain, ifreq, 4, .5 + kpwm)\n    asig += vco2(igain/4, ifreq * 2)\n\n    ; filter\n    ; idepth = 2\n    ; acut = transegr:a(0, .005, 0, idepth, .06, -4.2, 0.001, .01, -4.2, 0) ; filter envelope\n    ; asig = zdf_2pole(asig, cpsoct(ioct + acut), 0.5)\n\n    ; amp envelope\n    iattack = .001\n    irelease = .05\n    asig *= linsegr:a(0, iattack, 1, iduration, 1, irelease, 0)\n\n    out(asig, asig)\n\nendin\n\ninstr triangle\n  iduration = p3\n  ifreq = p4\n  igain = p5\n  ioct = octcps(ifreq)\n  \n  asig = vco2(igain, ifreq, 12, .5)\n  \n  ; amp envelope\n  iattack = .001\n  irelease = .05\n  asig *= linsegr:a(0, iattack, 1, iduration, 1, irelease, 0)\n  \n  out(asig, asig)\nendin\n\ninstr pad\n    iduration = p3\n    ifreq = p4\n    igain = p5\n    ioct = octcps(ifreq)\n\n    asig = vco2(igain, ifreq, 0)\n\n    ; amp envelope\n    iattack = .5\n    irelease = .1\n    asig *= linsegr:a(0, iattack, 1, iduration, 1, irelease, 0)\n    \n    idepth = 2\n    acut = transegr:a(0, .005, 0, idepth, .06, -4.2, 0.001, .01, -4.2, 0)\n    asig = zdf_2pole(asig, 1000, 2)\n\n    out(asig, asig)\nendin\n\n\ngisine\tftgen\t0, 0, 4096, 10, 1\n\ninstr bow\n    kpres = 2\n    krat = 0.16\n    kvibf = 6.12723\n    \n    kvib  linseg 0, 0.5, 0, 1, 1, p3-0.5, 1\t\n    kvamp = kvib * 0.01\n    asig  wgbow .7, p4, kpres, krat, kvibf, kvamp, gisine\n    asig = asig*p5\n    outs asig, asig\nendin\n\n\ninstr Meta\n    Smap = strget(p6)\n    Sinstrument = keymap(\"s\", Smap)\n    schedule(Sinstrument, 0, p3, p4, p5)\n    ; TODO find a way to pipe Sinstrument through effects\nendin";

let csoundLoader, _csound;

// initializes csound + can be used to reevaluate given instrument code
async function loadCSound(code = '') {
  await init();
  if (code) {
    code = `${code}`;
    //     ^       ^
    // wrapping in backticks makes sure it works when calling as templated function
    await _csound?.evalCode(code);
  }
}
const loadcsound = loadCSound;
const loadCsound = loadCSound;

const csound = register('csound', (instrument, pat) => {
  instrument = instrument || 'triangle';
  init(); // not async to support csound inside other patterns + to be able to call pattern methods after it
  // TODO: find a alternative way to wait for csound to load (to wait with first time playback)
  return pat.onTrigger((hap, currentTime, _cps, targetTime) => {
    if (!_csound) {
      logger('[csound] not loaded yet', 'warning');
      return;
    }
    hap.ensureObjectValue();
    let { gain = 0.8 } = hap.value;
    gain *= 0.2;

    const freq = Math.round(getFrequency(hap));
    const controls = Object.entries({ ...hap.value, freq })
      .flat()
      .join('/');
    // TODO: find out how to send a precise ctx based time
    // http://www.csounds.com/manual/html/i.html
    const timeOffset = targetTime - currentTime; // latency ?
    //const timeOffset = time_deprecate - getAudioContext().currentTime
    const params = [
      `"${instrument}"`, // p1: instrument name
      timeOffset, // p2: starting time in arbitrary unit called beats
      hap.duration + 0, // p3: duration in beats
      // instrument specific params:
      freq, //.toFixed(precision), // p4: frequency
      gain, // p5: gain
      `"${controls}"`, // p6 controls as string (like superdirt osc message)
    ];
    const msg = `i ${params.join(' ')}`;
    _csound.inputMessage(msg);
  });
});

function eventLogger(type, args) {
  const [msg] = args;
  if (
    type === 'message' &&
    (['[commit: HEAD]'].includes(msg) ||
      msg.startsWith('--Csound version') ||
      msg.startsWith('libsndfile') ||
      msg.startsWith('sr =') ||
      msg.startsWith('0dBFS') ||
      msg.startsWith('audio buffered') ||
      msg.startsWith('writing') ||
      msg.startsWith('SECTION 1:'))
  ) {
    // ignore
    return;
  }
  let logType = 'info';
  if (msg.startsWith('error:')) {
    logType = 'error';
  }
  logger(`[csound] ${msg || ''}`, logType);
}

async function load() {
  if (window.__csound__) {
    // Allows using some other csound instance.
    // In that case, the external Csound is responsible
    // for compiling an orchestra and starting to perform.
    logger('[load] Using external Csound', 'warning');
    _csound = window.__csound__;
    return _csound;
  } else {
    const { Csound } = await import('./csound_nRr3kpNn.mjs');
    _csound = await Csound({ audioContext: getAudioContext() });
    _csound.removeAllListeners('message');
    ['message'].forEach((k) => _csound.on(k, (...args) => eventLogger(k, args)));
    await _csound.setOption('-m0d'); // see -m flag https://csound.com/docs/manual/CommandFlags.html
    await _csound.setOption('--sample-accurate');
    await _csound.setOption('-odac');
    await _csound.compileCsdText(csd);
    // await _csound.compileOrc(livecodeOrc);
    await _csound.compileOrc(presetsOrc);
    await _csound.start();
    return _csound;
  }
}

async function init() {
  csoundLoader = csoundLoader || load();
  return csoundLoader;
}

let orcCache = {};
async function loadOrc(url) {
  await init();
  if (typeof url !== 'string') {
    throw new Error('loadOrc: expected url string');
  }
  if (url.startsWith('github:')) {
    const [_, path] = url.split('github:');
    url = `https://raw.githubusercontent.com/${path}`;
  }
  if (!orcCache[url]) {
    orcCache[url] = fetch(url)
      .then((res) => res.text())
      .then((code) => _csound.compileOrc(code));
  }
  await orcCache[url];
}

/**
 * Отправляет ноты в Csound для рендеринга с семантикой MIDI. Значение hap
 * транслируется в следующие поля Csound (pfields):
 *
 *  p1 -- Инструмент Csound в виде числа (начиная с 1, может быть дробным),
 *        или в виде строкового имени.
 *  p2 -- Время в beats (обычно секунды) от начала исполнения.
 *  p3 -- Длительность в beats (обычно секунды).
 *  p4 -- Номер MIDI клавиши (вещественное число, не целое, в диапазоне [0, 127].
 *  p5 -- MIDI velocity (вещественное число, не целое, в диапазоне [0, 127].
 *  p6 -- Strudel controls, в виде строки.
 */
const csoundm = register('csoundm', (instrument, pat) => {
  let p1 = instrument;
  if (typeof instrument === 'string') {
    p1 = `"${instrument}"`;
  }
  init(); // not async to support csound inside other patterns + to be able to call pattern methods after it
  return pat.onTrigger((hap, currentTime, _cps, targetTime) => {
    if (!_csound) {
      logger('[csound] not loaded yet', 'warning');
      return;
    }
    if (typeof hap.value !== 'object') {
      throw new Error('csound only support objects as hap values');
    }
    // Time in seconds counting from now.
    const p2 = targetTime - currentTime;
    const p3 = hap.duration.valueOf() + 0;
    const frequency = getFrequency(hap);
    let { gain = 1, velocity = 0.9 } = hap.value;
    velocity = gain * velocity;
    // Translate frequency to MIDI key number _without_ rounding.
    const C4 = 261.62558;
    let octave = Math.log(frequency / C4) / Math.log(2.0) + 8.0;
    const p4 = octave * 12.0 - 36.0;
    // We prefer floating point precision, but over the MIDI range [0, 127].
    const p5 = 127 * velocity;
    // The Strudel controls as a string.
    const p6 = Object.entries({ ...hap.value, frequency })
      .flat()
      .join('/');
    const i_statement = `i ${p1} ${p2} ${p3} ${p4} ${p5} "${p6}"`;
    console.log('[csoundm]:', i_statement);
    _csound.inputMessage(i_statement);
  });
});

export { csound, csoundm, loadCSound, loadCsound, loadOrc, loadcsound };
