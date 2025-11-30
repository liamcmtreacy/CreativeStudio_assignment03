import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DWschBRN.js","_app/immutable/chunks/DDxtHSny.js","_app/immutable/chunks/CorgynNf.js","_app/immutable/chunks/DhbdKfae.js","_app/immutable/chunks/BS8bLOcS.js","_app/immutable/chunks/BraIhKI0.js"];
export const stylesheets = ["_app/immutable/assets/0.hkOxccqX.css"];
export const fonts = [];
