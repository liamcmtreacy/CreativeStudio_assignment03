import { F as getContext, G as escape_html, J as bind_props } from "../../chunks/index.js";
import "clsx";
import { n as noop } from "../../chunks/equality.js";
import "@sveltejs/kit/internal/server";
import "@sveltejs/kit/internal";
import { w as writable } from "../../chunks/exports.js";
import "../../chunks/utils.js";
function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get url() {
    return context().page.url;
  }
};
const page = page$1;
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let error = $$props["error"];
    let status = $$props["status"];
    $$renderer2.push(`<div class="container svelte-1j96wlh" role="alert"><h1 class="error-code svelte-1j96wlh">${escape_html(status ?? 404)}</h1> `);
    if (status === 404 || !status && error == null) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="message svelte-1j96wlh">Sorry, the page <code class="svelte-1j96wlh">${escape_html(page.url.pathname)}</code> doesn’t exist.</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (error) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="message svelte-1j96wlh">${escape_html(error.message)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<p class="message svelte-1j96wlh">An unknown error occurred.</p>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> <a class="home-button svelte-1j96wlh" href="/">← Go back home</a></div>`);
    bind_props($$props, { error, status });
  });
}
export {
  _error as default
};
