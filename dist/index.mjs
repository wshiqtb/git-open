import { createRequire } from "node:module";
import { Buffer as Buffer$1 } from "node:buffer";
import { spawn } from "child_process";
import { EventEmitter } from "node:events";
import process$1 from "node:process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import util, { promisify } from "node:util";
import childProcess, { execFile } from "node:child_process";
import fs, { constants } from "node:fs/promises";
import os from "node:os";
import fs$1 from "node:fs";

//#region rolldown:runtime
var __create = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __commonJS$1 = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames$1(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps$1 = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames$1(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp$1.call(to, key) && key !== except) __defProp$1(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps$1(isNodeMode || !mod || !mod.__esModule ? __defProp$1(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* @__PURE__ */ createRequire(import.meta.url);

//#endregion
//#region node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js
var require_ms = __commonJS$1({ "node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"(exports, module) {
	/**
	* Helpers.
	*/
	var s = 1e3;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var w = d * 7;
	var y = d * 365.25;
	/**
	* Parse or format the given `val`.
	*
	* Options:
	*
	*  - `long` verbose formatting [false]
	*
	* @param {String|Number} val
	* @param {Object} [options]
	* @throws {Error} throw an error if val is not a non-empty string or a number
	* @return {String|Number}
	* @api public
	*/
	module.exports = function(val, options) {
		options = options || {};
		var type = typeof val;
		if (type === "string" && val.length > 0) return parse(val);
		else if (type === "number" && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
	};
	/**
	* Parse the given `str` and return milliseconds.
	*
	* @param {String} str
	* @return {Number}
	* @api private
	*/
	function parse(str) {
		str = String(str);
		if (str.length > 100) return;
		var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
		if (!match) return;
		var n = parseFloat(match[1]);
		var type = (match[2] || "ms").toLowerCase();
		switch (type) {
			case "years":
			case "year":
			case "yrs":
			case "yr":
			case "y": return n * y;
			case "weeks":
			case "week":
			case "w": return n * w;
			case "days":
			case "day":
			case "d": return n * d;
			case "hours":
			case "hour":
			case "hrs":
			case "hr":
			case "h": return n * h;
			case "minutes":
			case "minute":
			case "mins":
			case "min":
			case "m": return n * m;
			case "seconds":
			case "second":
			case "secs":
			case "sec":
			case "s": return n * s;
			case "milliseconds":
			case "millisecond":
			case "msecs":
			case "msec":
			case "ms": return n;
			default: return void 0;
		}
	}
	/**
	* Short format for `ms`.
	*
	* @param {Number} ms
	* @return {String}
	* @api private
	*/
	function fmtShort(ms) {
		var msAbs = Math.abs(ms);
		if (msAbs >= d) return Math.round(ms / d) + "d";
		if (msAbs >= h) return Math.round(ms / h) + "h";
		if (msAbs >= m) return Math.round(ms / m) + "m";
		if (msAbs >= s) return Math.round(ms / s) + "s";
		return ms + "ms";
	}
	/**
	* Long format for `ms`.
	*
	* @param {Number} ms
	* @return {String}
	* @api private
	*/
	function fmtLong(ms) {
		var msAbs = Math.abs(ms);
		if (msAbs >= d) return plural(ms, msAbs, d, "day");
		if (msAbs >= h) return plural(ms, msAbs, h, "hour");
		if (msAbs >= m) return plural(ms, msAbs, m, "minute");
		if (msAbs >= s) return plural(ms, msAbs, s, "second");
		return ms + " ms";
	}
	/**
	* Pluralization helper.
	*/
	function plural(ms, msAbs, n, name) {
		var isPlural = msAbs >= n * 1.5;
		return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
	}
} });

//#endregion
//#region node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js
var require_common = __commonJS$1({ "node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js"(exports, module) {
	/**
	* This is the common logic for both the Node.js and web browser
	* implementations of `debug()`.
	*/
	function setup(env) {
		createDebug.debug = createDebug;
		createDebug.default = createDebug;
		createDebug.coerce = coerce;
		createDebug.disable = disable;
		createDebug.enable = enable;
		createDebug.enabled = enabled;
		createDebug.humanize = require_ms();
		createDebug.destroy = destroy;
		Object.keys(env).forEach((key) => {
			createDebug[key] = env[key];
		});
		/**
		* The currently active debug mode names, and names to skip.
		*/
		createDebug.names = [];
		createDebug.skips = [];
		/**
		* Map of special "%n" handling functions, for the debug "format" argument.
		*
		* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
		*/
		createDebug.formatters = {};
		/**
		* Selects a color for a debug namespace
		* @param {String} namespace The namespace string for the debug instance to be colored
		* @return {Number|String} An ANSI color code for the given namespace
		* @api private
		*/
		function selectColor(namespace) {
			let hash = 0;
			for (let i = 0; i < namespace.length; i++) {
				hash = (hash << 5) - hash + namespace.charCodeAt(i);
				hash |= 0;
			}
			return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
		}
		createDebug.selectColor = selectColor;
		/**
		* Create a debugger with the given `namespace`.
		*
		* @param {String} namespace
		* @return {Function}
		* @api public
		*/
		function createDebug(namespace) {
			let prevTime;
			let enableOverride = null;
			let namespacesCache;
			let enabledCache;
			function debug$1(...args) {
				if (!debug$1.enabled) return;
				const self = debug$1;
				const curr = Number(/* @__PURE__ */ new Date());
				const ms = curr - (prevTime || curr);
				self.diff = ms;
				self.prev = prevTime;
				self.curr = curr;
				prevTime = curr;
				args[0] = createDebug.coerce(args[0]);
				if (typeof args[0] !== "string") args.unshift("%O");
				let index = 0;
				args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
					if (match === "%%") return "%";
					index++;
					const formatter = createDebug.formatters[format];
					if (typeof formatter === "function") {
						const val = args[index];
						match = formatter.call(self, val);
						args.splice(index, 1);
						index--;
					}
					return match;
				});
				createDebug.formatArgs.call(self, args);
				const logFn = self.log || createDebug.log;
				logFn.apply(self, args);
			}
			debug$1.namespace = namespace;
			debug$1.useColors = createDebug.useColors();
			debug$1.color = createDebug.selectColor(namespace);
			debug$1.extend = extend;
			debug$1.destroy = createDebug.destroy;
			Object.defineProperty(debug$1, "enabled", {
				enumerable: true,
				configurable: false,
				get: () => {
					if (enableOverride !== null) return enableOverride;
					if (namespacesCache !== createDebug.namespaces) {
						namespacesCache = createDebug.namespaces;
						enabledCache = createDebug.enabled(namespace);
					}
					return enabledCache;
				},
				set: (v) => {
					enableOverride = v;
				}
			});
			if (typeof createDebug.init === "function") createDebug.init(debug$1);
			return debug$1;
		}
		function extend(namespace, delimiter) {
			const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
			newDebug.log = this.log;
			return newDebug;
		}
		/**
		* Enables a debug mode by namespaces. This can include modes
		* separated by a colon and wildcards.
		*
		* @param {String} namespaces
		* @api public
		*/
		function enable(namespaces) {
			createDebug.save(namespaces);
			createDebug.namespaces = namespaces;
			createDebug.names = [];
			createDebug.skips = [];
			const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
			for (const ns of split) if (ns[0] === "-") createDebug.skips.push(ns.slice(1));
			else createDebug.names.push(ns);
		}
		/**
		* Checks if the given string matches a namespace template, honoring
		* asterisks as wildcards.
		*
		* @param {String} search
		* @param {String} template
		* @return {Boolean}
		*/
		function matchesTemplate(search, template) {
			let searchIndex = 0;
			let templateIndex = 0;
			let starIndex = -1;
			let matchIndex = 0;
			while (searchIndex < search.length) if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) if (template[templateIndex] === "*") {
				starIndex = templateIndex;
				matchIndex = searchIndex;
				templateIndex++;
			} else {
				searchIndex++;
				templateIndex++;
			}
			else if (starIndex !== -1) {
				templateIndex = starIndex + 1;
				matchIndex++;
				searchIndex = matchIndex;
			} else return false;
			while (templateIndex < template.length && template[templateIndex] === "*") templateIndex++;
			return templateIndex === template.length;
		}
		/**
		* Disable debug output.
		*
		* @return {String} namespaces
		* @api public
		*/
		function disable() {
			const namespaces = [...createDebug.names, ...createDebug.skips.map((namespace) => "-" + namespace)].join(",");
			createDebug.enable("");
			return namespaces;
		}
		/**
		* Returns true if the given mode name is enabled, false otherwise.
		*
		* @param {String} name
		* @return {Boolean}
		* @api public
		*/
		function enabled(name) {
			for (const skip of createDebug.skips) if (matchesTemplate(name, skip)) return false;
			for (const ns of createDebug.names) if (matchesTemplate(name, ns)) return true;
			return false;
		}
		/**
		* Coerce `val`.
		*
		* @param {Mixed} val
		* @return {Mixed}
		* @api private
		*/
		function coerce(val) {
			if (val instanceof Error) return val.stack || val.message;
			return val;
		}
		/**
		* XXX DO NOT USE. This is a temporary stub function.
		* XXX It WILL be removed in the next major release.
		*/
		function destroy() {
			console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
		}
		createDebug.enable(createDebug.load());
		return createDebug;
	}
	module.exports = setup;
} });

//#endregion
//#region node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js
var require_browser = __commonJS$1({ "node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js"(exports, module) {
	/**
	* This is the web browser implementation of `debug()`.
	*/
	exports.formatArgs = formatArgs$1;
	exports.save = save$1;
	exports.load = load$1;
	exports.useColors = useColors$1;
	exports.storage = localstorage();
	exports.destroy = (() => {
		let warned = false;
		return () => {
			if (!warned) {
				warned = true;
				console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
			}
		};
	})();
	/**
	* Colors.
	*/
	exports.colors = [
		"#0000CC",
		"#0000FF",
		"#0033CC",
		"#0033FF",
		"#0066CC",
		"#0066FF",
		"#0099CC",
		"#0099FF",
		"#00CC00",
		"#00CC33",
		"#00CC66",
		"#00CC99",
		"#00CCCC",
		"#00CCFF",
		"#3300CC",
		"#3300FF",
		"#3333CC",
		"#3333FF",
		"#3366CC",
		"#3366FF",
		"#3399CC",
		"#3399FF",
		"#33CC00",
		"#33CC33",
		"#33CC66",
		"#33CC99",
		"#33CCCC",
		"#33CCFF",
		"#6600CC",
		"#6600FF",
		"#6633CC",
		"#6633FF",
		"#66CC00",
		"#66CC33",
		"#9900CC",
		"#9900FF",
		"#9933CC",
		"#9933FF",
		"#99CC00",
		"#99CC33",
		"#CC0000",
		"#CC0033",
		"#CC0066",
		"#CC0099",
		"#CC00CC",
		"#CC00FF",
		"#CC3300",
		"#CC3333",
		"#CC3366",
		"#CC3399",
		"#CC33CC",
		"#CC33FF",
		"#CC6600",
		"#CC6633",
		"#CC9900",
		"#CC9933",
		"#CCCC00",
		"#CCCC33",
		"#FF0000",
		"#FF0033",
		"#FF0066",
		"#FF0099",
		"#FF00CC",
		"#FF00FF",
		"#FF3300",
		"#FF3333",
		"#FF3366",
		"#FF3399",
		"#FF33CC",
		"#FF33FF",
		"#FF6600",
		"#FF6633",
		"#FF9900",
		"#FF9933",
		"#FFCC00",
		"#FFCC33"
	];
	/**
	* Currently only WebKit-based Web Inspectors, Firefox >= v31,
	* and the Firebug extension (any Firefox version) are known
	* to support "%c" CSS customizations.
	*
	* TODO: add a `localStorage` variable to explicitly enable/disable colors
	*/
	function useColors$1() {
		if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
		if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
		let m$1;
		return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && (m$1 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m$1[1], 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}
	/**
	* Colorize log arguments if enabled.
	*
	* @api public
	*/
	function formatArgs$1(args) {
		args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
		if (!this.useColors) return;
		const c = "color: " + this.color;
		args.splice(1, 0, c, "color: inherit");
		let index = 0;
		let lastC = 0;
		args[0].replace(/%[a-zA-Z%]/g, (match) => {
			if (match === "%%") return;
			index++;
			if (match === "%c") lastC = index;
		});
		args.splice(lastC, 0, c);
	}
	/**
	* Invokes `console.debug()` when available.
	* No-op when `console.debug` is not a "function".
	* If `console.debug` is not available, falls back
	* to `console.log`.
	*
	* @api public
	*/
	exports.log = console.debug || console.log || (() => {});
	/**
	* Save `namespaces`.
	*
	* @param {String} namespaces
	* @api private
	*/
	function save$1(namespaces) {
		try {
			if (namespaces) exports.storage.setItem("debug", namespaces);
			else exports.storage.removeItem("debug");
		} catch (error) {}
	}
	/**
	* Load `namespaces`.
	*
	* @return {String} returns the previously persisted debug modes
	* @api private
	*/
	function load$1() {
		let r;
		try {
			r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
		} catch (error) {}
		if (!r && typeof process !== "undefined" && "env" in process) r = process.env.DEBUG;
		return r;
	}
	/**
	* Localstorage attempts to return the localstorage.
	*
	* This is necessary because safari throws
	* when a user disables cookies/localstorage
	* and you attempt to access it.
	*
	* @return {LocalStorage}
	* @api private
	*/
	function localstorage() {
		try {
			return localStorage;
		} catch (error) {}
	}
	module.exports = require_common()(exports);
	const { formatters: formatters$1 } = module.exports;
	/**
	* Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	*/
	formatters$1.j = function(v) {
		try {
			return JSON.stringify(v);
		} catch (error) {
			return "[UnexpectedJSONParseError]: " + error.message;
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/node.js
var require_node = __commonJS$1({ "node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/node.js"(exports, module) {
	/**
	* Module dependencies.
	*/
	const tty = __require("tty");
	const util$1 = __require("util");
	/**
	* This is the Node.js implementation of `debug()`.
	*/
	exports.init = init;
	exports.log = log$1;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.destroy = util$1.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
	/**
	* Colors.
	*/
	exports.colors = [
		6,
		2,
		3,
		4,
		5,
		1
	];
	try {
		const supportsColor = __require("supports-color");
		if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	} catch (error) {}
	/**
	* Build up the default `inspectOpts` object from the environment variables.
	*
	*   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
	*/
	exports.inspectOpts = Object.keys(process.env).filter((key) => {
		return /^debug_/i.test(key);
	}).reduce((obj, key) => {
		const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});
		let val = process.env[key];
		if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
		else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
		else if (val === "null") val = null;
		else val = Number(val);
		obj[prop] = val;
		return obj;
	}, {});
	/**
	* Is stdout a TTY? Colored output is enabled when `true`.
	*/
	function useColors() {
		return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
	}
	/**
	* Adds ANSI color escape codes if enabled.
	*
	* @api public
	*/
	function formatArgs(args) {
		const { namespace: name, useColors: useColors$2 } = this;
		if (useColors$2) {
			const c = this.color;
			const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
			const prefix = `  ${colorCode};1m${name} \u001B[0m`;
			args[0] = prefix + args[0].split("\n").join("\n" + prefix);
			args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
		} else args[0] = getDate() + name + " " + args[0];
	}
	function getDate() {
		if (exports.inspectOpts.hideDate) return "";
		return (/* @__PURE__ */ new Date()).toISOString() + " ";
	}
	/**
	* Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
	*/
	function log$1(...args) {
		return process.stderr.write(util$1.formatWithOptions(exports.inspectOpts, ...args) + "\n");
	}
	/**
	* Save `namespaces`.
	*
	* @param {String} namespaces
	* @api private
	*/
	function save(namespaces) {
		if (namespaces) process.env.DEBUG = namespaces;
		else delete process.env.DEBUG;
	}
	/**
	* Load `namespaces`.
	*
	* @return {String} returns the previously persisted debug modes
	* @api private
	*/
	function load() {
		return process.env.DEBUG;
	}
	/**
	* Init logic for `debug` instances.
	*
	* Create a new `inspectOpts` object in case `useColors` is set
	* differently for a particular `debug` instance.
	*/
	function init(debug$1) {
		debug$1.inspectOpts = {};
		const keys = Object.keys(exports.inspectOpts);
		for (let i = 0; i < keys.length; i++) debug$1.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
	module.exports = require_common()(exports);
	const { formatters } = module.exports;
	/**
	* Map %o to `util.inspect()`, all on a single line.
	*/
	formatters.o = function(v) {
		this.inspectOpts.colors = this.useColors;
		return util$1.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
	};
	/**
	* Map %O to `util.inspect()`, allowing multiple lines if needed.
	*/
	formatters.O = function(v) {
		this.inspectOpts.colors = this.useColors;
		return util$1.inspect(v, this.inspectOpts);
	};
} });

//#endregion
//#region node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/index.js
var require_src$1 = __commonJS$1({ "node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/index.js"(exports, module) {
	/**
	* Detect Electron renderer / nwjs process, which is node, but we should
	* treat as a browser.
	*/
	if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) module.exports = require_browser();
	else module.exports = require_node();
} });

//#endregion
//#region node_modules/.pnpm/@kwsites+file-exists@1.1.1/node_modules/@kwsites/file-exists/dist/src/index.js
var require_src = __commonJS$1({ "node_modules/.pnpm/@kwsites+file-exists@1.1.1/node_modules/@kwsites/file-exists/dist/src/index.js"(exports) {
	var __importDefault = void 0 && (void 0).__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const fs_1 = __require("fs");
	const debug_1 = __importDefault(require_src$1());
	const log = debug_1.default("@kwsites/file-exists");
	function check(path$2, isFile, isDirectory) {
		log(`checking %s`, path$2);
		try {
			const stat = fs_1.statSync(path$2);
			if (stat.isFile() && isFile) {
				log(`[OK] path represents a file`);
				return true;
			}
			if (stat.isDirectory() && isDirectory) {
				log(`[OK] path represents a directory`);
				return true;
			}
			log(`[FAIL] path represents something other than a file or directory`);
			return false;
		} catch (e) {
			if (e.code === "ENOENT") {
				log(`[FAIL] path is not accessible: %o`, e);
				return false;
			}
			log(`[FATAL] %o`, e);
			throw e;
		}
	}
	/**
	* Synchronous validation of a path existing either as a file or as a directory.
	*
	* @param {string} path The path to check
	* @param {number} type One or both of the exported numeric constants
	*/
	function exists$1(path$2, type = exports.READABLE) {
		return check(path$2, (type & exports.FILE) > 0, (type & exports.FOLDER) > 0);
	}
	exports.exists = exists$1;
	/**
	* Constant representing a file
	*/
	exports.FILE = 1;
	/**
	* Constant representing a folder
	*/
	exports.FOLDER = 2;
	/**
	* Constant representing either a file or a folder
	*/
	exports.READABLE = exports.FILE + exports.FOLDER;
} });

//#endregion
//#region node_modules/.pnpm/@kwsites+file-exists@1.1.1/node_modules/@kwsites/file-exists/dist/index.js
var require_dist$1 = __commonJS$1({ "node_modules/.pnpm/@kwsites+file-exists@1.1.1/node_modules/@kwsites/file-exists/dist/index.js"(exports) {
	function __export$1(m$1) {
		for (var p in m$1) if (!exports.hasOwnProperty(p)) exports[p] = m$1[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export$1(require_src());
} });

//#endregion
//#region node_modules/.pnpm/@kwsites+promise-deferred@1.1.1/node_modules/@kwsites/promise-deferred/dist/index.js
var require_dist = __commonJS$1({ "node_modules/.pnpm/@kwsites+promise-deferred@1.1.1/node_modules/@kwsites/promise-deferred/dist/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createDeferred = exports.deferred = void 0;
	/**
	* Creates a new `DeferredPromise`
	*
	* ```typescript
	import {deferred} from '@kwsites/promise-deferred`;
	```
	*/
	function deferred$1() {
		let done;
		let fail;
		let status = "pending";
		const promise = new Promise((_done, _fail) => {
			done = _done;
			fail = _fail;
		});
		return {
			promise,
			done(result) {
				if (status === "pending") {
					status = "resolved";
					done(result);
				}
			},
			fail(error) {
				if (status === "pending") {
					status = "rejected";
					fail(error);
				}
			},
			get fulfilled() {
				return status !== "pending";
			},
			get status() {
				return status;
			}
		};
	}
	exports.deferred = deferred$1;
	/**
	* Alias of the exported `deferred` function, to help consumers wanting to use `deferred` as the
	* local variable name rather than the factory import name, without needing to rename on import.
	*
	* ```typescript
	import {createDeferred} from '@kwsites/promise-deferred`;
	```
	*/
	exports.createDeferred = deferred$1;
	/**
	* Default export allows use as:
	*
	* ```typescript
	import deferred from '@kwsites/promise-deferred`;
	```
	*/
	exports.default = deferred$1;
} });

//#endregion
//#region node_modules/.pnpm/simple-git@3.28.0/node_modules/simple-git/dist/esm/index.js
var import_dist = __toESM(require_dist$1(), 1);
var import_src = __toESM(require_src$1(), 1);
var import_dist$1 = __toESM(require_dist(), 1);
var import_dist$2 = __toESM(require_dist(), 1);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
	return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require$1() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: () => from[key],
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
function pathspec(...paths) {
	const key = new String(paths);
	cache.set(key, paths);
	return key;
}
function isPathSpec(path$2) {
	return path$2 instanceof String && cache.has(path$2);
}
function toPaths(pathSpec) {
	return cache.get(pathSpec) || [];
}
var cache;
var init_pathspec = __esm({ "src/lib/args/pathspec.ts"() {
	"use strict";
	cache = /* @__PURE__ */ new WeakMap();
} });
var GitError;
var init_git_error = __esm({ "src/lib/errors/git-error.ts"() {
	"use strict";
	GitError = class extends Error {
		constructor(task, message) {
			super(message);
			this.task = task;
			Object.setPrototypeOf(this, new.target.prototype);
		}
	};
} });
var GitResponseError;
var init_git_response_error = __esm({ "src/lib/errors/git-response-error.ts"() {
	"use strict";
	init_git_error();
	GitResponseError = class extends GitError {
		constructor(git, message) {
			super(void 0, message || String(git));
			this.git = git;
		}
	};
} });
var TaskConfigurationError;
var init_task_configuration_error = __esm({ "src/lib/errors/task-configuration-error.ts"() {
	"use strict";
	init_git_error();
	TaskConfigurationError = class extends GitError {
		constructor(message) {
			super(void 0, message);
		}
	};
} });
function asFunction(source) {
	if (typeof source !== "function") return NOOP;
	return source;
}
function isUserFunction(source) {
	return typeof source === "function" && source !== NOOP;
}
function splitOn(input, char) {
	const index = input.indexOf(char);
	if (index <= 0) return [input, ""];
	return [input.substr(0, index), input.substr(index + 1)];
}
function first(input, offset = 0) {
	return isArrayLike(input) && input.length > offset ? input[offset] : void 0;
}
function last(input, offset = 0) {
	if (isArrayLike(input) && input.length > offset) return input[input.length - 1 - offset];
}
function isArrayLike(input) {
	return !!(input && typeof input.length === "number");
}
function toLinesWithContent(input = "", trimmed2 = true, separator = "\n") {
	return input.split(separator).reduce((output, line) => {
		const lineContent = trimmed2 ? line.trim() : line;
		if (lineContent) output.push(lineContent);
		return output;
	}, []);
}
function forEachLineWithContent(input, callback) {
	return toLinesWithContent(input, true).map((line) => callback(line));
}
function folderExists(path$2) {
	return (0, import_dist.exists)(path$2, import_dist.FOLDER);
}
function append(target, item) {
	if (Array.isArray(target)) {
		if (!target.includes(item)) target.push(item);
	} else target.add(item);
	return item;
}
function including(target, item) {
	if (Array.isArray(target) && !target.includes(item)) target.push(item);
	return target;
}
function remove(target, item) {
	if (Array.isArray(target)) {
		const index = target.indexOf(item);
		if (index >= 0) target.splice(index, 1);
	} else target.delete(item);
	return item;
}
function asArray(source) {
	return Array.isArray(source) ? source : [source];
}
function asCamelCase(str) {
	return str.replace(/[\s-]+(.)/g, (_all, chr) => {
		return chr.toUpperCase();
	});
}
function asStringArray(source) {
	return asArray(source).map(String);
}
function asNumber(source, onNaN = 0) {
	if (source == null) return onNaN;
	const num = parseInt(source, 10);
	return isNaN(num) ? onNaN : num;
}
function prefixedArray(input, prefix) {
	const output = [];
	for (let i = 0, max = input.length; i < max; i++) output.push(prefix, input[i]);
	return output;
}
function bufferToString(input) {
	return (Array.isArray(input) ? Buffer$1.concat(input) : input).toString("utf-8");
}
function pick(source, properties) {
	return Object.assign({}, ...properties.map((property) => property in source ? { [property]: source[property] } : {}));
}
function delay(duration = 0) {
	return new Promise((done) => setTimeout(done, duration));
}
function orVoid(input) {
	if (input === false) return void 0;
	return input;
}
var NULL, NOOP, objectToString;
var init_util = __esm({ "src/lib/utils/util.ts"() {
	"use strict";
	NULL = "\0";
	NOOP = () => {};
	objectToString = Object.prototype.toString.call.bind(Object.prototype.toString);
} });
function filterType(input, filter, def) {
	if (filter(input)) return input;
	return arguments.length > 2 ? def : void 0;
}
function filterPrimitives(input, omit) {
	const type = isPathSpec(input) ? "string" : typeof input;
	return /number|string|boolean/.test(type) && (!omit || !omit.includes(type));
}
function filterPlainObject(input) {
	return !!input && objectToString(input) === "[object Object]";
}
function filterFunction(input) {
	return typeof input === "function";
}
var filterArray, filterString, filterStringArray, filterStringOrStringArray, filterHasLength;
var init_argument_filters = __esm({ "src/lib/utils/argument-filters.ts"() {
	"use strict";
	init_util();
	init_pathspec();
	filterArray = (input) => {
		return Array.isArray(input);
	};
	filterString = (input) => {
		return typeof input === "string";
	};
	filterStringArray = (input) => {
		return Array.isArray(input) && input.every(filterString);
	};
	filterStringOrStringArray = (input) => {
		return filterString(input) || Array.isArray(input) && input.every(filterString);
	};
	filterHasLength = (input) => {
		if (input == null || "number|boolean|function".includes(typeof input)) return false;
		return Array.isArray(input) || typeof input === "string" || typeof input.length === "number";
	};
} });
var ExitCodes;
var init_exit_codes = __esm({ "src/lib/utils/exit-codes.ts"() {
	"use strict";
	ExitCodes = /* @__PURE__ */ ((ExitCodes2) => {
		ExitCodes2[ExitCodes2["SUCCESS"] = 0] = "SUCCESS";
		ExitCodes2[ExitCodes2["ERROR"] = 1] = "ERROR";
		ExitCodes2[ExitCodes2["NOT_FOUND"] = -2] = "NOT_FOUND";
		ExitCodes2[ExitCodes2["UNCLEAN"] = 128] = "UNCLEAN";
		return ExitCodes2;
	})(ExitCodes || {});
} });
var GitOutputStreams;
var init_git_output_streams = __esm({ "src/lib/utils/git-output-streams.ts"() {
	"use strict";
	GitOutputStreams = class _GitOutputStreams {
		constructor(stdOut, stdErr) {
			this.stdOut = stdOut;
			this.stdErr = stdErr;
		}
		asStrings() {
			return new _GitOutputStreams(this.stdOut.toString("utf8"), this.stdErr.toString("utf8"));
		}
	};
} });
var LineParser, RemoteLineParser;
var init_line_parser = __esm({ "src/lib/utils/line-parser.ts"() {
	"use strict";
	LineParser = class {
		constructor(regExp, useMatches) {
			this.matches = [];
			this.parse = (line, target) => {
				this.resetMatches();
				if (!this._regExp.every((reg, index) => this.addMatch(reg, index, line(index)))) return false;
				return this.useMatches(target, this.prepareMatches()) !== false;
			};
			this._regExp = Array.isArray(regExp) ? regExp : [regExp];
			if (useMatches) this.useMatches = useMatches;
		}
		useMatches(target, match) {
			throw new Error(`LineParser:useMatches not implemented`);
		}
		resetMatches() {
			this.matches.length = 0;
		}
		prepareMatches() {
			return this.matches;
		}
		addMatch(reg, index, line) {
			const matched = line && reg.exec(line);
			if (matched) this.pushMatch(index, matched);
			return !!matched;
		}
		pushMatch(_index, matched) {
			this.matches.push(...matched.slice(1));
		}
	};
	RemoteLineParser = class extends LineParser {
		addMatch(reg, index, line) {
			return /^remote:\s/.test(String(line)) && super.addMatch(reg, index, line);
		}
		pushMatch(index, matched) {
			if (index > 0 || matched.length > 1) super.pushMatch(index, matched);
		}
	};
} });
function createInstanceConfig(...options) {
	const baseDir = process.cwd();
	const config = Object.assign({
		baseDir,
		...defaultOptions
	}, ...options.filter((o) => typeof o === "object" && o));
	config.baseDir = config.baseDir || baseDir;
	config.trimmed = config.trimmed === true;
	return config;
}
var defaultOptions;
var init_simple_git_options = __esm({ "src/lib/utils/simple-git-options.ts"() {
	"use strict";
	defaultOptions = {
		binary: "git",
		maxConcurrentProcesses: 5,
		config: [],
		trimmed: false
	};
} });
function appendTaskOptions(options, commands = []) {
	if (!filterPlainObject(options)) return commands;
	return Object.keys(options).reduce((commands2, key) => {
		const value = options[key];
		if (isPathSpec(value)) commands2.push(value);
		else if (filterPrimitives(value, ["boolean"])) commands2.push(key + "=" + value);
		else if (Array.isArray(value)) {
			for (const v of value) if (!filterPrimitives(v, ["string", "number"])) commands2.push(key + "=" + v);
		} else commands2.push(key);
		return commands2;
	}, commands);
}
function getTrailingOptions(args, initialPrimitive = 0, objectOnly = false) {
	const command = [];
	for (let i = 0, max = initialPrimitive < 0 ? args.length : initialPrimitive; i < max; i++) if ("string|number".includes(typeof args[i])) command.push(String(args[i]));
	appendTaskOptions(trailingOptionsArgument(args), command);
	if (!objectOnly) command.push(...trailingArrayArgument(args));
	return command;
}
function trailingArrayArgument(args) {
	const hasTrailingCallback = typeof last(args) === "function";
	return filterType(last(args, hasTrailingCallback ? 1 : 0), filterArray, []);
}
function trailingOptionsArgument(args) {
	const hasTrailingCallback = filterFunction(last(args));
	return filterType(last(args, hasTrailingCallback ? 1 : 0), filterPlainObject);
}
function trailingFunctionArgument(args, includeNoop = true) {
	const callback = asFunction(last(args));
	return includeNoop || isUserFunction(callback) ? callback : void 0;
}
var init_task_options = __esm({ "src/lib/utils/task-options.ts"() {
	"use strict";
	init_argument_filters();
	init_util();
	init_pathspec();
} });
function callTaskParser(parser4, streams) {
	return parser4(streams.stdOut, streams.stdErr);
}
function parseStringResponse(result, parsers12, texts, trim = true) {
	asArray(texts).forEach((text) => {
		for (let lines = toLinesWithContent(text, trim), i = 0, max = lines.length; i < max; i++) {
			const line = (offset = 0) => {
				if (i + offset >= max) return;
				return lines[i + offset];
			};
			parsers12.some(({ parse: parse$1 }) => parse$1(line, result));
		}
	});
	return result;
}
var init_task_parser = __esm({ "src/lib/utils/task-parser.ts"() {
	"use strict";
	init_util();
} });
var utils_exports = {};
__export(utils_exports, {
	ExitCodes: () => ExitCodes,
	GitOutputStreams: () => GitOutputStreams,
	LineParser: () => LineParser,
	NOOP: () => NOOP,
	NULL: () => NULL,
	RemoteLineParser: () => RemoteLineParser,
	append: () => append,
	appendTaskOptions: () => appendTaskOptions,
	asArray: () => asArray,
	asCamelCase: () => asCamelCase,
	asFunction: () => asFunction,
	asNumber: () => asNumber,
	asStringArray: () => asStringArray,
	bufferToString: () => bufferToString,
	callTaskParser: () => callTaskParser,
	createInstanceConfig: () => createInstanceConfig,
	delay: () => delay,
	filterArray: () => filterArray,
	filterFunction: () => filterFunction,
	filterHasLength: () => filterHasLength,
	filterPlainObject: () => filterPlainObject,
	filterPrimitives: () => filterPrimitives,
	filterString: () => filterString,
	filterStringArray: () => filterStringArray,
	filterStringOrStringArray: () => filterStringOrStringArray,
	filterType: () => filterType,
	first: () => first,
	folderExists: () => folderExists,
	forEachLineWithContent: () => forEachLineWithContent,
	getTrailingOptions: () => getTrailingOptions,
	including: () => including,
	isUserFunction: () => isUserFunction,
	last: () => last,
	objectToString: () => objectToString,
	orVoid: () => orVoid,
	parseStringResponse: () => parseStringResponse,
	pick: () => pick,
	prefixedArray: () => prefixedArray,
	remove: () => remove,
	splitOn: () => splitOn,
	toLinesWithContent: () => toLinesWithContent,
	trailingFunctionArgument: () => trailingFunctionArgument,
	trailingOptionsArgument: () => trailingOptionsArgument
});
var init_utils = __esm({ "src/lib/utils/index.ts"() {
	"use strict";
	init_argument_filters();
	init_exit_codes();
	init_git_output_streams();
	init_line_parser();
	init_simple_git_options();
	init_task_options();
	init_task_parser();
	init_util();
} });
var check_is_repo_exports = {};
__export(check_is_repo_exports, {
	CheckRepoActions: () => CheckRepoActions,
	checkIsBareRepoTask: () => checkIsBareRepoTask,
	checkIsRepoRootTask: () => checkIsRepoRootTask,
	checkIsRepoTask: () => checkIsRepoTask
});
function checkIsRepoTask(action) {
	switch (action) {
		case "bare": return checkIsBareRepoTask();
		case "root": return checkIsRepoRootTask();
	}
	const commands = ["rev-parse", "--is-inside-work-tree"];
	return {
		commands,
		format: "utf-8",
		onError,
		parser
	};
}
function checkIsRepoRootTask() {
	const commands = ["rev-parse", "--git-dir"];
	return {
		commands,
		format: "utf-8",
		onError,
		parser(path$2) {
			return /^\.(git)?$/.test(path$2.trim());
		}
	};
}
function checkIsBareRepoTask() {
	const commands = ["rev-parse", "--is-bare-repository"];
	return {
		commands,
		format: "utf-8",
		onError,
		parser
	};
}
function isNotRepoMessage(error) {
	return /(Not a git repository|Kein Git-Repository)/i.test(String(error));
}
var CheckRepoActions, onError, parser;
var init_check_is_repo = __esm({ "src/lib/tasks/check-is-repo.ts"() {
	"use strict";
	init_utils();
	CheckRepoActions = /* @__PURE__ */ ((CheckRepoActions2) => {
		CheckRepoActions2["BARE"] = "bare";
		CheckRepoActions2["IN_TREE"] = "tree";
		CheckRepoActions2["IS_REPO_ROOT"] = "root";
		return CheckRepoActions2;
	})(CheckRepoActions || {});
	onError = ({ exitCode }, error, done, fail) => {
		if (exitCode === 128 && isNotRepoMessage(error)) return done(Buffer.from("false"));
		fail(error);
	};
	parser = (text) => {
		return text.trim() === "true";
	};
} });
function cleanSummaryParser(dryRun, text) {
	const summary = new CleanResponse(dryRun);
	const regexp = dryRun ? dryRunRemovalRegexp : removalRegexp;
	toLinesWithContent(text).forEach((line) => {
		const removed = line.replace(regexp, "");
		summary.paths.push(removed);
		(isFolderRegexp.test(removed) ? summary.folders : summary.files).push(removed);
	});
	return summary;
}
var CleanResponse, removalRegexp, dryRunRemovalRegexp, isFolderRegexp;
var init_CleanSummary = __esm({ "src/lib/responses/CleanSummary.ts"() {
	"use strict";
	init_utils();
	CleanResponse = class {
		constructor(dryRun) {
			this.dryRun = dryRun;
			this.paths = [];
			this.files = [];
			this.folders = [];
		}
	};
	removalRegexp = /^[a-z]+\s*/i;
	dryRunRemovalRegexp = /^[a-z]+\s+[a-z]+\s*/i;
	isFolderRegexp = /\/$/;
} });
var task_exports = {};
__export(task_exports, {
	EMPTY_COMMANDS: () => EMPTY_COMMANDS,
	adhocExecTask: () => adhocExecTask,
	configurationErrorTask: () => configurationErrorTask,
	isBufferTask: () => isBufferTask,
	isEmptyTask: () => isEmptyTask,
	straightThroughBufferTask: () => straightThroughBufferTask,
	straightThroughStringTask: () => straightThroughStringTask
});
function adhocExecTask(parser4) {
	return {
		commands: EMPTY_COMMANDS,
		format: "empty",
		parser: parser4
	};
}
function configurationErrorTask(error) {
	return {
		commands: EMPTY_COMMANDS,
		format: "empty",
		parser() {
			throw typeof error === "string" ? new TaskConfigurationError(error) : error;
		}
	};
}
function straightThroughStringTask(commands, trimmed2 = false) {
	return {
		commands,
		format: "utf-8",
		parser(text) {
			return trimmed2 ? String(text).trim() : text;
		}
	};
}
function straightThroughBufferTask(commands) {
	return {
		commands,
		format: "buffer",
		parser(buffer) {
			return buffer;
		}
	};
}
function isBufferTask(task) {
	return task.format === "buffer";
}
function isEmptyTask(task) {
	return task.format === "empty" || !task.commands.length;
}
var EMPTY_COMMANDS;
var init_task = __esm({ "src/lib/tasks/task.ts"() {
	"use strict";
	init_task_configuration_error();
	EMPTY_COMMANDS = [];
} });
var clean_exports = {};
__export(clean_exports, {
	CONFIG_ERROR_INTERACTIVE_MODE: () => CONFIG_ERROR_INTERACTIVE_MODE,
	CONFIG_ERROR_MODE_REQUIRED: () => CONFIG_ERROR_MODE_REQUIRED,
	CONFIG_ERROR_UNKNOWN_OPTION: () => CONFIG_ERROR_UNKNOWN_OPTION,
	CleanOptions: () => CleanOptions,
	cleanTask: () => cleanTask,
	cleanWithOptionsTask: () => cleanWithOptionsTask,
	isCleanOptionsArray: () => isCleanOptionsArray
});
function cleanWithOptionsTask(mode, customArgs) {
	const { cleanMode, options, valid } = getCleanOptions(mode);
	if (!cleanMode) return configurationErrorTask(CONFIG_ERROR_MODE_REQUIRED);
	if (!valid.options) return configurationErrorTask(CONFIG_ERROR_UNKNOWN_OPTION + JSON.stringify(mode));
	options.push(...customArgs);
	if (options.some(isInteractiveMode)) return configurationErrorTask(CONFIG_ERROR_INTERACTIVE_MODE);
	return cleanTask(cleanMode, options);
}
function cleanTask(mode, customArgs) {
	const commands = [
		"clean",
		`-${mode}`,
		...customArgs
	];
	return {
		commands,
		format: "utf-8",
		parser(text) {
			return cleanSummaryParser(mode === "n", text);
		}
	};
}
function isCleanOptionsArray(input) {
	return Array.isArray(input) && input.every((test) => CleanOptionValues.has(test));
}
function getCleanOptions(input) {
	let cleanMode;
	let options = [];
	let valid = {
		cleanMode: false,
		options: true
	};
	input.replace(/[^a-z]i/g, "").split("").forEach((char) => {
		if (isCleanMode(char)) {
			cleanMode = char;
			valid.cleanMode = true;
		} else valid.options = valid.options && isKnownOption(options[options.length] = `-${char}`);
	});
	return {
		cleanMode,
		options,
		valid
	};
}
function isCleanMode(cleanMode) {
	return cleanMode === "f" || cleanMode === "n";
}
function isKnownOption(option) {
	return /^-[a-z]$/i.test(option) && CleanOptionValues.has(option.charAt(1));
}
function isInteractiveMode(option) {
	if (/^-[^\-]/.test(option)) return option.indexOf("i") > 0;
	return option === "--interactive";
}
var CONFIG_ERROR_INTERACTIVE_MODE, CONFIG_ERROR_MODE_REQUIRED, CONFIG_ERROR_UNKNOWN_OPTION, CleanOptions, CleanOptionValues;
var init_clean = __esm({ "src/lib/tasks/clean.ts"() {
	"use strict";
	init_CleanSummary();
	init_utils();
	init_task();
	CONFIG_ERROR_INTERACTIVE_MODE = "Git clean interactive mode is not supported";
	CONFIG_ERROR_MODE_REQUIRED = "Git clean mode parameter (\"n\" or \"f\") is required";
	CONFIG_ERROR_UNKNOWN_OPTION = "Git clean unknown option found in: ";
	CleanOptions = /* @__PURE__ */ ((CleanOptions2) => {
		CleanOptions2["DRY_RUN"] = "n";
		CleanOptions2["FORCE"] = "f";
		CleanOptions2["IGNORED_INCLUDED"] = "x";
		CleanOptions2["IGNORED_ONLY"] = "X";
		CleanOptions2["EXCLUDING"] = "e";
		CleanOptions2["QUIET"] = "q";
		CleanOptions2["RECURSIVE"] = "d";
		return CleanOptions2;
	})(CleanOptions || {});
	CleanOptionValues = /* @__PURE__ */ new Set(["i", ...asStringArray(Object.values(CleanOptions))]);
} });
function configListParser(text) {
	const config = new ConfigList();
	for (const item of configParser(text)) config.addValue(item.file, String(item.key), item.value);
	return config;
}
function configGetParser(text, key) {
	let value = null;
	const values = [];
	const scopes = /* @__PURE__ */ new Map();
	for (const item of configParser(text, key)) {
		if (item.key !== key) continue;
		values.push(value = item.value);
		if (!scopes.has(item.file)) scopes.set(item.file, []);
		scopes.get(item.file).push(value);
	}
	return {
		key,
		paths: Array.from(scopes.keys()),
		scopes,
		value,
		values
	};
}
function configFilePath(filePath) {
	return filePath.replace(/^(file):/, "");
}
function* configParser(text, requestedKey = null) {
	const lines = text.split("\0");
	for (let i = 0, max = lines.length - 1; i < max;) {
		const file = configFilePath(lines[i++]);
		let value = lines[i++];
		let key = requestedKey;
		if (value.includes("\n")) {
			const line = splitOn(value, "\n");
			key = line[0];
			value = line[1];
		}
		yield {
			file,
			key,
			value
		};
	}
}
var ConfigList;
var init_ConfigList = __esm({ "src/lib/responses/ConfigList.ts"() {
	"use strict";
	init_utils();
	ConfigList = class {
		constructor() {
			this.files = [];
			this.values = /* @__PURE__ */ Object.create(null);
		}
		get all() {
			if (!this._all) this._all = this.files.reduce((all, file) => {
				return Object.assign(all, this.values[file]);
			}, {});
			return this._all;
		}
		addFile(file) {
			if (!(file in this.values)) {
				const latest = last(this.files);
				this.values[file] = latest ? Object.create(this.values[latest]) : {};
				this.files.push(file);
			}
			return this.values[file];
		}
		addValue(file, key, value) {
			const values = this.addFile(file);
			if (!values.hasOwnProperty(key)) values[key] = value;
			else if (Array.isArray(values[key])) values[key].push(value);
			else values[key] = [values[key], value];
			this._all = void 0;
		}
	};
} });
function asConfigScope(scope, fallback) {
	if (typeof scope === "string" && GitConfigScope.hasOwnProperty(scope)) return scope;
	return fallback;
}
function addConfigTask(key, value, append2, scope) {
	const commands = ["config", `--${scope}`];
	if (append2) commands.push("--add");
	commands.push(key, value);
	return {
		commands,
		format: "utf-8",
		parser(text) {
			return text;
		}
	};
}
function getConfigTask(key, scope) {
	const commands = [
		"config",
		"--null",
		"--show-origin",
		"--get-all",
		key
	];
	if (scope) commands.splice(1, 0, `--${scope}`);
	return {
		commands,
		format: "utf-8",
		parser(text) {
			return configGetParser(text, key);
		}
	};
}
function listConfigTask(scope) {
	const commands = [
		"config",
		"--list",
		"--show-origin",
		"--null"
	];
	if (scope) commands.push(`--${scope}`);
	return {
		commands,
		format: "utf-8",
		parser(text) {
			return configListParser(text);
		}
	};
}
function config_default() {
	return {
		addConfig(key, value, ...rest) {
			return this._runTask(addConfigTask(key, value, rest[0] === true, asConfigScope(rest[1], "local")), trailingFunctionArgument(arguments));
		},
		getConfig(key, scope) {
			return this._runTask(getConfigTask(key, asConfigScope(scope, void 0)), trailingFunctionArgument(arguments));
		},
		listConfig(...rest) {
			return this._runTask(listConfigTask(asConfigScope(rest[0], void 0)), trailingFunctionArgument(arguments));
		}
	};
}
var GitConfigScope;
var init_config = __esm({ "src/lib/tasks/config.ts"() {
	"use strict";
	init_ConfigList();
	init_utils();
	GitConfigScope = /* @__PURE__ */ ((GitConfigScope2) => {
		GitConfigScope2["system"] = "system";
		GitConfigScope2["global"] = "global";
		GitConfigScope2["local"] = "local";
		GitConfigScope2["worktree"] = "worktree";
		return GitConfigScope2;
	})(GitConfigScope || {});
} });
function isDiffNameStatus(input) {
	return diffNameStatus.has(input);
}
var DiffNameStatus, diffNameStatus;
var init_diff_name_status = __esm({ "src/lib/tasks/diff-name-status.ts"() {
	"use strict";
	DiffNameStatus = /* @__PURE__ */ ((DiffNameStatus2) => {
		DiffNameStatus2["ADDED"] = "A";
		DiffNameStatus2["COPIED"] = "C";
		DiffNameStatus2["DELETED"] = "D";
		DiffNameStatus2["MODIFIED"] = "M";
		DiffNameStatus2["RENAMED"] = "R";
		DiffNameStatus2["CHANGED"] = "T";
		DiffNameStatus2["UNMERGED"] = "U";
		DiffNameStatus2["UNKNOWN"] = "X";
		DiffNameStatus2["BROKEN"] = "B";
		return DiffNameStatus2;
	})(DiffNameStatus || {});
	diffNameStatus = new Set(Object.values(DiffNameStatus));
} });
function grepQueryBuilder(...params) {
	return new GrepQuery().param(...params);
}
function parseGrep(grep) {
	const paths = /* @__PURE__ */ new Set();
	const results = {};
	forEachLineWithContent(grep, (input) => {
		const [path$2, line, preview] = input.split(NULL);
		paths.add(path$2);
		(results[path$2] = results[path$2] || []).push({
			line: asNumber(line),
			path: path$2,
			preview
		});
	});
	return {
		paths,
		results
	};
}
function grep_default() {
	return { grep(searchTerm) {
		const then = trailingFunctionArgument(arguments);
		const options = getTrailingOptions(arguments);
		for (const option of disallowedOptions) if (options.includes(option)) return this._runTask(configurationErrorTask(`git.grep: use of "${option}" is not supported.`), then);
		if (typeof searchTerm === "string") searchTerm = grepQueryBuilder().param(searchTerm);
		const commands = [
			"grep",
			"--null",
			"-n",
			"--full-name",
			...options,
			...searchTerm
		];
		return this._runTask({
			commands,
			format: "utf-8",
			parser(stdOut) {
				return parseGrep(stdOut);
			}
		}, then);
	} };
}
var disallowedOptions, Query, _a, GrepQuery;
var init_grep = __esm({ "src/lib/tasks/grep.ts"() {
	"use strict";
	init_utils();
	init_task();
	disallowedOptions = ["-h"];
	Query = Symbol("grepQuery");
	GrepQuery = class {
		constructor() {
			this[_a] = [];
		}
		*[(_a = Query, Symbol.iterator)]() {
			for (const query of this[Query]) yield query;
		}
		and(...and) {
			and.length && this[Query].push("--and", "(", ...prefixedArray(and, "-e"), ")");
			return this;
		}
		param(...param) {
			this[Query].push(...prefixedArray(param, "-e"));
			return this;
		}
	};
} });
var reset_exports = {};
__export(reset_exports, {
	ResetMode: () => ResetMode,
	getResetMode: () => getResetMode,
	resetTask: () => resetTask
});
function resetTask(mode, customArgs) {
	const commands = ["reset"];
	if (isValidResetMode(mode)) commands.push(`--${mode}`);
	commands.push(...customArgs);
	return straightThroughStringTask(commands);
}
function getResetMode(mode) {
	if (isValidResetMode(mode)) return mode;
	switch (typeof mode) {
		case "string":
		case "undefined": return "soft";
	}
	return;
}
function isValidResetMode(mode) {
	return ResetModes.includes(mode);
}
var ResetMode, ResetModes;
var init_reset = __esm({ "src/lib/tasks/reset.ts"() {
	"use strict";
	init_task();
	ResetMode = /* @__PURE__ */ ((ResetMode2) => {
		ResetMode2["MIXED"] = "mixed";
		ResetMode2["SOFT"] = "soft";
		ResetMode2["HARD"] = "hard";
		ResetMode2["MERGE"] = "merge";
		ResetMode2["KEEP"] = "keep";
		return ResetMode2;
	})(ResetMode || {});
	ResetModes = Array.from(Object.values(ResetMode));
} });
function createLog() {
	return (0, import_src.default)("simple-git");
}
function prefixedLogger(to, prefix, forward) {
	if (!prefix || !String(prefix).replace(/\s*/, "")) return !forward ? to : (message, ...args) => {
		to(message, ...args);
		forward(message, ...args);
	};
	return (message, ...args) => {
		to(`%s ${message}`, prefix, ...args);
		if (forward) forward(message, ...args);
	};
}
function childLoggerName(name, childDebugger, { namespace: parentNamespace }) {
	if (typeof name === "string") return name;
	const childNamespace = childDebugger && childDebugger.namespace || "";
	if (childNamespace.startsWith(parentNamespace)) return childNamespace.substr(parentNamespace.length + 1);
	return childNamespace || parentNamespace;
}
function createLogger(label, verbose, initialStep, infoDebugger = createLog()) {
	const labelPrefix = label && `[${label}]` || "";
	const spawned = [];
	const debugDebugger = typeof verbose === "string" ? infoDebugger.extend(verbose) : verbose;
	const key = childLoggerName(filterType(verbose, filterString), debugDebugger, infoDebugger);
	return step(initialStep);
	function sibling(name, initial) {
		return append(spawned, createLogger(label, key.replace(/^[^:]+/, name), initial, infoDebugger));
	}
	function step(phase) {
		const stepPrefix = phase && `[${phase}]` || "";
		const debug2 = debugDebugger && prefixedLogger(debugDebugger, stepPrefix) || NOOP;
		const info = prefixedLogger(infoDebugger, `${labelPrefix} ${stepPrefix}`, debug2);
		return Object.assign(debugDebugger ? debug2 : info, {
			label,
			sibling,
			info,
			step
		});
	}
}
var init_git_logger = __esm({ "src/lib/git-logger.ts"() {
	"use strict";
	init_utils();
	import_src.default.formatters.L = (value) => String(filterHasLength(value) ? value.length : "-");
	import_src.default.formatters.B = (value) => {
		if (Buffer.isBuffer(value)) return value.toString("utf8");
		return objectToString(value);
	};
} });
var TasksPendingQueue;
var init_tasks_pending_queue = __esm({ "src/lib/runners/tasks-pending-queue.ts"() {
	"use strict";
	init_git_error();
	init_git_logger();
	TasksPendingQueue = class _TasksPendingQueue {
		constructor(logLabel = "GitExecutor") {
			this.logLabel = logLabel;
			this._queue = /* @__PURE__ */ new Map();
		}
		withProgress(task) {
			return this._queue.get(task);
		}
		createProgress(task) {
			const name = _TasksPendingQueue.getName(task.commands[0]);
			const logger = createLogger(this.logLabel, name);
			return {
				task,
				logger,
				name
			};
		}
		push(task) {
			const progress = this.createProgress(task);
			progress.logger("Adding task to the queue, commands = %o", task.commands);
			this._queue.set(task, progress);
			return progress;
		}
		fatal(err) {
			for (const [task, { logger }] of Array.from(this._queue.entries())) {
				if (task === err.task) {
					logger.info(`Failed %o`, err);
					logger(`Fatal exception, any as-yet un-started tasks run through this executor will not be attempted`);
				} else logger.info(`A fatal exception occurred in a previous task, the queue has been purged: %o`, err.message);
				this.complete(task);
			}
			if (this._queue.size !== 0) throw new Error(`Queue size should be zero after fatal: ${this._queue.size}`);
		}
		complete(task) {
			const progress = this.withProgress(task);
			if (progress) this._queue.delete(task);
		}
		attempt(task) {
			const progress = this.withProgress(task);
			if (!progress) throw new GitError(void 0, "TasksPendingQueue: attempt called for an unknown task");
			progress.logger("Starting task");
			return progress;
		}
		static getName(name = "empty") {
			return `task:${name}:${++_TasksPendingQueue.counter}`;
		}
		static {
			this.counter = 0;
		}
	};
} });
function pluginContext(task, commands) {
	return {
		method: first(task.commands) || "",
		commands
	};
}
function onErrorReceived(target, logger) {
	return (err) => {
		logger(`[ERROR] child process exception %o`, err);
		target.push(Buffer.from(String(err.stack), "ascii"));
	};
}
function onDataReceived(target, name, logger, output) {
	return (buffer) => {
		logger(`%s received %L bytes`, name, buffer);
		output(`%B`, buffer);
		target.push(buffer);
	};
}
var GitExecutorChain;
var init_git_executor_chain = __esm({ "src/lib/runners/git-executor-chain.ts"() {
	"use strict";
	init_git_error();
	init_task();
	init_utils();
	init_tasks_pending_queue();
	GitExecutorChain = class {
		constructor(_executor, _scheduler, _plugins) {
			this._executor = _executor;
			this._scheduler = _scheduler;
			this._plugins = _plugins;
			this._chain = Promise.resolve();
			this._queue = new TasksPendingQueue();
		}
		get cwd() {
			return this._cwd || this._executor.cwd;
		}
		set cwd(cwd) {
			this._cwd = cwd;
		}
		get env() {
			return this._executor.env;
		}
		get outputHandler() {
			return this._executor.outputHandler;
		}
		chain() {
			return this;
		}
		push(task) {
			this._queue.push(task);
			return this._chain = this._chain.then(() => this.attemptTask(task));
		}
		async attemptTask(task) {
			const onScheduleComplete = await this._scheduler.next();
			const onQueueComplete = () => this._queue.complete(task);
			try {
				const { logger } = this._queue.attempt(task);
				return await (isEmptyTask(task) ? this.attemptEmptyTask(task, logger) : this.attemptRemoteTask(task, logger));
			} catch (e) {
				throw this.onFatalException(task, e);
			} finally {
				onQueueComplete();
				onScheduleComplete();
			}
		}
		onFatalException(task, e) {
			const gitError = e instanceof GitError ? Object.assign(e, { task }) : new GitError(task, e && String(e));
			this._chain = Promise.resolve();
			this._queue.fatal(gitError);
			return gitError;
		}
		async attemptRemoteTask(task, logger) {
			const binary = this._plugins.exec("spawn.binary", "", pluginContext(task, task.commands));
			const args = this._plugins.exec("spawn.args", [...task.commands], pluginContext(task, task.commands));
			const raw = await this.gitResponse(task, binary, args, this.outputHandler, logger.step("SPAWN"));
			const outputStreams = await this.handleTaskData(task, args, raw, logger.step("HANDLE"));
			logger(`passing response to task's parser as a %s`, task.format);
			if (isBufferTask(task)) return callTaskParser(task.parser, outputStreams);
			return callTaskParser(task.parser, outputStreams.asStrings());
		}
		async attemptEmptyTask(task, logger) {
			logger(`empty task bypassing child process to call to task's parser`);
			return task.parser(this);
		}
		handleTaskData(task, args, result, logger) {
			const { exitCode, rejection, stdOut, stdErr } = result;
			return new Promise((done, fail) => {
				logger(`Preparing to handle process response exitCode=%d stdOut=`, exitCode);
				const { error } = this._plugins.exec("task.error", { error: rejection }, {
					...pluginContext(task, args),
					...result
				});
				if (error && task.onError) {
					logger.info(`exitCode=%s handling with custom error handler`);
					return task.onError(result, error, (newStdOut) => {
						logger.info(`custom error handler treated as success`);
						logger(`custom error returned a %s`, objectToString(newStdOut));
						done(new GitOutputStreams(Array.isArray(newStdOut) ? Buffer.concat(newStdOut) : newStdOut, Buffer.concat(stdErr)));
					}, fail);
				}
				if (error) {
					logger.info(`handling as error: exitCode=%s stdErr=%s rejection=%o`, exitCode, stdErr.length, rejection);
					return fail(error);
				}
				logger.info(`retrieving task output complete`);
				done(new GitOutputStreams(Buffer.concat(stdOut), Buffer.concat(stdErr)));
			});
		}
		async gitResponse(task, command, args, outputHandler, logger) {
			const outputLogger = logger.sibling("output");
			const spawnOptions = this._plugins.exec("spawn.options", {
				cwd: this.cwd,
				env: this.env,
				windowsHide: true
			}, pluginContext(task, task.commands));
			return new Promise((done) => {
				const stdOut = [];
				const stdErr = [];
				logger.info(`%s %o`, command, args);
				logger("%O", spawnOptions);
				let rejection = this._beforeSpawn(task, args);
				if (rejection) return done({
					stdOut,
					stdErr,
					exitCode: 9901,
					rejection
				});
				this._plugins.exec("spawn.before", void 0, {
					...pluginContext(task, args),
					kill(reason) {
						rejection = reason || rejection;
					}
				});
				const spawned = spawn(command, args, spawnOptions);
				spawned.stdout.on("data", onDataReceived(stdOut, "stdOut", logger, outputLogger.step("stdOut")));
				spawned.stderr.on("data", onDataReceived(stdErr, "stdErr", logger, outputLogger.step("stdErr")));
				spawned.on("error", onErrorReceived(stdErr, logger));
				if (outputHandler) {
					logger(`Passing child process stdOut/stdErr to custom outputHandler`);
					outputHandler(command, spawned.stdout, spawned.stderr, [...args]);
				}
				this._plugins.exec("spawn.after", void 0, {
					...pluginContext(task, args),
					spawned,
					close(exitCode, reason) {
						done({
							stdOut,
							stdErr,
							exitCode,
							rejection: rejection || reason
						});
					},
					kill(reason) {
						if (spawned.killed) return;
						rejection = reason;
						spawned.kill("SIGINT");
					}
				});
			});
		}
		_beforeSpawn(task, args) {
			let rejection;
			this._plugins.exec("spawn.before", void 0, {
				...pluginContext(task, args),
				kill(reason) {
					rejection = reason || rejection;
				}
			});
			return rejection;
		}
	};
} });
var git_executor_exports = {};
__export(git_executor_exports, { GitExecutor: () => GitExecutor });
var GitExecutor;
var init_git_executor = __esm({ "src/lib/runners/git-executor.ts"() {
	"use strict";
	init_git_executor_chain();
	GitExecutor = class {
		constructor(cwd, _scheduler, _plugins) {
			this.cwd = cwd;
			this._scheduler = _scheduler;
			this._plugins = _plugins;
			this._chain = new GitExecutorChain(this, this._scheduler, this._plugins);
		}
		chain() {
			return new GitExecutorChain(this, this._scheduler, this._plugins);
		}
		push(task) {
			return this._chain.push(task);
		}
	};
} });
function taskCallback(task, response, callback = NOOP) {
	const onSuccess = (data) => {
		callback(null, data);
	};
	const onError2 = (err) => {
		if (err?.task === task) callback(err instanceof GitResponseError ? addDeprecationNoticeToError(err) : err, void 0);
	};
	response.then(onSuccess, onError2);
}
function addDeprecationNoticeToError(err) {
	let log$2 = (name) => {
		console.warn(`simple-git deprecation notice: accessing GitResponseError.${name} should be GitResponseError.git.${name}, this will no longer be available in version 3`);
		log$2 = NOOP;
	};
	return Object.create(err, Object.getOwnPropertyNames(err.git).reduce(descriptorReducer, {}));
	function descriptorReducer(all, name) {
		if (name in err) return all;
		all[name] = {
			enumerable: false,
			configurable: false,
			get() {
				log$2(name);
				return err.git[name];
			}
		};
		return all;
	}
}
var init_task_callback = __esm({ "src/lib/task-callback.ts"() {
	"use strict";
	init_git_response_error();
	init_utils();
} });
function changeWorkingDirectoryTask(directory, root) {
	return adhocExecTask((instance) => {
		if (!folderExists(directory)) throw new Error(`Git.cwd: cannot change to non-directory "${directory}"`);
		return (root || instance).cwd = directory;
	});
}
var init_change_working_directory = __esm({ "src/lib/tasks/change-working-directory.ts"() {
	"use strict";
	init_utils();
	init_task();
} });
function checkoutTask(args) {
	const commands = ["checkout", ...args];
	if (commands[1] === "-b" && commands.includes("-B")) commands[1] = remove(commands, "-B");
	return straightThroughStringTask(commands);
}
function checkout_default() {
	return {
		checkout() {
			return this._runTask(checkoutTask(getTrailingOptions(arguments, 1)), trailingFunctionArgument(arguments));
		},
		checkoutBranch(branchName, startPoint) {
			return this._runTask(checkoutTask([
				"-b",
				branchName,
				startPoint,
				...getTrailingOptions(arguments)
			]), trailingFunctionArgument(arguments));
		},
		checkoutLocalBranch(branchName) {
			return this._runTask(checkoutTask([
				"-b",
				branchName,
				...getTrailingOptions(arguments)
			]), trailingFunctionArgument(arguments));
		}
	};
}
var init_checkout = __esm({ "src/lib/tasks/checkout.ts"() {
	"use strict";
	init_utils();
	init_task();
} });
function countObjectsResponse() {
	return {
		count: 0,
		garbage: 0,
		inPack: 0,
		packs: 0,
		prunePackable: 0,
		size: 0,
		sizeGarbage: 0,
		sizePack: 0
	};
}
function count_objects_default() {
	return { countObjects() {
		return this._runTask({
			commands: ["count-objects", "--verbose"],
			format: "utf-8",
			parser(stdOut) {
				return parseStringResponse(countObjectsResponse(), [parser2], stdOut);
			}
		});
	} };
}
var parser2;
var init_count_objects = __esm({ "src/lib/tasks/count-objects.ts"() {
	"use strict";
	init_utils();
	parser2 = new LineParser(/([a-z-]+): (\d+)$/, (result, [key, value]) => {
		const property = asCamelCase(key);
		if (result.hasOwnProperty(property)) result[property] = asNumber(value);
	});
} });
function parseCommitResult(stdOut) {
	const result = {
		author: null,
		branch: "",
		commit: "",
		root: false,
		summary: {
			changes: 0,
			insertions: 0,
			deletions: 0
		}
	};
	return parseStringResponse(result, parsers, stdOut);
}
var parsers;
var init_parse_commit = __esm({ "src/lib/parsers/parse-commit.ts"() {
	"use strict";
	init_utils();
	parsers = [
		new LineParser(/^\[([^\s]+)( \([^)]+\))? ([^\]]+)/, (result, [branch, root, commit]) => {
			result.branch = branch;
			result.commit = commit;
			result.root = !!root;
		}),
		new LineParser(/\s*Author:\s(.+)/i, (result, [author]) => {
			const parts = author.split("<");
			const email = parts.pop();
			if (!email || !email.includes("@")) return;
			result.author = {
				email: email.substr(0, email.length - 1),
				name: parts.join("<").trim()
			};
		}),
		new LineParser(/(\d+)[^,]*(?:,\s*(\d+)[^,]*)(?:,\s*(\d+))/g, (result, [changes, insertions, deletions]) => {
			result.summary.changes = parseInt(changes, 10) || 0;
			result.summary.insertions = parseInt(insertions, 10) || 0;
			result.summary.deletions = parseInt(deletions, 10) || 0;
		}),
		new LineParser(/^(\d+)[^,]*(?:,\s*(\d+)[^(]+\(([+-]))?/, (result, [changes, lines, direction]) => {
			result.summary.changes = parseInt(changes, 10) || 0;
			const count = parseInt(lines, 10) || 0;
			if (direction === "-") result.summary.deletions = count;
			else if (direction === "+") result.summary.insertions = count;
		})
	];
} });
function commitTask(message, files, customArgs) {
	const commands = [
		"-c",
		"core.abbrev=40",
		"commit",
		...prefixedArray(message, "-m"),
		...files,
		...customArgs
	];
	return {
		commands,
		format: "utf-8",
		parser: parseCommitResult
	};
}
function commit_default() {
	return { commit(message, ...rest) {
		const next = trailingFunctionArgument(arguments);
		const task = rejectDeprecatedSignatures(message) || commitTask(asArray(message), asArray(filterType(rest[0], filterStringOrStringArray, [])), [...filterType(rest[1], filterArray, []), ...getTrailingOptions(arguments, 0, true)]);
		return this._runTask(task, next);
	} };
	function rejectDeprecatedSignatures(message) {
		return !filterStringOrStringArray(message) && configurationErrorTask(`git.commit: requires the commit message to be supplied as a string/string[]`);
	}
}
var init_commit = __esm({ "src/lib/tasks/commit.ts"() {
	"use strict";
	init_parse_commit();
	init_utils();
	init_task();
} });
function first_commit_default() {
	return { firstCommit() {
		return this._runTask(straightThroughStringTask([
			"rev-list",
			"--max-parents=0",
			"HEAD"
		], true), trailingFunctionArgument(arguments));
	} };
}
var init_first_commit = __esm({ "src/lib/tasks/first-commit.ts"() {
	"use strict";
	init_utils();
	init_task();
} });
function hashObjectTask(filePath, write) {
	const commands = ["hash-object", filePath];
	if (write) commands.push("-w");
	return straightThroughStringTask(commands, true);
}
var init_hash_object = __esm({ "src/lib/tasks/hash-object.ts"() {
	"use strict";
	init_task();
} });
function parseInit(bare, path$2, text) {
	const response = String(text).trim();
	let result;
	if (result = initResponseRegex.exec(response)) return new InitSummary(bare, path$2, false, result[1]);
	if (result = reInitResponseRegex.exec(response)) return new InitSummary(bare, path$2, true, result[1]);
	let gitDir = "";
	const tokens = response.split(" ");
	while (tokens.length) {
		const token = tokens.shift();
		if (token === "in") {
			gitDir = tokens.join(" ");
			break;
		}
	}
	return new InitSummary(bare, path$2, /^re/i.test(response), gitDir);
}
var InitSummary, initResponseRegex, reInitResponseRegex;
var init_InitSummary = __esm({ "src/lib/responses/InitSummary.ts"() {
	"use strict";
	InitSummary = class {
		constructor(bare, path$2, existing, gitDir) {
			this.bare = bare;
			this.path = path$2;
			this.existing = existing;
			this.gitDir = gitDir;
		}
	};
	initResponseRegex = /^Init.+ repository in (.+)$/;
	reInitResponseRegex = /^Rein.+ in (.+)$/;
} });
function hasBareCommand(command) {
	return command.includes(bareCommand);
}
function initTask(bare = false, path$2, customArgs) {
	const commands = ["init", ...customArgs];
	if (bare && !hasBareCommand(commands)) commands.splice(1, 0, bareCommand);
	return {
		commands,
		format: "utf-8",
		parser(text) {
			return parseInit(commands.includes("--bare"), path$2, text);
		}
	};
}
var bareCommand;
var init_init = __esm({ "src/lib/tasks/init.ts"() {
	"use strict";
	init_InitSummary();
	bareCommand = "--bare";
} });
function logFormatFromCommand(customArgs) {
	for (let i = 0; i < customArgs.length; i++) {
		const format = logFormatRegex.exec(customArgs[i]);
		if (format) return `--${format[1]}`;
	}
	return "";
}
function isLogFormat(customArg) {
	return logFormatRegex.test(customArg);
}
var logFormatRegex;
var init_log_format = __esm({ "src/lib/args/log-format.ts"() {
	"use strict";
	logFormatRegex = /^--(stat|numstat|name-only|name-status)(=|$)/;
} });
var DiffSummary;
var init_DiffSummary = __esm({ "src/lib/responses/DiffSummary.ts"() {
	"use strict";
	DiffSummary = class {
		constructor() {
			this.changed = 0;
			this.deletions = 0;
			this.insertions = 0;
			this.files = [];
		}
	};
} });
function getDiffParser(format = "") {
	const parser4 = diffSummaryParsers[format];
	return (stdOut) => parseStringResponse(new DiffSummary(), parser4, stdOut, false);
}
var statParser, numStatParser, nameOnlyParser, nameStatusParser, diffSummaryParsers;
var init_parse_diff_summary = __esm({ "src/lib/parsers/parse-diff-summary.ts"() {
	"use strict";
	init_log_format();
	init_DiffSummary();
	init_diff_name_status();
	init_utils();
	statParser = [
		new LineParser(/^(.+)\s+\|\s+(\d+)(\s+[+\-]+)?$/, (result, [file, changes, alterations = ""]) => {
			result.files.push({
				file: file.trim(),
				changes: asNumber(changes),
				insertions: alterations.replace(/[^+]/g, "").length,
				deletions: alterations.replace(/[^-]/g, "").length,
				binary: false
			});
		}),
		new LineParser(/^(.+) \|\s+Bin ([0-9.]+) -> ([0-9.]+) ([a-z]+)/, (result, [file, before, after]) => {
			result.files.push({
				file: file.trim(),
				before: asNumber(before),
				after: asNumber(after),
				binary: true
			});
		}),
		new LineParser(/(\d+) files? changed\s*((?:, \d+ [^,]+){0,2})/, (result, [changed, summary]) => {
			const inserted = /(\d+) i/.exec(summary);
			const deleted = /(\d+) d/.exec(summary);
			result.changed = asNumber(changed);
			result.insertions = asNumber(inserted?.[1]);
			result.deletions = asNumber(deleted?.[1]);
		})
	];
	numStatParser = [new LineParser(/(\d+)\t(\d+)\t(.+)$/, (result, [changesInsert, changesDelete, file]) => {
		const insertions = asNumber(changesInsert);
		const deletions = asNumber(changesDelete);
		result.changed++;
		result.insertions += insertions;
		result.deletions += deletions;
		result.files.push({
			file,
			changes: insertions + deletions,
			insertions,
			deletions,
			binary: false
		});
	}), new LineParser(/-\t-\t(.+)$/, (result, [file]) => {
		result.changed++;
		result.files.push({
			file,
			after: 0,
			before: 0,
			binary: true
		});
	})];
	nameOnlyParser = [new LineParser(/(.+)$/, (result, [file]) => {
		result.changed++;
		result.files.push({
			file,
			changes: 0,
			insertions: 0,
			deletions: 0,
			binary: false
		});
	})];
	nameStatusParser = [new LineParser(/([ACDMRTUXB])([0-9]{0,3})\t(.[^\t]*)(\t(.[^\t]*))?$/, (result, [status, similarity, from, _to, to]) => {
		result.changed++;
		result.files.push({
			file: to ?? from,
			changes: 0,
			insertions: 0,
			deletions: 0,
			binary: false,
			status: orVoid(isDiffNameStatus(status) && status),
			from: orVoid(!!to && from !== to && from),
			similarity: asNumber(similarity)
		});
	})];
	diffSummaryParsers = {
		[""]: statParser,
		["--stat"]: statParser,
		["--numstat"]: numStatParser,
		["--name-status"]: nameStatusParser,
		["--name-only"]: nameOnlyParser
	};
} });
function lineBuilder(tokens, fields) {
	return fields.reduce((line, field, index) => {
		line[field] = tokens[index] || "";
		return line;
	}, /* @__PURE__ */ Object.create({ diff: null }));
}
function createListLogSummaryParser(splitter = SPLITTER, fields = defaultFieldNames, logFormat = "") {
	const parseDiffResult = getDiffParser(logFormat);
	return function(stdOut) {
		const all = toLinesWithContent(stdOut.trim(), false, START_BOUNDARY).map(function(item) {
			const lineDetail = item.split(COMMIT_BOUNDARY);
			const listLogLine = lineBuilder(lineDetail[0].split(splitter), fields);
			if (lineDetail.length > 1 && !!lineDetail[1].trim()) listLogLine.diff = parseDiffResult(lineDetail[1]);
			return listLogLine;
		});
		return {
			all,
			latest: all.length && all[0] || null,
			total: all.length
		};
	};
}
var START_BOUNDARY, COMMIT_BOUNDARY, SPLITTER, defaultFieldNames;
var init_parse_list_log_summary = __esm({ "src/lib/parsers/parse-list-log-summary.ts"() {
	"use strict";
	init_utils();
	init_parse_diff_summary();
	init_log_format();
	START_BOUNDARY = "òòòòòò ";
	COMMIT_BOUNDARY = " òò";
	SPLITTER = " ò ";
	defaultFieldNames = [
		"hash",
		"date",
		"message",
		"refs",
		"author_name",
		"author_email"
	];
} });
var diff_exports = {};
__export(diff_exports, {
	diffSummaryTask: () => diffSummaryTask,
	validateLogFormatConfig: () => validateLogFormatConfig
});
function diffSummaryTask(customArgs) {
	let logFormat = logFormatFromCommand(customArgs);
	const commands = ["diff"];
	if (logFormat === "") {
		logFormat = "--stat";
		commands.push("--stat=4096");
	}
	commands.push(...customArgs);
	return validateLogFormatConfig(commands) || {
		commands,
		format: "utf-8",
		parser: getDiffParser(logFormat)
	};
}
function validateLogFormatConfig(customArgs) {
	const flags = customArgs.filter(isLogFormat);
	if (flags.length > 1) return configurationErrorTask(`Summary flags are mutually exclusive - pick one of ${flags.join(",")}`);
	if (flags.length && customArgs.includes("-z")) return configurationErrorTask(`Summary flag ${flags} parsing is not compatible with null termination option '-z'`);
}
var init_diff = __esm({ "src/lib/tasks/diff.ts"() {
	"use strict";
	init_log_format();
	init_parse_diff_summary();
	init_task();
} });
function prettyFormat(format, splitter) {
	const fields = [];
	const formatStr = [];
	Object.keys(format).forEach((field) => {
		fields.push(field);
		formatStr.push(String(format[field]));
	});
	return [fields, formatStr.join(splitter)];
}
function userOptions(input) {
	return Object.keys(input).reduce((out, key) => {
		if (!(key in excludeOptions)) out[key] = input[key];
		return out;
	}, {});
}
function parseLogOptions(opt = {}, customArgs = []) {
	const splitter = filterType(opt.splitter, filterString, SPLITTER);
	const format = filterPlainObject(opt.format) ? opt.format : {
		hash: "%H",
		date: opt.strictDate === false ? "%ai" : "%aI",
		message: "%s",
		refs: "%D",
		body: opt.multiLine ? "%B" : "%b",
		author_name: opt.mailMap !== false ? "%aN" : "%an",
		author_email: opt.mailMap !== false ? "%aE" : "%ae"
	};
	const [fields, formatStr] = prettyFormat(format, splitter);
	const suffix = [];
	const command = [`--pretty=format:${START_BOUNDARY}${formatStr}${COMMIT_BOUNDARY}`, ...customArgs];
	const maxCount = opt.n || opt["max-count"] || opt.maxCount;
	if (maxCount) command.push(`--max-count=${maxCount}`);
	if (opt.from || opt.to) {
		const rangeOperator = opt.symmetric !== false ? "..." : "..";
		suffix.push(`${opt.from || ""}${rangeOperator}${opt.to || ""}`);
	}
	if (filterString(opt.file)) command.push("--follow", pathspec(opt.file));
	appendTaskOptions(userOptions(opt), command);
	return {
		fields,
		splitter,
		commands: [...command, ...suffix]
	};
}
function logTask(splitter, fields, customArgs) {
	const parser4 = createListLogSummaryParser(splitter, fields, logFormatFromCommand(customArgs));
	return {
		commands: ["log", ...customArgs],
		format: "utf-8",
		parser: parser4
	};
}
function log_default() {
	return { log(...rest) {
		const next = trailingFunctionArgument(arguments);
		const options = parseLogOptions(trailingOptionsArgument(arguments), filterType(arguments[0], filterArray));
		const task = rejectDeprecatedSignatures(...rest) || validateLogFormatConfig(options.commands) || createLogTask(options);
		return this._runTask(task, next);
	} };
	function createLogTask(options) {
		return logTask(options.splitter, options.fields, options.commands);
	}
	function rejectDeprecatedSignatures(from, to) {
		return filterString(from) && filterString(to) && configurationErrorTask(`git.log(string, string) should be replaced with git.log({ from: string, to: string })`);
	}
}
var excludeOptions;
var init_log = __esm({ "src/lib/tasks/log.ts"() {
	"use strict";
	init_log_format();
	init_pathspec();
	init_parse_list_log_summary();
	init_utils();
	init_task();
	init_diff();
	excludeOptions = /* @__PURE__ */ ((excludeOptions2) => {
		excludeOptions2[excludeOptions2["--pretty"] = 0] = "--pretty";
		excludeOptions2[excludeOptions2["max-count"] = 1] = "max-count";
		excludeOptions2[excludeOptions2["maxCount"] = 2] = "maxCount";
		excludeOptions2[excludeOptions2["n"] = 3] = "n";
		excludeOptions2[excludeOptions2["file"] = 4] = "file";
		excludeOptions2[excludeOptions2["format"] = 5] = "format";
		excludeOptions2[excludeOptions2["from"] = 6] = "from";
		excludeOptions2[excludeOptions2["to"] = 7] = "to";
		excludeOptions2[excludeOptions2["splitter"] = 8] = "splitter";
		excludeOptions2[excludeOptions2["symmetric"] = 9] = "symmetric";
		excludeOptions2[excludeOptions2["mailMap"] = 10] = "mailMap";
		excludeOptions2[excludeOptions2["multiLine"] = 11] = "multiLine";
		excludeOptions2[excludeOptions2["strictDate"] = 12] = "strictDate";
		return excludeOptions2;
	})(excludeOptions || {});
} });
var MergeSummaryConflict, MergeSummaryDetail;
var init_MergeSummary = __esm({ "src/lib/responses/MergeSummary.ts"() {
	"use strict";
	MergeSummaryConflict = class {
		constructor(reason, file = null, meta) {
			this.reason = reason;
			this.file = file;
			this.meta = meta;
		}
		toString() {
			return `${this.file}:${this.reason}`;
		}
	};
	MergeSummaryDetail = class {
		constructor() {
			this.conflicts = [];
			this.merges = [];
			this.result = "success";
		}
		get failed() {
			return this.conflicts.length > 0;
		}
		get reason() {
			return this.result;
		}
		toString() {
			if (this.conflicts.length) return `CONFLICTS: ${this.conflicts.join(", ")}`;
			return "OK";
		}
	};
} });
var PullSummary, PullFailedSummary;
var init_PullSummary = __esm({ "src/lib/responses/PullSummary.ts"() {
	"use strict";
	PullSummary = class {
		constructor() {
			this.remoteMessages = { all: [] };
			this.created = [];
			this.deleted = [];
			this.files = [];
			this.deletions = {};
			this.insertions = {};
			this.summary = {
				changes: 0,
				deletions: 0,
				insertions: 0
			};
		}
	};
	PullFailedSummary = class {
		constructor() {
			this.remote = "";
			this.hash = {
				local: "",
				remote: ""
			};
			this.branch = {
				local: "",
				remote: ""
			};
			this.message = "";
		}
		toString() {
			return this.message;
		}
	};
} });
function objectEnumerationResult(remoteMessages) {
	return remoteMessages.objects = remoteMessages.objects || {
		compressing: 0,
		counting: 0,
		enumerating: 0,
		packReused: 0,
		reused: {
			count: 0,
			delta: 0
		},
		total: {
			count: 0,
			delta: 0
		}
	};
}
function asObjectCount(source) {
	const count = /^\s*(\d+)/.exec(source);
	const delta = /delta (\d+)/i.exec(source);
	return {
		count: asNumber(count && count[1] || "0"),
		delta: asNumber(delta && delta[1] || "0")
	};
}
var remoteMessagesObjectParsers;
var init_parse_remote_objects = __esm({ "src/lib/parsers/parse-remote-objects.ts"() {
	"use strict";
	init_utils();
	remoteMessagesObjectParsers = [
		new RemoteLineParser(/^remote:\s*(enumerating|counting|compressing) objects: (\d+),/i, (result, [action, count]) => {
			const key = action.toLowerCase();
			const enumeration = objectEnumerationResult(result.remoteMessages);
			Object.assign(enumeration, { [key]: asNumber(count) });
		}),
		new RemoteLineParser(/^remote:\s*(enumerating|counting|compressing) objects: \d+% \(\d+\/(\d+)\),/i, (result, [action, count]) => {
			const key = action.toLowerCase();
			const enumeration = objectEnumerationResult(result.remoteMessages);
			Object.assign(enumeration, { [key]: asNumber(count) });
		}),
		new RemoteLineParser(/total ([^,]+), reused ([^,]+), pack-reused (\d+)/i, (result, [total, reused, packReused]) => {
			const objects = objectEnumerationResult(result.remoteMessages);
			objects.total = asObjectCount(total);
			objects.reused = asObjectCount(reused);
			objects.packReused = asNumber(packReused);
		})
	];
} });
function parseRemoteMessages(_stdOut, stdErr) {
	return parseStringResponse({ remoteMessages: new RemoteMessageSummary() }, parsers2, stdErr);
}
var parsers2, RemoteMessageSummary;
var init_parse_remote_messages = __esm({ "src/lib/parsers/parse-remote-messages.ts"() {
	"use strict";
	init_utils();
	init_parse_remote_objects();
	parsers2 = [
		new RemoteLineParser(/^remote:\s*(.+)$/, (result, [text]) => {
			result.remoteMessages.all.push(text.trim());
			return false;
		}),
		...remoteMessagesObjectParsers,
		new RemoteLineParser([/create a (?:pull|merge) request/i, /\s(https?:\/\/\S+)$/], (result, [pullRequestUrl]) => {
			result.remoteMessages.pullRequestUrl = pullRequestUrl;
		}),
		new RemoteLineParser([/found (\d+) vulnerabilities.+\(([^)]+)\)/i, /\s(https?:\/\/\S+)$/], (result, [count, summary, url]) => {
			result.remoteMessages.vulnerabilities = {
				count: asNumber(count),
				summary,
				url
			};
		})
	];
	RemoteMessageSummary = class {
		constructor() {
			this.all = [];
		}
	};
} });
function parsePullErrorResult(stdOut, stdErr) {
	const pullError = parseStringResponse(new PullFailedSummary(), errorParsers, [stdOut, stdErr]);
	return pullError.message && pullError;
}
var FILE_UPDATE_REGEX, SUMMARY_REGEX, ACTION_REGEX, parsers3, errorParsers, parsePullDetail, parsePullResult;
var init_parse_pull = __esm({ "src/lib/parsers/parse-pull.ts"() {
	"use strict";
	init_PullSummary();
	init_utils();
	init_parse_remote_messages();
	FILE_UPDATE_REGEX = /^\s*(.+?)\s+\|\s+\d+\s*(\+*)(-*)/;
	SUMMARY_REGEX = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(-\))?/;
	ACTION_REGEX = /^(create|delete) mode \d+ (.+)/;
	parsers3 = [
		new LineParser(FILE_UPDATE_REGEX, (result, [file, insertions, deletions]) => {
			result.files.push(file);
			if (insertions) result.insertions[file] = insertions.length;
			if (deletions) result.deletions[file] = deletions.length;
		}),
		new LineParser(SUMMARY_REGEX, (result, [changes, , insertions, , deletions]) => {
			if (insertions !== void 0 || deletions !== void 0) {
				result.summary.changes = +changes || 0;
				result.summary.insertions = +insertions || 0;
				result.summary.deletions = +deletions || 0;
				return true;
			}
			return false;
		}),
		new LineParser(ACTION_REGEX, (result, [action, file]) => {
			append(result.files, file);
			append(action === "create" ? result.created : result.deleted, file);
		})
	];
	errorParsers = [
		new LineParser(/^from\s(.+)$/i, (result, [remote]) => void (result.remote = remote)),
		new LineParser(/^fatal:\s(.+)$/, (result, [message]) => void (result.message = message)),
		new LineParser(/([a-z0-9]+)\.\.([a-z0-9]+)\s+(\S+)\s+->\s+(\S+)$/, (result, [hashLocal, hashRemote, branchLocal, branchRemote]) => {
			result.branch.local = branchLocal;
			result.hash.local = hashLocal;
			result.branch.remote = branchRemote;
			result.hash.remote = hashRemote;
		})
	];
	parsePullDetail = (stdOut, stdErr) => {
		return parseStringResponse(new PullSummary(), parsers3, [stdOut, stdErr]);
	};
	parsePullResult = (stdOut, stdErr) => {
		return Object.assign(new PullSummary(), parsePullDetail(stdOut, stdErr), parseRemoteMessages(stdOut, stdErr));
	};
} });
var parsers4, parseMergeResult, parseMergeDetail;
var init_parse_merge = __esm({ "src/lib/parsers/parse-merge.ts"() {
	"use strict";
	init_MergeSummary();
	init_utils();
	init_parse_pull();
	parsers4 = [
		new LineParser(/^Auto-merging\s+(.+)$/, (summary, [autoMerge]) => {
			summary.merges.push(autoMerge);
		}),
		new LineParser(/^CONFLICT\s+\((.+)\): Merge conflict in (.+)$/, (summary, [reason, file]) => {
			summary.conflicts.push(new MergeSummaryConflict(reason, file));
		}),
		new LineParser(/^CONFLICT\s+\((.+\/delete)\): (.+) deleted in (.+) and/, (summary, [reason, file, deleteRef]) => {
			summary.conflicts.push(new MergeSummaryConflict(reason, file, { deleteRef }));
		}),
		new LineParser(/^CONFLICT\s+\((.+)\):/, (summary, [reason]) => {
			summary.conflicts.push(new MergeSummaryConflict(reason, null));
		}),
		new LineParser(/^Automatic merge failed;\s+(.+)$/, (summary, [result]) => {
			summary.result = result;
		})
	];
	parseMergeResult = (stdOut, stdErr) => {
		return Object.assign(parseMergeDetail(stdOut, stdErr), parsePullResult(stdOut, stdErr));
	};
	parseMergeDetail = (stdOut) => {
		return parseStringResponse(new MergeSummaryDetail(), parsers4, stdOut);
	};
} });
function mergeTask(customArgs) {
	if (!customArgs.length) return configurationErrorTask("Git.merge requires at least one option");
	return {
		commands: ["merge", ...customArgs],
		format: "utf-8",
		parser(stdOut, stdErr) {
			const merge = parseMergeResult(stdOut, stdErr);
			if (merge.failed) throw new GitResponseError(merge);
			return merge;
		}
	};
}
var init_merge = __esm({ "src/lib/tasks/merge.ts"() {
	"use strict";
	init_git_response_error();
	init_parse_merge();
	init_task();
} });
function pushResultPushedItem(local, remote, status) {
	const deleted = status.includes("deleted");
	const tag = status.includes("tag") || /^refs\/tags/.test(local);
	const alreadyUpdated = !status.includes("new");
	return {
		deleted,
		tag,
		branch: !tag,
		new: !alreadyUpdated,
		alreadyUpdated,
		local,
		remote
	};
}
var parsers5, parsePushResult, parsePushDetail;
var init_parse_push = __esm({ "src/lib/parsers/parse-push.ts"() {
	"use strict";
	init_utils();
	init_parse_remote_messages();
	parsers5 = [
		new LineParser(/^Pushing to (.+)$/, (result, [repo]) => {
			result.repo = repo;
		}),
		new LineParser(/^updating local tracking ref '(.+)'/, (result, [local]) => {
			result.ref = {
				...result.ref || {},
				local
			};
		}),
		new LineParser(/^[=*-]\s+([^:]+):(\S+)\s+\[(.+)]$/, (result, [local, remote, type]) => {
			result.pushed.push(pushResultPushedItem(local, remote, type));
		}),
		new LineParser(/^Branch '([^']+)' set up to track remote branch '([^']+)' from '([^']+)'/, (result, [local, remote, remoteName]) => {
			result.branch = {
				...result.branch || {},
				local,
				remote,
				remoteName
			};
		}),
		new LineParser(/^([^:]+):(\S+)\s+([a-z0-9]+)\.\.([a-z0-9]+)$/, (result, [local, remote, from, to]) => {
			result.update = {
				head: {
					local,
					remote
				},
				hash: {
					from,
					to
				}
			};
		})
	];
	parsePushResult = (stdOut, stdErr) => {
		const pushDetail = parsePushDetail(stdOut, stdErr);
		const responseDetail = parseRemoteMessages(stdOut, stdErr);
		return {
			...pushDetail,
			...responseDetail
		};
	};
	parsePushDetail = (stdOut, stdErr) => {
		return parseStringResponse({ pushed: [] }, parsers5, [stdOut, stdErr]);
	};
} });
var push_exports = {};
__export(push_exports, {
	pushTagsTask: () => pushTagsTask,
	pushTask: () => pushTask
});
function pushTagsTask(ref = {}, customArgs) {
	append(customArgs, "--tags");
	return pushTask(ref, customArgs);
}
function pushTask(ref = {}, customArgs) {
	const commands = ["push", ...customArgs];
	if (ref.branch) commands.splice(1, 0, ref.branch);
	if (ref.remote) commands.splice(1, 0, ref.remote);
	remove(commands, "-v");
	append(commands, "--verbose");
	append(commands, "--porcelain");
	return {
		commands,
		format: "utf-8",
		parser: parsePushResult
	};
}
var init_push = __esm({ "src/lib/tasks/push.ts"() {
	"use strict";
	init_parse_push();
	init_utils();
} });
function show_default() {
	return {
		showBuffer() {
			const commands = ["show", ...getTrailingOptions(arguments, 1)];
			if (!commands.includes("--binary")) commands.splice(1, 0, "--binary");
			return this._runTask(straightThroughBufferTask(commands), trailingFunctionArgument(arguments));
		},
		show() {
			const commands = ["show", ...getTrailingOptions(arguments, 1)];
			return this._runTask(straightThroughStringTask(commands), trailingFunctionArgument(arguments));
		}
	};
}
var init_show = __esm({ "src/lib/tasks/show.ts"() {
	"use strict";
	init_utils();
	init_task();
} });
var fromPathRegex, FileStatusSummary;
var init_FileStatusSummary = __esm({ "src/lib/responses/FileStatusSummary.ts"() {
	"use strict";
	fromPathRegex = /^(.+)\0(.+)$/;
	FileStatusSummary = class {
		constructor(path$2, index, working_dir) {
			this.path = path$2;
			this.index = index;
			this.working_dir = working_dir;
			if (index === "R" || working_dir === "R") {
				const detail = fromPathRegex.exec(path$2) || [
					null,
					path$2,
					path$2
				];
				this.from = detail[2] || "";
				this.path = detail[1] || "";
			}
		}
	};
} });
function renamedFile(line) {
	const [to, from] = line.split(NULL);
	return {
		from: from || to,
		to
	};
}
function parser3(indexX, indexY, handler) {
	return [`${indexX}${indexY}`, handler];
}
function conflicts(indexX, ...indexY) {
	return indexY.map((y$1) => parser3(indexX, y$1, (result, file) => append(result.conflicted, file)));
}
function splitLine(result, lineStr) {
	const trimmed2 = lineStr.trim();
	switch (" ") {
		case trimmed2.charAt(2): return data(trimmed2.charAt(0), trimmed2.charAt(1), trimmed2.substr(3));
		case trimmed2.charAt(1): return data(" ", trimmed2.charAt(0), trimmed2.substr(2));
		default: return;
	}
	function data(index, workingDir, path$2) {
		const raw = `${index}${workingDir}`;
		const handler = parsers6.get(raw);
		if (handler) handler(result, path$2);
		if (raw !== "##" && raw !== "!!") result.files.push(new FileStatusSummary(path$2, index, workingDir));
	}
}
var StatusSummary, parsers6, parseStatusSummary;
var init_StatusSummary = __esm({ "src/lib/responses/StatusSummary.ts"() {
	"use strict";
	init_utils();
	init_FileStatusSummary();
	StatusSummary = class {
		constructor() {
			this.not_added = [];
			this.conflicted = [];
			this.created = [];
			this.deleted = [];
			this.ignored = void 0;
			this.modified = [];
			this.renamed = [];
			this.files = [];
			this.staged = [];
			this.ahead = 0;
			this.behind = 0;
			this.current = null;
			this.tracking = null;
			this.detached = false;
			this.isClean = () => {
				return !this.files.length;
			};
		}
	};
	parsers6 = new Map([
		parser3(" ", "A", (result, file) => append(result.created, file)),
		parser3(" ", "D", (result, file) => append(result.deleted, file)),
		parser3(" ", "M", (result, file) => append(result.modified, file)),
		parser3("A", " ", (result, file) => append(result.created, file) && append(result.staged, file)),
		parser3("A", "M", (result, file) => append(result.created, file) && append(result.staged, file) && append(result.modified, file)),
		parser3("D", " ", (result, file) => append(result.deleted, file) && append(result.staged, file)),
		parser3("M", " ", (result, file) => append(result.modified, file) && append(result.staged, file)),
		parser3("M", "M", (result, file) => append(result.modified, file) && append(result.staged, file)),
		parser3("R", " ", (result, file) => {
			append(result.renamed, renamedFile(file));
		}),
		parser3("R", "M", (result, file) => {
			const renamed = renamedFile(file);
			append(result.renamed, renamed);
			append(result.modified, renamed.to);
		}),
		parser3("!", "!", (_result, _file) => {
			append(_result.ignored = _result.ignored || [], _file);
		}),
		parser3("?", "?", (result, file) => append(result.not_added, file)),
		...conflicts("A", "A", "U"),
		...conflicts("D", "D", "U"),
		...conflicts("U", "A", "D", "U"),
		["##", (result, line) => {
			const aheadReg = /ahead (\d+)/;
			const behindReg = /behind (\d+)/;
			const currentReg = /^(.+?(?=(?:\.{3}|\s|$)))/;
			const trackingReg = /\.{3}(\S*)/;
			const onEmptyBranchReg = /\son\s([\S]+)$/;
			let regexResult;
			regexResult = aheadReg.exec(line);
			result.ahead = regexResult && +regexResult[1] || 0;
			regexResult = behindReg.exec(line);
			result.behind = regexResult && +regexResult[1] || 0;
			regexResult = currentReg.exec(line);
			result.current = regexResult && regexResult[1];
			regexResult = trackingReg.exec(line);
			result.tracking = regexResult && regexResult[1];
			regexResult = onEmptyBranchReg.exec(line);
			result.current = regexResult && regexResult[1] || result.current;
			result.detached = /\(no branch\)/.test(line);
		}]
	]);
	parseStatusSummary = function(text) {
		const lines = text.split(NULL);
		const status = new StatusSummary();
		for (let i = 0, l = lines.length; i < l;) {
			let line = lines[i++].trim();
			if (!line) continue;
			if (line.charAt(0) === "R") line += NULL + (lines[i++] || "");
			splitLine(status, line);
		}
		return status;
	};
} });
function statusTask(customArgs) {
	const commands = [
		"status",
		"--porcelain",
		"-b",
		"-u",
		"--null",
		...customArgs.filter((arg) => !ignoredOptions.includes(arg))
	];
	return {
		format: "utf-8",
		commands,
		parser(text) {
			return parseStatusSummary(text);
		}
	};
}
var ignoredOptions;
var init_status = __esm({ "src/lib/tasks/status.ts"() {
	"use strict";
	init_StatusSummary();
	ignoredOptions = ["--null", "-z"];
} });
function versionResponse(major = 0, minor = 0, patch = 0, agent = "", installed = true) {
	return Object.defineProperty({
		major,
		minor,
		patch,
		agent,
		installed
	}, "toString", {
		value() {
			return `${this.major}.${this.minor}.${this.patch}`;
		},
		configurable: false,
		enumerable: false
	});
}
function notInstalledResponse() {
	return versionResponse(0, 0, 0, "", false);
}
function version_default() {
	return { version() {
		return this._runTask({
			commands: ["--version"],
			format: "utf-8",
			parser: versionParser,
			onError(result, error, done, fail) {
				if (result.exitCode === -2) return done(Buffer.from(NOT_INSTALLED));
				fail(error);
			}
		});
	} };
}
function versionParser(stdOut) {
	if (stdOut === NOT_INSTALLED) return notInstalledResponse();
	return parseStringResponse(versionResponse(0, 0, 0, stdOut), parsers7, stdOut);
}
var NOT_INSTALLED, parsers7;
var init_version = __esm({ "src/lib/tasks/version.ts"() {
	"use strict";
	init_utils();
	NOT_INSTALLED = "installed=false";
	parsers7 = [new LineParser(/version (\d+)\.(\d+)\.(\d+)(?:\s*\((.+)\))?/, (result, [major, minor, patch, agent = ""]) => {
		Object.assign(result, versionResponse(asNumber(major), asNumber(minor), asNumber(patch), agent));
	}), new LineParser(/version (\d+)\.(\d+)\.(\D+)(.+)?$/, (result, [major, minor, patch, agent = ""]) => {
		Object.assign(result, versionResponse(asNumber(major), asNumber(minor), patch, agent));
	})];
} });
var simple_git_api_exports = {};
__export(simple_git_api_exports, { SimpleGitApi: () => SimpleGitApi });
var SimpleGitApi;
var init_simple_git_api = __esm({ "src/lib/simple-git-api.ts"() {
	"use strict";
	init_task_callback();
	init_change_working_directory();
	init_checkout();
	init_count_objects();
	init_commit();
	init_config();
	init_first_commit();
	init_grep();
	init_hash_object();
	init_init();
	init_log();
	init_merge();
	init_push();
	init_show();
	init_status();
	init_task();
	init_version();
	init_utils();
	SimpleGitApi = class {
		constructor(_executor) {
			this._executor = _executor;
		}
		_runTask(task, then) {
			const chain = this._executor.chain();
			const promise = chain.push(task);
			if (then) taskCallback(task, promise, then);
			return Object.create(this, {
				then: { value: promise.then.bind(promise) },
				catch: { value: promise.catch.bind(promise) },
				_executor: { value: chain }
			});
		}
		add(files) {
			return this._runTask(straightThroughStringTask(["add", ...asArray(files)]), trailingFunctionArgument(arguments));
		}
		cwd(directory) {
			const next = trailingFunctionArgument(arguments);
			if (typeof directory === "string") return this._runTask(changeWorkingDirectoryTask(directory, this._executor), next);
			if (typeof directory?.path === "string") return this._runTask(changeWorkingDirectoryTask(directory.path, directory.root && this._executor || void 0), next);
			return this._runTask(configurationErrorTask("Git.cwd: workingDirectory must be supplied as a string"), next);
		}
		hashObject(path$2, write) {
			return this._runTask(hashObjectTask(path$2, write === true), trailingFunctionArgument(arguments));
		}
		init(bare) {
			return this._runTask(initTask(bare === true, this._executor.cwd, getTrailingOptions(arguments)), trailingFunctionArgument(arguments));
		}
		merge() {
			return this._runTask(mergeTask(getTrailingOptions(arguments)), trailingFunctionArgument(arguments));
		}
		mergeFromTo(remote, branch) {
			if (!(filterString(remote) && filterString(branch))) return this._runTask(configurationErrorTask(`Git.mergeFromTo requires that the 'remote' and 'branch' arguments are supplied as strings`));
			return this._runTask(mergeTask([
				remote,
				branch,
				...getTrailingOptions(arguments)
			]), trailingFunctionArgument(arguments, false));
		}
		outputHandler(handler) {
			this._executor.outputHandler = handler;
			return this;
		}
		push() {
			const task = pushTask({
				remote: filterType(arguments[0], filterString),
				branch: filterType(arguments[1], filterString)
			}, getTrailingOptions(arguments));
			return this._runTask(task, trailingFunctionArgument(arguments));
		}
		stash() {
			return this._runTask(straightThroughStringTask(["stash", ...getTrailingOptions(arguments)]), trailingFunctionArgument(arguments));
		}
		status() {
			return this._runTask(statusTask(getTrailingOptions(arguments)), trailingFunctionArgument(arguments));
		}
	};
	Object.assign(SimpleGitApi.prototype, checkout_default(), commit_default(), config_default(), count_objects_default(), first_commit_default(), grep_default(), log_default(), show_default(), version_default());
} });
var scheduler_exports = {};
__export(scheduler_exports, { Scheduler: () => Scheduler });
var createScheduledTask, Scheduler;
var init_scheduler = __esm({ "src/lib/runners/scheduler.ts"() {
	"use strict";
	init_utils();
	init_git_logger();
	createScheduledTask = /* @__PURE__ */ (() => {
		let id = 0;
		return () => {
			id++;
			const { promise, done } = (0, import_dist$1.createDeferred)();
			return {
				promise,
				done,
				id
			};
		};
	})();
	Scheduler = class {
		constructor(concurrency = 2) {
			this.concurrency = concurrency;
			this.logger = createLogger("", "scheduler");
			this.pending = [];
			this.running = [];
			this.logger(`Constructed, concurrency=%s`, concurrency);
		}
		schedule() {
			if (!this.pending.length || this.running.length >= this.concurrency) {
				this.logger(`Schedule attempt ignored, pending=%s running=%s concurrency=%s`, this.pending.length, this.running.length, this.concurrency);
				return;
			}
			const task = append(this.running, this.pending.shift());
			this.logger(`Attempting id=%s`, task.id);
			task.done(() => {
				this.logger(`Completing id=`, task.id);
				remove(this.running, task);
				this.schedule();
			});
		}
		next() {
			const { promise, id } = append(this.pending, createScheduledTask());
			this.logger(`Scheduling id=%s`, id);
			this.schedule();
			return promise;
		}
	};
} });
var apply_patch_exports = {};
__export(apply_patch_exports, { applyPatchTask: () => applyPatchTask });
function applyPatchTask(patches, customArgs) {
	return straightThroughStringTask([
		"apply",
		...customArgs,
		...patches
	]);
}
var init_apply_patch = __esm({ "src/lib/tasks/apply-patch.ts"() {
	"use strict";
	init_task();
} });
function branchDeletionSuccess(branch, hash) {
	return {
		branch,
		hash,
		success: true
	};
}
function branchDeletionFailure(branch) {
	return {
		branch,
		hash: null,
		success: false
	};
}
var BranchDeletionBatch;
var init_BranchDeleteSummary = __esm({ "src/lib/responses/BranchDeleteSummary.ts"() {
	"use strict";
	BranchDeletionBatch = class {
		constructor() {
			this.all = [];
			this.branches = {};
			this.errors = [];
		}
		get success() {
			return !this.errors.length;
		}
	};
} });
function hasBranchDeletionError(data, processExitCode) {
	return processExitCode === 1 && deleteErrorRegex.test(data);
}
var deleteSuccessRegex, deleteErrorRegex, parsers8, parseBranchDeletions;
var init_parse_branch_delete = __esm({ "src/lib/parsers/parse-branch-delete.ts"() {
	"use strict";
	init_BranchDeleteSummary();
	init_utils();
	deleteSuccessRegex = /(\S+)\s+\(\S+\s([^)]+)\)/;
	deleteErrorRegex = /^error[^']+'([^']+)'/m;
	parsers8 = [new LineParser(deleteSuccessRegex, (result, [branch, hash]) => {
		const deletion = branchDeletionSuccess(branch, hash);
		result.all.push(deletion);
		result.branches[branch] = deletion;
	}), new LineParser(deleteErrorRegex, (result, [branch]) => {
		const deletion = branchDeletionFailure(branch);
		result.errors.push(deletion);
		result.all.push(deletion);
		result.branches[branch] = deletion;
	})];
	parseBranchDeletions = (stdOut, stdErr) => {
		return parseStringResponse(new BranchDeletionBatch(), parsers8, [stdOut, stdErr]);
	};
} });
var BranchSummaryResult;
var init_BranchSummary = __esm({ "src/lib/responses/BranchSummary.ts"() {
	"use strict";
	BranchSummaryResult = class {
		constructor() {
			this.all = [];
			this.branches = {};
			this.current = "";
			this.detached = false;
		}
		push(status, detached, name, commit, label) {
			if (status === "*") {
				this.detached = detached;
				this.current = name;
			}
			this.all.push(name);
			this.branches[name] = {
				current: status === "*",
				linkedWorkTree: status === "+",
				name,
				commit,
				label
			};
		}
	};
} });
function branchStatus(input) {
	return input ? input.charAt(0) : "";
}
function parseBranchSummary(stdOut) {
	return parseStringResponse(new BranchSummaryResult(), parsers9, stdOut);
}
var parsers9;
var init_parse_branch = __esm({ "src/lib/parsers/parse-branch.ts"() {
	"use strict";
	init_BranchSummary();
	init_utils();
	parsers9 = [new LineParser(/^([*+]\s)?\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/, (result, [current, name, commit, label]) => {
		result.push(branchStatus(current), true, name, commit, label);
	}), new LineParser(/^([*+]\s)?(\S+)\s+([a-z0-9]+)\s?(.*)$/s, (result, [current, name, commit, label]) => {
		result.push(branchStatus(current), false, name, commit, label);
	})];
} });
var branch_exports = {};
__export(branch_exports, {
	branchLocalTask: () => branchLocalTask,
	branchTask: () => branchTask,
	containsDeleteBranchCommand: () => containsDeleteBranchCommand,
	deleteBranchTask: () => deleteBranchTask,
	deleteBranchesTask: () => deleteBranchesTask
});
function containsDeleteBranchCommand(commands) {
	const deleteCommands = [
		"-d",
		"-D",
		"--delete"
	];
	return commands.some((command) => deleteCommands.includes(command));
}
function branchTask(customArgs) {
	const isDelete = containsDeleteBranchCommand(customArgs);
	const commands = ["branch", ...customArgs];
	if (commands.length === 1) commands.push("-a");
	if (!commands.includes("-v")) commands.splice(1, 0, "-v");
	return {
		format: "utf-8",
		commands,
		parser(stdOut, stdErr) {
			if (isDelete) return parseBranchDeletions(stdOut, stdErr).all[0];
			return parseBranchSummary(stdOut);
		}
	};
}
function branchLocalTask() {
	const parser4 = parseBranchSummary;
	return {
		format: "utf-8",
		commands: ["branch", "-v"],
		parser: parser4
	};
}
function deleteBranchesTask(branches, forceDelete = false) {
	return {
		format: "utf-8",
		commands: [
			"branch",
			"-v",
			forceDelete ? "-D" : "-d",
			...branches
		],
		parser(stdOut, stdErr) {
			return parseBranchDeletions(stdOut, stdErr);
		},
		onError({ exitCode, stdOut }, error, done, fail) {
			if (!hasBranchDeletionError(String(error), exitCode)) return fail(error);
			done(stdOut);
		}
	};
}
function deleteBranchTask(branch, forceDelete = false) {
	const task = {
		format: "utf-8",
		commands: [
			"branch",
			"-v",
			forceDelete ? "-D" : "-d",
			branch
		],
		parser(stdOut, stdErr) {
			return parseBranchDeletions(stdOut, stdErr).branches[branch];
		},
		onError({ exitCode, stdErr, stdOut }, error, _, fail) {
			if (!hasBranchDeletionError(String(error), exitCode)) return fail(error);
			throw new GitResponseError(task.parser(bufferToString(stdOut), bufferToString(stdErr)), String(error));
		}
	};
	return task;
}
var init_branch = __esm({ "src/lib/tasks/branch.ts"() {
	"use strict";
	init_git_response_error();
	init_parse_branch_delete();
	init_parse_branch();
	init_utils();
} });
var parseCheckIgnore;
var init_CheckIgnore = __esm({ "src/lib/responses/CheckIgnore.ts"() {
	"use strict";
	parseCheckIgnore = (text) => {
		return text.split(/\n/g).map((line) => line.trim()).filter((file) => !!file);
	};
} });
var check_ignore_exports = {};
__export(check_ignore_exports, { checkIgnoreTask: () => checkIgnoreTask });
function checkIgnoreTask(paths) {
	return {
		commands: ["check-ignore", ...paths],
		format: "utf-8",
		parser: parseCheckIgnore
	};
}
var init_check_ignore = __esm({ "src/lib/tasks/check-ignore.ts"() {
	"use strict";
	init_CheckIgnore();
} });
var clone_exports = {};
__export(clone_exports, {
	cloneMirrorTask: () => cloneMirrorTask,
	cloneTask: () => cloneTask
});
function disallowedCommand(command) {
	return /^--upload-pack(=|$)/.test(command);
}
function cloneTask(repo, directory, customArgs) {
	const commands = ["clone", ...customArgs];
	filterString(repo) && commands.push(repo);
	filterString(directory) && commands.push(directory);
	const banned = commands.find(disallowedCommand);
	if (banned) return configurationErrorTask(`git.fetch: potential exploit argument blocked.`);
	return straightThroughStringTask(commands);
}
function cloneMirrorTask(repo, directory, customArgs) {
	append(customArgs, "--mirror");
	return cloneTask(repo, directory, customArgs);
}
var init_clone = __esm({ "src/lib/tasks/clone.ts"() {
	"use strict";
	init_task();
	init_utils();
} });
function parseFetchResult(stdOut, stdErr) {
	const result = {
		raw: stdOut,
		remote: null,
		branches: [],
		tags: [],
		updated: [],
		deleted: []
	};
	return parseStringResponse(result, parsers10, [stdOut, stdErr]);
}
var parsers10;
var init_parse_fetch = __esm({ "src/lib/parsers/parse-fetch.ts"() {
	"use strict";
	init_utils();
	parsers10 = [
		new LineParser(/From (.+)$/, (result, [remote]) => {
			result.remote = remote;
		}),
		new LineParser(/\* \[new branch]\s+(\S+)\s*-> (.+)$/, (result, [name, tracking]) => {
			result.branches.push({
				name,
				tracking
			});
		}),
		new LineParser(/\* \[new tag]\s+(\S+)\s*-> (.+)$/, (result, [name, tracking]) => {
			result.tags.push({
				name,
				tracking
			});
		}),
		new LineParser(/- \[deleted]\s+\S+\s*-> (.+)$/, (result, [tracking]) => {
			result.deleted.push({ tracking });
		}),
		new LineParser(/\s*([^.]+)\.\.(\S+)\s+(\S+)\s*-> (.+)$/, (result, [from, to, name, tracking]) => {
			result.updated.push({
				name,
				tracking,
				to,
				from
			});
		})
	];
} });
var fetch_exports = {};
__export(fetch_exports, { fetchTask: () => fetchTask });
function disallowedCommand2(command) {
	return /^--upload-pack(=|$)/.test(command);
}
function fetchTask(remote, branch, customArgs) {
	const commands = ["fetch", ...customArgs];
	if (remote && branch) commands.push(remote, branch);
	const banned = commands.find(disallowedCommand2);
	if (banned) return configurationErrorTask(`git.fetch: potential exploit argument blocked.`);
	return {
		commands,
		format: "utf-8",
		parser: parseFetchResult
	};
}
var init_fetch = __esm({ "src/lib/tasks/fetch.ts"() {
	"use strict";
	init_parse_fetch();
	init_task();
} });
function parseMoveResult(stdOut) {
	return parseStringResponse({ moves: [] }, parsers11, stdOut);
}
var parsers11;
var init_parse_move = __esm({ "src/lib/parsers/parse-move.ts"() {
	"use strict";
	init_utils();
	parsers11 = [new LineParser(/^Renaming (.+) to (.+)$/, (result, [from, to]) => {
		result.moves.push({
			from,
			to
		});
	})];
} });
var move_exports = {};
__export(move_exports, { moveTask: () => moveTask });
function moveTask(from, to) {
	return {
		commands: [
			"mv",
			"-v",
			...asArray(from),
			to
		],
		format: "utf-8",
		parser: parseMoveResult
	};
}
var init_move = __esm({ "src/lib/tasks/move.ts"() {
	"use strict";
	init_parse_move();
	init_utils();
} });
var pull_exports = {};
__export(pull_exports, { pullTask: () => pullTask });
function pullTask(remote, branch, customArgs) {
	const commands = ["pull", ...customArgs];
	if (remote && branch) commands.splice(1, 0, remote, branch);
	return {
		commands,
		format: "utf-8",
		parser(stdOut, stdErr) {
			return parsePullResult(stdOut, stdErr);
		},
		onError(result, _error, _done, fail) {
			const pullError = parsePullErrorResult(bufferToString(result.stdOut), bufferToString(result.stdErr));
			if (pullError) return fail(new GitResponseError(pullError));
			fail(_error);
		}
	};
}
var init_pull = __esm({ "src/lib/tasks/pull.ts"() {
	"use strict";
	init_git_response_error();
	init_parse_pull();
	init_utils();
} });
function parseGetRemotes(text) {
	const remotes = {};
	forEach(text, ([name]) => remotes[name] = { name });
	return Object.values(remotes);
}
function parseGetRemotesVerbose(text) {
	const remotes = {};
	forEach(text, ([name, url, purpose]) => {
		if (!remotes.hasOwnProperty(name)) remotes[name] = {
			name,
			refs: {
				fetch: "",
				push: ""
			}
		};
		if (purpose && url) remotes[name].refs[purpose.replace(/[^a-z]/g, "")] = url;
	});
	return Object.values(remotes);
}
function forEach(text, handler) {
	forEachLineWithContent(text, (line) => handler(line.split(/\s+/)));
}
var init_GetRemoteSummary = __esm({ "src/lib/responses/GetRemoteSummary.ts"() {
	"use strict";
	init_utils();
} });
var remote_exports = {};
__export(remote_exports, {
	addRemoteTask: () => addRemoteTask,
	getRemotesTask: () => getRemotesTask,
	listRemotesTask: () => listRemotesTask,
	remoteTask: () => remoteTask,
	removeRemoteTask: () => removeRemoteTask
});
function addRemoteTask(remoteName, remoteRepo, customArgs) {
	return straightThroughStringTask([
		"remote",
		"add",
		...customArgs,
		remoteName,
		remoteRepo
	]);
}
function getRemotesTask(verbose) {
	const commands = ["remote"];
	if (verbose) commands.push("-v");
	return {
		commands,
		format: "utf-8",
		parser: verbose ? parseGetRemotesVerbose : parseGetRemotes
	};
}
function listRemotesTask(customArgs) {
	const commands = [...customArgs];
	if (commands[0] !== "ls-remote") commands.unshift("ls-remote");
	return straightThroughStringTask(commands);
}
function remoteTask(customArgs) {
	const commands = [...customArgs];
	if (commands[0] !== "remote") commands.unshift("remote");
	return straightThroughStringTask(commands);
}
function removeRemoteTask(remoteName) {
	return straightThroughStringTask([
		"remote",
		"remove",
		remoteName
	]);
}
var init_remote = __esm({ "src/lib/tasks/remote.ts"() {
	"use strict";
	init_GetRemoteSummary();
	init_task();
} });
var stash_list_exports = {};
__export(stash_list_exports, { stashListTask: () => stashListTask });
function stashListTask(opt = {}, customArgs) {
	const options = parseLogOptions(opt);
	const commands = [
		"stash",
		"list",
		...options.commands,
		...customArgs
	];
	const parser4 = createListLogSummaryParser(options.splitter, options.fields, logFormatFromCommand(commands));
	return validateLogFormatConfig(commands) || {
		commands,
		format: "utf-8",
		parser: parser4
	};
}
var init_stash_list = __esm({ "src/lib/tasks/stash-list.ts"() {
	"use strict";
	init_log_format();
	init_parse_list_log_summary();
	init_diff();
	init_log();
} });
var sub_module_exports = {};
__export(sub_module_exports, {
	addSubModuleTask: () => addSubModuleTask,
	initSubModuleTask: () => initSubModuleTask,
	subModuleTask: () => subModuleTask,
	updateSubModuleTask: () => updateSubModuleTask
});
function addSubModuleTask(repo, path$2) {
	return subModuleTask([
		"add",
		repo,
		path$2
	]);
}
function initSubModuleTask(customArgs) {
	return subModuleTask(["init", ...customArgs]);
}
function subModuleTask(customArgs) {
	const commands = [...customArgs];
	if (commands[0] !== "submodule") commands.unshift("submodule");
	return straightThroughStringTask(commands);
}
function updateSubModuleTask(customArgs) {
	return subModuleTask(["update", ...customArgs]);
}
var init_sub_module = __esm({ "src/lib/tasks/sub-module.ts"() {
	"use strict";
	init_task();
} });
function singleSorted(a, b) {
	const aIsNum = isNaN(a);
	const bIsNum = isNaN(b);
	if (aIsNum !== bIsNum) return aIsNum ? 1 : -1;
	return aIsNum ? sorted(a, b) : 0;
}
function sorted(a, b) {
	return a === b ? 0 : a > b ? 1 : -1;
}
function trimmed(input) {
	return input.trim();
}
function toNumber(input) {
	if (typeof input === "string") return parseInt(input.replace(/^\D+/g, ""), 10) || 0;
	return 0;
}
var TagList, parseTagList;
var init_TagList = __esm({ "src/lib/responses/TagList.ts"() {
	"use strict";
	TagList = class {
		constructor(all, latest) {
			this.all = all;
			this.latest = latest;
		}
	};
	parseTagList = function(data, customSort = false) {
		const tags = data.split("\n").map(trimmed).filter(Boolean);
		if (!customSort) tags.sort(function(tagA, tagB) {
			const partsA = tagA.split(".");
			const partsB = tagB.split(".");
			if (partsA.length === 1 || partsB.length === 1) return singleSorted(toNumber(partsA[0]), toNumber(partsB[0]));
			for (let i = 0, l = Math.max(partsA.length, partsB.length); i < l; i++) {
				const diff = sorted(toNumber(partsA[i]), toNumber(partsB[i]));
				if (diff) return diff;
			}
			return 0;
		});
		const latest = customSort ? tags[0] : [...tags].reverse().find((tag) => tag.indexOf(".") >= 0);
		return new TagList(tags, latest);
	};
} });
var tag_exports = {};
__export(tag_exports, {
	addAnnotatedTagTask: () => addAnnotatedTagTask,
	addTagTask: () => addTagTask,
	tagListTask: () => tagListTask
});
function tagListTask(customArgs = []) {
	const hasCustomSort = customArgs.some((option) => /^--sort=/.test(option));
	return {
		format: "utf-8",
		commands: [
			"tag",
			"-l",
			...customArgs
		],
		parser(text) {
			return parseTagList(text, hasCustomSort);
		}
	};
}
function addTagTask(name) {
	return {
		format: "utf-8",
		commands: ["tag", name],
		parser() {
			return { name };
		}
	};
}
function addAnnotatedTagTask(name, tagMessage) {
	return {
		format: "utf-8",
		commands: [
			"tag",
			"-a",
			"-m",
			tagMessage,
			name
		],
		parser() {
			return { name };
		}
	};
}
var init_tag = __esm({ "src/lib/tasks/tag.ts"() {
	"use strict";
	init_TagList();
} });
var require_git = __commonJS({ "src/git.js"(exports$1, module$1) {
	"use strict";
	var { GitExecutor: GitExecutor2 } = (init_git_executor(), __toCommonJS(git_executor_exports));
	var { SimpleGitApi: SimpleGitApi2 } = (init_simple_git_api(), __toCommonJS(simple_git_api_exports));
	var { Scheduler: Scheduler2 } = (init_scheduler(), __toCommonJS(scheduler_exports));
	var { configurationErrorTask: configurationErrorTask2 } = (init_task(), __toCommonJS(task_exports));
	var { asArray: asArray2, filterArray: filterArray2, filterPrimitives: filterPrimitives2, filterString: filterString2, filterStringOrStringArray: filterStringOrStringArray2, filterType: filterType2, getTrailingOptions: getTrailingOptions2, trailingFunctionArgument: trailingFunctionArgument2, trailingOptionsArgument: trailingOptionsArgument2 } = (init_utils(), __toCommonJS(utils_exports));
	var { applyPatchTask: applyPatchTask2 } = (init_apply_patch(), __toCommonJS(apply_patch_exports));
	var { branchTask: branchTask2, branchLocalTask: branchLocalTask2, deleteBranchesTask: deleteBranchesTask2, deleteBranchTask: deleteBranchTask2 } = (init_branch(), __toCommonJS(branch_exports));
	var { checkIgnoreTask: checkIgnoreTask2 } = (init_check_ignore(), __toCommonJS(check_ignore_exports));
	var { checkIsRepoTask: checkIsRepoTask2 } = (init_check_is_repo(), __toCommonJS(check_is_repo_exports));
	var { cloneTask: cloneTask2, cloneMirrorTask: cloneMirrorTask2 } = (init_clone(), __toCommonJS(clone_exports));
	var { cleanWithOptionsTask: cleanWithOptionsTask2, isCleanOptionsArray: isCleanOptionsArray2 } = (init_clean(), __toCommonJS(clean_exports));
	var { diffSummaryTask: diffSummaryTask2 } = (init_diff(), __toCommonJS(diff_exports));
	var { fetchTask: fetchTask2 } = (init_fetch(), __toCommonJS(fetch_exports));
	var { moveTask: moveTask2 } = (init_move(), __toCommonJS(move_exports));
	var { pullTask: pullTask2 } = (init_pull(), __toCommonJS(pull_exports));
	var { pushTagsTask: pushTagsTask2 } = (init_push(), __toCommonJS(push_exports));
	var { addRemoteTask: addRemoteTask2, getRemotesTask: getRemotesTask2, listRemotesTask: listRemotesTask2, remoteTask: remoteTask2, removeRemoteTask: removeRemoteTask2 } = (init_remote(), __toCommonJS(remote_exports));
	var { getResetMode: getResetMode2, resetTask: resetTask2 } = (init_reset(), __toCommonJS(reset_exports));
	var { stashListTask: stashListTask2 } = (init_stash_list(), __toCommonJS(stash_list_exports));
	var { addSubModuleTask: addSubModuleTask2, initSubModuleTask: initSubModuleTask2, subModuleTask: subModuleTask2, updateSubModuleTask: updateSubModuleTask2 } = (init_sub_module(), __toCommonJS(sub_module_exports));
	var { addAnnotatedTagTask: addAnnotatedTagTask2, addTagTask: addTagTask2, tagListTask: tagListTask2 } = (init_tag(), __toCommonJS(tag_exports));
	var { straightThroughBufferTask: straightThroughBufferTask2, straightThroughStringTask: straightThroughStringTask2 } = (init_task(), __toCommonJS(task_exports));
	function Git2(options, plugins) {
		this._plugins = plugins;
		this._executor = new GitExecutor2(options.baseDir, new Scheduler2(options.maxConcurrentProcesses), plugins);
		this._trimmed = options.trimmed;
	}
	(Git2.prototype = Object.create(SimpleGitApi2.prototype)).constructor = Git2;
	Git2.prototype.customBinary = function(command) {
		this._plugins.reconfigure("binary", command);
		return this;
	};
	Git2.prototype.env = function(name, value) {
		if (arguments.length === 1 && typeof name === "object") this._executor.env = name;
		else (this._executor.env = this._executor.env || {})[name] = value;
		return this;
	};
	Git2.prototype.stashList = function(options) {
		return this._runTask(stashListTask2(trailingOptionsArgument2(arguments) || {}, filterArray2(options) && options || []), trailingFunctionArgument2(arguments));
	};
	function createCloneTask(api, task, repoPath, localPath) {
		if (typeof repoPath !== "string") return configurationErrorTask2(`git.${api}() requires a string 'repoPath'`);
		return task(repoPath, filterType2(localPath, filterString2), getTrailingOptions2(arguments));
	}
	Git2.prototype.clone = function() {
		return this._runTask(createCloneTask("clone", cloneTask2, ...arguments), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.mirror = function() {
		return this._runTask(createCloneTask("mirror", cloneMirrorTask2, ...arguments), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.mv = function(from, to) {
		return this._runTask(moveTask2(from, to), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.checkoutLatestTag = function(then) {
		var git = this;
		return this.pull(function() {
			git.tags(function(err, tags) {
				git.checkout(tags.latest, then);
			});
		});
	};
	Git2.prototype.pull = function(remote, branch, options, then) {
		return this._runTask(pullTask2(filterType2(remote, filterString2), filterType2(branch, filterString2), getTrailingOptions2(arguments)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.fetch = function(remote, branch) {
		return this._runTask(fetchTask2(filterType2(remote, filterString2), filterType2(branch, filterString2), getTrailingOptions2(arguments)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.silent = function(silence) {
		console.warn("simple-git deprecation notice: git.silent: logging should be configured using the `debug` library / `DEBUG` environment variable, this will be an error in version 3");
		return this;
	};
	Git2.prototype.tags = function(options, then) {
		return this._runTask(tagListTask2(getTrailingOptions2(arguments)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.rebase = function() {
		return this._runTask(straightThroughStringTask2(["rebase", ...getTrailingOptions2(arguments)]), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.reset = function(mode) {
		return this._runTask(resetTask2(getResetMode2(mode), getTrailingOptions2(arguments)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.revert = function(commit) {
		const next = trailingFunctionArgument2(arguments);
		if (typeof commit !== "string") return this._runTask(configurationErrorTask2("Commit must be a string"), next);
		return this._runTask(straightThroughStringTask2([
			"revert",
			...getTrailingOptions2(arguments, 0, true),
			commit
		]), next);
	};
	Git2.prototype.addTag = function(name) {
		const task = typeof name === "string" ? addTagTask2(name) : configurationErrorTask2("Git.addTag requires a tag name");
		return this._runTask(task, trailingFunctionArgument2(arguments));
	};
	Git2.prototype.addAnnotatedTag = function(tagName, tagMessage) {
		return this._runTask(addAnnotatedTagTask2(tagName, tagMessage), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.deleteLocalBranch = function(branchName, forceDelete, then) {
		return this._runTask(deleteBranchTask2(branchName, typeof forceDelete === "boolean" ? forceDelete : false), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.deleteLocalBranches = function(branchNames, forceDelete, then) {
		return this._runTask(deleteBranchesTask2(branchNames, typeof forceDelete === "boolean" ? forceDelete : false), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.branch = function(options, then) {
		return this._runTask(branchTask2(getTrailingOptions2(arguments)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.branchLocal = function(then) {
		return this._runTask(branchLocalTask2(), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.raw = function(commands) {
		const createRestCommands = !Array.isArray(commands);
		const command = [].slice.call(createRestCommands ? arguments : commands, 0);
		for (let i = 0; i < command.length && createRestCommands; i++) if (!filterPrimitives2(command[i])) {
			command.splice(i, command.length - i);
			break;
		}
		command.push(...getTrailingOptions2(arguments, 0, true));
		var next = trailingFunctionArgument2(arguments);
		if (!command.length) return this._runTask(configurationErrorTask2("Raw: must supply one or more command to execute"), next);
		return this._runTask(straightThroughStringTask2(command, this._trimmed), next);
	};
	Git2.prototype.submoduleAdd = function(repo, path$2, then) {
		return this._runTask(addSubModuleTask2(repo, path$2), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.submoduleUpdate = function(args, then) {
		return this._runTask(updateSubModuleTask2(getTrailingOptions2(arguments, true)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.submoduleInit = function(args, then) {
		return this._runTask(initSubModuleTask2(getTrailingOptions2(arguments, true)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.subModule = function(options, then) {
		return this._runTask(subModuleTask2(getTrailingOptions2(arguments)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.listRemote = function() {
		return this._runTask(listRemotesTask2(getTrailingOptions2(arguments)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.addRemote = function(remoteName, remoteRepo, then) {
		return this._runTask(addRemoteTask2(remoteName, remoteRepo, getTrailingOptions2(arguments)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.removeRemote = function(remoteName, then) {
		return this._runTask(removeRemoteTask2(remoteName), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.getRemotes = function(verbose, then) {
		return this._runTask(getRemotesTask2(verbose === true), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.remote = function(options, then) {
		return this._runTask(remoteTask2(getTrailingOptions2(arguments)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.tag = function(options, then) {
		const command = getTrailingOptions2(arguments);
		if (command[0] !== "tag") command.unshift("tag");
		return this._runTask(straightThroughStringTask2(command), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.updateServerInfo = function(then) {
		return this._runTask(straightThroughStringTask2(["update-server-info"]), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.pushTags = function(remote, then) {
		const task = pushTagsTask2({ remote: filterType2(remote, filterString2) }, getTrailingOptions2(arguments));
		return this._runTask(task, trailingFunctionArgument2(arguments));
	};
	Git2.prototype.rm = function(files) {
		return this._runTask(straightThroughStringTask2([
			"rm",
			"-f",
			...asArray2(files)
		]), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.rmKeepLocal = function(files) {
		return this._runTask(straightThroughStringTask2([
			"rm",
			"--cached",
			...asArray2(files)
		]), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.catFile = function(options, then) {
		return this._catFile("utf-8", arguments);
	};
	Git2.prototype.binaryCatFile = function() {
		return this._catFile("buffer", arguments);
	};
	Git2.prototype._catFile = function(format, args) {
		var handler = trailingFunctionArgument2(args);
		var command = ["cat-file"];
		var options = args[0];
		if (typeof options === "string") return this._runTask(configurationErrorTask2("Git.catFile: options must be supplied as an array of strings"), handler);
		if (Array.isArray(options)) command.push.apply(command, options);
		const task = format === "buffer" ? straightThroughBufferTask2(command) : straightThroughStringTask2(command);
		return this._runTask(task, handler);
	};
	Git2.prototype.diff = function(options, then) {
		const task = filterString2(options) ? configurationErrorTask2("git.diff: supplying options as a single string is no longer supported, switch to an array of strings") : straightThroughStringTask2(["diff", ...getTrailingOptions2(arguments)]);
		return this._runTask(task, trailingFunctionArgument2(arguments));
	};
	Git2.prototype.diffSummary = function() {
		return this._runTask(diffSummaryTask2(getTrailingOptions2(arguments, 1)), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.applyPatch = function(patches) {
		const task = !filterStringOrStringArray2(patches) ? configurationErrorTask2(`git.applyPatch requires one or more string patches as the first argument`) : applyPatchTask2(asArray2(patches), getTrailingOptions2([].slice.call(arguments, 1)));
		return this._runTask(task, trailingFunctionArgument2(arguments));
	};
	Git2.prototype.revparse = function() {
		const commands = ["rev-parse", ...getTrailingOptions2(arguments, true)];
		return this._runTask(straightThroughStringTask2(commands, true), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.clean = function(mode, options, then) {
		const usingCleanOptionsArray = isCleanOptionsArray2(mode);
		const cleanMode = usingCleanOptionsArray && mode.join("") || filterType2(mode, filterString2) || "";
		const customArgs = getTrailingOptions2([].slice.call(arguments, usingCleanOptionsArray ? 1 : 0));
		return this._runTask(cleanWithOptionsTask2(cleanMode, customArgs), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.exec = function(then) {
		const task = {
			commands: [],
			format: "utf-8",
			parser() {
				if (typeof then === "function") then();
			}
		};
		return this._runTask(task);
	};
	Git2.prototype.clearQueue = function() {
		return this;
	};
	Git2.prototype.checkIgnore = function(pathnames, then) {
		return this._runTask(checkIgnoreTask2(asArray2(filterType2(pathnames, filterStringOrStringArray2, []))), trailingFunctionArgument2(arguments));
	};
	Git2.prototype.checkIsRepo = function(checkType, then) {
		return this._runTask(checkIsRepoTask2(filterType2(checkType, filterString2)), trailingFunctionArgument2(arguments));
	};
	module$1.exports = Git2;
} });
init_pathspec();
init_git_error();
var GitConstructError = class extends GitError {
	constructor(config, message) {
		super(void 0, message);
		this.config = config;
	}
};
init_git_error();
init_git_error();
var GitPluginError = class extends GitError {
	constructor(task, plugin, message) {
		super(task, message);
		this.task = task;
		this.plugin = plugin;
		Object.setPrototypeOf(this, new.target.prototype);
	}
};
init_git_response_error();
init_task_configuration_error();
init_check_is_repo();
init_clean();
init_config();
init_diff_name_status();
init_grep();
init_reset();
function abortPlugin(signal) {
	if (!signal) return;
	const onSpawnAfter = {
		type: "spawn.after",
		action(_data, context) {
			function kill() {
				context.kill(new GitPluginError(void 0, "abort", "Abort signal received"));
			}
			signal.addEventListener("abort", kill);
			context.spawned.on("close", () => signal.removeEventListener("abort", kill));
		}
	};
	const onSpawnBefore = {
		type: "spawn.before",
		action(_data, context) {
			if (signal.aborted) context.kill(new GitPluginError(void 0, "abort", "Abort already signaled"));
		}
	};
	return [onSpawnBefore, onSpawnAfter];
}
function isConfigSwitch(arg) {
	return typeof arg === "string" && arg.trim().toLowerCase() === "-c";
}
function preventProtocolOverride(arg, next) {
	if (!isConfigSwitch(arg)) return;
	if (!/^\s*protocol(.[a-z]+)?.allow/.test(next)) return;
	throw new GitPluginError(void 0, "unsafe", "Configuring protocol.allow is not permitted without enabling allowUnsafeExtProtocol");
}
function preventUploadPack(arg, method) {
	if (/^\s*--(upload|receive)-pack/.test(arg)) throw new GitPluginError(void 0, "unsafe", `Use of --upload-pack or --receive-pack is not permitted without enabling allowUnsafePack`);
	if (method === "clone" && /^\s*-u\b/.test(arg)) throw new GitPluginError(void 0, "unsafe", `Use of clone with option -u is not permitted without enabling allowUnsafePack`);
	if (method === "push" && /^\s*--exec\b/.test(arg)) throw new GitPluginError(void 0, "unsafe", `Use of push with option --exec is not permitted without enabling allowUnsafePack`);
}
function blockUnsafeOperationsPlugin({ allowUnsafeProtocolOverride = false, allowUnsafePack = false } = {}) {
	return {
		type: "spawn.args",
		action(args, context) {
			args.forEach((current, index) => {
				const next = index < args.length ? args[index + 1] : "";
				allowUnsafeProtocolOverride || preventProtocolOverride(current, next);
				allowUnsafePack || preventUploadPack(current, context.method);
			});
			return args;
		}
	};
}
init_utils();
function commandConfigPrefixingPlugin(configuration) {
	const prefix = prefixedArray(configuration, "-c");
	return {
		type: "spawn.args",
		action(data) {
			return [...prefix, ...data];
		}
	};
}
init_utils();
var never = (0, import_dist$2.deferred)().promise;
function completionDetectionPlugin({ onClose = true, onExit = 50 } = {}) {
	function createEvents() {
		let exitCode = -1;
		const events = {
			close: (0, import_dist$2.deferred)(),
			closeTimeout: (0, import_dist$2.deferred)(),
			exit: (0, import_dist$2.deferred)(),
			exitTimeout: (0, import_dist$2.deferred)()
		};
		const result = Promise.race([onClose === false ? never : events.closeTimeout.promise, onExit === false ? never : events.exitTimeout.promise]);
		configureTimeout(onClose, events.close, events.closeTimeout);
		configureTimeout(onExit, events.exit, events.exitTimeout);
		return {
			close(code) {
				exitCode = code;
				events.close.done();
			},
			exit(code) {
				exitCode = code;
				events.exit.done();
			},
			get exitCode() {
				return exitCode;
			},
			result
		};
	}
	function configureTimeout(flag, event, timeout) {
		if (flag === false) return;
		(flag === true ? event.promise : event.promise.then(() => delay(flag))).then(timeout.done);
	}
	return {
		type: "spawn.after",
		async action(_data, { spawned, close }) {
			const events = createEvents();
			let deferClose = true;
			let quickClose = () => void (deferClose = false);
			spawned.stdout?.on("data", quickClose);
			spawned.stderr?.on("data", quickClose);
			spawned.on("error", quickClose);
			spawned.on("close", (code) => events.close(code));
			spawned.on("exit", (code) => events.exit(code));
			try {
				await events.result;
				if (deferClose) await delay(50);
				close(events.exitCode);
			} catch (err) {
				close(events.exitCode, err);
			}
		}
	};
}
init_utils();
var WRONG_NUMBER_ERR = `Invalid value supplied for custom binary, requires a single string or an array containing either one or two strings`;
var WRONG_CHARS_ERR = `Invalid value supplied for custom binary, restricted characters must be removed or supply the unsafe.allowUnsafeCustomBinary option`;
function isBadArgument(arg) {
	return !arg || !/^([a-z]:)?([a-z0-9/.\\_-]+)$/i.test(arg);
}
function toBinaryConfig(input, allowUnsafe) {
	if (input.length < 1 || input.length > 2) throw new GitPluginError(void 0, "binary", WRONG_NUMBER_ERR);
	const isBad = input.some(isBadArgument);
	if (isBad) if (allowUnsafe) console.warn(WRONG_CHARS_ERR);
	else throw new GitPluginError(void 0, "binary", WRONG_CHARS_ERR);
	const [binary, prefix] = input;
	return {
		binary,
		prefix
	};
}
function customBinaryPlugin(plugins, input = ["git"], allowUnsafe = false) {
	let config = toBinaryConfig(asArray(input), allowUnsafe);
	plugins.on("binary", (input2) => {
		config = toBinaryConfig(asArray(input2), allowUnsafe);
	});
	plugins.append("spawn.binary", () => {
		return config.binary;
	});
	plugins.append("spawn.args", (data) => {
		return config.prefix ? [config.prefix, ...data] : data;
	});
}
init_git_error();
function isTaskError(result) {
	return !!(result.exitCode && result.stdErr.length);
}
function getErrorMessage(result) {
	return Buffer.concat([...result.stdOut, ...result.stdErr]);
}
function errorDetectionHandler(overwrite = false, isError = isTaskError, errorMessage = getErrorMessage) {
	return (error, result) => {
		if (!overwrite && error || !isError(result)) return error;
		return errorMessage(result);
	};
}
function errorDetectionPlugin(config) {
	return {
		type: "task.error",
		action(data, context) {
			const error = config(data.error, {
				stdErr: context.stdErr,
				stdOut: context.stdOut,
				exitCode: context.exitCode
			});
			if (Buffer.isBuffer(error)) return { error: new GitError(void 0, error.toString("utf-8")) };
			return { error };
		}
	};
}
init_utils();
var PluginStore = class {
	constructor() {
		this.plugins = /* @__PURE__ */ new Set();
		this.events = new EventEmitter();
	}
	on(type, listener) {
		this.events.on(type, listener);
	}
	reconfigure(type, data) {
		this.events.emit(type, data);
	}
	append(type, action) {
		const plugin = append(this.plugins, {
			type,
			action
		});
		return () => this.plugins.delete(plugin);
	}
	add(plugin) {
		const plugins = [];
		asArray(plugin).forEach((plugin2) => plugin2 && this.plugins.add(append(plugins, plugin2)));
		return () => {
			plugins.forEach((plugin2) => this.plugins.delete(plugin2));
		};
	}
	exec(type, data, context) {
		let output = data;
		const contextual = Object.freeze(Object.create(context));
		for (const plugin of this.plugins) if (plugin.type === type) output = plugin.action(output, contextual);
		return output;
	}
};
init_utils();
function progressMonitorPlugin(progress) {
	const progressCommand = "--progress";
	const progressMethods = [
		"checkout",
		"clone",
		"fetch",
		"pull",
		"push"
	];
	const onProgress = {
		type: "spawn.after",
		action(_data, context) {
			if (!context.commands.includes(progressCommand)) return;
			context.spawned.stderr?.on("data", (chunk) => {
				const message = /^([\s\S]+?):\s*(\d+)% \((\d+)\/(\d+)\)/.exec(chunk.toString("utf8"));
				if (!message) return;
				progress({
					method: context.method,
					stage: progressEventStage(message[1]),
					progress: asNumber(message[2]),
					processed: asNumber(message[3]),
					total: asNumber(message[4])
				});
			});
		}
	};
	const onArgs = {
		type: "spawn.args",
		action(args, context) {
			if (!progressMethods.includes(context.method)) return args;
			return including(args, progressCommand);
		}
	};
	return [onArgs, onProgress];
}
function progressEventStage(input) {
	return String(input.toLowerCase().split(" ", 1)) || "unknown";
}
init_utils();
function spawnOptionsPlugin(spawnOptions) {
	const options = pick(spawnOptions, ["uid", "gid"]);
	return {
		type: "spawn.options",
		action(data) {
			return {
				...options,
				...data
			};
		}
	};
}
function timeoutPlugin({ block, stdErr = true, stdOut = true }) {
	if (block > 0) return {
		type: "spawn.after",
		action(_data, context) {
			let timeout;
			function wait() {
				timeout && clearTimeout(timeout);
				timeout = setTimeout(kill, block);
			}
			function stop() {
				context.spawned.stdout?.off("data", wait);
				context.spawned.stderr?.off("data", wait);
				context.spawned.off("exit", stop);
				context.spawned.off("close", stop);
				timeout && clearTimeout(timeout);
			}
			function kill() {
				stop();
				context.kill(new GitPluginError(void 0, "timeout", `block timeout reached`));
			}
			stdOut && context.spawned.stdout?.on("data", wait);
			stdErr && context.spawned.stderr?.on("data", wait);
			context.spawned.on("exit", stop);
			context.spawned.on("close", stop);
			wait();
		}
	};
}
init_pathspec();
function suffixPathsPlugin() {
	return {
		type: "spawn.args",
		action(data) {
			const prefix = [];
			let suffix;
			function append2(args) {
				(suffix = suffix || []).push(...args);
			}
			for (let i = 0; i < data.length; i++) {
				const param = data[i];
				if (isPathSpec(param)) {
					append2(toPaths(param));
					continue;
				}
				if (param === "--") {
					append2(data.slice(i + 1).flatMap((item) => isPathSpec(item) && toPaths(item) || item));
					break;
				}
				prefix.push(param);
			}
			return !suffix ? prefix : [
				...prefix,
				"--",
				...suffix.map(String)
			];
		}
	};
}
init_utils();
var Git = require_git();
function gitInstanceFactory(baseDir, options) {
	const plugins = new PluginStore();
	const config = createInstanceConfig(baseDir && (typeof baseDir === "string" ? { baseDir } : baseDir) || {}, options);
	if (!folderExists(config.baseDir)) throw new GitConstructError(config, `Cannot use simple-git on a directory that does not exist`);
	if (Array.isArray(config.config)) plugins.add(commandConfigPrefixingPlugin(config.config));
	plugins.add(blockUnsafeOperationsPlugin(config.unsafe));
	plugins.add(suffixPathsPlugin());
	plugins.add(completionDetectionPlugin(config.completion));
	config.abort && plugins.add(abortPlugin(config.abort));
	config.progress && plugins.add(progressMonitorPlugin(config.progress));
	config.timeout && plugins.add(timeoutPlugin(config.timeout));
	config.spawnOptions && plugins.add(spawnOptionsPlugin(config.spawnOptions));
	plugins.add(errorDetectionPlugin(errorDetectionHandler(true)));
	config.errors && plugins.add(errorDetectionPlugin(config.errors));
	customBinaryPlugin(plugins, config.binary, config.unsafe?.allowUnsafeCustomBinary);
	return new Git(config, plugins);
}
init_git_response_error();
var esm_default = gitInstanceFactory;

//#endregion
//#region node_modules/.pnpm/is-docker@3.0.0/node_modules/is-docker/index.js
let isDockerCached;
function hasDockerEnv() {
	try {
		fs$1.statSync("/.dockerenv");
		return true;
	} catch {
		return false;
	}
}
function hasDockerCGroup() {
	try {
		return fs$1.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
	} catch {
		return false;
	}
}
function isDocker() {
	if (isDockerCached === void 0) isDockerCached = hasDockerEnv() || hasDockerCGroup();
	return isDockerCached;
}

//#endregion
//#region node_modules/.pnpm/is-inside-container@1.0.0/node_modules/is-inside-container/index.js
let cachedResult;
const hasContainerEnv = () => {
	try {
		fs$1.statSync("/run/.containerenv");
		return true;
	} catch {
		return false;
	}
};
function isInsideContainer() {
	if (cachedResult === void 0) cachedResult = hasContainerEnv() || isDocker();
	return cachedResult;
}

//#endregion
//#region node_modules/.pnpm/is-wsl@3.1.0/node_modules/is-wsl/index.js
const isWsl = () => {
	if (process$1.platform !== "linux") return false;
	if (os.release().toLowerCase().includes("microsoft")) {
		if (isInsideContainer()) return false;
		return true;
	}
	try {
		return fs$1.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") ? !isInsideContainer() : false;
	} catch {
		return false;
	}
};
var is_wsl_default = process$1.env.__IS_WSL_TEST__ ? isWsl : isWsl();

//#endregion
//#region node_modules/.pnpm/define-lazy-prop@3.0.0/node_modules/define-lazy-prop/index.js
function defineLazyProperty(object, propertyName, valueGetter) {
	const define = (value) => Object.defineProperty(object, propertyName, {
		value,
		enumerable: true,
		writable: true
	});
	Object.defineProperty(object, propertyName, {
		configurable: true,
		enumerable: true,
		get() {
			const result = valueGetter();
			define(result);
			return result;
		},
		set(value) {
			define(value);
		}
	});
	return object;
}

//#endregion
//#region node_modules/.pnpm/default-browser-id@5.0.0/node_modules/default-browser-id/index.js
const execFileAsync$3 = promisify(execFile);
async function defaultBrowserId() {
	if (process$1.platform !== "darwin") throw new Error("macOS only");
	const { stdout } = await execFileAsync$3("defaults", [
		"read",
		"com.apple.LaunchServices/com.apple.launchservices.secure",
		"LSHandlers"
	]);
	const match = /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(stdout);
	return match?.groups.id ?? "com.apple.Safari";
}

//#endregion
//#region node_modules/.pnpm/run-applescript@7.0.0/node_modules/run-applescript/index.js
const execFileAsync$2 = promisify(execFile);
async function runAppleScript(script, { humanReadableOutput = true } = {}) {
	if (process$1.platform !== "darwin") throw new Error("macOS only");
	const outputArguments = humanReadableOutput ? [] : ["-ss"];
	const { stdout } = await execFileAsync$2("osascript", [
		"-e",
		script,
		outputArguments
	]);
	return stdout.trim();
}

//#endregion
//#region node_modules/.pnpm/bundle-name@4.1.0/node_modules/bundle-name/index.js
async function bundleName(bundleId) {
	return runAppleScript(`tell application "Finder" to set app_path to application file id "${bundleId}" as string\ntell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`);
}

//#endregion
//#region node_modules/.pnpm/default-browser@5.2.1/node_modules/default-browser/windows.js
const execFileAsync$1 = promisify(execFile);
const windowsBrowserProgIds = {
	AppXq0fevzme2pys62n3e0fbqa7peapykr8v: {
		name: "Edge",
		id: "com.microsoft.edge.old"
	},
	MSEdgeDHTML: {
		name: "Edge",
		id: "com.microsoft.edge"
	},
	MSEdgeHTM: {
		name: "Edge",
		id: "com.microsoft.edge"
	},
	"IE.HTTP": {
		name: "Internet Explorer",
		id: "com.microsoft.ie"
	},
	FirefoxURL: {
		name: "Firefox",
		id: "org.mozilla.firefox"
	},
	ChromeHTML: {
		name: "Chrome",
		id: "com.google.chrome"
	},
	BraveHTML: {
		name: "Brave",
		id: "com.brave.Browser"
	},
	BraveBHTML: {
		name: "Brave Beta",
		id: "com.brave.Browser.beta"
	},
	BraveSSHTM: {
		name: "Brave Nightly",
		id: "com.brave.Browser.nightly"
	}
};
var UnknownBrowserError = class extends Error {};
async function defaultBrowser$1(_execFileAsync = execFileAsync$1) {
	const { stdout } = await _execFileAsync("reg", [
		"QUERY",
		" HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice",
		"/v",
		"ProgId"
	]);
	const match = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(stdout);
	if (!match) throw new UnknownBrowserError(`Cannot find Windows browser in stdout: ${JSON.stringify(stdout)}`);
	const { id } = match.groups;
	const browser = windowsBrowserProgIds[id];
	if (!browser) throw new UnknownBrowserError(`Unknown browser ID: ${id}`);
	return browser;
}

//#endregion
//#region node_modules/.pnpm/default-browser@5.2.1/node_modules/default-browser/index.js
const execFileAsync = promisify(execFile);
const titleize = (string) => string.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
async function defaultBrowser() {
	if (process$1.platform === "darwin") {
		const id = await defaultBrowserId();
		const name = await bundleName(id);
		return {
			name,
			id
		};
	}
	if (process$1.platform === "linux") {
		const { stdout } = await execFileAsync("xdg-mime", [
			"query",
			"default",
			"x-scheme-handler/http"
		]);
		const id = stdout.trim();
		const name = titleize(id.replace(/.desktop$/, "").replace("-", " "));
		return {
			name,
			id
		};
	}
	if (process$1.platform === "win32") return defaultBrowser$1();
	throw new Error("Only macOS, Linux, and Windows are supported");
}

//#endregion
//#region node_modules/.pnpm/open@10.1.2/node_modules/open/index.js
const execFile$1 = util.promisify(childProcess.execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localXdgOpenPath = path.join(__dirname, "xdg-open");
const { platform, arch } = process$1;
/**
Get the mount point for fixed drives in WSL.

@inner
@returns {string} The mount point.
*/
const getWslDrivesMountPoint = (() => {
	const defaultMountPoint = "/mnt/";
	let mountPoint;
	return async function() {
		if (mountPoint) return mountPoint;
		const configFilePath$1 = "/etc/wsl.conf";
		let isConfigFileExists = false;
		try {
			await fs.access(configFilePath$1, constants.F_OK);
			isConfigFileExists = true;
		} catch {}
		if (!isConfigFileExists) return defaultMountPoint;
		const configContent = await fs.readFile(configFilePath$1, { encoding: "utf8" });
		const configMountPoint = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(configContent);
		if (!configMountPoint) return defaultMountPoint;
		mountPoint = configMountPoint.groups.mountPoint.trim();
		mountPoint = mountPoint.endsWith("/") ? mountPoint : `${mountPoint}/`;
		return mountPoint;
	};
})();
/**
Get the PowerShell executable path in WSL environment.

@returns {Promise<string>} The absolute path to the PowerShell executable in WSL.
*/
const getPowershellPathFromWsl = async () => {
	const mountPoint = await getWslDrivesMountPoint();
	return `${mountPoint}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`;
};
/**
Get the default browser name in Windows from WSL.

@returns {Promise<string>} Browser name.
*/
async function getWindowsDefaultBrowserFromWsl() {
	const powershellPath = await getPowershellPathFromWsl();
	const rawCommand = "(Get-ItemProperty -Path \"HKCU:\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice\").ProgId";
	const encodedCommand = Buffer$1.from(rawCommand, "utf16le").toString("base64");
	const { stdout } = await execFile$1(powershellPath, [
		"-NoProfile",
		"-NonInteractive",
		"-ExecutionPolicy",
		"Bypass",
		"-EncodedCommand",
		encodedCommand
	], { encoding: "utf8" });
	const progId = stdout.trim();
	const browserMap = {
		ChromeHTML: "com.google.chrome",
		MSEdgeHTM: "com.microsoft.edge",
		FirefoxURL: "org.mozilla.firefox"
	};
	return browserMap[progId] ? { id: browserMap[progId] } : {};
}
const pTryEach = async (array, mapper) => {
	let latestError;
	for (const item of array) try {
		return await mapper(item);
	} catch (error) {
		latestError = error;
	}
	throw latestError;
};
const baseOpen = async (options) => {
	options = {
		wait: false,
		background: false,
		newInstance: false,
		allowNonzeroExitCode: false,
		...options
	};
	if (Array.isArray(options.app)) return pTryEach(options.app, (singleApp) => baseOpen({
		...options,
		app: singleApp
	}));
	let { name: app, arguments: appArguments = [] } = options.app ?? {};
	appArguments = [...appArguments];
	if (Array.isArray(app)) return pTryEach(app, (appName) => baseOpen({
		...options,
		app: {
			name: appName,
			arguments: appArguments
		}
	}));
	if (app === "browser" || app === "browserPrivate") {
		const ids = {
			"com.google.chrome": "chrome",
			"google-chrome.desktop": "chrome",
			"org.mozilla.firefox": "firefox",
			"firefox.desktop": "firefox",
			"com.microsoft.msedge": "edge",
			"com.microsoft.edge": "edge",
			"com.microsoft.edgemac": "edge",
			"microsoft-edge.desktop": "edge"
		};
		const flags = {
			chrome: "--incognito",
			firefox: "--private-window",
			edge: "--inPrivate"
		};
		const browser = is_wsl_default ? await getWindowsDefaultBrowserFromWsl() : await defaultBrowser();
		if (browser.id in ids) {
			const browserName = ids[browser.id];
			if (app === "browserPrivate") appArguments.push(flags[browserName]);
			return baseOpen({
				...options,
				app: {
					name: apps[browserName],
					arguments: appArguments
				}
			});
		}
		throw new Error(`${browser.name} is not supported as a default browser`);
	}
	let command;
	const cliArguments = [];
	const childProcessOptions = {};
	if (platform === "darwin") {
		command = "open";
		if (options.wait) cliArguments.push("--wait-apps");
		if (options.background) cliArguments.push("--background");
		if (options.newInstance) cliArguments.push("--new");
		if (app) cliArguments.push("-a", app);
	} else if (platform === "win32" || is_wsl_default && !isInsideContainer() && !app) {
		command = is_wsl_default ? await getPowershellPathFromWsl() : `${process$1.env.SYSTEMROOT || process$1.env.windir || "C:\\Windows"}\\System32\\WindowsPowerShell\\v1.0\\powershell`;
		cliArguments.push("-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand");
		if (!is_wsl_default) childProcessOptions.windowsVerbatimArguments = true;
		const encodedArguments = ["Start"];
		if (options.wait) encodedArguments.push("-Wait");
		if (app) {
			encodedArguments.push(`"\`"${app}\`""`);
			if (options.target) appArguments.push(options.target);
		} else if (options.target) encodedArguments.push(`"${options.target}"`);
		if (appArguments.length > 0) {
			appArguments = appArguments.map((argument) => `"\`"${argument}\`""`);
			encodedArguments.push("-ArgumentList", appArguments.join(","));
		}
		options.target = Buffer$1.from(encodedArguments.join(" "), "utf16le").toString("base64");
	} else {
		if (app) command = app;
		else {
			const isBundled = !__dirname || __dirname === "/";
			let exeLocalXdgOpen = false;
			try {
				await fs.access(localXdgOpenPath, constants.X_OK);
				exeLocalXdgOpen = true;
			} catch {}
			const useSystemXdgOpen = process$1.versions.electron ?? (platform === "android" || isBundled || !exeLocalXdgOpen);
			command = useSystemXdgOpen ? "xdg-open" : localXdgOpenPath;
		}
		if (appArguments.length > 0) cliArguments.push(...appArguments);
		if (!options.wait) {
			childProcessOptions.stdio = "ignore";
			childProcessOptions.detached = true;
		}
	}
	if (platform === "darwin" && appArguments.length > 0) cliArguments.push("--args", ...appArguments);
	if (options.target) cliArguments.push(options.target);
	const subprocess = childProcess.spawn(command, cliArguments, childProcessOptions);
	if (options.wait) return new Promise((resolve, reject) => {
		subprocess.once("error", reject);
		subprocess.once("close", (exitCode) => {
			if (!options.allowNonzeroExitCode && exitCode > 0) {
				reject(/* @__PURE__ */ new Error(`Exited with code ${exitCode}`));
				return;
			}
			resolve(subprocess);
		});
	});
	subprocess.unref();
	return subprocess;
};
const open = (target, options) => {
	if (typeof target !== "string") throw new TypeError("Expected a `target`");
	return baseOpen({
		...options,
		target
	});
};
function detectArchBinary(binary) {
	if (typeof binary === "string" || Array.isArray(binary)) return binary;
	const { [arch]: archBinary } = binary;
	if (!archBinary) throw new Error(`${arch} is not supported`);
	return archBinary;
}
function detectPlatformBinary({ [platform]: platformBinary }, { wsl }) {
	if (wsl && is_wsl_default) return detectArchBinary(wsl);
	if (!platformBinary) throw new Error(`${platform} is not supported`);
	return detectArchBinary(platformBinary);
}
const apps = {};
defineLazyProperty(apps, "chrome", () => detectPlatformBinary({
	darwin: "google chrome",
	win32: "chrome",
	linux: [
		"google-chrome",
		"google-chrome-stable",
		"chromium"
	]
}, { wsl: {
	ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
	x64: ["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]
} }));
defineLazyProperty(apps, "firefox", () => detectPlatformBinary({
	darwin: "firefox",
	win32: "C:\\Program Files\\Mozilla Firefox\\firefox.exe",
	linux: "firefox"
}, { wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe" }));
defineLazyProperty(apps, "edge", () => detectPlatformBinary({
	darwin: "microsoft edge",
	win32: "msedge",
	linux: ["microsoft-edge", "microsoft-edge-dev"]
}, { wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" }));
defineLazyProperty(apps, "browser", () => "browser");
defineLazyProperty(apps, "browserPrivate", () => "browserPrivate");
var open_default = open;

//#endregion
//#region node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/error.js
var require_error = __commonJS$1({ "node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/error.js"(exports) {
	/**
	* CommanderError class
	*/
	var CommanderError$3 = class extends Error {
		/**
		* Constructs the CommanderError class
		* @param {number} exitCode suggested exit code which could be used with process.exit
		* @param {string} code an id string representing the error
		* @param {string} message human-readable description of the error
		*/
		constructor(exitCode, code, message) {
			super(message);
			Error.captureStackTrace(this, this.constructor);
			this.name = this.constructor.name;
			this.code = code;
			this.exitCode = exitCode;
			this.nestedError = void 0;
		}
	};
	/**
	* InvalidArgumentError class
	*/
	var InvalidArgumentError$4 = class extends CommanderError$3 {
		/**
		* Constructs the InvalidArgumentError class
		* @param {string} [message] explanation of why argument is invalid
		*/
		constructor(message) {
			super(1, "commander.invalidArgument", message);
			Error.captureStackTrace(this, this.constructor);
			this.name = this.constructor.name;
		}
	};
	exports.CommanderError = CommanderError$3;
	exports.InvalidArgumentError = InvalidArgumentError$4;
} });

//#endregion
//#region node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/argument.js
var require_argument = __commonJS$1({ "node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/argument.js"(exports) {
	const { InvalidArgumentError: InvalidArgumentError$3 } = require_error();
	var Argument$3 = class {
		/**
		* Initialize a new command argument with the given name and description.
		* The default is that the argument is required, and you can explicitly
		* indicate this with <> around the name. Put [] around the name for an optional argument.
		*
		* @param {string} name
		* @param {string} [description]
		*/
		constructor(name, description) {
			this.description = description || "";
			this.variadic = false;
			this.parseArg = void 0;
			this.defaultValue = void 0;
			this.defaultValueDescription = void 0;
			this.argChoices = void 0;
			switch (name[0]) {
				case "<":
					this.required = true;
					this._name = name.slice(1, -1);
					break;
				case "[":
					this.required = false;
					this._name = name.slice(1, -1);
					break;
				default:
					this.required = true;
					this._name = name;
					break;
			}
			if (this._name.length > 3 && this._name.slice(-3) === "...") {
				this.variadic = true;
				this._name = this._name.slice(0, -3);
			}
		}
		/**
		* Return argument name.
		*
		* @return {string}
		*/
		name() {
			return this._name;
		}
		/**
		* @package
		*/
		_concatValue(value, previous) {
			if (previous === this.defaultValue || !Array.isArray(previous)) return [value];
			return previous.concat(value);
		}
		/**
		* Set the default value, and optionally supply the description to be displayed in the help.
		*
		* @param {*} value
		* @param {string} [description]
		* @return {Argument}
		*/
		default(value, description) {
			this.defaultValue = value;
			this.defaultValueDescription = description;
			return this;
		}
		/**
		* Set the custom handler for processing CLI command arguments into argument values.
		*
		* @param {Function} [fn]
		* @return {Argument}
		*/
		argParser(fn) {
			this.parseArg = fn;
			return this;
		}
		/**
		* Only allow argument value to be one of choices.
		*
		* @param {string[]} values
		* @return {Argument}
		*/
		choices(values) {
			this.argChoices = values.slice();
			this.parseArg = (arg, previous) => {
				if (!this.argChoices.includes(arg)) throw new InvalidArgumentError$3(`Allowed choices are ${this.argChoices.join(", ")}.`);
				if (this.variadic) return this._concatValue(arg, previous);
				return arg;
			};
			return this;
		}
		/**
		* Make argument required.
		*
		* @returns {Argument}
		*/
		argRequired() {
			this.required = true;
			return this;
		}
		/**
		* Make argument optional.
		*
		* @returns {Argument}
		*/
		argOptional() {
			this.required = false;
			return this;
		}
	};
	/**
	* Takes an argument and returns its human readable equivalent for help usage.
	*
	* @param {Argument} arg
	* @return {string}
	* @private
	*/
	function humanReadableArgName$2(arg) {
		const nameOutput = arg.name() + (arg.variadic === true ? "..." : "");
		return arg.required ? "<" + nameOutput + ">" : "[" + nameOutput + "]";
	}
	exports.Argument = Argument$3;
	exports.humanReadableArgName = humanReadableArgName$2;
} });

//#endregion
//#region node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/help.js
var require_help = __commonJS$1({ "node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/help.js"(exports) {
	const { humanReadableArgName: humanReadableArgName$1 } = require_argument();
	/**
	* TypeScript import types for JSDoc, used by Visual Studio Code IntelliSense and `npm run typescript-checkJS`
	* https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#import-types
	* @typedef { import("./argument.js").Argument } Argument
	* @typedef { import("./command.js").Command } Command
	* @typedef { import("./option.js").Option } Option
	*/
	var Help$3 = class {
		constructor() {
			this.helpWidth = void 0;
			this.minWidthToWrap = 40;
			this.sortSubcommands = false;
			this.sortOptions = false;
			this.showGlobalOptions = false;
		}
		/**
		* prepareContext is called by Commander after applying overrides from `Command.configureHelp()`
		* and just before calling `formatHelp()`.
		*
		* Commander just uses the helpWidth and the rest is provided for optional use by more complex subclasses.
		*
		* @param {{ error?: boolean, helpWidth?: number, outputHasColors?: boolean }} contextOptions
		*/
		prepareContext(contextOptions) {
			this.helpWidth = this.helpWidth ?? contextOptions.helpWidth ?? 80;
		}
		/**
		* Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one.
		*
		* @param {Command} cmd
		* @returns {Command[]}
		*/
		visibleCommands(cmd) {
			const visibleCommands = cmd.commands.filter((cmd$1) => !cmd$1._hidden);
			const helpCommand = cmd._getHelpCommand();
			if (helpCommand && !helpCommand._hidden) visibleCommands.push(helpCommand);
			if (this.sortSubcommands) visibleCommands.sort((a, b) => {
				return a.name().localeCompare(b.name());
			});
			return visibleCommands;
		}
		/**
		* Compare options for sort.
		*
		* @param {Option} a
		* @param {Option} b
		* @returns {number}
		*/
		compareOptions(a, b) {
			const getSortKey = (option) => {
				return option.short ? option.short.replace(/^-/, "") : option.long.replace(/^--/, "");
			};
			return getSortKey(a).localeCompare(getSortKey(b));
		}
		/**
		* Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one.
		*
		* @param {Command} cmd
		* @returns {Option[]}
		*/
		visibleOptions(cmd) {
			const visibleOptions = cmd.options.filter((option) => !option.hidden);
			const helpOption = cmd._getHelpOption();
			if (helpOption && !helpOption.hidden) {
				const removeShort = helpOption.short && cmd._findOption(helpOption.short);
				const removeLong = helpOption.long && cmd._findOption(helpOption.long);
				if (!removeShort && !removeLong) visibleOptions.push(helpOption);
				else if (helpOption.long && !removeLong) visibleOptions.push(cmd.createOption(helpOption.long, helpOption.description));
				else if (helpOption.short && !removeShort) visibleOptions.push(cmd.createOption(helpOption.short, helpOption.description));
			}
			if (this.sortOptions) visibleOptions.sort(this.compareOptions);
			return visibleOptions;
		}
		/**
		* Get an array of the visible global options. (Not including help.)
		*
		* @param {Command} cmd
		* @returns {Option[]}
		*/
		visibleGlobalOptions(cmd) {
			if (!this.showGlobalOptions) return [];
			const globalOptions = [];
			for (let ancestorCmd = cmd.parent; ancestorCmd; ancestorCmd = ancestorCmd.parent) {
				const visibleOptions = ancestorCmd.options.filter((option) => !option.hidden);
				globalOptions.push(...visibleOptions);
			}
			if (this.sortOptions) globalOptions.sort(this.compareOptions);
			return globalOptions;
		}
		/**
		* Get an array of the arguments if any have a description.
		*
		* @param {Command} cmd
		* @returns {Argument[]}
		*/
		visibleArguments(cmd) {
			if (cmd._argsDescription) cmd.registeredArguments.forEach((argument) => {
				argument.description = argument.description || cmd._argsDescription[argument.name()] || "";
			});
			if (cmd.registeredArguments.find((argument) => argument.description)) return cmd.registeredArguments;
			return [];
		}
		/**
		* Get the command term to show in the list of subcommands.
		*
		* @param {Command} cmd
		* @returns {string}
		*/
		subcommandTerm(cmd) {
			const args = cmd.registeredArguments.map((arg) => humanReadableArgName$1(arg)).join(" ");
			return cmd._name + (cmd._aliases[0] ? "|" + cmd._aliases[0] : "") + (cmd.options.length ? " [options]" : "") + (args ? " " + args : "");
		}
		/**
		* Get the option term to show in the list of options.
		*
		* @param {Option} option
		* @returns {string}
		*/
		optionTerm(option) {
			return option.flags;
		}
		/**
		* Get the argument term to show in the list of arguments.
		*
		* @param {Argument} argument
		* @returns {string}
		*/
		argumentTerm(argument) {
			return argument.name();
		}
		/**
		* Get the longest command term length.
		*
		* @param {Command} cmd
		* @param {Help} helper
		* @returns {number}
		*/
		longestSubcommandTermLength(cmd, helper) {
			return helper.visibleCommands(cmd).reduce((max, command) => {
				return Math.max(max, this.displayWidth(helper.styleSubcommandTerm(helper.subcommandTerm(command))));
			}, 0);
		}
		/**
		* Get the longest option term length.
		*
		* @param {Command} cmd
		* @param {Help} helper
		* @returns {number}
		*/
		longestOptionTermLength(cmd, helper) {
			return helper.visibleOptions(cmd).reduce((max, option) => {
				return Math.max(max, this.displayWidth(helper.styleOptionTerm(helper.optionTerm(option))));
			}, 0);
		}
		/**
		* Get the longest global option term length.
		*
		* @param {Command} cmd
		* @param {Help} helper
		* @returns {number}
		*/
		longestGlobalOptionTermLength(cmd, helper) {
			return helper.visibleGlobalOptions(cmd).reduce((max, option) => {
				return Math.max(max, this.displayWidth(helper.styleOptionTerm(helper.optionTerm(option))));
			}, 0);
		}
		/**
		* Get the longest argument term length.
		*
		* @param {Command} cmd
		* @param {Help} helper
		* @returns {number}
		*/
		longestArgumentTermLength(cmd, helper) {
			return helper.visibleArguments(cmd).reduce((max, argument) => {
				return Math.max(max, this.displayWidth(helper.styleArgumentTerm(helper.argumentTerm(argument))));
			}, 0);
		}
		/**
		* Get the command usage to be displayed at the top of the built-in help.
		*
		* @param {Command} cmd
		* @returns {string}
		*/
		commandUsage(cmd) {
			let cmdName = cmd._name;
			if (cmd._aliases[0]) cmdName = cmdName + "|" + cmd._aliases[0];
			let ancestorCmdNames = "";
			for (let ancestorCmd = cmd.parent; ancestorCmd; ancestorCmd = ancestorCmd.parent) ancestorCmdNames = ancestorCmd.name() + " " + ancestorCmdNames;
			return ancestorCmdNames + cmdName + " " + cmd.usage();
		}
		/**
		* Get the description for the command.
		*
		* @param {Command} cmd
		* @returns {string}
		*/
		commandDescription(cmd) {
			return cmd.description();
		}
		/**
		* Get the subcommand summary to show in the list of subcommands.
		* (Fallback to description for backwards compatibility.)
		*
		* @param {Command} cmd
		* @returns {string}
		*/
		subcommandDescription(cmd) {
			return cmd.summary() || cmd.description();
		}
		/**
		* Get the option description to show in the list of options.
		*
		* @param {Option} option
		* @return {string}
		*/
		optionDescription(option) {
			const extraInfo = [];
			if (option.argChoices) extraInfo.push(`choices: ${option.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`);
			if (option.defaultValue !== void 0) {
				const showDefault = option.required || option.optional || option.isBoolean() && typeof option.defaultValue === "boolean";
				if (showDefault) extraInfo.push(`default: ${option.defaultValueDescription || JSON.stringify(option.defaultValue)}`);
			}
			if (option.presetArg !== void 0 && option.optional) extraInfo.push(`preset: ${JSON.stringify(option.presetArg)}`);
			if (option.envVar !== void 0) extraInfo.push(`env: ${option.envVar}`);
			if (extraInfo.length > 0) {
				const extraDescription = `(${extraInfo.join(", ")})`;
				if (option.description) return `${option.description} ${extraDescription}`;
				return extraDescription;
			}
			return option.description;
		}
		/**
		* Get the argument description to show in the list of arguments.
		*
		* @param {Argument} argument
		* @return {string}
		*/
		argumentDescription(argument) {
			const extraInfo = [];
			if (argument.argChoices) extraInfo.push(`choices: ${argument.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`);
			if (argument.defaultValue !== void 0) extraInfo.push(`default: ${argument.defaultValueDescription || JSON.stringify(argument.defaultValue)}`);
			if (extraInfo.length > 0) {
				const extraDescription = `(${extraInfo.join(", ")})`;
				if (argument.description) return `${argument.description} ${extraDescription}`;
				return extraDescription;
			}
			return argument.description;
		}
		/**
		* Format a list of items, given a heading and an array of formatted items.
		*
		* @param {string} heading
		* @param {string[]} items
		* @param {Help} helper
		* @returns string[]
		*/
		formatItemList(heading, items, helper) {
			if (items.length === 0) return [];
			return [
				helper.styleTitle(heading),
				...items,
				""
			];
		}
		/**
		* Group items by their help group heading.
		*
		* @param {Command[] | Option[]} unsortedItems
		* @param {Command[] | Option[]} visibleItems
		* @param {Function} getGroup
		* @returns {Map<string, Command[] | Option[]>}
		*/
		groupItems(unsortedItems, visibleItems, getGroup) {
			const result = /* @__PURE__ */ new Map();
			unsortedItems.forEach((item) => {
				const group = getGroup(item);
				if (!result.has(group)) result.set(group, []);
			});
			visibleItems.forEach((item) => {
				const group = getGroup(item);
				if (!result.has(group)) result.set(group, []);
				result.get(group).push(item);
			});
			return result;
		}
		/**
		* Generate the built-in help text.
		*
		* @param {Command} cmd
		* @param {Help} helper
		* @returns {string}
		*/
		formatHelp(cmd, helper) {
			const termWidth = helper.padWidth(cmd, helper);
			const helpWidth = helper.helpWidth ?? 80;
			function callFormatItem(term, description) {
				return helper.formatItem(term, termWidth, description, helper);
			}
			let output = [`${helper.styleTitle("Usage:")} ${helper.styleUsage(helper.commandUsage(cmd))}`, ""];
			const commandDescription = helper.commandDescription(cmd);
			if (commandDescription.length > 0) output = output.concat([helper.boxWrap(helper.styleCommandDescription(commandDescription), helpWidth), ""]);
			const argumentList = helper.visibleArguments(cmd).map((argument) => {
				return callFormatItem(helper.styleArgumentTerm(helper.argumentTerm(argument)), helper.styleArgumentDescription(helper.argumentDescription(argument)));
			});
			output = output.concat(this.formatItemList("Arguments:", argumentList, helper));
			const optionGroups = this.groupItems(cmd.options, helper.visibleOptions(cmd), (option) => option.helpGroupHeading ?? "Options:");
			optionGroups.forEach((options, group) => {
				const optionList = options.map((option) => {
					return callFormatItem(helper.styleOptionTerm(helper.optionTerm(option)), helper.styleOptionDescription(helper.optionDescription(option)));
				});
				output = output.concat(this.formatItemList(group, optionList, helper));
			});
			if (helper.showGlobalOptions) {
				const globalOptionList = helper.visibleGlobalOptions(cmd).map((option) => {
					return callFormatItem(helper.styleOptionTerm(helper.optionTerm(option)), helper.styleOptionDescription(helper.optionDescription(option)));
				});
				output = output.concat(this.formatItemList("Global Options:", globalOptionList, helper));
			}
			const commandGroups = this.groupItems(cmd.commands, helper.visibleCommands(cmd), (sub) => sub.helpGroup() || "Commands:");
			commandGroups.forEach((commands, group) => {
				const commandList = commands.map((sub) => {
					return callFormatItem(helper.styleSubcommandTerm(helper.subcommandTerm(sub)), helper.styleSubcommandDescription(helper.subcommandDescription(sub)));
				});
				output = output.concat(this.formatItemList(group, commandList, helper));
			});
			return output.join("\n");
		}
		/**
		* Return display width of string, ignoring ANSI escape sequences. Used in padding and wrapping calculations.
		*
		* @param {string} str
		* @returns {number}
		*/
		displayWidth(str) {
			return stripColor$1(str).length;
		}
		/**
		* Style the title for displaying in the help. Called with 'Usage:', 'Options:', etc.
		*
		* @param {string} str
		* @returns {string}
		*/
		styleTitle(str) {
			return str;
		}
		styleUsage(str) {
			return str.split(" ").map((word) => {
				if (word === "[options]") return this.styleOptionText(word);
				if (word === "[command]") return this.styleSubcommandText(word);
				if (word[0] === "[" || word[0] === "<") return this.styleArgumentText(word);
				return this.styleCommandText(word);
			}).join(" ");
		}
		styleCommandDescription(str) {
			return this.styleDescriptionText(str);
		}
		styleOptionDescription(str) {
			return this.styleDescriptionText(str);
		}
		styleSubcommandDescription(str) {
			return this.styleDescriptionText(str);
		}
		styleArgumentDescription(str) {
			return this.styleDescriptionText(str);
		}
		styleDescriptionText(str) {
			return str;
		}
		styleOptionTerm(str) {
			return this.styleOptionText(str);
		}
		styleSubcommandTerm(str) {
			return str.split(" ").map((word) => {
				if (word === "[options]") return this.styleOptionText(word);
				if (word[0] === "[" || word[0] === "<") return this.styleArgumentText(word);
				return this.styleSubcommandText(word);
			}).join(" ");
		}
		styleArgumentTerm(str) {
			return this.styleArgumentText(str);
		}
		styleOptionText(str) {
			return str;
		}
		styleArgumentText(str) {
			return str;
		}
		styleSubcommandText(str) {
			return str;
		}
		styleCommandText(str) {
			return str;
		}
		/**
		* Calculate the pad width from the maximum term length.
		*
		* @param {Command} cmd
		* @param {Help} helper
		* @returns {number}
		*/
		padWidth(cmd, helper) {
			return Math.max(helper.longestOptionTermLength(cmd, helper), helper.longestGlobalOptionTermLength(cmd, helper), helper.longestSubcommandTermLength(cmd, helper), helper.longestArgumentTermLength(cmd, helper));
		}
		/**
		* Detect manually wrapped and indented strings by checking for line break followed by whitespace.
		*
		* @param {string} str
		* @returns {boolean}
		*/
		preformatted(str) {
			return /\n[^\S\r\n]/.test(str);
		}
		/**
		* Format the "item", which consists of a term and description. Pad the term and wrap the description, indenting the following lines.
		*
		* So "TTT", 5, "DDD DDDD DD DDD" might be formatted for this.helpWidth=17 like so:
		*   TTT  DDD DDDD
		*        DD DDD
		*
		* @param {string} term
		* @param {number} termWidth
		* @param {string} description
		* @param {Help} helper
		* @returns {string}
		*/
		formatItem(term, termWidth, description, helper) {
			const itemIndent = 2;
			const itemIndentStr = " ".repeat(itemIndent);
			if (!description) return itemIndentStr + term;
			const paddedTerm = term.padEnd(termWidth + term.length - helper.displayWidth(term));
			const spacerWidth = 2;
			const helpWidth = this.helpWidth ?? 80;
			const remainingWidth = helpWidth - termWidth - spacerWidth - itemIndent;
			let formattedDescription;
			if (remainingWidth < this.minWidthToWrap || helper.preformatted(description)) formattedDescription = description;
			else {
				const wrappedDescription = helper.boxWrap(description, remainingWidth);
				formattedDescription = wrappedDescription.replace(/\n/g, "\n" + " ".repeat(termWidth + spacerWidth));
			}
			return itemIndentStr + paddedTerm + " ".repeat(spacerWidth) + formattedDescription.replace(/\n/g, `\n${itemIndentStr}`);
		}
		/**
		* Wrap a string at whitespace, preserving existing line breaks.
		* Wrapping is skipped if the width is less than `minWidthToWrap`.
		*
		* @param {string} str
		* @param {number} width
		* @returns {string}
		*/
		boxWrap(str, width) {
			if (width < this.minWidthToWrap) return str;
			const rawLines = str.split(/\r\n|\n/);
			const chunkPattern = /[\s]*[^\s]+/g;
			const wrappedLines = [];
			rawLines.forEach((line) => {
				const chunks = line.match(chunkPattern);
				if (chunks === null) {
					wrappedLines.push("");
					return;
				}
				let sumChunks = [chunks.shift()];
				let sumWidth = this.displayWidth(sumChunks[0]);
				chunks.forEach((chunk) => {
					const visibleWidth = this.displayWidth(chunk);
					if (sumWidth + visibleWidth <= width) {
						sumChunks.push(chunk);
						sumWidth += visibleWidth;
						return;
					}
					wrappedLines.push(sumChunks.join(""));
					const nextChunk = chunk.trimStart();
					sumChunks = [nextChunk];
					sumWidth = this.displayWidth(nextChunk);
				});
				wrappedLines.push(sumChunks.join(""));
			});
			return wrappedLines.join("\n");
		}
	};
	/**
	* Strip style ANSI escape sequences from the string. In particular, SGR (Select Graphic Rendition) codes.
	*
	* @param {string} str
	* @returns {string}
	* @package
	*/
	function stripColor$1(str) {
		const sgrPattern = /\x1b\[\d*(;\d*)*m/g;
		return str.replace(sgrPattern, "");
	}
	exports.Help = Help$3;
	exports.stripColor = stripColor$1;
} });

//#endregion
//#region node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/option.js
var require_option = __commonJS$1({ "node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/option.js"(exports) {
	const { InvalidArgumentError: InvalidArgumentError$2 } = require_error();
	var Option$3 = class {
		/**
		* Initialize a new `Option` with the given `flags` and `description`.
		*
		* @param {string} flags
		* @param {string} [description]
		*/
		constructor(flags, description) {
			this.flags = flags;
			this.description = description || "";
			this.required = flags.includes("<");
			this.optional = flags.includes("[");
			this.variadic = /\w\.\.\.[>\]]$/.test(flags);
			this.mandatory = false;
			const optionFlags = splitOptionFlags(flags);
			this.short = optionFlags.shortFlag;
			this.long = optionFlags.longFlag;
			this.negate = false;
			if (this.long) this.negate = this.long.startsWith("--no-");
			this.defaultValue = void 0;
			this.defaultValueDescription = void 0;
			this.presetArg = void 0;
			this.envVar = void 0;
			this.parseArg = void 0;
			this.hidden = false;
			this.argChoices = void 0;
			this.conflictsWith = [];
			this.implied = void 0;
			this.helpGroupHeading = void 0;
		}
		/**
		* Set the default value, and optionally supply the description to be displayed in the help.
		*
		* @param {*} value
		* @param {string} [description]
		* @return {Option}
		*/
		default(value, description) {
			this.defaultValue = value;
			this.defaultValueDescription = description;
			return this;
		}
		/**
		* Preset to use when option used without option-argument, especially optional but also boolean and negated.
		* The custom processing (parseArg) is called.
		*
		* @example
		* new Option('--color').default('GREYSCALE').preset('RGB');
		* new Option('--donate [amount]').preset('20').argParser(parseFloat);
		*
		* @param {*} arg
		* @return {Option}
		*/
		preset(arg) {
			this.presetArg = arg;
			return this;
		}
		/**
		* Add option name(s) that conflict with this option.
		* An error will be displayed if conflicting options are found during parsing.
		*
		* @example
		* new Option('--rgb').conflicts('cmyk');
		* new Option('--js').conflicts(['ts', 'jsx']);
		*
		* @param {(string | string[])} names
		* @return {Option}
		*/
		conflicts(names) {
			this.conflictsWith = this.conflictsWith.concat(names);
			return this;
		}
		/**
		* Specify implied option values for when this option is set and the implied options are not.
		*
		* The custom processing (parseArg) is not called on the implied values.
		*
		* @example
		* program
		*   .addOption(new Option('--log', 'write logging information to file'))
		*   .addOption(new Option('--trace', 'log extra details').implies({ log: 'trace.txt' }));
		*
		* @param {object} impliedOptionValues
		* @return {Option}
		*/
		implies(impliedOptionValues) {
			let newImplied = impliedOptionValues;
			if (typeof impliedOptionValues === "string") newImplied = { [impliedOptionValues]: true };
			this.implied = Object.assign(this.implied || {}, newImplied);
			return this;
		}
		/**
		* Set environment variable to check for option value.
		*
		* An environment variable is only used if when processed the current option value is
		* undefined, or the source of the current value is 'default' or 'config' or 'env'.
		*
		* @param {string} name
		* @return {Option}
		*/
		env(name) {
			this.envVar = name;
			return this;
		}
		/**
		* Set the custom handler for processing CLI option arguments into option values.
		*
		* @param {Function} [fn]
		* @return {Option}
		*/
		argParser(fn) {
			this.parseArg = fn;
			return this;
		}
		/**
		* Whether the option is mandatory and must have a value after parsing.
		*
		* @param {boolean} [mandatory=true]
		* @return {Option}
		*/
		makeOptionMandatory(mandatory = true) {
			this.mandatory = !!mandatory;
			return this;
		}
		/**
		* Hide option in help.
		*
		* @param {boolean} [hide=true]
		* @return {Option}
		*/
		hideHelp(hide = true) {
			this.hidden = !!hide;
			return this;
		}
		/**
		* @package
		*/
		_concatValue(value, previous) {
			if (previous === this.defaultValue || !Array.isArray(previous)) return [value];
			return previous.concat(value);
		}
		/**
		* Only allow option value to be one of choices.
		*
		* @param {string[]} values
		* @return {Option}
		*/
		choices(values) {
			this.argChoices = values.slice();
			this.parseArg = (arg, previous) => {
				if (!this.argChoices.includes(arg)) throw new InvalidArgumentError$2(`Allowed choices are ${this.argChoices.join(", ")}.`);
				if (this.variadic) return this._concatValue(arg, previous);
				return arg;
			};
			return this;
		}
		/**
		* Return option name.
		*
		* @return {string}
		*/
		name() {
			if (this.long) return this.long.replace(/^--/, "");
			return this.short.replace(/^-/, "");
		}
		/**
		* Return option name, in a camelcase format that can be used
		* as an object attribute key.
		*
		* @return {string}
		*/
		attributeName() {
			if (this.negate) return camelcase(this.name().replace(/^no-/, ""));
			return camelcase(this.name());
		}
		/**
		* Set the help group heading.
		*
		* @param {string} heading
		* @return {Option}
		*/
		helpGroup(heading) {
			this.helpGroupHeading = heading;
			return this;
		}
		/**
		* Check if `arg` matches the short or long flag.
		*
		* @param {string} arg
		* @return {boolean}
		* @package
		*/
		is(arg) {
			return this.short === arg || this.long === arg;
		}
		/**
		* Return whether a boolean option.
		*
		* Options are one of boolean, negated, required argument, or optional argument.
		*
		* @return {boolean}
		* @package
		*/
		isBoolean() {
			return !this.required && !this.optional && !this.negate;
		}
	};
	/**
	* This class is to make it easier to work with dual options, without changing the existing
	* implementation. We support separate dual options for separate positive and negative options,
	* like `--build` and `--no-build`, which share a single option value. This works nicely for some
	* use cases, but is tricky for others where we want separate behaviours despite
	* the single shared option value.
	*/
	var DualOptions$1 = class {
		/**
		* @param {Option[]} options
		*/
		constructor(options) {
			this.positiveOptions = /* @__PURE__ */ new Map();
			this.negativeOptions = /* @__PURE__ */ new Map();
			this.dualOptions = /* @__PURE__ */ new Set();
			options.forEach((option) => {
				if (option.negate) this.negativeOptions.set(option.attributeName(), option);
				else this.positiveOptions.set(option.attributeName(), option);
			});
			this.negativeOptions.forEach((value, key) => {
				if (this.positiveOptions.has(key)) this.dualOptions.add(key);
			});
		}
		/**
		* Did the value come from the option, and not from possible matching dual option?
		*
		* @param {*} value
		* @param {Option} option
		* @returns {boolean}
		*/
		valueFromOption(value, option) {
			const optionKey = option.attributeName();
			if (!this.dualOptions.has(optionKey)) return true;
			const preset = this.negativeOptions.get(optionKey).presetArg;
			const negativeValue = preset !== void 0 ? preset : false;
			return option.negate === (negativeValue === value);
		}
	};
	/**
	* Convert string from kebab-case to camelCase.
	*
	* @param {string} str
	* @return {string}
	* @private
	*/
	function camelcase(str) {
		return str.split("-").reduce((str$1, word) => {
			return str$1 + word[0].toUpperCase() + word.slice(1);
		});
	}
	/**
	* Split the short and long flag out of something like '-m,--mixed <value>'
	*
	* @private
	*/
	function splitOptionFlags(flags) {
		let shortFlag;
		let longFlag;
		const shortFlagExp = /^-[^-]$/;
		const longFlagExp = /^--[^-]/;
		const flagParts = flags.split(/[ |,]+/).concat("guard");
		if (shortFlagExp.test(flagParts[0])) shortFlag = flagParts.shift();
		if (longFlagExp.test(flagParts[0])) longFlag = flagParts.shift();
		if (!shortFlag && shortFlagExp.test(flagParts[0])) shortFlag = flagParts.shift();
		if (!shortFlag && longFlagExp.test(flagParts[0])) {
			shortFlag = longFlag;
			longFlag = flagParts.shift();
		}
		if (flagParts[0].startsWith("-")) {
			const unsupportedFlag = flagParts[0];
			const baseError = `option creation failed due to '${unsupportedFlag}' in option flags '${flags}'`;
			if (/^-[^-][^-]/.test(unsupportedFlag)) throw new Error(`${baseError}
- a short flag is a single dash and a single character
  - either use a single dash and a single character (for a short flag)
  - or use a double dash for a long option (and can have two, like '--ws, --workspace')`);
			if (shortFlagExp.test(unsupportedFlag)) throw new Error(`${baseError}
- too many short flags`);
			if (longFlagExp.test(unsupportedFlag)) throw new Error(`${baseError}
- too many long flags`);
			throw new Error(`${baseError}
- unrecognised flag format`);
		}
		if (shortFlag === void 0 && longFlag === void 0) throw new Error(`option creation failed due to no flags found in '${flags}'.`);
		return {
			shortFlag,
			longFlag
		};
	}
	exports.Option = Option$3;
	exports.DualOptions = DualOptions$1;
} });

//#endregion
//#region node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/suggestSimilar.js
var require_suggestSimilar = __commonJS$1({ "node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/suggestSimilar.js"(exports) {
	const maxDistance = 3;
	function editDistance(a, b) {
		if (Math.abs(a.length - b.length) > maxDistance) return Math.max(a.length, b.length);
		const d$1 = [];
		for (let i = 0; i <= a.length; i++) d$1[i] = [i];
		for (let j = 0; j <= b.length; j++) d$1[0][j] = j;
		for (let j = 1; j <= b.length; j++) for (let i = 1; i <= a.length; i++) {
			let cost = 1;
			if (a[i - 1] === b[j - 1]) cost = 0;
			else cost = 1;
			d$1[i][j] = Math.min(d$1[i - 1][j] + 1, d$1[i][j - 1] + 1, d$1[i - 1][j - 1] + cost);
			if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d$1[i][j] = Math.min(d$1[i][j], d$1[i - 2][j - 2] + 1);
		}
		return d$1[a.length][b.length];
	}
	/**
	* Find close matches, restricted to same number of edits.
	*
	* @param {string} word
	* @param {string[]} candidates
	* @returns {string}
	*/
	function suggestSimilar$1(word, candidates) {
		if (!candidates || candidates.length === 0) return "";
		candidates = Array.from(new Set(candidates));
		const searchingOptions = word.startsWith("--");
		if (searchingOptions) {
			word = word.slice(2);
			candidates = candidates.map((candidate) => candidate.slice(2));
		}
		let similar = [];
		let bestDistance = maxDistance;
		const minSimilarity = .4;
		candidates.forEach((candidate) => {
			if (candidate.length <= 1) return;
			const distance = editDistance(word, candidate);
			const length = Math.max(word.length, candidate.length);
			const similarity = (length - distance) / length;
			if (similarity > minSimilarity) {
				if (distance < bestDistance) {
					bestDistance = distance;
					similar = [candidate];
				} else if (distance === bestDistance) similar.push(candidate);
			}
		});
		similar.sort((a, b) => a.localeCompare(b));
		if (searchingOptions) similar = similar.map((candidate) => `--${candidate}`);
		if (similar.length > 1) return `\n(Did you mean one of ${similar.join(", ")}?)`;
		if (similar.length === 1) return `\n(Did you mean ${similar[0]}?)`;
		return "";
	}
	exports.suggestSimilar = suggestSimilar$1;
} });

//#endregion
//#region node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/command.js
var require_command = __commonJS$1({ "node_modules/.pnpm/commander@14.0.0/node_modules/commander/lib/command.js"(exports) {
	const EventEmitter$1 = __require("node:events").EventEmitter;
	const childProcess$1 = __require("node:child_process");
	const path$1 = __require("node:path");
	const fs$2 = __require("node:fs");
	const process$2 = __require("node:process");
	const { Argument: Argument$2, humanReadableArgName } = require_argument();
	const { CommanderError: CommanderError$2 } = require_error();
	const { Help: Help$2, stripColor } = require_help();
	const { Option: Option$2, DualOptions } = require_option();
	const { suggestSimilar } = require_suggestSimilar();
	var Command$2 = class Command$2 extends EventEmitter$1 {
		/**
		* Initialize a new `Command`.
		*
		* @param {string} [name]
		*/
		constructor(name) {
			super();
			/** @type {Command[]} */
			this.commands = [];
			/** @type {Option[]} */
			this.options = [];
			this.parent = null;
			this._allowUnknownOption = false;
			this._allowExcessArguments = false;
			/** @type {Argument[]} */
			this.registeredArguments = [];
			this._args = this.registeredArguments;
			/** @type {string[]} */
			this.args = [];
			this.rawArgs = [];
			this.processedArgs = [];
			this._scriptPath = null;
			this._name = name || "";
			this._optionValues = {};
			this._optionValueSources = {};
			this._storeOptionsAsProperties = false;
			this._actionHandler = null;
			this._executableHandler = false;
			this._executableFile = null;
			this._executableDir = null;
			this._defaultCommandName = null;
			this._exitCallback = null;
			this._aliases = [];
			this._combineFlagAndOptionalValue = true;
			this._description = "";
			this._summary = "";
			this._argsDescription = void 0;
			this._enablePositionalOptions = false;
			this._passThroughOptions = false;
			this._lifeCycleHooks = {};
			/** @type {(boolean | string)} */
			this._showHelpAfterError = false;
			this._showSuggestionAfterError = true;
			this._savedState = null;
			this._outputConfiguration = {
				writeOut: (str) => process$2.stdout.write(str),
				writeErr: (str) => process$2.stderr.write(str),
				outputError: (str, write) => write(str),
				getOutHelpWidth: () => process$2.stdout.isTTY ? process$2.stdout.columns : void 0,
				getErrHelpWidth: () => process$2.stderr.isTTY ? process$2.stderr.columns : void 0,
				getOutHasColors: () => useColor() ?? (process$2.stdout.isTTY && process$2.stdout.hasColors?.()),
				getErrHasColors: () => useColor() ?? (process$2.stderr.isTTY && process$2.stderr.hasColors?.()),
				stripColor: (str) => stripColor(str)
			};
			this._hidden = false;
			/** @type {(Option | null | undefined)} */
			this._helpOption = void 0;
			this._addImplicitHelpCommand = void 0;
			/** @type {Command} */
			this._helpCommand = void 0;
			this._helpConfiguration = {};
			/** @type {string | undefined} */
			this._helpGroupHeading = void 0;
			/** @type {string | undefined} */
			this._defaultCommandGroup = void 0;
			/** @type {string | undefined} */
			this._defaultOptionGroup = void 0;
		}
		/**
		* Copy settings that are useful to have in common across root command and subcommands.
		*
		* (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
		*
		* @param {Command} sourceCommand
		* @return {Command} `this` command for chaining
		*/
		copyInheritedSettings(sourceCommand) {
			this._outputConfiguration = sourceCommand._outputConfiguration;
			this._helpOption = sourceCommand._helpOption;
			this._helpCommand = sourceCommand._helpCommand;
			this._helpConfiguration = sourceCommand._helpConfiguration;
			this._exitCallback = sourceCommand._exitCallback;
			this._storeOptionsAsProperties = sourceCommand._storeOptionsAsProperties;
			this._combineFlagAndOptionalValue = sourceCommand._combineFlagAndOptionalValue;
			this._allowExcessArguments = sourceCommand._allowExcessArguments;
			this._enablePositionalOptions = sourceCommand._enablePositionalOptions;
			this._showHelpAfterError = sourceCommand._showHelpAfterError;
			this._showSuggestionAfterError = sourceCommand._showSuggestionAfterError;
			return this;
		}
		/**
		* @returns {Command[]}
		* @private
		*/
		_getCommandAndAncestors() {
			const result = [];
			for (let command = this; command; command = command.parent) result.push(command);
			return result;
		}
		/**
		* Define a command.
		*
		* There are two styles of command: pay attention to where to put the description.
		*
		* @example
		* // Command implemented using action handler (description is supplied separately to `.command`)
		* program
		*   .command('clone <source> [destination]')
		*   .description('clone a repository into a newly created directory')
		*   .action((source, destination) => {
		*     console.log('clone command called');
		*   });
		*
		* // Command implemented using separate executable file (description is second parameter to `.command`)
		* program
		*   .command('start <service>', 'start named service')
		*   .command('stop [service]', 'stop named service, or all if no name supplied');
		*
		* @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
		* @param {(object | string)} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
		* @param {object} [execOpts] - configuration options (for executable)
		* @return {Command} returns new command for action handler, or `this` for executable command
		*/
		command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
			let desc = actionOptsOrExecDesc;
			let opts = execOpts;
			if (typeof desc === "object" && desc !== null) {
				opts = desc;
				desc = null;
			}
			opts = opts || {};
			const [, name, args] = nameAndArgs.match(/([^ ]+) *(.*)/);
			const cmd = this.createCommand(name);
			if (desc) {
				cmd.description(desc);
				cmd._executableHandler = true;
			}
			if (opts.isDefault) this._defaultCommandName = cmd._name;
			cmd._hidden = !!(opts.noHelp || opts.hidden);
			cmd._executableFile = opts.executableFile || null;
			if (args) cmd.arguments(args);
			this._registerCommand(cmd);
			cmd.parent = this;
			cmd.copyInheritedSettings(this);
			if (desc) return this;
			return cmd;
		}
		/**
		* Factory routine to create a new unattached command.
		*
		* See .command() for creating an attached subcommand, which uses this routine to
		* create the command. You can override createCommand to customise subcommands.
		*
		* @param {string} [name]
		* @return {Command} new command
		*/
		createCommand(name) {
			return new Command$2(name);
		}
		/**
		* You can customise the help with a subclass of Help by overriding createHelp,
		* or by overriding Help properties using configureHelp().
		*
		* @return {Help}
		*/
		createHelp() {
			return Object.assign(new Help$2(), this.configureHelp());
		}
		/**
		* You can customise the help by overriding Help properties using configureHelp(),
		* or with a subclass of Help by overriding createHelp().
		*
		* @param {object} [configuration] - configuration options
		* @return {(Command | object)} `this` command for chaining, or stored configuration
		*/
		configureHelp(configuration) {
			if (configuration === void 0) return this._helpConfiguration;
			this._helpConfiguration = configuration;
			return this;
		}
		/**
		* The default output goes to stdout and stderr. You can customise this for special
		* applications. You can also customise the display of errors by overriding outputError.
		*
		* The configuration properties are all functions:
		*
		*     // change how output being written, defaults to stdout and stderr
		*     writeOut(str)
		*     writeErr(str)
		*     // change how output being written for errors, defaults to writeErr
		*     outputError(str, write) // used for displaying errors and not used for displaying help
		*     // specify width for wrapping help
		*     getOutHelpWidth()
		*     getErrHelpWidth()
		*     // color support, currently only used with Help
		*     getOutHasColors()
		*     getErrHasColors()
		*     stripColor() // used to remove ANSI escape codes if output does not have colors
		*
		* @param {object} [configuration] - configuration options
		* @return {(Command | object)} `this` command for chaining, or stored configuration
		*/
		configureOutput(configuration) {
			if (configuration === void 0) return this._outputConfiguration;
			this._outputConfiguration = Object.assign({}, this._outputConfiguration, configuration);
			return this;
		}
		/**
		* Display the help or a custom message after an error occurs.
		*
		* @param {(boolean|string)} [displayHelp]
		* @return {Command} `this` command for chaining
		*/
		showHelpAfterError(displayHelp = true) {
			if (typeof displayHelp !== "string") displayHelp = !!displayHelp;
			this._showHelpAfterError = displayHelp;
			return this;
		}
		/**
		* Display suggestion of similar commands for unknown commands, or options for unknown options.
		*
		* @param {boolean} [displaySuggestion]
		* @return {Command} `this` command for chaining
		*/
		showSuggestionAfterError(displaySuggestion = true) {
			this._showSuggestionAfterError = !!displaySuggestion;
			return this;
		}
		/**
		* Add a prepared subcommand.
		*
		* See .command() for creating an attached subcommand which inherits settings from its parent.
		*
		* @param {Command} cmd - new subcommand
		* @param {object} [opts] - configuration options
		* @return {Command} `this` command for chaining
		*/
		addCommand(cmd, opts) {
			if (!cmd._name) throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
			opts = opts || {};
			if (opts.isDefault) this._defaultCommandName = cmd._name;
			if (opts.noHelp || opts.hidden) cmd._hidden = true;
			this._registerCommand(cmd);
			cmd.parent = this;
			cmd._checkForBrokenPassThrough();
			return this;
		}
		/**
		* Factory routine to create a new unattached argument.
		*
		* See .argument() for creating an attached argument, which uses this routine to
		* create the argument. You can override createArgument to return a custom argument.
		*
		* @param {string} name
		* @param {string} [description]
		* @return {Argument} new argument
		*/
		createArgument(name, description) {
			return new Argument$2(name, description);
		}
		/**
		* Define argument syntax for command.
		*
		* The default is that the argument is required, and you can explicitly
		* indicate this with <> around the name. Put [] around the name for an optional argument.
		*
		* @example
		* program.argument('<input-file>');
		* program.argument('[output-file]');
		*
		* @param {string} name
		* @param {string} [description]
		* @param {(Function|*)} [parseArg] - custom argument processing function or default value
		* @param {*} [defaultValue]
		* @return {Command} `this` command for chaining
		*/
		argument(name, description, parseArg, defaultValue) {
			const argument = this.createArgument(name, description);
			if (typeof parseArg === "function") argument.default(defaultValue).argParser(parseArg);
			else argument.default(parseArg);
			this.addArgument(argument);
			return this;
		}
		/**
		* Define argument syntax for command, adding multiple at once (without descriptions).
		*
		* See also .argument().
		*
		* @example
		* program.arguments('<cmd> [env]');
		*
		* @param {string} names
		* @return {Command} `this` command for chaining
		*/
		arguments(names) {
			names.trim().split(/ +/).forEach((detail) => {
				this.argument(detail);
			});
			return this;
		}
		/**
		* Define argument syntax for command, adding a prepared argument.
		*
		* @param {Argument} argument
		* @return {Command} `this` command for chaining
		*/
		addArgument(argument) {
			const previousArgument = this.registeredArguments.slice(-1)[0];
			if (previousArgument && previousArgument.variadic) throw new Error(`only the last argument can be variadic '${previousArgument.name()}'`);
			if (argument.required && argument.defaultValue !== void 0 && argument.parseArg === void 0) throw new Error(`a default value for a required argument is never used: '${argument.name()}'`);
			this.registeredArguments.push(argument);
			return this;
		}
		/**
		* Customise or override default help command. By default a help command is automatically added if your command has subcommands.
		*
		* @example
		*    program.helpCommand('help [cmd]');
		*    program.helpCommand('help [cmd]', 'show help');
		*    program.helpCommand(false); // suppress default help command
		*    program.helpCommand(true); // add help command even if no subcommands
		*
		* @param {string|boolean} enableOrNameAndArgs - enable with custom name and/or arguments, or boolean to override whether added
		* @param {string} [description] - custom description
		* @return {Command} `this` command for chaining
		*/
		helpCommand(enableOrNameAndArgs, description) {
			if (typeof enableOrNameAndArgs === "boolean") {
				this._addImplicitHelpCommand = enableOrNameAndArgs;
				if (enableOrNameAndArgs && this._defaultCommandGroup) this._initCommandGroup(this._getHelpCommand());
				return this;
			}
			const nameAndArgs = enableOrNameAndArgs ?? "help [command]";
			const [, helpName, helpArgs] = nameAndArgs.match(/([^ ]+) *(.*)/);
			const helpDescription = description ?? "display help for command";
			const helpCommand = this.createCommand(helpName);
			helpCommand.helpOption(false);
			if (helpArgs) helpCommand.arguments(helpArgs);
			if (helpDescription) helpCommand.description(helpDescription);
			this._addImplicitHelpCommand = true;
			this._helpCommand = helpCommand;
			if (enableOrNameAndArgs || description) this._initCommandGroup(helpCommand);
			return this;
		}
		/**
		* Add prepared custom help command.
		*
		* @param {(Command|string|boolean)} helpCommand - custom help command, or deprecated enableOrNameAndArgs as for `.helpCommand()`
		* @param {string} [deprecatedDescription] - deprecated custom description used with custom name only
		* @return {Command} `this` command for chaining
		*/
		addHelpCommand(helpCommand, deprecatedDescription) {
			if (typeof helpCommand !== "object") {
				this.helpCommand(helpCommand, deprecatedDescription);
				return this;
			}
			this._addImplicitHelpCommand = true;
			this._helpCommand = helpCommand;
			this._initCommandGroup(helpCommand);
			return this;
		}
		/**
		* Lazy create help command.
		*
		* @return {(Command|null)}
		* @package
		*/
		_getHelpCommand() {
			const hasImplicitHelpCommand = this._addImplicitHelpCommand ?? (this.commands.length && !this._actionHandler && !this._findCommand("help"));
			if (hasImplicitHelpCommand) {
				if (this._helpCommand === void 0) this.helpCommand(void 0, void 0);
				return this._helpCommand;
			}
			return null;
		}
		/**
		* Add hook for life cycle event.
		*
		* @param {string} event
		* @param {Function} listener
		* @return {Command} `this` command for chaining
		*/
		hook(event, listener) {
			const allowedValues = [
				"preSubcommand",
				"preAction",
				"postAction"
			];
			if (!allowedValues.includes(event)) throw new Error(`Unexpected value for event passed to hook : '${event}'.
Expecting one of '${allowedValues.join("', '")}'`);
			if (this._lifeCycleHooks[event]) this._lifeCycleHooks[event].push(listener);
			else this._lifeCycleHooks[event] = [listener];
			return this;
		}
		/**
		* Register callback to use as replacement for calling process.exit.
		*
		* @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
		* @return {Command} `this` command for chaining
		*/
		exitOverride(fn) {
			if (fn) this._exitCallback = fn;
			else this._exitCallback = (err) => {
				if (err.code !== "commander.executeSubCommandAsync") throw err;
			};
			return this;
		}
		/**
		* Call process.exit, and _exitCallback if defined.
		*
		* @param {number} exitCode exit code for using with process.exit
		* @param {string} code an id string representing the error
		* @param {string} message human-readable description of the error
		* @return never
		* @private
		*/
		_exit(exitCode, code, message) {
			if (this._exitCallback) this._exitCallback(new CommanderError$2(exitCode, code, message));
			process$2.exit(exitCode);
		}
		/**
		* Register callback `fn` for the command.
		*
		* @example
		* program
		*   .command('serve')
		*   .description('start service')
		*   .action(function() {
		*      // do work here
		*   });
		*
		* @param {Function} fn
		* @return {Command} `this` command for chaining
		*/
		action(fn) {
			const listener = (args) => {
				const expectedArgsCount = this.registeredArguments.length;
				const actionArgs = args.slice(0, expectedArgsCount);
				if (this._storeOptionsAsProperties) actionArgs[expectedArgsCount] = this;
				else actionArgs[expectedArgsCount] = this.opts();
				actionArgs.push(this);
				return fn.apply(this, actionArgs);
			};
			this._actionHandler = listener;
			return this;
		}
		/**
		* Factory routine to create a new unattached option.
		*
		* See .option() for creating an attached option, which uses this routine to
		* create the option. You can override createOption to return a custom option.
		*
		* @param {string} flags
		* @param {string} [description]
		* @return {Option} new option
		*/
		createOption(flags, description) {
			return new Option$2(flags, description);
		}
		/**
		* Wrap parseArgs to catch 'commander.invalidArgument'.
		*
		* @param {(Option | Argument)} target
		* @param {string} value
		* @param {*} previous
		* @param {string} invalidArgumentMessage
		* @private
		*/
		_callParseArg(target, value, previous, invalidArgumentMessage) {
			try {
				return target.parseArg(value, previous);
			} catch (err) {
				if (err.code === "commander.invalidArgument") {
					const message = `${invalidArgumentMessage} ${err.message}`;
					this.error(message, {
						exitCode: err.exitCode,
						code: err.code
					});
				}
				throw err;
			}
		}
		/**
		* Check for option flag conflicts.
		* Register option if no conflicts found, or throw on conflict.
		*
		* @param {Option} option
		* @private
		*/
		_registerOption(option) {
			const matchingOption = option.short && this._findOption(option.short) || option.long && this._findOption(option.long);
			if (matchingOption) {
				const matchingFlag = option.long && this._findOption(option.long) ? option.long : option.short;
				throw new Error(`Cannot add option '${option.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${matchingFlag}'
-  already used by option '${matchingOption.flags}'`);
			}
			this._initOptionGroup(option);
			this.options.push(option);
		}
		/**
		* Check for command name and alias conflicts with existing commands.
		* Register command if no conflicts found, or throw on conflict.
		*
		* @param {Command} command
		* @private
		*/
		_registerCommand(command) {
			const knownBy = (cmd) => {
				return [cmd.name()].concat(cmd.aliases());
			};
			const alreadyUsed = knownBy(command).find((name) => this._findCommand(name));
			if (alreadyUsed) {
				const existingCmd = knownBy(this._findCommand(alreadyUsed)).join("|");
				const newCmd = knownBy(command).join("|");
				throw new Error(`cannot add command '${newCmd}' as already have command '${existingCmd}'`);
			}
			this._initCommandGroup(command);
			this.commands.push(command);
		}
		/**
		* Add an option.
		*
		* @param {Option} option
		* @return {Command} `this` command for chaining
		*/
		addOption(option) {
			this._registerOption(option);
			const oname = option.name();
			const name = option.attributeName();
			if (option.negate) {
				const positiveLongFlag = option.long.replace(/^--no-/, "--");
				if (!this._findOption(positiveLongFlag)) this.setOptionValueWithSource(name, option.defaultValue === void 0 ? true : option.defaultValue, "default");
			} else if (option.defaultValue !== void 0) this.setOptionValueWithSource(name, option.defaultValue, "default");
			const handleOptionValue = (val, invalidValueMessage, valueSource) => {
				if (val == null && option.presetArg !== void 0) val = option.presetArg;
				const oldValue = this.getOptionValue(name);
				if (val !== null && option.parseArg) val = this._callParseArg(option, val, oldValue, invalidValueMessage);
				else if (val !== null && option.variadic) val = option._concatValue(val, oldValue);
				if (val == null) if (option.negate) val = false;
				else if (option.isBoolean() || option.optional) val = true;
				else val = "";
				this.setOptionValueWithSource(name, val, valueSource);
			};
			this.on("option:" + oname, (val) => {
				const invalidValueMessage = `error: option '${option.flags}' argument '${val}' is invalid.`;
				handleOptionValue(val, invalidValueMessage, "cli");
			});
			if (option.envVar) this.on("optionEnv:" + oname, (val) => {
				const invalidValueMessage = `error: option '${option.flags}' value '${val}' from env '${option.envVar}' is invalid.`;
				handleOptionValue(val, invalidValueMessage, "env");
			});
			return this;
		}
		/**
		* Internal implementation shared by .option() and .requiredOption()
		*
		* @return {Command} `this` command for chaining
		* @private
		*/
		_optionEx(config, flags, description, fn, defaultValue) {
			if (typeof flags === "object" && flags instanceof Option$2) throw new Error("To add an Option object use addOption() instead of option() or requiredOption()");
			const option = this.createOption(flags, description);
			option.makeOptionMandatory(!!config.mandatory);
			if (typeof fn === "function") option.default(defaultValue).argParser(fn);
			else if (fn instanceof RegExp) {
				const regex = fn;
				fn = (val, def) => {
					const m$1 = regex.exec(val);
					return m$1 ? m$1[0] : def;
				};
				option.default(defaultValue).argParser(fn);
			} else option.default(fn);
			return this.addOption(option);
		}
		/**
		* Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.
		*
		* The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
		* option-argument is indicated by `<>` and an optional option-argument by `[]`.
		*
		* See the README for more details, and see also addOption() and requiredOption().
		*
		* @example
		* program
		*     .option('-p, --pepper', 'add pepper')
		*     .option('--pt, --pizza-type <TYPE>', 'type of pizza') // required option-argument
		*     .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
		*     .option('-t, --tip <VALUE>', 'add tip to purchase cost', parseFloat) // custom parse function
		*
		* @param {string} flags
		* @param {string} [description]
		* @param {(Function|*)} [parseArg] - custom option processing function or default value
		* @param {*} [defaultValue]
		* @return {Command} `this` command for chaining
		*/
		option(flags, description, parseArg, defaultValue) {
			return this._optionEx({}, flags, description, parseArg, defaultValue);
		}
		/**
		* Add a required option which must have a value after parsing. This usually means
		* the option must be specified on the command line. (Otherwise the same as .option().)
		*
		* The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
		*
		* @param {string} flags
		* @param {string} [description]
		* @param {(Function|*)} [parseArg] - custom option processing function or default value
		* @param {*} [defaultValue]
		* @return {Command} `this` command for chaining
		*/
		requiredOption(flags, description, parseArg, defaultValue) {
			return this._optionEx({ mandatory: true }, flags, description, parseArg, defaultValue);
		}
		/**
		* Alter parsing of short flags with optional values.
		*
		* @example
		* // for `.option('-f,--flag [value]'):
		* program.combineFlagAndOptionalValue(true);  // `-f80` is treated like `--flag=80`, this is the default behaviour
		* program.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
		*
		* @param {boolean} [combine] - if `true` or omitted, an optional value can be specified directly after the flag.
		* @return {Command} `this` command for chaining
		*/
		combineFlagAndOptionalValue(combine = true) {
			this._combineFlagAndOptionalValue = !!combine;
			return this;
		}
		/**
		* Allow unknown options on the command line.
		*
		* @param {boolean} [allowUnknown] - if `true` or omitted, no error will be thrown for unknown options.
		* @return {Command} `this` command for chaining
		*/
		allowUnknownOption(allowUnknown = true) {
			this._allowUnknownOption = !!allowUnknown;
			return this;
		}
		/**
		* Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
		*
		* @param {boolean} [allowExcess] - if `true` or omitted, no error will be thrown for excess arguments.
		* @return {Command} `this` command for chaining
		*/
		allowExcessArguments(allowExcess = true) {
			this._allowExcessArguments = !!allowExcess;
			return this;
		}
		/**
		* Enable positional options. Positional means global options are specified before subcommands which lets
		* subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
		* The default behaviour is non-positional and global options may appear anywhere on the command line.
		*
		* @param {boolean} [positional]
		* @return {Command} `this` command for chaining
		*/
		enablePositionalOptions(positional = true) {
			this._enablePositionalOptions = !!positional;
			return this;
		}
		/**
		* Pass through options that come after command-arguments rather than treat them as command-options,
		* so actual command-options come before command-arguments. Turning this on for a subcommand requires
		* positional options to have been enabled on the program (parent commands).
		* The default behaviour is non-positional and options may appear before or after command-arguments.
		*
		* @param {boolean} [passThrough] for unknown options.
		* @return {Command} `this` command for chaining
		*/
		passThroughOptions(passThrough = true) {
			this._passThroughOptions = !!passThrough;
			this._checkForBrokenPassThrough();
			return this;
		}
		/**
		* @private
		*/
		_checkForBrokenPassThrough() {
			if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions) throw new Error(`passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`);
		}
		/**
		* Whether to store option values as properties on command object,
		* or store separately (specify false). In both cases the option values can be accessed using .opts().
		*
		* @param {boolean} [storeAsProperties=true]
		* @return {Command} `this` command for chaining
		*/
		storeOptionsAsProperties(storeAsProperties = true) {
			if (this.options.length) throw new Error("call .storeOptionsAsProperties() before adding options");
			if (Object.keys(this._optionValues).length) throw new Error("call .storeOptionsAsProperties() before setting option values");
			this._storeOptionsAsProperties = !!storeAsProperties;
			return this;
		}
		/**
		* Retrieve option value.
		*
		* @param {string} key
		* @return {object} value
		*/
		getOptionValue(key) {
			if (this._storeOptionsAsProperties) return this[key];
			return this._optionValues[key];
		}
		/**
		* Store option value.
		*
		* @param {string} key
		* @param {object} value
		* @return {Command} `this` command for chaining
		*/
		setOptionValue(key, value) {
			return this.setOptionValueWithSource(key, value, void 0);
		}
		/**
		* Store option value and where the value came from.
		*
		* @param {string} key
		* @param {object} value
		* @param {string} source - expected values are default/config/env/cli/implied
		* @return {Command} `this` command for chaining
		*/
		setOptionValueWithSource(key, value, source) {
			if (this._storeOptionsAsProperties) this[key] = value;
			else this._optionValues[key] = value;
			this._optionValueSources[key] = source;
			return this;
		}
		/**
		* Get source of option value.
		* Expected values are default | config | env | cli | implied
		*
		* @param {string} key
		* @return {string}
		*/
		getOptionValueSource(key) {
			return this._optionValueSources[key];
		}
		/**
		* Get source of option value. See also .optsWithGlobals().
		* Expected values are default | config | env | cli | implied
		*
		* @param {string} key
		* @return {string}
		*/
		getOptionValueSourceWithGlobals(key) {
			let source;
			this._getCommandAndAncestors().forEach((cmd) => {
				if (cmd.getOptionValueSource(key) !== void 0) source = cmd.getOptionValueSource(key);
			});
			return source;
		}
		/**
		* Get user arguments from implied or explicit arguments.
		* Side-effects: set _scriptPath if args included script. Used for default program name, and subcommand searches.
		*
		* @private
		*/
		_prepareUserArgs(argv, parseOptions) {
			if (argv !== void 0 && !Array.isArray(argv)) throw new Error("first parameter to parse must be array or undefined");
			parseOptions = parseOptions || {};
			if (argv === void 0 && parseOptions.from === void 0) {
				if (process$2.versions?.electron) parseOptions.from = "electron";
				const execArgv = process$2.execArgv ?? [];
				if (execArgv.includes("-e") || execArgv.includes("--eval") || execArgv.includes("-p") || execArgv.includes("--print")) parseOptions.from = "eval";
			}
			if (argv === void 0) argv = process$2.argv;
			this.rawArgs = argv.slice();
			let userArgs;
			switch (parseOptions.from) {
				case void 0:
				case "node":
					this._scriptPath = argv[1];
					userArgs = argv.slice(2);
					break;
				case "electron":
					if (process$2.defaultApp) {
						this._scriptPath = argv[1];
						userArgs = argv.slice(2);
					} else userArgs = argv.slice(1);
					break;
				case "user":
					userArgs = argv.slice(0);
					break;
				case "eval":
					userArgs = argv.slice(1);
					break;
				default: throw new Error(`unexpected parse option { from: '${parseOptions.from}' }`);
			}
			if (!this._name && this._scriptPath) this.nameFromFilename(this._scriptPath);
			this._name = this._name || "program";
			return userArgs;
		}
		/**
		* Parse `argv`, setting options and invoking commands when defined.
		*
		* Use parseAsync instead of parse if any of your action handlers are async.
		*
		* Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
		*
		* Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
		* - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
		* - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
		* - `'user'`: just user arguments
		*
		* @example
		* program.parse(); // parse process.argv and auto-detect electron and special node flags
		* program.parse(process.argv); // assume argv[0] is app and argv[1] is script
		* program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
		*
		* @param {string[]} [argv] - optional, defaults to process.argv
		* @param {object} [parseOptions] - optionally specify style of options with from: node/user/electron
		* @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
		* @return {Command} `this` command for chaining
		*/
		parse(argv, parseOptions) {
			this._prepareForParse();
			const userArgs = this._prepareUserArgs(argv, parseOptions);
			this._parseCommand([], userArgs);
			return this;
		}
		/**
		* Parse `argv`, setting options and invoking commands when defined.
		*
		* Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
		*
		* Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
		* - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
		* - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
		* - `'user'`: just user arguments
		*
		* @example
		* await program.parseAsync(); // parse process.argv and auto-detect electron and special node flags
		* await program.parseAsync(process.argv); // assume argv[0] is app and argv[1] is script
		* await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
		*
		* @param {string[]} [argv]
		* @param {object} [parseOptions]
		* @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
		* @return {Promise}
		*/
		async parseAsync(argv, parseOptions) {
			this._prepareForParse();
			const userArgs = this._prepareUserArgs(argv, parseOptions);
			await this._parseCommand([], userArgs);
			return this;
		}
		_prepareForParse() {
			if (this._savedState === null) this.saveStateBeforeParse();
			else this.restoreStateBeforeParse();
		}
		/**
		* Called the first time parse is called to save state and allow a restore before subsequent calls to parse.
		* Not usually called directly, but available for subclasses to save their custom state.
		*
		* This is called in a lazy way. Only commands used in parsing chain will have state saved.
		*/
		saveStateBeforeParse() {
			this._savedState = {
				_name: this._name,
				_optionValues: { ...this._optionValues },
				_optionValueSources: { ...this._optionValueSources }
			};
		}
		/**
		* Restore state before parse for calls after the first.
		* Not usually called directly, but available for subclasses to save their custom state.
		*
		* This is called in a lazy way. Only commands used in parsing chain will have state restored.
		*/
		restoreStateBeforeParse() {
			if (this._storeOptionsAsProperties) throw new Error(`Can not call parse again when storeOptionsAsProperties is true.
- either make a new Command for each call to parse, or stop storing options as properties`);
			this._name = this._savedState._name;
			this._scriptPath = null;
			this.rawArgs = [];
			this._optionValues = { ...this._savedState._optionValues };
			this._optionValueSources = { ...this._savedState._optionValueSources };
			this.args = [];
			this.processedArgs = [];
		}
		/**
		* Throw if expected executable is missing. Add lots of help for author.
		*
		* @param {string} executableFile
		* @param {string} executableDir
		* @param {string} subcommandName
		*/
		_checkForMissingExecutable(executableFile, executableDir, subcommandName) {
			if (fs$2.existsSync(executableFile)) return;
			const executableDirMessage = executableDir ? `searched for local subcommand relative to directory '${executableDir}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory";
			const executableMissing = `'${executableFile}' does not exist
 - if '${subcommandName}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${executableDirMessage}`;
			throw new Error(executableMissing);
		}
		/**
		* Execute a sub-command executable.
		*
		* @private
		*/
		_executeSubCommand(subcommand, args) {
			args = args.slice();
			let launchWithNode = false;
			const sourceExt = [
				".js",
				".ts",
				".tsx",
				".mjs",
				".cjs"
			];
			function findFile(baseDir, baseName) {
				const localBin = path$1.resolve(baseDir, baseName);
				if (fs$2.existsSync(localBin)) return localBin;
				if (sourceExt.includes(path$1.extname(baseName))) return void 0;
				const foundExt = sourceExt.find((ext) => fs$2.existsSync(`${localBin}${ext}`));
				if (foundExt) return `${localBin}${foundExt}`;
				return void 0;
			}
			this._checkForMissingMandatoryOptions();
			this._checkForConflictingOptions();
			let executableFile = subcommand._executableFile || `${this._name}-${subcommand._name}`;
			let executableDir = this._executableDir || "";
			if (this._scriptPath) {
				let resolvedScriptPath;
				try {
					resolvedScriptPath = fs$2.realpathSync(this._scriptPath);
				} catch {
					resolvedScriptPath = this._scriptPath;
				}
				executableDir = path$1.resolve(path$1.dirname(resolvedScriptPath), executableDir);
			}
			if (executableDir) {
				let localFile = findFile(executableDir, executableFile);
				if (!localFile && !subcommand._executableFile && this._scriptPath) {
					const legacyName = path$1.basename(this._scriptPath, path$1.extname(this._scriptPath));
					if (legacyName !== this._name) localFile = findFile(executableDir, `${legacyName}-${subcommand._name}`);
				}
				executableFile = localFile || executableFile;
			}
			launchWithNode = sourceExt.includes(path$1.extname(executableFile));
			let proc;
			if (process$2.platform !== "win32") if (launchWithNode) {
				args.unshift(executableFile);
				args = incrementNodeInspectorPort(process$2.execArgv).concat(args);
				proc = childProcess$1.spawn(process$2.argv[0], args, { stdio: "inherit" });
			} else proc = childProcess$1.spawn(executableFile, args, { stdio: "inherit" });
			else {
				this._checkForMissingExecutable(executableFile, executableDir, subcommand._name);
				args.unshift(executableFile);
				args = incrementNodeInspectorPort(process$2.execArgv).concat(args);
				proc = childProcess$1.spawn(process$2.execPath, args, { stdio: "inherit" });
			}
			if (!proc.killed) {
				const signals = [
					"SIGUSR1",
					"SIGUSR2",
					"SIGTERM",
					"SIGINT",
					"SIGHUP"
				];
				signals.forEach((signal) => {
					process$2.on(signal, () => {
						if (proc.killed === false && proc.exitCode === null) proc.kill(signal);
					});
				});
			}
			const exitCallback = this._exitCallback;
			proc.on("close", (code) => {
				code = code ?? 1;
				if (!exitCallback) process$2.exit(code);
				else exitCallback(new CommanderError$2(code, "commander.executeSubCommandAsync", "(close)"));
			});
			proc.on("error", (err) => {
				if (err.code === "ENOENT") this._checkForMissingExecutable(executableFile, executableDir, subcommand._name);
				else if (err.code === "EACCES") throw new Error(`'${executableFile}' not executable`);
				if (!exitCallback) process$2.exit(1);
				else {
					const wrappedError = new CommanderError$2(1, "commander.executeSubCommandAsync", "(error)");
					wrappedError.nestedError = err;
					exitCallback(wrappedError);
				}
			});
			this.runningCommand = proc;
		}
		/**
		* @private
		*/
		_dispatchSubcommand(commandName, operands, unknown) {
			const subCommand = this._findCommand(commandName);
			if (!subCommand) this.help({ error: true });
			subCommand._prepareForParse();
			let promiseChain;
			promiseChain = this._chainOrCallSubCommandHook(promiseChain, subCommand, "preSubcommand");
			promiseChain = this._chainOrCall(promiseChain, () => {
				if (subCommand._executableHandler) this._executeSubCommand(subCommand, operands.concat(unknown));
				else return subCommand._parseCommand(operands, unknown);
			});
			return promiseChain;
		}
		/**
		* Invoke help directly if possible, or dispatch if necessary.
		* e.g. help foo
		*
		* @private
		*/
		_dispatchHelpCommand(subcommandName) {
			if (!subcommandName) this.help();
			const subCommand = this._findCommand(subcommandName);
			if (subCommand && !subCommand._executableHandler) subCommand.help();
			return this._dispatchSubcommand(subcommandName, [], [this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? "--help"]);
		}
		/**
		* Check this.args against expected this.registeredArguments.
		*
		* @private
		*/
		_checkNumberOfArguments() {
			this.registeredArguments.forEach((arg, i) => {
				if (arg.required && this.args[i] == null) this.missingArgument(arg.name());
			});
			if (this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) return;
			if (this.args.length > this.registeredArguments.length) this._excessArguments(this.args);
		}
		/**
		* Process this.args using this.registeredArguments and save as this.processedArgs!
		*
		* @private
		*/
		_processArguments() {
			const myParseArg = (argument, value, previous) => {
				let parsedValue = value;
				if (value !== null && argument.parseArg) {
					const invalidValueMessage = `error: command-argument value '${value}' is invalid for argument '${argument.name()}'.`;
					parsedValue = this._callParseArg(argument, value, previous, invalidValueMessage);
				}
				return parsedValue;
			};
			this._checkNumberOfArguments();
			const processedArgs = [];
			this.registeredArguments.forEach((declaredArg, index) => {
				let value = declaredArg.defaultValue;
				if (declaredArg.variadic) {
					if (index < this.args.length) {
						value = this.args.slice(index);
						if (declaredArg.parseArg) value = value.reduce((processed, v) => {
							return myParseArg(declaredArg, v, processed);
						}, declaredArg.defaultValue);
					} else if (value === void 0) value = [];
				} else if (index < this.args.length) {
					value = this.args[index];
					if (declaredArg.parseArg) value = myParseArg(declaredArg, value, declaredArg.defaultValue);
				}
				processedArgs[index] = value;
			});
			this.processedArgs = processedArgs;
		}
		/**
		* Once we have a promise we chain, but call synchronously until then.
		*
		* @param {(Promise|undefined)} promise
		* @param {Function} fn
		* @return {(Promise|undefined)}
		* @private
		*/
		_chainOrCall(promise, fn) {
			if (promise && promise.then && typeof promise.then === "function") return promise.then(() => fn());
			return fn();
		}
		/**
		*
		* @param {(Promise|undefined)} promise
		* @param {string} event
		* @return {(Promise|undefined)}
		* @private
		*/
		_chainOrCallHooks(promise, event) {
			let result = promise;
			const hooks = [];
			this._getCommandAndAncestors().reverse().filter((cmd) => cmd._lifeCycleHooks[event] !== void 0).forEach((hookedCommand) => {
				hookedCommand._lifeCycleHooks[event].forEach((callback) => {
					hooks.push({
						hookedCommand,
						callback
					});
				});
			});
			if (event === "postAction") hooks.reverse();
			hooks.forEach((hookDetail) => {
				result = this._chainOrCall(result, () => {
					return hookDetail.callback(hookDetail.hookedCommand, this);
				});
			});
			return result;
		}
		/**
		*
		* @param {(Promise|undefined)} promise
		* @param {Command} subCommand
		* @param {string} event
		* @return {(Promise|undefined)}
		* @private
		*/
		_chainOrCallSubCommandHook(promise, subCommand, event) {
			let result = promise;
			if (this._lifeCycleHooks[event] !== void 0) this._lifeCycleHooks[event].forEach((hook) => {
				result = this._chainOrCall(result, () => {
					return hook(this, subCommand);
				});
			});
			return result;
		}
		/**
		* Process arguments in context of this command.
		* Returns action result, in case it is a promise.
		*
		* @private
		*/
		_parseCommand(operands, unknown) {
			const parsed = this.parseOptions(unknown);
			this._parseOptionsEnv();
			this._parseOptionsImplied();
			operands = operands.concat(parsed.operands);
			unknown = parsed.unknown;
			this.args = operands.concat(unknown);
			if (operands && this._findCommand(operands[0])) return this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
			if (this._getHelpCommand() && operands[0] === this._getHelpCommand().name()) return this._dispatchHelpCommand(operands[1]);
			if (this._defaultCommandName) {
				this._outputHelpIfRequested(unknown);
				return this._dispatchSubcommand(this._defaultCommandName, operands, unknown);
			}
			if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) this.help({ error: true });
			this._outputHelpIfRequested(parsed.unknown);
			this._checkForMissingMandatoryOptions();
			this._checkForConflictingOptions();
			const checkForUnknownOptions = () => {
				if (parsed.unknown.length > 0) this.unknownOption(parsed.unknown[0]);
			};
			const commandEvent = `command:${this.name()}`;
			if (this._actionHandler) {
				checkForUnknownOptions();
				this._processArguments();
				let promiseChain;
				promiseChain = this._chainOrCallHooks(promiseChain, "preAction");
				promiseChain = this._chainOrCall(promiseChain, () => this._actionHandler(this.processedArgs));
				if (this.parent) promiseChain = this._chainOrCall(promiseChain, () => {
					this.parent.emit(commandEvent, operands, unknown);
				});
				promiseChain = this._chainOrCallHooks(promiseChain, "postAction");
				return promiseChain;
			}
			if (this.parent && this.parent.listenerCount(commandEvent)) {
				checkForUnknownOptions();
				this._processArguments();
				this.parent.emit(commandEvent, operands, unknown);
			} else if (operands.length) {
				if (this._findCommand("*")) return this._dispatchSubcommand("*", operands, unknown);
				if (this.listenerCount("command:*")) this.emit("command:*", operands, unknown);
				else if (this.commands.length) this.unknownCommand();
				else {
					checkForUnknownOptions();
					this._processArguments();
				}
			} else if (this.commands.length) {
				checkForUnknownOptions();
				this.help({ error: true });
			} else {
				checkForUnknownOptions();
				this._processArguments();
			}
		}
		/**
		* Find matching command.
		*
		* @private
		* @return {Command | undefined}
		*/
		_findCommand(name) {
			if (!name) return void 0;
			return this.commands.find((cmd) => cmd._name === name || cmd._aliases.includes(name));
		}
		/**
		* Return an option matching `arg` if any.
		*
		* @param {string} arg
		* @return {Option}
		* @package
		*/
		_findOption(arg) {
			return this.options.find((option) => option.is(arg));
		}
		/**
		* Display an error message if a mandatory option does not have a value.
		* Called after checking for help flags in leaf subcommand.
		*
		* @private
		*/
		_checkForMissingMandatoryOptions() {
			this._getCommandAndAncestors().forEach((cmd) => {
				cmd.options.forEach((anOption) => {
					if (anOption.mandatory && cmd.getOptionValue(anOption.attributeName()) === void 0) cmd.missingMandatoryOptionValue(anOption);
				});
			});
		}
		/**
		* Display an error message if conflicting options are used together in this.
		*
		* @private
		*/
		_checkForConflictingLocalOptions() {
			const definedNonDefaultOptions = this.options.filter((option) => {
				const optionKey = option.attributeName();
				if (this.getOptionValue(optionKey) === void 0) return false;
				return this.getOptionValueSource(optionKey) !== "default";
			});
			const optionsWithConflicting = definedNonDefaultOptions.filter((option) => option.conflictsWith.length > 0);
			optionsWithConflicting.forEach((option) => {
				const conflictingAndDefined = definedNonDefaultOptions.find((defined) => option.conflictsWith.includes(defined.attributeName()));
				if (conflictingAndDefined) this._conflictingOption(option, conflictingAndDefined);
			});
		}
		/**
		* Display an error message if conflicting options are used together.
		* Called after checking for help flags in leaf subcommand.
		*
		* @private
		*/
		_checkForConflictingOptions() {
			this._getCommandAndAncestors().forEach((cmd) => {
				cmd._checkForConflictingLocalOptions();
			});
		}
		/**
		* Parse options from `argv` removing known options,
		* and return argv split into operands and unknown arguments.
		*
		* Side effects: modifies command by storing options. Does not reset state if called again.
		*
		* Examples:
		*
		*     argv => operands, unknown
		*     --known kkk op => [op], []
		*     op --known kkk => [op], []
		*     sub --unknown uuu op => [sub], [--unknown uuu op]
		*     sub -- --unknown uuu op => [sub --unknown uuu op], []
		*
		* @param {string[]} argv
		* @return {{operands: string[], unknown: string[]}}
		*/
		parseOptions(argv) {
			const operands = [];
			const unknown = [];
			let dest = operands;
			const args = argv.slice();
			function maybeOption(arg) {
				return arg.length > 1 && arg[0] === "-";
			}
			const negativeNumberArg = (arg) => {
				if (!/^-\d*\.?\d+(e[+-]?\d+)?$/.test(arg)) return false;
				return !this._getCommandAndAncestors().some((cmd) => cmd.options.map((opt) => opt.short).some((short) => /^-\d$/.test(short)));
			};
			let activeVariadicOption = null;
			while (args.length) {
				const arg = args.shift();
				if (arg === "--") {
					if (dest === unknown) dest.push(arg);
					dest.push(...args);
					break;
				}
				if (activeVariadicOption && (!maybeOption(arg) || negativeNumberArg(arg))) {
					this.emit(`option:${activeVariadicOption.name()}`, arg);
					continue;
				}
				activeVariadicOption = null;
				if (maybeOption(arg)) {
					const option = this._findOption(arg);
					if (option) {
						if (option.required) {
							const value = args.shift();
							if (value === void 0) this.optionMissingArgument(option);
							this.emit(`option:${option.name()}`, value);
						} else if (option.optional) {
							let value = null;
							if (args.length > 0 && (!maybeOption(args[0]) || negativeNumberArg(args[0]))) value = args.shift();
							this.emit(`option:${option.name()}`, value);
						} else this.emit(`option:${option.name()}`);
						activeVariadicOption = option.variadic ? option : null;
						continue;
					}
				}
				if (arg.length > 2 && arg[0] === "-" && arg[1] !== "-") {
					const option = this._findOption(`-${arg[1]}`);
					if (option) {
						if (option.required || option.optional && this._combineFlagAndOptionalValue) this.emit(`option:${option.name()}`, arg.slice(2));
						else {
							this.emit(`option:${option.name()}`);
							args.unshift(`-${arg.slice(2)}`);
						}
						continue;
					}
				}
				if (/^--[^=]+=/.test(arg)) {
					const index = arg.indexOf("=");
					const option = this._findOption(arg.slice(0, index));
					if (option && (option.required || option.optional)) {
						this.emit(`option:${option.name()}`, arg.slice(index + 1));
						continue;
					}
				}
				if (dest === operands && maybeOption(arg) && !(this.commands.length === 0 && negativeNumberArg(arg))) dest = unknown;
				if ((this._enablePositionalOptions || this._passThroughOptions) && operands.length === 0 && unknown.length === 0) {
					if (this._findCommand(arg)) {
						operands.push(arg);
						if (args.length > 0) unknown.push(...args);
						break;
					} else if (this._getHelpCommand() && arg === this._getHelpCommand().name()) {
						operands.push(arg);
						if (args.length > 0) operands.push(...args);
						break;
					} else if (this._defaultCommandName) {
						unknown.push(arg);
						if (args.length > 0) unknown.push(...args);
						break;
					}
				}
				if (this._passThroughOptions) {
					dest.push(arg);
					if (args.length > 0) dest.push(...args);
					break;
				}
				dest.push(arg);
			}
			return {
				operands,
				unknown
			};
		}
		/**
		* Return an object containing local option values as key-value pairs.
		*
		* @return {object}
		*/
		opts() {
			if (this._storeOptionsAsProperties) {
				const result = {};
				const len = this.options.length;
				for (let i = 0; i < len; i++) {
					const key = this.options[i].attributeName();
					result[key] = key === this._versionOptionName ? this._version : this[key];
				}
				return result;
			}
			return this._optionValues;
		}
		/**
		* Return an object containing merged local and global option values as key-value pairs.
		*
		* @return {object}
		*/
		optsWithGlobals() {
			return this._getCommandAndAncestors().reduce((combinedOptions, cmd) => Object.assign(combinedOptions, cmd.opts()), {});
		}
		/**
		* Display error message and exit (or call exitOverride).
		*
		* @param {string} message
		* @param {object} [errorOptions]
		* @param {string} [errorOptions.code] - an id string representing the error
		* @param {number} [errorOptions.exitCode] - used with process.exit
		*/
		error(message, errorOptions) {
			this._outputConfiguration.outputError(`${message}\n`, this._outputConfiguration.writeErr);
			if (typeof this._showHelpAfterError === "string") this._outputConfiguration.writeErr(`${this._showHelpAfterError}\n`);
			else if (this._showHelpAfterError) {
				this._outputConfiguration.writeErr("\n");
				this.outputHelp({ error: true });
			}
			const config = errorOptions || {};
			const exitCode = config.exitCode || 1;
			const code = config.code || "commander.error";
			this._exit(exitCode, code, message);
		}
		/**
		* Apply any option related environment variables, if option does
		* not have a value from cli or client code.
		*
		* @private
		*/
		_parseOptionsEnv() {
			this.options.forEach((option) => {
				if (option.envVar && option.envVar in process$2.env) {
					const optionKey = option.attributeName();
					if (this.getOptionValue(optionKey) === void 0 || [
						"default",
						"config",
						"env"
					].includes(this.getOptionValueSource(optionKey))) if (option.required || option.optional) this.emit(`optionEnv:${option.name()}`, process$2.env[option.envVar]);
					else this.emit(`optionEnv:${option.name()}`);
				}
			});
		}
		/**
		* Apply any implied option values, if option is undefined or default value.
		*
		* @private
		*/
		_parseOptionsImplied() {
			const dualHelper = new DualOptions(this.options);
			const hasCustomOptionValue = (optionKey) => {
				return this.getOptionValue(optionKey) !== void 0 && !["default", "implied"].includes(this.getOptionValueSource(optionKey));
			};
			this.options.filter((option) => option.implied !== void 0 && hasCustomOptionValue(option.attributeName()) && dualHelper.valueFromOption(this.getOptionValue(option.attributeName()), option)).forEach((option) => {
				Object.keys(option.implied).filter((impliedKey) => !hasCustomOptionValue(impliedKey)).forEach((impliedKey) => {
					this.setOptionValueWithSource(impliedKey, option.implied[impliedKey], "implied");
				});
			});
		}
		/**
		* Argument `name` is missing.
		*
		* @param {string} name
		* @private
		*/
		missingArgument(name) {
			const message = `error: missing required argument '${name}'`;
			this.error(message, { code: "commander.missingArgument" });
		}
		/**
		* `Option` is missing an argument.
		*
		* @param {Option} option
		* @private
		*/
		optionMissingArgument(option) {
			const message = `error: option '${option.flags}' argument missing`;
			this.error(message, { code: "commander.optionMissingArgument" });
		}
		/**
		* `Option` does not have a value, and is a mandatory option.
		*
		* @param {Option} option
		* @private
		*/
		missingMandatoryOptionValue(option) {
			const message = `error: required option '${option.flags}' not specified`;
			this.error(message, { code: "commander.missingMandatoryOptionValue" });
		}
		/**
		* `Option` conflicts with another option.
		*
		* @param {Option} option
		* @param {Option} conflictingOption
		* @private
		*/
		_conflictingOption(option, conflictingOption) {
			const findBestOptionFromValue = (option$1) => {
				const optionKey = option$1.attributeName();
				const optionValue = this.getOptionValue(optionKey);
				const negativeOption = this.options.find((target) => target.negate && optionKey === target.attributeName());
				const positiveOption = this.options.find((target) => !target.negate && optionKey === target.attributeName());
				if (negativeOption && (negativeOption.presetArg === void 0 && optionValue === false || negativeOption.presetArg !== void 0 && optionValue === negativeOption.presetArg)) return negativeOption;
				return positiveOption || option$1;
			};
			const getErrorMessage$1 = (option$1) => {
				const bestOption = findBestOptionFromValue(option$1);
				const optionKey = bestOption.attributeName();
				const source = this.getOptionValueSource(optionKey);
				if (source === "env") return `environment variable '${bestOption.envVar}'`;
				return `option '${bestOption.flags}'`;
			};
			const message = `error: ${getErrorMessage$1(option)} cannot be used with ${getErrorMessage$1(conflictingOption)}`;
			this.error(message, { code: "commander.conflictingOption" });
		}
		/**
		* Unknown option `flag`.
		*
		* @param {string} flag
		* @private
		*/
		unknownOption(flag) {
			if (this._allowUnknownOption) return;
			let suggestion = "";
			if (flag.startsWith("--") && this._showSuggestionAfterError) {
				let candidateFlags = [];
				let command = this;
				do {
					const moreFlags = command.createHelp().visibleOptions(command).filter((option) => option.long).map((option) => option.long);
					candidateFlags = candidateFlags.concat(moreFlags);
					command = command.parent;
				} while (command && !command._enablePositionalOptions);
				suggestion = suggestSimilar(flag, candidateFlags);
			}
			const message = `error: unknown option '${flag}'${suggestion}`;
			this.error(message, { code: "commander.unknownOption" });
		}
		/**
		* Excess arguments, more than expected.
		*
		* @param {string[]} receivedArgs
		* @private
		*/
		_excessArguments(receivedArgs) {
			if (this._allowExcessArguments) return;
			const expected = this.registeredArguments.length;
			const s$1 = expected === 1 ? "" : "s";
			const forSubcommand = this.parent ? ` for '${this.name()}'` : "";
			const message = `error: too many arguments${forSubcommand}. Expected ${expected} argument${s$1} but got ${receivedArgs.length}.`;
			this.error(message, { code: "commander.excessArguments" });
		}
		/**
		* Unknown command.
		*
		* @private
		*/
		unknownCommand() {
			const unknownName = this.args[0];
			let suggestion = "";
			if (this._showSuggestionAfterError) {
				const candidateNames = [];
				this.createHelp().visibleCommands(this).forEach((command) => {
					candidateNames.push(command.name());
					if (command.alias()) candidateNames.push(command.alias());
				});
				suggestion = suggestSimilar(unknownName, candidateNames);
			}
			const message = `error: unknown command '${unknownName}'${suggestion}`;
			this.error(message, { code: "commander.unknownCommand" });
		}
		/**
		* Get or set the program version.
		*
		* This method auto-registers the "-V, --version" option which will print the version number.
		*
		* You can optionally supply the flags and description to override the defaults.
		*
		* @param {string} [str]
		* @param {string} [flags]
		* @param {string} [description]
		* @return {(this | string | undefined)} `this` command for chaining, or version string if no arguments
		*/
		version(str, flags, description) {
			if (str === void 0) return this._version;
			this._version = str;
			flags = flags || "-V, --version";
			description = description || "output the version number";
			const versionOption = this.createOption(flags, description);
			this._versionOptionName = versionOption.attributeName();
			this._registerOption(versionOption);
			this.on("option:" + versionOption.name(), () => {
				this._outputConfiguration.writeOut(`${str}\n`);
				this._exit(0, "commander.version", str);
			});
			return this;
		}
		/**
		* Set the description.
		*
		* @param {string} [str]
		* @param {object} [argsDescription]
		* @return {(string|Command)}
		*/
		description(str, argsDescription) {
			if (str === void 0 && argsDescription === void 0) return this._description;
			this._description = str;
			if (argsDescription) this._argsDescription = argsDescription;
			return this;
		}
		/**
		* Set the summary. Used when listed as subcommand of parent.
		*
		* @param {string} [str]
		* @return {(string|Command)}
		*/
		summary(str) {
			if (str === void 0) return this._summary;
			this._summary = str;
			return this;
		}
		/**
		* Set an alias for the command.
		*
		* You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
		*
		* @param {string} [alias]
		* @return {(string|Command)}
		*/
		alias(alias) {
			if (alias === void 0) return this._aliases[0];
			/** @type {Command} */
			let command = this;
			if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) command = this.commands[this.commands.length - 1];
			if (alias === command._name) throw new Error("Command alias can't be the same as its name");
			const matchingCommand = this.parent?._findCommand(alias);
			if (matchingCommand) {
				const existingCmd = [matchingCommand.name()].concat(matchingCommand.aliases()).join("|");
				throw new Error(`cannot add alias '${alias}' to command '${this.name()}' as already have command '${existingCmd}'`);
			}
			command._aliases.push(alias);
			return this;
		}
		/**
		* Set aliases for the command.
		*
		* Only the first alias is shown in the auto-generated help.
		*
		* @param {string[]} [aliases]
		* @return {(string[]|Command)}
		*/
		aliases(aliases) {
			if (aliases === void 0) return this._aliases;
			aliases.forEach((alias) => this.alias(alias));
			return this;
		}
		/**
		* Set / get the command usage `str`.
		*
		* @param {string} [str]
		* @return {(string|Command)}
		*/
		usage(str) {
			if (str === void 0) {
				if (this._usage) return this._usage;
				const args = this.registeredArguments.map((arg) => {
					return humanReadableArgName(arg);
				});
				return [].concat(this.options.length || this._helpOption !== null ? "[options]" : [], this.commands.length ? "[command]" : [], this.registeredArguments.length ? args : []).join(" ");
			}
			this._usage = str;
			return this;
		}
		/**
		* Get or set the name of the command.
		*
		* @param {string} [str]
		* @return {(string|Command)}
		*/
		name(str) {
			if (str === void 0) return this._name;
			this._name = str;
			return this;
		}
		/**
		* Set/get the help group heading for this subcommand in parent command's help.
		*
		* @param {string} [heading]
		* @return {Command | string}
		*/
		helpGroup(heading) {
			if (heading === void 0) return this._helpGroupHeading ?? "";
			this._helpGroupHeading = heading;
			return this;
		}
		/**
		* Set/get the default help group heading for subcommands added to this command.
		* (This does not override a group set directly on the subcommand using .helpGroup().)
		*
		* @example
		* program.commandsGroup('Development Commands:);
		* program.command('watch')...
		* program.command('lint')...
		* ...
		*
		* @param {string} [heading]
		* @returns {Command | string}
		*/
		commandsGroup(heading) {
			if (heading === void 0) return this._defaultCommandGroup ?? "";
			this._defaultCommandGroup = heading;
			return this;
		}
		/**
		* Set/get the default help group heading for options added to this command.
		* (This does not override a group set directly on the option using .helpGroup().)
		*
		* @example
		* program
		*   .optionsGroup('Development Options:')
		*   .option('-d, --debug', 'output extra debugging')
		*   .option('-p, --profile', 'output profiling information')
		*
		* @param {string} [heading]
		* @returns {Command | string}
		*/
		optionsGroup(heading) {
			if (heading === void 0) return this._defaultOptionGroup ?? "";
			this._defaultOptionGroup = heading;
			return this;
		}
		/**
		* @param {Option} option
		* @private
		*/
		_initOptionGroup(option) {
			if (this._defaultOptionGroup && !option.helpGroupHeading) option.helpGroup(this._defaultOptionGroup);
		}
		/**
		* @param {Command} cmd
		* @private
		*/
		_initCommandGroup(cmd) {
			if (this._defaultCommandGroup && !cmd.helpGroup()) cmd.helpGroup(this._defaultCommandGroup);
		}
		/**
		* Set the name of the command from script filename, such as process.argv[1],
		* or require.main.filename, or __filename.
		*
		* (Used internally and public although not documented in README.)
		*
		* @example
		* program.nameFromFilename(require.main.filename);
		*
		* @param {string} filename
		* @return {Command}
		*/
		nameFromFilename(filename) {
			this._name = path$1.basename(filename, path$1.extname(filename));
			return this;
		}
		/**
		* Get or set the directory for searching for executable subcommands of this command.
		*
		* @example
		* program.executableDir(__dirname);
		* // or
		* program.executableDir('subcommands');
		*
		* @param {string} [path]
		* @return {(string|null|Command)}
		*/
		executableDir(path$2) {
			if (path$2 === void 0) return this._executableDir;
			this._executableDir = path$2;
			return this;
		}
		/**
		* Return program help documentation.
		*
		* @param {{ error: boolean }} [contextOptions] - pass {error:true} to wrap for stderr instead of stdout
		* @return {string}
		*/
		helpInformation(contextOptions) {
			const helper = this.createHelp();
			const context = this._getOutputContext(contextOptions);
			helper.prepareContext({
				error: context.error,
				helpWidth: context.helpWidth,
				outputHasColors: context.hasColors
			});
			const text = helper.formatHelp(this, helper);
			if (context.hasColors) return text;
			return this._outputConfiguration.stripColor(text);
		}
		/**
		* @typedef HelpContext
		* @type {object}
		* @property {boolean} error
		* @property {number} helpWidth
		* @property {boolean} hasColors
		* @property {function} write - includes stripColor if needed
		*
		* @returns {HelpContext}
		* @private
		*/
		_getOutputContext(contextOptions) {
			contextOptions = contextOptions || {};
			const error = !!contextOptions.error;
			let baseWrite;
			let hasColors;
			let helpWidth;
			if (error) {
				baseWrite = (str) => this._outputConfiguration.writeErr(str);
				hasColors = this._outputConfiguration.getErrHasColors();
				helpWidth = this._outputConfiguration.getErrHelpWidth();
			} else {
				baseWrite = (str) => this._outputConfiguration.writeOut(str);
				hasColors = this._outputConfiguration.getOutHasColors();
				helpWidth = this._outputConfiguration.getOutHelpWidth();
			}
			const write = (str) => {
				if (!hasColors) str = this._outputConfiguration.stripColor(str);
				return baseWrite(str);
			};
			return {
				error,
				write,
				hasColors,
				helpWidth
			};
		}
		/**
		* Output help information for this command.
		*
		* Outputs built-in help, and custom text added using `.addHelpText()`.
		*
		* @param {{ error: boolean } | Function} [contextOptions] - pass {error:true} to write to stderr instead of stdout
		*/
		outputHelp(contextOptions) {
			let deprecatedCallback;
			if (typeof contextOptions === "function") {
				deprecatedCallback = contextOptions;
				contextOptions = void 0;
			}
			const outputContext = this._getOutputContext(contextOptions);
			/** @type {HelpTextEventContext} */
			const eventContext = {
				error: outputContext.error,
				write: outputContext.write,
				command: this
			};
			this._getCommandAndAncestors().reverse().forEach((command) => command.emit("beforeAllHelp", eventContext));
			this.emit("beforeHelp", eventContext);
			let helpInformation = this.helpInformation({ error: outputContext.error });
			if (deprecatedCallback) {
				helpInformation = deprecatedCallback(helpInformation);
				if (typeof helpInformation !== "string" && !Buffer.isBuffer(helpInformation)) throw new Error("outputHelp callback must return a string or a Buffer");
			}
			outputContext.write(helpInformation);
			if (this._getHelpOption()?.long) this.emit(this._getHelpOption().long);
			this.emit("afterHelp", eventContext);
			this._getCommandAndAncestors().forEach((command) => command.emit("afterAllHelp", eventContext));
		}
		/**
		* You can pass in flags and a description to customise the built-in help option.
		* Pass in false to disable the built-in help option.
		*
		* @example
		* program.helpOption('-?, --help' 'show help'); // customise
		* program.helpOption(false); // disable
		*
		* @param {(string | boolean)} flags
		* @param {string} [description]
		* @return {Command} `this` command for chaining
		*/
		helpOption(flags, description) {
			if (typeof flags === "boolean") {
				if (flags) {
					if (this._helpOption === null) this._helpOption = void 0;
					if (this._defaultOptionGroup) this._initOptionGroup(this._getHelpOption());
				} else this._helpOption = null;
				return this;
			}
			this._helpOption = this.createOption(flags ?? "-h, --help", description ?? "display help for command");
			if (flags || description) this._initOptionGroup(this._helpOption);
			return this;
		}
		/**
		* Lazy create help option.
		* Returns null if has been disabled with .helpOption(false).
		*
		* @returns {(Option | null)} the help option
		* @package
		*/
		_getHelpOption() {
			if (this._helpOption === void 0) this.helpOption(void 0, void 0);
			return this._helpOption;
		}
		/**
		* Supply your own option to use for the built-in help option.
		* This is an alternative to using helpOption() to customise the flags and description etc.
		*
		* @param {Option} option
		* @return {Command} `this` command for chaining
		*/
		addHelpOption(option) {
			this._helpOption = option;
			this._initOptionGroup(option);
			return this;
		}
		/**
		* Output help information and exit.
		*
		* Outputs built-in help, and custom text added using `.addHelpText()`.
		*
		* @param {{ error: boolean }} [contextOptions] - pass {error:true} to write to stderr instead of stdout
		*/
		help(contextOptions) {
			this.outputHelp(contextOptions);
			let exitCode = Number(process$2.exitCode ?? 0);
			if (exitCode === 0 && contextOptions && typeof contextOptions !== "function" && contextOptions.error) exitCode = 1;
			this._exit(exitCode, "commander.help", "(outputHelp)");
		}
		/**
		* // Do a little typing to coordinate emit and listener for the help text events.
		* @typedef HelpTextEventContext
		* @type {object}
		* @property {boolean} error
		* @property {Command} command
		* @property {function} write
		*/
		/**
		* Add additional text to be displayed with the built-in help.
		*
		* Position is 'before' or 'after' to affect just this command,
		* and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
		*
		* @param {string} position - before or after built-in help
		* @param {(string | Function)} text - string to add, or a function returning a string
		* @return {Command} `this` command for chaining
		*/
		addHelpText(position, text) {
			const allowedValues = [
				"beforeAll",
				"before",
				"after",
				"afterAll"
			];
			if (!allowedValues.includes(position)) throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${allowedValues.join("', '")}'`);
			const helpEvent = `${position}Help`;
			this.on(helpEvent, (context) => {
				let helpStr;
				if (typeof text === "function") helpStr = text({
					error: context.error,
					command: context.command
				});
				else helpStr = text;
				if (helpStr) context.write(`${helpStr}\n`);
			});
			return this;
		}
		/**
		* Output help information if help flags specified
		*
		* @param {Array} args - array of options to search for help flags
		* @private
		*/
		_outputHelpIfRequested(args) {
			const helpOption = this._getHelpOption();
			const helpRequested = helpOption && args.find((arg) => helpOption.is(arg));
			if (helpRequested) {
				this.outputHelp();
				this._exit(0, "commander.helpDisplayed", "(outputHelp)");
			}
		}
	};
	/**
	* Scan arguments and increment port number for inspect calls (to avoid conflicts when spawning new command).
	*
	* @param {string[]} args - array of arguments from node.execArgv
	* @returns {string[]}
	* @private
	*/
	function incrementNodeInspectorPort(args) {
		return args.map((arg) => {
			if (!arg.startsWith("--inspect")) return arg;
			let debugOption;
			let debugHost = "127.0.0.1";
			let debugPort = "9229";
			let match;
			if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) debugOption = match[1];
			else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
				debugOption = match[1];
				if (/^\d+$/.test(match[3])) debugPort = match[3];
				else debugHost = match[3];
			} else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) {
				debugOption = match[1];
				debugHost = match[3];
				debugPort = match[4];
			}
			if (debugOption && debugPort !== "0") return `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
			return arg;
		});
	}
	/**
	* @returns {boolean | undefined}
	* @package
	*/
	function useColor() {
		if (process$2.env.NO_COLOR || process$2.env.FORCE_COLOR === "0" || process$2.env.FORCE_COLOR === "false") return false;
		if (process$2.env.FORCE_COLOR || process$2.env.CLICOLOR_FORCE !== void 0) return true;
		return void 0;
	}
	exports.Command = Command$2;
	exports.useColor = useColor;
} });

//#endregion
//#region node_modules/.pnpm/commander@14.0.0/node_modules/commander/index.js
var require_commander = __commonJS$1({ "node_modules/.pnpm/commander@14.0.0/node_modules/commander/index.js"(exports) {
	const { Argument: Argument$1 } = require_argument();
	const { Command: Command$1 } = require_command();
	const { CommanderError: CommanderError$1, InvalidArgumentError: InvalidArgumentError$1 } = require_error();
	const { Help: Help$1 } = require_help();
	const { Option: Option$1 } = require_option();
	exports.program = new Command$1();
	exports.createCommand = (name) => new Command$1(name);
	exports.createOption = (flags, description) => new Option$1(flags, description);
	exports.createArgument = (name, description) => new Argument$1(name, description);
	/**
	* Expose classes
	*/
	exports.Command = Command$1;
	exports.Option = Option$1;
	exports.Argument = Argument$1;
	exports.Help = Help$1;
	exports.CommanderError = CommanderError$1;
	exports.InvalidArgumentError = InvalidArgumentError$1;
	exports.InvalidOptionArgumentError = InvalidArgumentError$1;
} });

//#endregion
//#region node_modules/.pnpm/commander@14.0.0/node_modules/commander/esm.mjs
var import_commander = __toESM(require_commander(), 1);
const { program, createCommand, createArgument, createOption, CommanderError, InvalidArgumentError, InvalidOptionArgumentError, Command, Argument, Option, Help } = import_commander.default;

//#endregion
//#region src/index.js
async function getRemoteUrl(git) {
	const remotes = await git.getRemotes(true);
	const origin = remotes.find((r) => r.name === "origin") || remotes[0];
	if (!origin) throw new Error("No git remote found.");
	return origin.refs.fetch || origin.refs.push;
}
function parseRemoteUrl(url) {
	let match;
	if (match = url.match(/^git@([^:]+):(.+?)(\.git)?$/)) return {
		host: match[1],
		repo: match[2].replace(/\.git$/, "")
	};
	else if (match = url.match(/^https?:\/\/([^/]+)\/(.+?)(\.git)?$/)) return {
		host: match[1],
		repo: match[2].replace(/\.git$/, "")
	};
	throw new Error("Unsupported remote url: " + url);
}
function getPlatformWebUrl({ host, repo }, type, ref) {
	return `https://${host}/${repo}/tree/${ref}`;
}
async function getCurrentRef(git) {
	const status = await git.status();
	if (status.current) return {
		type: "branch",
		ref: status.current
	};
	const headHash = (await git.revparse(["HEAD"])).trim();
	const tags = await git.tags();
	const tag = tags.all.find(async (t) => {
		const tagHash = (await git.revparse([t])).trim();
		return tagHash === headHash;
	});
	if (tag) return {
		type: "tag",
		ref: tag
	};
	return {
		type: "commit",
		ref: headHash
	};
}
async function main() {
	program.name("git-open").description("Open the current git repo remote page in your browser, at the current branch/tag/commit.").version("1.0.0");
	program.parse(process$1.argv);
	const cwd = process$1.cwd();
	const git = esm_default(cwd);
	let isRepo = false;
	try {
		isRepo = await git.checkIsRepo();
	} catch (e) {}
	if (!isRepo) {
		console.error("Not a git repository.");
		process$1.exit(1);
	}
	let remoteUrl;
	try {
		remoteUrl = await getRemoteUrl(git);
	} catch (e) {
		console.error(e.message);
		process$1.exit(1);
	}
	let remoteInfo;
	try {
		remoteInfo = parseRemoteUrl(remoteUrl);
	} catch (e) {
		console.error(e.message);
		process$1.exit(1);
	}
	let refInfo;
	try {
		refInfo = await getCurrentRef(git);
	} catch (e) {
		console.error("Failed to get current ref:", e.message);
		process$1.exit(1);
	}
	let url;
	try {
		url = getPlatformWebUrl(remoteInfo, refInfo.type, refInfo.ref);
	} catch (e) {
		console.error(e.message);
		process$1.exit(1);
	}
	await open_default(url);
}
main();
var src_default = main;

//#endregion
export { src_default as default };