/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as renderComponent, g as renderHead, f as addAttribute } from '../chunks/astro/server_Cr1ImhJZ.mjs';
import { g as getMetadata } from '../chunks/metadata_parser_D6BHzO0U.mjs';
import { $ as $$HeadCommon } from '../chunks/HeadCommon_BR8Uvu4A.mjs';
export { renderers } from '../renderers.mjs';

const __vite_glob_0_0 = "# my-patterns\n\nThis directory can be used to save your own patterns, which then get\nmade into a pattern swatch.\n\nExample: <https://felixroos.github.io/strudel/swatch/>\n\nPlease note: These instructions have not been fully tested/adapted since strudel moved to codeberg from github. PRs welcome!\n\n## deploy\n\n### 1. fork the [strudel repo on codeberg](https://codeberg.org/uzu/strudel.git)\n\n### 2. clone your fork to your machine `git clone https://codeberg.org/<your-username>/strudel.git strudel && cd strudel`\n\n### 3. create a separate branch like `git branch patternuary && git checkout patternuary`\n\n### 4. save one or more .txt files in the my-patterns folder\n\n### 5. edit `website/public/CNAME` to contain `<your-username>.codeberg.page/strudel`\n\n### 6. edit `website/astro.config.mjs` to use site: `https://<your-username>.codeberg.page` and base `/strudel`, like this\n\n```js\nconst site = 'https://<your-username>.codeberg.page';\nconst base = '/strudel';\n```\n\n### 7. commit & push the changes\n\n```sh\ngit add . && git commit -m \"site config\" && git push --set-upstream origin\n```\n\n### 8. deploy to codeberg pages\n\n### 9. view your patterns at `<your-username>.codeberg.page/strudel/swatch/`\n\n### 10. optional: automatic deployment\n\nIf you want to automatically deploy your site on push, go to `deploy.yml` and change `workflow_dispatch` to `push`.\n\n## running locally\n\n- install dependencies with `npm run setup`\n- run dev server with `npm run repl` and open `http://localhost:4321/strudel/swatch/`\n\n## tests fail?\n\nYour tests might fail if the code does not follow prettiers format.\nIn that case, run `npm run codeformat`. To disable that, remove `npm run format-check` from `test.yml`\n\n## updating your fork\n\nTo update your fork, you can pull the main branch and merge it into your `patternuary` branch.\n";

function getMyPatterns() {
  const my = /* #__PURE__ */ Object.assign({"../../my-patterns/README.md": __vite_glob_0_0});
  return Object.fromEntries(
    Object.entries(my)
      .filter(([name]) => name.endsWith('.txt'))
      .map(([name, raw]) => [getMetadata(raw)['title'] || name.split('/').slice(-1), raw]),
  );
}

