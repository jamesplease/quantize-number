(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["quantizeValue"] = factory();
	else
		root["quantizeValue"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Quantize a `val` by `quantum`.
	// The third parameter is `options`. At the moment, there's only a single
	// option, which is `cover`. This is whether the algorithm should be covering
	// or fitting.
	//
	// These examples may help demonstrate the difference between that option:
	//
	// quantizeValue(7, 5, {cover: false}) === 5
	// quantizeValue(7, 5, {cover: true}) === 10
	//
	// The algorithm is symmetrical about zero, so you can just make every
	// number in the above example negative to see how it behaves when negative
	// numbers are presented.
	function quantizeValue(val, quantum) {
	  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  var _ref$cover = _ref.cover;
	  var cover = _ref$cover === undefined ? false : _ref$cover;
	
	  if (!quantum) {
	    return 0;
	  }
	  var remainder = val % quantum;
	  var sign = val >= 0 ? 1 : -1;
	  var mod = cover && remainder ? quantum : 0;
	  return val - remainder + sign * mod;
	};
	
	exports.default = quantizeValue;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=quantize-value.js.map