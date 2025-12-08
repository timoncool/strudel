import { jsxs, jsx } from 'react/jsx-runtime';
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon';
import ChevronUpIcon from '@heroicons/react/20/solid/ChevronUpIcon';
import { useState } from 'react';

function QA({ children, q }) {
  const [visible, setVisible] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "py-4 px-6 pr-10 bg-lineHighlight relative mb-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "cursor-pointer", onClick: () => setVisible((v) => !v), children: [
      /* @__PURE__ */ jsx("div", { children: q }),
      /* @__PURE__ */ jsx("a", { className: "p-1 absolute top-4 right-4", children: visible ? /* @__PURE__ */ jsx(ChevronUpIcon, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(ChevronDownIcon, { className: "w-5 h-5" }) })
    ] }),
    visible && /* @__PURE__ */ jsx("div", { children })
  ] });
}

export { QA as Q };
