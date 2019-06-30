(function() {
	// NOTE: Should match syntheticDefaultExportPolyfill in LoaderAPI.ts
	function syntheticDefaultExportPolyfill(input) {
		if (
			input === null ||
			["function", "object", "array"].indexOf(typeof input) === -1 ||
			input.hasOwnProperty("default") // use hasOwnProperty to avoid triggering usage warnings from libraries like mobx
		) {
			return;
		}
		// to get around frozen input
		if (Object.isFrozen(input)) {
			input.default = input;
			return;
		}
		// free to define properties
		Object.defineProperty(input, "default", {
			value: input,
			writable: true,
			enumerable: false
		});
	}
	if (window.$fsx) {
		return;
	}
	var $fsx = (window.$fsx = {});
	$fsx.f = {};
	var ajaxCache = {};
	function aj(url, cb) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == 4) {
				var err;
				if (this.status !== 200) {
					err = { code: this.status, msg: this.statusText };
				}
				cb(err, this.responseText, request.getResponseHeader("Content-Type"));
			}
		};
		request.open("GET", url, true);
		request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		request.send();
	}
	var bMapping = {"c":{"b":"","s":"./"},"i":{"4fd423f9":["4fd423f9.js",4],"ef911f59":["ef911f59.js",6]}};
	function evaluateModule(id, input, type) {
		if (/javascript/.test(type)) {
			var fn = new Function("module", "exports", input);
			var moduleExports = {};
			var moduleObject = { exports: moduleExports };
			fn(moduleObject, moduleExports);
			return moduleObject.exports;
		}
		return input;
	}
	function req(url, cb) {
		aj(url, cb);
	}
	function loadScript(path, data, cache, id, resolve, reject) {
		req(path + data[0], function(err, result) {
			if (!err) {
				new Function(result)();
			}
			cache[id] = $fsx.r(data[1]);
			syntheticDefaultExportPolyfill(cache[id]);
			!err ? resolve(cache[id]) : reject(err);
		});
	}
	var $cache = {};
	$fsx.l = function(id) {
		return new Promise(function(resolve, reject) {
			if ($cache[id]) {
				return resolve($cache[id]);
			}
			if (bMapping.i && bMapping.i[id]) {
				var data = bMapping.i[id];
				if(typeof data === "number"){
					return resolve($fsx.r(data))
        }
				var path = bMapping.c.b;
				if (data[2] && data[2].css === true) {
					Promise.all([loadRemoteScript(path + data[2].name, true), new Promise(function (resolve, reject) {
						loadScript(path, data, $cache, id, resolve, reject)
					})]).then(function (values) {
						resolve(values[1]);
					});
				} else {
					loadScript(path, data, $cache, id, resolve, reject)
				}
			} else {
				req(id, function(err, result, ctype) {
					if (!err) {
						var res = ($cache[id] = evaluateModule(id, result, ctype));
						syntheticDefaultExportPolyfill(res);
						resolve(res);
					} else {
						reject(err);
					}
				});
			}
		});
	};
	// cached modules
	$fsx.m = {};
	$fsx.r = function(id) {
		var cached = $fsx.m[id];
		// resolve if in cache
		if (cached) {
			return cached.m.exports;
		}
		var file = $fsx.f[id];
		if (!file) return;
		cached = $fsx.m[id] = {};
		cached.exports = {};
		cached.m = { exports: cached.exports };
		file.call(cached.exports, cached.m, cached.exports);
		syntheticDefaultExportPolyfill(cached.m.exports);
		return cached.m.exports;
	};
})();