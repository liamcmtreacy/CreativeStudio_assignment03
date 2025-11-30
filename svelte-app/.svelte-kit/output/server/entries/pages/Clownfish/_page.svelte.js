import { x as attr, z as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  console.log("clownfish page loaded");
  $$renderer.push(`<h1 class="svelte-eo1kfs">Clownfish</h1> <div class="grid01 svelte-eo1kfs"><img id="CF"${attr("src", `${stringify(base)}/assets/clownfish.png`)} alt="Orange and white clownfish swimming" class="svelte-eo1kfs"/> <table class="triviatable svelte-eo1kfs"><tbody><tr><td class="svelte-eo1kfs">Clownfish are all born males. Once they become female, they cannot be male again.</td></tr><tr><td class="svelte-eo1kfs">Clownfish eggs can be hatched anytime during the year.</td></tr><tr><td class="svelte-eo1kfs">After the eggs are laid, the male clownfish guards them until they hatch.</td></tr><tr><td class="svelte-eo1kfs">Clownfish communicate by making popping and clicking noises.</td></tr><tr><td class="svelte-eo1kfs">Clownfish typically live for around 6–10 years.</td></tr><tr><td class="svelte-eo1kfs">Clownfish are carnivores.</td></tr></tbody></table></div> <a class="next-page svelte-eo1kfs"${attr("href", `${stringify(base)}/Crab`)}>Next Page</a> <a class="previous_page svelte-eo1kfs"${attr("href", `${stringify(base)}/OceanLife`)}>Previous Page</a>`);
}
export {
  _page as default
};
