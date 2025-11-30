import { x as attr, z as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  console.log("lobster page loaded");
  $$renderer.push(`<h1 class="svelte-tzqc3u">Lobster</h1> <div class="grid04 svelte-tzqc3u"><img id="CF"${attr("src", `${stringify(base)}/assets/lobster.png`)} alt="Red Lobster drawing" class="svelte-tzqc3u"/> <table class="triviatable04 svelte-tzqc3u"><tbody><tr><td class="svelte-tzqc3u">Lobsters are only red when they are cooked, live lobsters are usually dark green - brown.</td></tr><tr><td class="svelte-tzqc3u">Lobsters turn to cannibalism if food is scarce.</td></tr><tr><td class="svelte-tzqc3u">Lobster's blood is clear.</td></tr><tr><td class="svelte-tzqc3u">It’s not illegal to hunt lobsters at night with a flashlight, but the limit you can take is seven.</td></tr><tr><td class="svelte-tzqc3u">Lobsters were originally seen as poor man's food.</td></tr><tr><td class="svelte-tzqc3u">Lobsters have teeth inside their stomach.</td></tr></tbody></table></div> <a class="next-page svelte-tzqc3u"${attr("href", `${stringify(base)}/SeaSponge`)}>Next Page</a> <a class="previous_page svelte-tzqc3u"${attr("href", `${stringify(base)}/Dolphin`)}>Previous Page</a>`);
}
export {
  _page as default
};
