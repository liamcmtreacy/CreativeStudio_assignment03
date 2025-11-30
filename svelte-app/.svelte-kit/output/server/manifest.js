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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/CreativeStudio_assignment03/","/CreativeStudio_assignment03/About","/CreativeStudio_assignment03/Clownfish","/CreativeStudio_assignment03/Conclusion","/CreativeStudio_assignment03/Crab","/CreativeStudio_assignment03/Dolphin","/CreativeStudio_assignment03/Lobster","/CreativeStudio_assignment03/OceanLife","/CreativeStudio_assignment03/SeaSponge","/CreativeStudio_assignment03/Squid","/CreativeStudio_assignment03/Starfish"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
