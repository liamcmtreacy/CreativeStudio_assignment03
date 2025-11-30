import { w as head, x as attr, y as slot, z as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _layout($$renderer, $$props) {
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="icon"${attr("href", `${stringify(base)}/logo.png`)}/>`);
  });
  $$renderer.push(`<nav class="svelte-12qhfyh"><ul class="svelte-12qhfyh"><li class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/`)} class="svelte-12qhfyh">Home</a></li> <li class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/About`)} class="svelte-12qhfyh">About Page</a></li> <li class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/OceanLife`)} class="svelte-12qhfyh">Ocean Life</a></li> <li class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/Conclusion`)} class="svelte-12qhfyh">Conclusion</a></li></ul></nav> <!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]-->`);
}
export {
  _layout as default
};
