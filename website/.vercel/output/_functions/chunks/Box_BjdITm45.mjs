import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderSlot, b as renderComponent } from './astro/server_Cr1ImhJZ.mjs';
import LightBulbIcon from '@heroicons/react/20/solid/LightBulbIcon';

const $$Box = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="py-1 px-6 pr-10 bg-lineHighlight relative mb-4"> <div>${renderSlot($$result, $$slots["default"])}</div> ${renderComponent($$result, "LightBulbIcon", LightBulbIcon, { "className": "w-5 h-5 absolute top-4 right-4" })} <!-- <MusicalNoteIcon className="w-5 h-5 absolute top-4 right-4" /> --> </div>`;
}, "/home/user/Bulka/website/src/components/Box.astro", undefined);

export { $$Box as $ };
