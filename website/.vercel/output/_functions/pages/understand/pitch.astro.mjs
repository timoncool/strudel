/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment$1, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { cA as Claviature, b3 as getAudioContext, ch as midi2note, bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import { $ as $$Box } from '../../chunks/Box_BjdITm45.mjs';
export { renderers } from '../../renderers.mjs';

function useEvent(name, onTrigger, useCapture = false) {
  useEffect(() => {
    document.addEventListener(name, onTrigger, useCapture);
    return () => {
      document.removeEventListener(name, onTrigger, useCapture);
    };
  }, [onTrigger]);
}

function useFrame(callback, autostart = false) {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(time, deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  const start = () => {
    requestRef.current = requestAnimationFrame(animate);
  };
  const stop = () => {
    requestRef.current && cancelAnimationFrame(requestRef.current);
    delete requestRef.current;
  };
  useEffect(() => {
    if (requestRef.current) {
      stop();
      start();
    }
  }, [callback]);

  useEffect(() => {
    if (autostart) {
      start();
    }
    return stop;
  }, []); // Make sure the effect only runs once

  return {
    start,
    stop,
  };
}

let Button = (props) => /* @__PURE__ */ jsx("button", { ...props, className: "bg-lineHighlight p-2 rounded-md color-foreground" });
function plotValues(ctx, values, min, max, color) {
  let { width, height } = ctx.canvas;
  ctx.strokeStyle = color;
  const thickness = 8;
  ctx.lineWidth = thickness;
  ctx.beginPath();
  let x = (f) => (f - min) / (max - min) * width;
  let y = (i) => (1 - i / values.length) * height;
  values.forEach((f, i, a) => {
    ctx.lineTo(x(f), y(i));
  });
  ctx.stroke();
}
let pitchColor = "#eab308";
let frequencyColor = "#3b82f6";
function PitchSlider({
  buttons = [],
  animatable = false,
  plot = false,
  showPitchSlider = false,
  showFrequencySlider = false,
  pitchStep = "0.001",
  min = 55,
  max = 7040,
  initial = 220,
  baseFrequency = min,
  zeroOffset = 0,
  claviature
}) {
  const oscRef = useRef();
  const activeRef = useRef();
  const freqRef = useRef(initial);
  const historyRef = useRef([freqRef.current]);
  const frameRef = useRef();
  const canvasRef = useRef();
  const [hz, setHz] = useState(freqRef.current);
  useEffect(() => {
    freqRef.current = hz;
  }, [hz]);
  useEvent("mouseup", () => {
    oscRef.current?.stop();
    activeRef.current = false;
  });
  let freqSlider2freq = (progress) => min + progress * (max - min);
  let pitchSlider2freq = (progress) => min * 2 ** (progress * Math.log2(max / min));
  let freq2freqSlider = (freq) => (freq - min) / (max - min);
  let freq2pitchSlider = (freq) => {
    const [minOct, maxOct] = [Math.log2(min), Math.log2(max)];
    return (Math.log2(freq) - minOct) / (maxOct - minOct);
  };
  const freqSlider = freq2freqSlider(hz);
  const pitchSlider = freq2pitchSlider(hz);
  let startOsc = (hz2) => {
    if (oscRef.current) {
      oscRef.current.stop();
    }
    oscRef.current = getAudioContext().createOscillator();
    oscRef.current.frequency.value = hz2;
    oscRef.current.connect(getAudioContext().destination);
    oscRef.current.start();
    activeRef.current = true;
    setHz(hz2);
  };
  let startSweep = (exp = false) => {
    let f = min;
    startOsc(f);
    const frame = () => {
      if (f < max) {
        if (!exp) {
          f += 10;
        } else {
          f *= 1.01;
        }
        oscRef.current.frequency.value = f;
        frameRef.current = requestAnimationFrame(frame);
      } else {
        oscRef.current.stop();
        cancelAnimationFrame(frameRef.current);
      }
      setHz(f);
    };
    requestAnimationFrame(frame);
  };
  useFrame(() => {
    historyRef.current.push(freqRef.current);
    historyRef.current = historyRef.current.slice(-1e3);
    if (canvasRef.current) {
      let ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      if (showFrequencySlider) {
        plotValues(ctx, historyRef.current, min, max, frequencyColor);
      }
      if (showPitchSlider) {
        const [minOct, maxOct] = [Math.log2(min), Math.log2(max)];
        let perceptual = historyRef.current.map((v) => Math.log2(v));
        plotValues(ctx, perceptual, minOct, maxOct, pitchColor);
      }
    }
  }, plot);
  let handleChangeFrequency = (f) => {
    setHz(f);
    if (oscRef.current) {
      oscRef.current.frequency.value = f;
    }
  };
  let handleMouseDown = () => {
    cancelAnimationFrame(frameRef.current);
    startOsc(hz);
  };
  let exponent, activeNote, activeNoteLabel;
  if (showPitchSlider) {
    const expOffset = baseFrequency ? Math.log2(baseFrequency / min) : 0;
    exponent = freq2pitchSlider(hz) * Math.log2(max / min) - expOffset;
    let semitones = parseFloat((exponent * 12).toFixed(2));
    if (zeroOffset) {
      semitones = semitones + zeroOffset;
      const isWhole = Math.round(semitones) === semitones;
      activeNote = midi2note(Math.round(semitones));
      activeNoteLabel = (!isWhole ? "~" : "") + activeNote;
      semitones = !isWhole ? semitones.toFixed(2) : semitones;
      exponent = /* @__PURE__ */ jsxs(Fragment, { children: [
        "(",
        /* @__PURE__ */ jsx("span", { className: "text-yellow-500", children: semitones }),
        " - ",
        zeroOffset,
        ")/12"
      ] });
    } else if (semitones % 12 === 0) {
      exponent = /* @__PURE__ */ jsx("span", { className: "text-yellow-500", children: semitones / 12 });
    } else if (semitones % 1 === 0) {
      exponent = /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "text-yellow-500", children: semitones }),
        "/12"
      ] });
    } else {
      exponent = /* @__PURE__ */ jsx("span", { className: "text-yellow-500", children: exponent.toFixed(2) });
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("span", { className: "font-mono", children: [
      showFrequencySlider && /* @__PURE__ */ jsxs("span", { className: "text-blue-500", children: [
        hz.toFixed(0),
        "Hz"
      ] }),
      showFrequencySlider && showPitchSlider && /* @__PURE__ */ jsx(Fragment, { children: " = " }),
      showPitchSlider && /* @__PURE__ */ jsxs(Fragment, { children: [
        baseFrequency || min,
        "Hz * 2",
        /* @__PURE__ */ jsx("sup", { children: exponent })
      ] })
    ] }),
    claviature && /* @__PURE__ */ jsxs(Fragment, { children: [
      " ",
      "= ",
      /* @__PURE__ */ jsx("span", { className: "text-yellow-500", children: activeNoteLabel })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      showFrequencySlider && /* @__PURE__ */ jsx("div", { className: "flex space-x-1 items-center", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "range",
          value: freqSlider,
          min: 0,
          max: 1,
          step: 1e-3,
          onMouseDown: handleMouseDown,
          className: `block w-full max-w-[600px] accent-blue-500 `,
          onChange: (e) => {
            const f = freqSlider2freq(parseFloat(e.target.value));
            handleChangeFrequency(f);
          }
        }
      ) }),
      showPitchSlider && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "range",
          value: pitchSlider,
          min: 0,
          max: 1,
          step: pitchStep,
          onMouseDown: handleMouseDown,
          className: `block w-full max-w-[600px] accent-yellow-500`,
          onChange: (e) => {
            const f = pitchSlider2freq(parseFloat(e.target.value));
            handleChangeFrequency(f);
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "px-2", children: plot && /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "w-full max-w-[584px] h-[300px]", height: "600", width: 800 }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-x-2", children: [
      animatable && /* @__PURE__ */ jsx(Button, { onClick: () => startSweep(), children: /* @__PURE__ */ jsx("span", { style: { color: "#3b82f6" }, children: "Frequency Sweep" }) }),
      animatable && /* @__PURE__ */ jsx(Button, { onClick: () => startSweep(true), children: /* @__PURE__ */ jsx("span", { style: { color: "#eab308" }, children: "Pitch Sweep" }) }),
      buttons.map((f, i) => /* @__PURE__ */ jsxs(Button, { onMouseDown: () => startOsc(f), children: [
        f,
        "Hz"
      ] }, (i)))
    ] }),
    claviature && /* @__PURE__ */ jsx(
      Claviature,
      {
        onMouseDown: (note) => {
          const f = 440 * 2 ** ((note - 69) / 12);
          handleChangeFrequency(f);
          cancelAnimationFrame(frameRef.current);
          startOsc(f);
        },
        options: {
          range: ["A1", "A5"],
          scaleY: 0.75,
          scaleX: 0.86,
          colorize: activeNote ? [{ keys: [activeNote], color: "#eab308" }] : [],
          labels: activeNote ? { [activeNote]: activeNote } : {}
        }
      }
    )
  ] });
}

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$MainLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "title": "Понимание Pitch",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "понимание-pitch",
    "text": "Понимание Pitch"
  }, {
    "depth": 2,
    "slug": "частота-против-восприятия-pitch",
    "text": "Частота против восприятия Pitch"
  }, {
    "depth": 2,
    "slug": "от-hz-к-полутонам",
    "text": "От Hz к полутонам"
  }, {
    "depth": 2,
    "slug": "от-полутонов-к-midi-номерам",
    "text": "От полутонов к MIDI-номерам"
  }, {
    "depth": 2,
    "slug": "от-midi-номеров-к-нотам",
    "text": "От MIDI-номеров к нотам"
  }, {
    "depth": 2,
    "slug": "открытые-вопросы",
    "text": "Открытые вопросы"
  }, {
    "depth": 2,
    "slug": "определение",
    "text": "Определение"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment$1, {
    children: [createVNode(_components.h1, {
      id: "понимание-pitch",
      children: ["Понимание Pitch", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/pitch/#понимание-pitch",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Давайте узнаем, как работает pitch! Ползунок ниже управляет ", createVNode("span", {
        style: "color:#3b82f6;",
        children: "частотой"
      }), " осциллятора, производя pitch:"]
    }), "\n", "\n", createVNode(PitchSlider, {
      "client:load": true,
      showFrequencySlider: true,
      min: 20,
      max: 20000,
      "client:component-path": "/home/user/Bulka/website/src/components/PitchSlider",
      "client:component-export": "PitchSlider",
      "client:component-hydration": true
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Перетащите ползунок, чтобы услышать pitch"
      }), "\n", createVNode(_components.li, {
        children: "Переместите ползунок, чтобы изменить pitch"
      }), "\n", createVNode(_components.li, {
        children: "Наблюдайте, как меняется число Hz"
      }), "\n", createVNode(_components.li, {
        children: [createVNode("span", {
          className: "text-red-300",
          children: "Осторожно"
        }), ": Более высокие частоты могут быть неприятны для детей или животных!"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Число Hz - это частота pitch, которую вы слышите.\nЧем выше частота, тем выше pitch, и наоборот.\nPitch возникает, когда что-то вибрирует / колеблется с определенной частотой, в данном случае это ваш динамик.\nЕдиница ", createVNode(_components.strong, {
        children: "Hz"
      }), " описывает, сколько раз эта осцилляция происходит в секунду.\nНаши глаза слишком медленные, чтобы на самом деле увидеть осцилляцию на динамике, но мы можем ", createVNode("a", {
        href: "https://www.youtube.com/watch?v=CDMBWw7OuJQ",
        target: "_blank",
        children: "увидеть это в замедленной съемке"
      }), "."]
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Диапазон слуха новорожденного, как говорят, составляет от 20Hz до 20000Hz.\nВерхний предел уменьшается с возрастом. Каков ваш верхний предел?"
      })
    }), "\n", createVNode(_components.p, {
      children: ["В Strudel мы можем воспроизводить частоты напрямую с помощью контрола ", createVNode(_components.code, {
        children: "freq"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `freq("<200 [300,500] 400 [500,<600 670 712 670>]>*8")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "частота-против-восприятия-pitch",
      children: ["Частота против восприятия Pitch", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/pitch/#частота-против-восприятия-pitch",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Возможно, вы уже заметили, что ", createVNode("span", {
        style: "color:#3b82f6;",
        children: "ползунок частоты"
      }), " “несимметричный”,\nчто означает, что pitch больше меняется в левой области и меньше в правой области.", createVNode("br", {}), "\nЧтобы сделать это более очевидным, давайте добавим ", createVNode("span", {
        style: "color:#eab308",
        children: "ползунок pitch"
      }), ",\nкоторый управляет частотой по другой шкале:"]
    }), "\n", createVNode(PitchSlider, {
      animatable: true,
      plot: true,
      showFrequencySlider: true,
      showPitchSlider: true,
      "client:load": true,
      "client:component-path": "/home/user/Bulka/website/src/components/PitchSlider",
      "client:component-export": "PitchSlider",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Попробуйте кнопки выше, чтобы прокрутить диапазон частот двумя разными способами:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Развертка частоты: ", createVNode("span", {
          style: "color:#3b82f6;",
          children: "частота растет линейно"
        }), " , ", createVNode("span", {
          style: "color:#eab308",
          children: "pitch растет логарифмически"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Развертка Pitch: ", createVNode("span", {
          style: "color:#3b82f6;",
          children: "частота растет экспоненциально"
        }), " , ", createVNode("span", {
          style: "color:#eab308",
          children: "pitch растет линейно"
        })]
      }), "\n"]
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Не пугайтесь этих математических терминов:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "“логарифмический” - это просто причудливый способ сказать “начинается быстро и замедляется”"
        }), "\n", createVNode(_components.li, {
          children: "“экспоненциальный” - это просто причудливый способ сказать “начинается медленно и ускоряется”"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["В большинстве случаев мы можем захотеть управлять pitch таким образом, который соответствует нашему восприятию,\nчто и делает ", createVNode("span", {
        style: "color:#eab308",
        children: "ползунок pitch"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "от-hz-к-полутонам",
      children: ["От Hz к полутонам", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/pitch/#от-hz-к-полутонам",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Поскольку Hz не соответствует нашему восприятию, давайте попробуем найти единицу для pitch, которая соответствует.\nЧтобы приблизиться к этой единице pitch, давайте посмотрим, как ведет себя частота, когда она удваивается:"
    }), "\n", createVNode(PitchSlider, {
      "client:load": true,
      showPitchSlider: true,
      showFrequencySlider: true,
      pitchStep: 1 / 7,
      "client:component-path": "/home/user/Bulka/website/src/components/PitchSlider",
      "client:component-export": "PitchSlider",
      "client:component-hydration": true
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Используйте ступенчатый ползунок pitch выше"
      }), "\n", createVNode(_components.li, {
        children: "Слышите ли вы, как эти питчи связаны друг с другом?"
      }), "\n"]
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["В музыкальных терминах pitch с удвоенной частотой другого на ", createVNode(_components.code, {
          children: "октаву"
        }), " выше."]
      })
    }), "\n", createVNode(_components.p, {
      children: "Поскольку октавы довольно далеко друг от друга, октавы обычно делятся на 12 меньших частей:"
    }), "\n", createVNode(PitchSlider, {
      "client:load": true,
      showPitchSlider: true,
      showFrequencySlider: true,
      pitchStep: 1 / 12,
      min: 440,
      max: 880,
      initial: 440,
      "client:component-path": "/home/user/Bulka/website/src/components/PitchSlider",
      "client:component-export": "PitchSlider",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Этот шаг также называется полутоном, который является наиболее распространенным делением pitch-музыки.\nНапример, клавиши на клавиатуре пианино также разделены на полутоны."
    }), "\n", createVNode(_components.p, {
      children: ["В Strudel мы могли бы сделать это с ", createVNode(_components.code, {
        children: "freq"
      }), " так:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `freq(
"0 4 7 12"
.fmap(n => 440 * 2**(n/12))
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Конечно, это можно написать короче с помощью note, как мы увидим ниже."
    }), "\n", createVNode(_components.h2, {
      id: "от-полутонов-к-midi-номерам",
      children: ["От полутонов к MIDI-номерам", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/pitch/#от-полутонов-к-midi-номерам",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Теперь мы знаем, что такое расстояние полутона.\nВыше мы использовали произвольную базовую частоту 440Hz, что означает, что экспонента 0 равна 440Hz.\nОбычно 440Hz стандартизирован до числа 69, что приводит к этому расчету:"
    }), "\n", createVNode(PitchSlider, {
      "client:load": true,
      showPitchSlider: true,
      showFrequencySlider: true,
      baseFrequency: 440,
      zeroOffset: 69,
      pitchStep: 1 / 12 / 7,
      min: 440 / 8,
      max: 7040,
      initial: 440,
      "client:component-path": "/home/user/Bulka/website/src/components/PitchSlider",
      "client:component-export": "PitchSlider",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Желтое число теперь является MIDI-номером, охватывающим более чем весь диапазон человеческого слуха с числами от 0 до 127.\nВ Strudel мы можем использовать MIDI-номера внутри ", createVNode(_components.code, {
        children: "note"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("69 73 76 81")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "от-midi-номеров-к-нотам",
      children: ["От MIDI-номеров к нотам", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/pitch/#от-midi-номеров-к-нотам",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "В западной музыкальной теории вместо номеров используются ноты.\nДля каждого midi-номера есть по крайней мере одна нотная метка:"
    }), "\n", createVNode(PitchSlider, {
      "client:load": true,
      showPitchSlider: true,
      showFrequencySlider: true,
      baseFrequency: 440,
      zeroOffset: 69,
      pitchStep: 1 / 48,
      min: 440 / 8,
      max: 880,
      initial: 440,
      claviature: true,
      "client:component-path": "/home/user/Bulka/website/src/components/PitchSlider",
      "client:component-export": "PitchSlider",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Полная нотная метка состоит из буквы (A-G), 0 или более знаков альтерации (b | #) и номера октавы.\nЭта система также известна как ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Scientific_pitch_notation",
        children: "научная нотация pitch"
      }), ".\nВ Strudel эти нотные метки также могут использоваться внутри ", createVNode(_components.code, {
        children: "note"
      }), " как альтернатива midi-номерам:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("A4 C#5 E5 A5").piano()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "открытые-вопросы",
      children: ["Открытые вопросы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/pitch/#открытые-вопросы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Теперь, когда мы узнали о различных представлениях pitch, все еще остаются открытые вопросы:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Почему 12 нот? А как насчет других делений октавы?"
      }), "\n", createVNode(_components.li, {
        children: "Почему ноты обозначены так, как они есть? Почему только 7 букв?"
      }), "\n", createVNode(_components.li, {
        children: "Есть ли другие системы обозначений?"
      }), "\n", createVNode(_components.li, {
        children: "А как насчет систем чистого строя?"
      }), "\n", createVNode(_components.li, {
        children: "А как насчет тембра?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Все эти вопросы важно задавать, и на них будут даны ответы в другой статье."
    }), "\n", createVNode(_components.h2, {
      id: "определение",
      children: ["Определение", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/pitch/#определение",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Сначала я хотел начать эту статью с определения, но затем подумал, что было бы хорошей идеей сосредоточиться на интуитивном исследовании.\nВозможно, теперь вы понимаете это определение намного лучше:"
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Из ", createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/Pitch_(music)",
          children: "wikipedia"
        }), ": “Pitch - это перцептивное свойство звуков, которое позволяет их упорядочивать по шкале, связанной с частотой, или, более часто, pitch - это качество, которое позволяет оценивать звуки как “выше” и “ниже” в смысле, связанном с музыкальными мелодиями.”"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/understand/pitch";
const file = "/home/user/Bulka/website/src/pages/understand/pitch.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment$1, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/understand/pitch.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
