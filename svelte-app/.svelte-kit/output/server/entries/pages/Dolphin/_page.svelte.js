import { x as attr, z as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  console.log("dolphin page loaded");
  $$renderer.push(`<h1 class="svelte-1m3ouq7">Dolphin</h1> <div class="grid03 svelte-1m3ouq7"><img id="CF"${attr("src", `${stringify(base)}/assets/dolphin.png`)} alt="Dolphin drawing" class="svelte-1m3ouq7"/> <table class="triviatable03 svelte-1m3ouq7"><tbody><tr><td class="svelte-1m3ouq7">There are 42 species of Dolphins.</td></tr><tr><td class="svelte-1m3ouq7">Dolphins do not chew, they break food down and then swallow.</td></tr><tr><td class="svelte-1m3ouq7">Dolphins eat Squids, Crabs and Fish.</td></tr><tr><td class="svelte-1m3ouq7">Dolphins are pregnant for 9-16 months.</td></tr><tr><td class="svelte-1m3ouq7">Dolphins are mammals, and must leave the water to breathe air.</td></tr><tr><td class="svelte-1m3ouq7">Doplhins have conical shaped teeth.</td></tr></tbody></table></div> <a class="next-page svelte-1m3ouq7"${attr("href", `${stringify(base)}/Lobster`)}>Next Page</a> <a class="previous_page svelte-1m3ouq7"${attr("href", `${stringify(base)}/Crab`)}>Previous Page</a>`);
}
export {
  _page as default
};
