import { x as attr, z as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  console.log("starfish page loaded");
  $$renderer.push(`<h1 class="svelte-3cpzer">Starfish</h1> <div class="grid08 svelte-3cpzer"><img id="CF"${attr("src", `${stringify(base)}/assets/starfish.png`)} alt="Drawing of Starfish" class="svelte-3cpzer"/> <table class="triviatable07 svelte-3cpzer"><tbody><tr><td class="svelte-3cpzer">Starfish do not have blood or even a brain.</td></tr><tr><td class="svelte-3cpzer">Starfish are actually called Sea Stars.</td></tr><tr><td class="svelte-3cpzer">Starfish cannot survive in fresh water.</td></tr><tr><td class="svelte-3cpzer">THere is 2000 species of Sea Star.</td></tr><tr><td class="svelte-3cpzer">Starfish have the ability to regenerate their limbs.</td></tr><tr><td class="svelte-3cpzer">There is a species of Sea Star called The Sun Star, which can grow up to 40 arms.</td></tr></tbody></table></div> <a class="next-page svelte-3cpzer"${attr("href", `${stringify(base)}/Conclusion`)}>Next Page</a> <a class="previous_page svelte-3cpzer"${attr("href", `${stringify(base)}/Squid`)}>Previous Page</a>`);
}
export {
  _page as default
};
