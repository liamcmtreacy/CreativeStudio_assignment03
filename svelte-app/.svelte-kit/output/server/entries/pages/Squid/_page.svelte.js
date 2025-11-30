import { x as attr, z as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  console.log("squid page loaded");
  $$renderer.push(`<h1 class="svelte-6ojakt">Squid</h1> <div class="grid07 svelte-6ojakt"><img id="CF"${attr("src", `${stringify(base)}/assets/squid.png`)} alt="Grey drawing of squid" class="svelte-6ojakt"/> <table class="triviatable06 svelte-6ojakt"><tbody><tr><td class="svelte-6ojakt">Squids have 3 hearts.</td></tr><tr><td class="svelte-6ojakt">Squid Ink contains a compound which damages a predators sense of smell.</td></tr><tr><td class="svelte-6ojakt">Squid's brains are shaped like donuts.</td></tr><tr><td class="svelte-6ojakt">Squidward Tentacles is an octopus, not a squid.</td></tr><tr><td class="svelte-6ojakt">Squid Ink is used for medicine in Spain and Italy.</td></tr><tr><td class="svelte-6ojakt">Scientists are currently experimenting with Sea Sponges as a treatment for cancer.</td></tr></tbody></table></div> <a class="next-page svelte-6ojakt"${attr("href", `${stringify(base)}/Starfish`)}>Next Page</a> <a class="previous_page svelte-6ojakt"${attr("href", `${stringify(base)}/SeaSponge`)}>Previous Page</a>`);
}
export {
  _page as default
};
