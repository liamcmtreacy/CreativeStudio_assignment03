import { x as attr, z as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  console.log("sea sponge page loaded");
  $$renderer.push(`<h1 class="svelte-f66gim">Sea Sponge</h1> <a class="next-page svelte-f66gim"${attr("href", `${stringify(base)}/Squid`)}>Next Page</a> <a class="previous_page svelte-f66gim"${attr("href", `${stringify(base)}/Lobster`)}>Previous Page</a> <div class="grid06 svelte-f66gim"><img id="CF"${attr("src", `${stringify(base)}/assets/seaSponge.png`)} alt="Drawing of Sea Sponge with holes" class="svelte-f66gim"/> <table class="triviatable05 svelte-f66gim"><tbody><tr><td class="svelte-f66gim">Sea Sponges can reproduce sexually and asexually.</td></tr><tr><td class="svelte-f66gim">Sea Sponges were once used for medicinal reasons, due to their high amount of Iodine.</td></tr><tr><td class="svelte-f66gim">Sea Sponges are found in every ocean in the world.</td></tr><tr><td class="svelte-f66gim">Sea Sponges have small hairs which help them move through the water</td></tr><tr><td class="svelte-f66gim">There is some sea sponges which are believed to be 5000 years old.</td></tr><tr><td class="svelte-f66gim">Scientists are currently experimenting with Sea Sponges as a treatment for cancer.</td></tr></tbody></table></div>`);
}
export {
  _page as default
};
