
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/About" | "/Clownfish" | "/Conclusion" | "/Crab" | "/Dolphin" | "/Lobster" | "/OceanLife" | "/SeaSponge" | "/Squid" | "/Starfish" | "/components";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/About": Record<string, never>;
			"/Clownfish": Record<string, never>;
			"/Conclusion": Record<string, never>;
			"/Crab": Record<string, never>;
			"/Dolphin": Record<string, never>;
			"/Lobster": Record<string, never>;
			"/OceanLife": Record<string, never>;
			"/SeaSponge": Record<string, never>;
			"/Squid": Record<string, never>;
			"/Starfish": Record<string, never>;
			"/components": Record<string, never>
		};
		Pathname(): "/" | "/About" | "/About/" | "/Clownfish" | "/Clownfish/" | "/Conclusion" | "/Conclusion/" | "/Crab" | "/Crab/" | "/Dolphin" | "/Dolphin/" | "/Lobster" | "/Lobster/" | "/OceanLife" | "/OceanLife/" | "/SeaSponge" | "/SeaSponge/" | "/Squid" | "/Squid/" | "/Starfish" | "/Starfish/" | "/components" | "/components/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/assets/clownfish.png" | "/assets/crab.png" | "/assets/dolphin.png" | "/assets/favicon.svg" | "/assets/lobster.png" | "/assets/oceanTitle.png" | "/assets/seaSponge.png" | "/assets/squid.png" | "/assets/starfish.png" | "/logo.png" | "/robots.txt" | "/styles/global.css" | string & {};
	}
}