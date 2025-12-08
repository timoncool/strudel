import{_ as O}from"./preload-helper.CLcXU_4U.js";import{c as y,l as g,B as h}from"./index.CXEd7qFE.js";import{g as C}from"./spectrum.DtTj66Yt.js";import"./index.Ds4Xb5JZ.js";const q=`<CsoundSynthesizer>
<CsInstruments>

sr=48000
ksmps=64
nchnls=2
0dbfs=1

</CsInstruments>
</CsoundSynthesizer>`,$=`; returns value of given key in given "string map"
; keymap("freq", "note/c3/freq/220/gain/0.5")
; yields "220"
opcode keymap, S, SS
  Skey, Smap xin
  idelimiter = strindex(Smap, strcat(Skey, "/"))
  ifrom = idelimiter + strlen(Skey) + 1
  Svalue = strsub(Smap, ifrom, strlen(Smap))
  Svalue = strsub(Svalue, 0, strindex(Svalue, "/"))
  xout Svalue
endop

; TODO add incredibly dope synths
instr organ
    iduration = p3
    ifreq = p4
    igain = p5
    ioct = octcps(ifreq)

    asig = vco2(igain, ifreq, 12, .5) ; my edit
    kpwm = oscili(.1, 5)
    asig = vco2(igain, ifreq, 4, .5 + kpwm)
    asig += vco2(igain/4, ifreq * 2)

    ; filter
    ; idepth = 2
    ; acut = transegr:a(0, .005, 0, idepth, .06, -4.2, 0.001, .01, -4.2, 0) ; filter envelope
    ; asig = zdf_2pole(asig, cpsoct(ioct + acut), 0.5)

    ; amp envelope
    iattack = .001
    irelease = .05
    asig *= linsegr:a(0, iattack, 1, iduration, 1, irelease, 0)

    out(asig, asig)

endin

instr triangle
  iduration = p3
  ifreq = p4
  igain = p5
  ioct = octcps(ifreq)
  
  asig = vco2(igain, ifreq, 12, .5)
  
  ; amp envelope
  iattack = .001
  irelease = .05
  asig *= linsegr:a(0, iattack, 1, iduration, 1, irelease, 0)
  
  out(asig, asig)
endin

instr pad
    iduration = p3
    ifreq = p4
    igain = p5
    ioct = octcps(ifreq)

    asig = vco2(igain, ifreq, 0)

    ; amp envelope
    iattack = .5
    irelease = .1
    asig *= linsegr:a(0, iattack, 1, iduration, 1, irelease, 0)
    
    idepth = 2
    acut = transegr:a(0, .005, 0, idepth, .06, -4.2, 0.001, .01, -4.2, 0)
    asig = zdf_2pole(asig, 1000, 2)

    out(asig, asig)
endin


gisine	ftgen	0, 0, 4096, 10, 1

instr bow
    kpres = 2
    krat = 0.16
    kvibf = 6.12723
    
    kvib  linseg 0, 0.5, 0, 1, 1, p3-0.5, 1	
    kvamp = kvib * 0.01
    asig  wgbow .7, p4, kpres, krat, kvibf, kvamp, gisine
    asig = asig*p5
    outs asig, asig
endin


instr Meta
    Smap = strget(p6)
    Sinstrument = keymap("s", Smap)
    schedule(Sinstrument, 0, p3, p4, p5)
    ; TODO find a way to pipe Sinstrument through effects
endin`;let u,e;async function k(n=""){await d(),n&&(n=`${n}`,await e?.evalCode(n))}const D=k,I=k,L=y("csound",(n,i)=>(n=n||"triangle",d(),i.onTrigger((t,s,f,m)=>{if(!e){g("[csound] not loaded yet","warning");return}t.ensureObjectValue();let{gain:o=.8}=t.value;o*=.2;const r=Math.round(h(t)),p=Object.entries({...t.value,freq:r}).flat().join("/"),c=m-s,a=`i ${[`"${n}"`,c,t.duration+0,r,o,`"${p}"`].join(" ")}`;e.inputMessage(a)})));function x(n,i){const[t]=i;if(n==="message"&&(["[commit: HEAD]"].includes(t)||t.startsWith("--Csound version")||t.startsWith("libsndfile")||t.startsWith("sr =")||t.startsWith("0dBFS")||t.startsWith("audio buffered")||t.startsWith("writing")||t.startsWith("SECTION 1:")))return;let s="info";t.startsWith("error:")&&(s="error"),g(`[csound] ${t||""}`,s)}async function W(){if(window.__csound__)return g("[load] Using external Csound","warning"),e=window.__csound__,e;{const{Csound:n}=await O(async()=>{const{Csound:i}=await import("./csound.-DfvzaX-.js");return{Csound:i}},[]);return e=await n({audioContext:C()}),e.removeAllListeners("message"),["message"].forEach(i=>e.on(i,(...t)=>x(i,t))),await e.setOption("-m0d"),await e.setOption("--sample-accurate"),await e.setOption("-odac"),await e.compileCsdText(q),await e.compileOrc($),await e.start(),e}}async function d(){return u=u||W(),u}let l={};async function B(n){if(await d(),typeof n!="string")throw new Error("loadOrc: expected url string");if(n.startsWith("github:")){const[i,t]=n.split("github:");n=`https://raw.githubusercontent.com/${t}`}l[n]||(l[n]=fetch(n).then(i=>i.text()).then(i=>e.compileOrc(i))),await l[n]}const F=y("csoundm",(n,i)=>{let t=n;return typeof n=="string"&&(t=`"${n}"`),d(),i.onTrigger((s,f,m,o)=>{if(!e){g("[csound] not loaded yet","warning");return}if(typeof s.value!="object")throw new Error("csound only support objects as hap values");const r=o-f,p=s.duration.valueOf()+0,c=h(s);let{gain:v=1,velocity:a=.9}=s.value;a=v*a;const S=(Math.log(c/261.62558)/Math.log(2)+8)*12-36,_=127*a,b=Object.entries({...s.value,frequency:c}).flat().join("/"),w=`i ${t} ${r} ${p} ${S} ${_} "${b}"`;console.log("[csoundm]:",w),e.inputMessage(w)})});export{L as csound,F as csoundm,k as loadCSound,I as loadCsound,B as loadOrc,D as loadcsound};
