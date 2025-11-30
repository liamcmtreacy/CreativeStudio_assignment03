import { x as attr, z as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="gridBlue svelte-1hyavse"><h1 class="svelte-1hyavse">So what is this page about?</h1> <p class="svelte-1hyavse">This web zine has been created for a college assignment, I have always had an interest in the Ocean
    and wanted to create a site about it, and some creatures and aspects of it which I find interesting.

    I hope you enjoy what you see!</p></div> <a class="next-page svelte-1hyavse"${attr("href", `${stringify(base)}/OceanLife`)}>Next Page</a> <a class="previous_page svelte-1hyavse"${attr("href", base)}>Previous Page</a>`);
  });
}
export {
  _page as default
};
