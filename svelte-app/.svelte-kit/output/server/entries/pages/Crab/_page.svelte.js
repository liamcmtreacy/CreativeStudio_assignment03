import { x as attr, z as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  console.log("crab page loaded");
  $$renderer.push(`<h1 class="svelte-t127c7">Crabs</h1> <div class="grid02 svelte-t127c7"><img id="CF"${attr("src", `${stringify(base)}/assets/crab.png`)} alt="Drawing of Red Crab" class="svelte-t127c7"/> <table class="triviatable02 svelte-t127c7"><tbody><tr><td class="svelte-t127c7">The smallest Crab is the pea crab, which measures 0.27 - 0.47 inches long.</td></tr><tr><td class="svelte-t127c7">A group of crabs is called a cast.</td></tr><tr><td class="svelte-t127c7">Crabs can walk forward, however they are rather slow, so they walk sideways as it is faster.</td></tr><tr><td class="svelte-t127c7">Crabs have 10 feet.</td></tr><tr><td class="svelte-t127c7">The japanese spider crab can live for over 100 years.</td></tr><tr><td class="svelte-t127c7">Some crabs can see 360 degrees around them, due to their eyes being on their stalks.</td></tr></tbody></table></div> <a class="next-page svelte-t127c7"${attr("href", `${stringify(base)}/Dolphin`)}>Next Page</a> <a class="previous_page svelte-t127c7"${attr("href", `${stringify(base)}/Clownfish`)}>Previous Page</a>`);
}
export {
  _page as default
};
