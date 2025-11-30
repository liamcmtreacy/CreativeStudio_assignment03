export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "CreativeStudio_assignment03/_app",
	assets: new Set([".nojekyll","assets/clownfish.png","assets/crab.png","assets/dolphin.png","assets/favicon.svg","assets/lobster.png","assets/oceanTitle.png","assets/seaSponge.png","assets/squid.png","assets/starfish.png","logo.png","robots.txt","styles/global.css"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.-XLbk7ZJ.js",app:"_app/immutable/entry/app.X1lFtzsR.js",imports:["_app/immutable/entry/start.-XLbk7ZJ.js","_app/immutable/chunks/BTjZeUwx.js","_app/immutable/chunks/CorgynNf.js","_app/immutable/chunks/BraIhKI0.js","_app/immutable/chunks/CFbjOKso.js","_app/immutable/entry/app.X1lFtzsR.js","_app/immutable/chunks/CorgynNf.js","_app/immutable/chunks/Cw_MstcU.js","_app/immutable/chunks/DDxtHSny.js","_app/immutable/chunks/CFbjOKso.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/About",
				pattern: /^\/About\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Clownfish",
				pattern: /^\/Clownfish\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Conclusion",
				pattern: /^\/Conclusion\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Crab",
				pattern: /^\/Crab\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Dolphin",
				pattern: /^\/Dolphin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Lobster",
				pattern: /^\/Lobster\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/OceanLife",
				pattern: /^\/OceanLife\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/SeaSponge",
				pattern: /^\/SeaSponge\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/Squid",
				pattern: /^\/Squid\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/Starfish",
				pattern: /^\/Starfish\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