const html = () => "<h1 id=\"my-patterns\">my-patterns</h1>\n<p>This directory can be used to save your own patterns, which then get\nmade into a pattern swatch.</p>\n<p>Example: <a href=\"https://felixroos.github.io/strudel/swatch/\">https://felixroos.github.io/strudel/swatch/</a></p>\n<p>Please note: These instructions have not been fully tested/adapted since strudel moved to codeberg from github. PRs welcome!</p>\n<h2 id=\"deploy\">deploy</h2>\n<h3 id=\"1-fork-the-strudel-repo-on-codeberg\">1. fork the <a href=\"https://codeberg.org/uzu/strudel.git\">strudel repo on codeberg</a></h3>\n<h3 id=\"2-clone-your-fork-to-your-machine-git-clone-httpscodebergorgyour-usernamestrudelgit-strudel--cd-strudel\">2. clone your fork to your machine <code>git clone https://codeberg.org/&#x3C;your-username>/strudel.git strudel &#x26;&#x26; cd strudel</code></h3>\n<h3 id=\"3-create-a-separate-branch-like-git-branch-patternuary--git-checkout-patternuary\">3. create a separate branch like <code>git branch patternuary &#x26;&#x26; git checkout patternuary</code></h3>\n<h3 id=\"4-save-one-or-more-txt-files-in-the-my-patterns-folder\">4. save one or more .txt files in the my-patterns folder</h3>\n<h3 id=\"5-edit-websitepubliccname-to-contain-your-usernamecodebergpagestrudel\">5. edit <code>website/public/CNAME</code> to contain <code>&#x3C;your-username>.codeberg.page/strudel</code></h3>\n<h3 id=\"6-edit-websiteastroconfigmjs-to-use-site-httpsyour-usernamecodebergpage-and-base-strudel-like-this\">6. edit <code>website/astro.config.mjs</code> to use site: <code>https://&#x3C;your-username>.codeberg.page</code> and base <code>/strudel</code>, like this</h3>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"js\"><code><span class=\"line\"><span style=\"color:#F97583\">const</span><span style=\"color:#79B8FF\"> site</span><span style=\"color:#F97583\"> =</span><span style=\"color:#9ECBFF\"> 'https://&#x3C;your-username>.codeberg.page'</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">const</span><span style=\"color:#79B8FF\"> base</span><span style=\"color:#F97583\"> =</span><span style=\"color:#9ECBFF\"> '/strudel'</span><span style=\"color:#E1E4E8\">;</span></span></code></pre>\n<h3 id=\"7-commit--push-the-changes\">7. commit &#x26; push the changes</h3>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"sh\"><code><span class=\"line\"><span style=\"color:#B392F0\">git</span><span style=\"color:#9ECBFF\"> add</span><span style=\"color:#9ECBFF\"> .</span><span style=\"color:#E1E4E8\"> &#x26;&#x26; </span><span style=\"color:#B392F0\">git</span><span style=\"color:#9ECBFF\"> commit</span><span style=\"color:#79B8FF\"> -m</span><span style=\"color:#9ECBFF\"> \"site config\"</span><span style=\"color:#E1E4E8\"> &#x26;&#x26; </span><span style=\"color:#B392F0\">git</span><span style=\"color:#9ECBFF\"> push</span><span style=\"color:#79B8FF\"> --set-upstream</span><span style=\"color:#9ECBFF\"> origin</span></span></code></pre>\n<h3 id=\"8-deploy-to-codeberg-pages\">8. deploy to codeberg pages</h3>\n<h3 id=\"9-view-your-patterns-at-your-usernamecodebergpagestrudelswatch\">9. view your patterns at <code>&#x3C;your-username>.codeberg.page/strudel/swatch/</code></h3>\n<h3 id=\"10-optional-automatic-deployment\">10. optional: automatic deployment</h3>\n<p>If you want to automatically deploy your site on push, go to <code>deploy.yml</code> and change <code>workflow_dispatch</code> to <code>push</code>.</p>\n<h2 id=\"running-locally\">running locally</h2>\n<ul>\n<li>install dependencies with <code>npm run setup</code></li>\n<li>run dev server with <code>npm run repl</code> and open <code>http://localhost:4321/strudel/swatch/</code></li>\n</ul>\n<h2 id=\"tests-fail\">tests fail?</h2>\n<p>Your tests might fail if the code does not follow prettiers format.\nIn that case, run <code>npm run codeformat</code>. To disable that, remove <code>npm run format-check</code> from <code>test.yml</code></p>\n<h2 id=\"updating-your-fork\">updating your fork</h2>\n<p>To update your fork, you can pull the main branch and merge it into your <code>patternuary</code> branch.</p>";

				const frontmatter = {};
				const file = "/home/user/Bulka/my-patterns/README.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://strudel.cc/", "SSR": true};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const myPatterns = await getMyPatterns();
  const { BASE_URL } = Object.assign(__vite_import_meta_env__, { _: process.env._ });
  const baseNoTrailing = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
  return renderTemplate`<head>${renderComponent($$result, "HeadCommon", $$HeadCommon, {})}${renderHead()}</head> <body class="bg-slate-800"> ${Object.keys(myPatterns).length === 0 && renderTemplate`<div class="prose prose-invert p-2"> ${renderComponent($$result, "Content", Content, {})} </div>`} <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-2 select-none"> ${Object.entries(myPatterns).map(([name, tune]) => renderTemplate`<a class="rounded-md bg-slate-900 hover:bg-slate-700 cursor-pointer relative block w-full h-[160px]"${addAttribute(`${baseNoTrailing}/#${btoa(tune)}`, "href")}> <div class="absolute w-full h-full flex justify-center items-center"> <span class="bg-slate-800 p-2 rounded-md text-white">${name}</span> </div> </a>`)} </div>
../../list.json</body>`;
}, "/home/user/Bulka/website/src/pages/swatch/index.astro", undefined);
const $$file = "/home/user/Bulka/website/src/pages/swatch/index.astro";
const $$url = "/swatch";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
