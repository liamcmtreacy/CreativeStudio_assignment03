import { x as attr, z as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
/* empty css                                               */
function _page($$renderer) {
  console.log("About info page loaded");
  $$renderer.push(`<h1 class="svelte-1uha8ag">Welcome to my Ocean Zine</h1> <div class="startingGrid svelte-1uha8ag"><img id="OC"${attr("src", `${stringify(base)}/assets/oceanTitle.png`)} alt="Drawing of Ocean at Night" class="svelte-1uha8ag"/> <p class="svelte-1uha8ag">This site is best suited to be read on a computer</p></div> <a class="next-page svelte-1uha8ag"${attr("href", `${stringify(base)}/About`)}>Next Page</a>`);
}
export {
  _page as default
};
