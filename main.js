/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Cocogoose.ttf */ "./src/fonts/Cocogoose.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/calendar.svg */ "./src/images/calendar.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/folder.svg */ "./src/images/folder.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/edit.svg */ "./src/images/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/delete.svg */ "./src/images/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Cocogoose';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-style: normal;\n} \n  \n*{\n    margin:0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n#container {\n    display: grid;\n    grid: 10vh 1fr / clamp(13rem, 18%, 20rem) 1fr;\n    min-height: 100vh;\n}\n\n/* HEADER */\n#header {\n    grid-column: 1/3;\n    background-color: #89d8d3b9;\n    background-image: linear-gradient(315deg, #89d8d3bd 0%, #03c8a7b4 74%);\n    display: flex;\n    padding: 1rem;\n    justify-content: space-between;\n    align-content: center;\n    color: #fffcff;\n}\n\n#header p {\n    font-family: 'Cocogoose';\n    font-size: clamp(1rem, 1.5vw, 3rem);\n    display: flex;\n    align-items: center;\n}\n\n#header button{\n    display: flex;\n    align-items: center;\n    gap: 0.1vw;\n    font-weight: 600;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n}\n\n#header button img{\n    width: clamp(1rem, 2.3vw, 3rem);\n}\n\n/* SIDERBAR */\n#sidebar{\n    background-color: #e1e1e17c;\n  \n}\n\n/* ADD TASK FORM */\n#addTaskFormContainer {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n\n.form-container{\n    width:50vw;\n    background:#e1e1e17c;\n    border-radius:8px;\n    box-shadow: 4px 4px 5px 0px #00000085;\n    padding: 2vh 2vw;\n}\n  \n.rowContainer{\n    display: flex;\n    gap: 1rem;\n}\n  \n.form-buttons{\n    display: flex;\n    justify-content: end;\n    gap: 1rem;\n}\n  \n.inputContent{\n    display:flex;\n    flex-direction:column;\n    margin-top: 2vh;\n}\n  \n.form-container label{\n    font-family: 'Montserrat', monospace;\n    font-weight: 625;\n    letter-spacing: .02rem;\n    font-size: clamp(0.8rem, 1vw, 3rem)\n}\n  \n.form-container h2{\n    margin:0.5vh 0;\n    padding-bottom:0.25vh;\n    width:10vw;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n    color:#78788c;\n    border-bottom:3px solid #78788c;\n}\n  \n.form-container input, .form-container textarea, .form-container select {\n    width:100%;\n    padding:0.9vh;\n    box-sizing:border-box;\n    background:none;\n    outline:none;\n    resize:none;\n    border:0;\n    font-family:'Montserrat',sans-serif;\n    transition:all .3s;\n    border-bottom:2px solid #bebed2;\n}\n  \n.form-container input:focus, .form-container textarea:focus, .form-container select:focus{\n    border-bottom:2px solid #78788c\n}\n  \n.form-container button{\n    padding:0.5vh 0.5vw;\n    margin:1vh 0 0;\n    font-family:'Montserrat',sans-serif;\n    border:2px solid #78788c;\n    background:0;\n    color:#5a5a6e;\n    cursor:pointer;\n    transition:all .3s;\n    font-size: clamp(0.8rem, 1vw, 2rem);\n}\n  \n.form-container button:hover{\n    background:#78788c;\n    color:#fff\n}\n\n\n/* MAIN CONTENT - display Todo Items */\n#mainContent{\n    background-color: #d5fefd;\n    background-image: linear-gradient(0deg, #d5fefd 0%, #fffcff 74%);\n}\n\n#displayTodoTasksContainer{\n    padding: 35px 55px;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n#displayTodoTasksContainer h1{\n}\n\n.todoTask {\n    display: grid;\n    grid: 1fr 1fr 1fr / 2.5rem fit-content(300px) fit-content(300px) 1fr 20px 20px;\n    margin-top: 3vh;\n    border-bottom:1px solid #78788c;\n}\n\n.checkboxContainer {\n    position: relative;\n    grid-row: 1/4;\n}\n  \n.checkboxContainer label {\n    background-color: #fff;\n    border-radius: 50%;\n    cursor: pointer;\n    width: clamp(1.5rem,max(2vh,2vw),2rem);\n    height: clamp(1.5rem,max(2vh,2vw),2rem);\n    left: 0;\n    position: absolute;\n    top: 0;\n}\n  \n.checkboxContainer label:after {\n    border: 2.5px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.67);\n    left: calc(clamp(1.5rem,max(2vh,2vw),2rem)/5);\n    opacity: 0;\n    position: absolute;\n    top: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.5);;\n    transform: rotate(-45deg);\n    width: calc(clamp(1.5rem,max(2vh,2vw),2rem)/2.33);\n}\n  \n.checkboxContainer input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label {\n    background-color: #e1e1e17c;\n    border-color: #fefffe;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n}\n\n.todoTask h1{\n    grid-column: 2/7;\n    font-size: min(3vmin, 1.3rem)\n}\n\n.todoTask p:first-of-type{\n    grid-column: 2/7;\n}\n\n.todoTask p{\n    font-size: min(2.5vmin, 0.8rem);\n    margin-right: 10px;\n}\n\n.todoTask p:nth-of-type(2):before {\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask p:nth-of-type(3):before {\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask button:first-of-type {\n    grid-column: 5/6;\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n.todoTask button:nth-of-type(2) {\n    grid-column: 6/7;\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n\n@media (max-width: 768px) {\n    #sidebar {\n        display: none;\n    }\n    #mainContent{\n        grid-column: 1/3;\n    }\n}", "",{"version":3,"sources":["webpack://./src/modules/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Cocogoose';\n    src: url('../fonts/Cocogoose.ttf') format('truetype');\n    font-style: normal;\n} \n  \n*{\n    margin:0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n#container {\n    display: grid;\n    grid: 10vh 1fr / clamp(13rem, 18%, 20rem) 1fr;\n    min-height: 100vh;\n}\n\n/* HEADER */\n#header {\n    grid-column: 1/3;\n    background-color: #89d8d3b9;\n    background-image: linear-gradient(315deg, #89d8d3bd 0%, #03c8a7b4 74%);\n    display: flex;\n    padding: 1rem;\n    justify-content: space-between;\n    align-content: center;\n    color: #fffcff;\n}\n\n#header p {\n    font-family: 'Cocogoose';\n    font-size: clamp(1rem, 1.5vw, 3rem);\n    display: flex;\n    align-items: center;\n}\n\n#header button{\n    display: flex;\n    align-items: center;\n    gap: 0.1vw;\n    font-weight: 600;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n}\n\n#header button img{\n    width: clamp(1rem, 2.3vw, 3rem);\n}\n\n/* SIDERBAR */\n#sidebar{\n    background-color: #e1e1e17c;\n  \n}\n\n/* ADD TASK FORM */\n#addTaskFormContainer {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n\n.form-container{\n    width:50vw;\n    background:#e1e1e17c;\n    border-radius:8px;\n    box-shadow: 4px 4px 5px 0px #00000085;\n    padding: 2vh 2vw;\n}\n  \n.rowContainer{\n    display: flex;\n    gap: 1rem;\n}\n  \n.form-buttons{\n    display: flex;\n    justify-content: end;\n    gap: 1rem;\n}\n  \n.inputContent{\n    display:flex;\n    flex-direction:column;\n    margin-top: 2vh;\n}\n  \n.form-container label{\n    font-family: 'Montserrat', monospace;\n    font-weight: 625;\n    letter-spacing: .02rem;\n    font-size: clamp(0.8rem, 1vw, 3rem)\n}\n  \n.form-container h2{\n    margin:0.5vh 0;\n    padding-bottom:0.25vh;\n    width:10vw;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n    color:#78788c;\n    border-bottom:3px solid #78788c;\n}\n  \n.form-container input, .form-container textarea, .form-container select {\n    width:100%;\n    padding:0.9vh;\n    box-sizing:border-box;\n    background:none;\n    outline:none;\n    resize:none;\n    border:0;\n    font-family:'Montserrat',sans-serif;\n    transition:all .3s;\n    border-bottom:2px solid #bebed2;\n}\n  \n.form-container input:focus, .form-container textarea:focus, .form-container select:focus{\n    border-bottom:2px solid #78788c\n}\n  \n.form-container button{\n    padding:0.5vh 0.5vw;\n    margin:1vh 0 0;\n    font-family:'Montserrat',sans-serif;\n    border:2px solid #78788c;\n    background:0;\n    color:#5a5a6e;\n    cursor:pointer;\n    transition:all .3s;\n    font-size: clamp(0.8rem, 1vw, 2rem);\n}\n  \n.form-container button:hover{\n    background:#78788c;\n    color:#fff\n}\n\n\n/* MAIN CONTENT - display Todo Items */\n#mainContent{\n    background-color: #d5fefd;\n    background-image: linear-gradient(0deg, #d5fefd 0%, #fffcff 74%);\n}\n\n#displayTodoTasksContainer{\n    padding: 35px 55px;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n#displayTodoTasksContainer h1{\n}\n\n.todoTask {\n    display: grid;\n    grid: 1fr 1fr 1fr / 2.5rem fit-content(300px) fit-content(300px) 1fr 20px 20px;\n    margin-top: 3vh;\n    border-bottom:1px solid #78788c;\n}\n\n.checkboxContainer {\n    position: relative;\n    grid-row: 1/4;\n}\n  \n.checkboxContainer label {\n    background-color: #fff;\n    border-radius: 50%;\n    cursor: pointer;\n    width: clamp(1.5rem,max(2vh,2vw),2rem);\n    height: clamp(1.5rem,max(2vh,2vw),2rem);\n    left: 0;\n    position: absolute;\n    top: 0;\n}\n  \n.checkboxContainer label:after {\n    border: 2.5px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.67);\n    left: calc(clamp(1.5rem,max(2vh,2vw),2rem)/5);\n    opacity: 0;\n    position: absolute;\n    top: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.5);;\n    transform: rotate(-45deg);\n    width: calc(clamp(1.5rem,max(2vh,2vw),2rem)/2.33);\n}\n  \n.checkboxContainer input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label {\n    background-color: #e1e1e17c;\n    border-color: #fefffe;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n}\n\n.todoTask h1{\n    grid-column: 2/7;\n    font-size: min(3vmin, 1.3rem)\n}\n\n.todoTask p:first-of-type{\n    grid-column: 2/7;\n}\n\n.todoTask p{\n    font-size: min(2.5vmin, 0.8rem);\n    margin-right: 10px;\n}\n\n.todoTask p:nth-of-type(2):before {\n    content: \"\";\n    display: block;\n    background: url(\"../images/calendar.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask p:nth-of-type(3):before {\n    content: \"\";\n    display: block;\n    background: url(\"../images/folder.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask button:first-of-type {\n    grid-column: 5/6;\n    content: \"\";\n    display: block;\n    background: url(\"../images/edit.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n.todoTask button:nth-of-type(2) {\n    grid-column: 6/7;\n    content: \"\";\n    display: block;\n    background: url(\"../images/delete.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n\n@media (max-width: 768px) {\n    #sidebar {\n        display: none;\n    }\n    #mainContent{\n        grid-column: 1/3;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/style.css":
/*!*******************************!*\
  !*** ./src/modules/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/style.css */ "./src/modules/style.css");
/* harmony import */ var _modules_todoPreview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoPreview.js */ "./src/modules/todoPreview.js");



document.getElementById("addTaskButton")
        .addEventListener("click", () => toggleTaskFormVisibility(true));

document.getElementById("closeAddTaskButton")
        .addEventListener("click", () => toggleTaskFormVisibility(false));

function toggleTaskFormVisibility(visible)
{
  const displayValue = visible ? 'block' : 'none';
  document.getElementById("addTaskFormContainer").style.display = displayValue;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleTaskFormVisibility);

/***/ }),

/***/ "./src/modules/todoItem.js":
/*!*********************************!*\
  !*** ./src/modules/todoItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class todoItem {
  constructor(name,description,dueDate,project,priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}

function createTodoItem(){
  const addTaskForm = document.getElementById("addTaskForm");
  let taskName = addTaskForm.elements["taskName"];
  let taskDescription = addTaskForm.elements["taskDescription"];
  let taskDueDate = addTaskForm.elements["taskDueDate"];
  let taskProject = addTaskForm.elements["taskProject"];
  let taskPriority = addTaskForm.elements["taskPriority"];

  const newtodoItem = new todoItem(taskName.value,taskDescription.value,taskDueDate.value,taskProject.value,taskPriority.value);
  
  return newtodoItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoItem);

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
class TodoList
{
    constructor()
    {
        this.itemsById = {};
    }
    
    add(newItem)
    {
        this.itemsById[newItem.id] = newItem;
    }

    get items()
    {
        return Object.values(this.itemsById);
    }

    getItemByID(id)
    {
        return this.itemsById[id];
    }

    removeById(id)
    {
        delete this.itemsById[id];
    }
}

/***/ }),

/***/ "./src/modules/todoPreview.js":
/*!************************************!*\
  !*** ./src/modules/todoPreview.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem.js */ "./src/modules/todoItem.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/modules/todoList.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");





let todoList = new _todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
let checkEditTask = {status: "false", id: ""};

const addTaskForm = document.getElementById("addTaskForm");
addTaskForm.addEventListener("submit", function (e) {
	e.preventDefault();
  if (checkEditTask.status==true){
   let taskID = checkEditTask.id;
   document.getElementById(taskID).remove();
   todoList.removeById(taskID);
   checkEditTask.status = false;
  }
  let newTodoItem = (0,_todoItem_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  todoList.add(newTodoItem);
  displayTodoTasksContainer.appendChild(displayTodoItem(newTodoItem));
  addTaskForm.reset();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
});

const displayTodoTasksContainer = document.getElementById("displayTodoTasksContainer");

const projectName = document.createElement('h1');
projectName.textContent = "Index";
displayTodoTasksContainer.appendChild(projectName);

function displayTodoItem (element){
  let todoTask = document.createElement("div");
  let checkboxContainer = document.createElement("div");
  let taskCheckbox = document.createElement("input");
  let labelCheckbox = document.createElement("label");
  let taskName = document.createElement("h1");
  let taskDescription = document.createElement("p");
  let taskEdit = document.createElement("button");
  let taskDelete = document.createElement("button");
  let taskDuedate = document.createElement("p");
  let taskProject = document.createElement("p");

  todoTask.classList.add("todoTask");
  todoTask.setAttribute('id',element.id);
  checkboxContainer.classList.add("checkboxContainer");

  taskCheckbox.type = "checkbox";
  let newTaskID = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  taskCheckbox.id =  newTaskID;
  taskCheckbox.name = "checkTask";
  labelCheckbox.htmlFor =  newTaskID;
  setPriorityColor(element,labelCheckbox);
  checkboxContainer.appendChild(taskCheckbox);
  checkboxContainer.appendChild(labelCheckbox);

  taskName.textContent= element.name;
  taskDescription.textContent= element.description ;
  taskDuedate.textContent= element.dueDate;
  taskProject.textContent= element.project;

  taskDelete.classList.add("deleteButton");
  taskDelete.setAttribute('data-taskid',element.id);
  taskDelete.addEventListener("click", deleteTask);

  taskEdit.setAttribute('data-taskid',element.id);
  taskEdit.addEventListener("click", editTask);

  todoTask.appendChild(checkboxContainer);
  todoTask.appendChild(taskName);
  todoTask.appendChild(taskDescription);
  todoTask.appendChild(taskDuedate);
  todoTask.appendChild(taskProject);
  todoTask.appendChild(taskEdit);
  todoTask.appendChild(taskDelete);

  return todoTask;
}
  
function setPriorityColor(element, todoTask){
  let priority = element.priority;
  switch(priority) {
    case "lowPriority":
      todoTask.style.border = "2px solid blue";
      break;
    case "mediumPriority":
      todoTask.style.border = "2px solid yellow";
      break;
    case "highPriority":
      todoTask.style.border = "2px solid red";
      break;
    default:
      todoTask.style.border = "2px solid rgb(80, 80, 80)";
  }
}

function deleteTask(){
  let taskID = this.dataset.taskid;
  document.getElementById(taskID).remove();
  todoList.removeById(taskID);
}

function editTask(){
  let taskID = this.dataset.taskid;
  let itemToEdit = todoList.getItemByID(taskID);
  addTaskForm.elements["taskName"].value = itemToEdit.name;
  addTaskForm.elements["taskDescription"].value = itemToEdit.description;
  addTaskForm.elements["taskDueDate"].value = itemToEdit.dueDate;
  addTaskForm.elements["taskProject"].value = itemToEdit.project;
  addTaskForm.elements["taskPriority"].value = itemToEdit.priority;
  checkEditTask.status = true;
  checkEditTask.id = taskID;
  (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(true);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoList);


/***/ }),

/***/ "./src/fonts/Cocogoose.ttf":
/*!*********************************!*\
  !*** ./src/fonts/Cocogoose.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0e9ee6119d8d2ec167f.ttf";

/***/ }),

/***/ "./src/images/calendar.svg":
/*!*********************************!*\
  !*** ./src/images/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e782aa664a611fb0508.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe8353ad80ddbecd8f7e.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "182cdaf2f4dd3b4f1bc2.svg";

/***/ }),

/***/ "./src/images/folder.svg":
/*!*******************************!*\
  !*** ./src/images/folder.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5c7cea5344d0b96273a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9zdHlsZS5jc3M/NTJjMyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL21vZHVsZXMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy90b2RvUHJldmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQ29jb2dvb3NlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYWxlbmRhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZm9sZGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9lZGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59IFxcbiAgXFxuKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMTB2aCAxZnIgLyBjbGFtcCgxM3JlbSwgMTglLCAyMHJlbSkgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWQ4ZDNiOTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzg5ZDhkM2JkIDAlLCAjMDNjOGE3YjQgNzQlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmY2ZmO1xcbn1cXG5cXG4jaGVhZGVyIHAge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41dncsIDNyZW0pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjF2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjN2dywgNHJlbSk7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDIuM3Z3LCAzcmVtKTtcXG59XFxuXFxuLyogU0lERVJCQVIgKi9cXG4jc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTdjO1xcbiAgXFxufVxcblxcbi8qIEFERCBUQVNLIEZPUk0gKi9cXG4jYWRkVGFza0Zvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIHdpZHRoOjUwdnc7XFxuICAgIGJhY2tncm91bmQ6I2UxZTFlMTdjO1xcbiAgICBib3JkZXItcmFkaXVzOjhweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA1cHggMHB4ICMwMDAwMDA4NTtcXG4gICAgcGFkZGluZzogMnZoIDJ2dztcXG59XFxuICBcXG4ucm93Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcbiAgXFxuLmZvcm0tYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuICBcXG4uaW5wdXRDb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogMnZoO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBsYWJlbHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgbW9ub3NwYWNlO1xcbiAgICBmb250LXdlaWdodDogNjI1O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjAycmVtO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMXZ3LCAzcmVtKVxcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBoMntcXG4gICAgbWFyZ2luOjAuNXZoIDA7XFxuICAgIHBhZGRpbmctYm90dG9tOjAuMjV2aDtcXG4gICAgd2lkdGg6MTB2dztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjN2dywgNHJlbSk7XFxuICAgIGNvbG9yOiM3ODc4OGM7XFxuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkICM3ODc4OGM7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGlucHV0LCAuZm9ybS1jb250YWluZXIgdGV4dGFyZWEsIC5mb3JtLWNvbnRhaW5lciBzZWxlY3Qge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBwYWRkaW5nOjAuOXZoO1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgb3V0bGluZTpub25lO1xcbiAgICByZXNpemU6bm9uZTtcXG4gICAgYm9yZGVyOjA7XFxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JyxzYW5zLXNlcmlmO1xcbiAgICB0cmFuc2l0aW9uOmFsbCAuM3M7XFxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNiZWJlZDI7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGlucHV0OmZvY3VzLCAuZm9ybS1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciBzZWxlY3Q6Zm9jdXN7XFxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICM3ODc4OGNcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgYnV0dG9ue1xcbiAgICBwYWRkaW5nOjAuNXZoIDAuNXZ3O1xcbiAgICBtYXJnaW46MXZoIDAgMDtcXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjoycHggc29saWQgIzc4Nzg4YztcXG4gICAgYmFja2dyb3VuZDowO1xcbiAgICBjb2xvcjojNWE1YTZlO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjphbGwgLjNzO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMXZ3LCAycmVtKTtcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiM3ODc4OGM7XFxuICAgIGNvbG9yOiNmZmZcXG59XFxuXFxuXFxuLyogTUFJTiBDT05URU5UIC0gZGlzcGxheSBUb2RvIEl0ZW1zICovXFxuI21haW5Db250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVmZWZkO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2Q1ZmVmZCAwJSwgI2ZmZmNmZiA3NCUpO1xcbn1cXG5cXG4jZGlzcGxheVRvZG9UYXNrc0NvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMzVweCA1NXB4O1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI2Rpc3BsYXlUb2RvVGFza3NDb250YWluZXIgaDF7XFxufVxcblxcbi50b2RvVGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAxZnIgMWZyIC8gMi41cmVtIGZpdC1jb250ZW50KDMwMHB4KSBmaXQtY29udGVudCgzMDBweCkgMWZyIDIwcHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNzg3ODhjO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtcm93OiAxLzQ7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBsYWJlbDphZnRlciB7XFxuICAgIGJvcmRlcjogMi41cHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNC42Nyk7XFxuICAgIGxlZnQ6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS81KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS80LjUpOztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS8yLjMzKTtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxN2M7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZlZmZmZTtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG9kb1Rhc2sgaDF7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxuICAgIGZvbnQtc2l6ZTogbWluKDN2bWluLCAxLjNyZW0pXFxufVxcblxcbi50b2RvVGFzayBwOmZpcnN0LW9mLXR5cGV7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxufVxcblxcbi50b2RvVGFzayBwe1xcbiAgICBmb250LXNpemU6IG1pbigyLjV2bWluLCAwLjhyZW0pO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50b2RvVGFzayBwOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG59XFxuXFxuLnRvZG9UYXNrIHA6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbn1cXG5cXG4udG9kb1Rhc2sgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRvZG9UYXNrIGJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiA2Lzc7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAjbWFpbkNvbnRlbnR7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBcUQ7SUFDckQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxpQkFBaUI7QUFDckI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixzRUFBc0U7SUFDdEUsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGFB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O0lBQ2QsNkRBQWlEO0lBQ2pELFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29jb2dvb3NlJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL0NvY29nb29zZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59IFxcbiAgXFxuKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMTB2aCAxZnIgLyBjbGFtcCgxM3JlbSwgMTglLCAyMHJlbSkgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWQ4ZDNiOTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzg5ZDhkM2JkIDAlLCAjMDNjOGE3YjQgNzQlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmY2ZmO1xcbn1cXG5cXG4jaGVhZGVyIHAge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41dncsIDNyZW0pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjF2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjN2dywgNHJlbSk7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDIuM3Z3LCAzcmVtKTtcXG59XFxuXFxuLyogU0lERVJCQVIgKi9cXG4jc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTdjO1xcbiAgXFxufVxcblxcbi8qIEFERCBUQVNLIEZPUk0gKi9cXG4jYWRkVGFza0Zvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIHdpZHRoOjUwdnc7XFxuICAgIGJhY2tncm91bmQ6I2UxZTFlMTdjO1xcbiAgICBib3JkZXItcmFkaXVzOjhweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA1cHggMHB4ICMwMDAwMDA4NTtcXG4gICAgcGFkZGluZzogMnZoIDJ2dztcXG59XFxuICBcXG4ucm93Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcbiAgXFxuLmZvcm0tYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuICBcXG4uaW5wdXRDb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogMnZoO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBsYWJlbHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgbW9ub3NwYWNlO1xcbiAgICBmb250LXdlaWdodDogNjI1O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjAycmVtO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMXZ3LCAzcmVtKVxcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBoMntcXG4gICAgbWFyZ2luOjAuNXZoIDA7XFxuICAgIHBhZGRpbmctYm90dG9tOjAuMjV2aDtcXG4gICAgd2lkdGg6MTB2dztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjN2dywgNHJlbSk7XFxuICAgIGNvbG9yOiM3ODc4OGM7XFxuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkICM3ODc4OGM7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGlucHV0LCAuZm9ybS1jb250YWluZXIgdGV4dGFyZWEsIC5mb3JtLWNvbnRhaW5lciBzZWxlY3Qge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBwYWRkaW5nOjAuOXZoO1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgb3V0bGluZTpub25lO1xcbiAgICByZXNpemU6bm9uZTtcXG4gICAgYm9yZGVyOjA7XFxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JyxzYW5zLXNlcmlmO1xcbiAgICB0cmFuc2l0aW9uOmFsbCAuM3M7XFxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNiZWJlZDI7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGlucHV0OmZvY3VzLCAuZm9ybS1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciBzZWxlY3Q6Zm9jdXN7XFxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICM3ODc4OGNcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgYnV0dG9ue1xcbiAgICBwYWRkaW5nOjAuNXZoIDAuNXZ3O1xcbiAgICBtYXJnaW46MXZoIDAgMDtcXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjoycHggc29saWQgIzc4Nzg4YztcXG4gICAgYmFja2dyb3VuZDowO1xcbiAgICBjb2xvcjojNWE1YTZlO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjphbGwgLjNzO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMXZ3LCAycmVtKTtcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiM3ODc4OGM7XFxuICAgIGNvbG9yOiNmZmZcXG59XFxuXFxuXFxuLyogTUFJTiBDT05URU5UIC0gZGlzcGxheSBUb2RvIEl0ZW1zICovXFxuI21haW5Db250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVmZWZkO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2Q1ZmVmZCAwJSwgI2ZmZmNmZiA3NCUpO1xcbn1cXG5cXG4jZGlzcGxheVRvZG9UYXNrc0NvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMzVweCA1NXB4O1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI2Rpc3BsYXlUb2RvVGFza3NDb250YWluZXIgaDF7XFxufVxcblxcbi50b2RvVGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAxZnIgMWZyIC8gMi41cmVtIGZpdC1jb250ZW50KDMwMHB4KSBmaXQtY29udGVudCgzMDBweCkgMWZyIDIwcHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNzg3ODhjO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtcm93OiAxLzQ7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBsYWJlbDphZnRlciB7XFxuICAgIGJvcmRlcjogMi41cHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNC42Nyk7XFxuICAgIGxlZnQ6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS81KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS80LjUpOztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS8yLjMzKTtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxN2M7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZlZmZmZTtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG9kb1Rhc2sgaDF7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxuICAgIGZvbnQtc2l6ZTogbWluKDN2bWluLCAxLjNyZW0pXFxufVxcblxcbi50b2RvVGFzayBwOmZpcnN0LW9mLXR5cGV7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxufVxcblxcbi50b2RvVGFzayBwe1xcbiAgICBmb250LXNpemU6IG1pbigyLjV2bWluLCAwLjhyZW0pO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50b2RvVGFzayBwOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWFnZXMvY2FsZW5kYXIuc3ZnXFxcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxufVxcblxcbi50b2RvVGFzayBwOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWFnZXMvZm9sZGVyLnN2Z1xcXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbn1cXG5cXG4udG9kb1Rhc2sgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi4vaW1hZ2VzL2VkaXQuc3ZnXFxcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRvZG9UYXNrIGJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiA2Lzc7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWFnZXMvZGVsZXRlLnN2Z1xcXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgICNtYWluQ29udGVudHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0ICcuL21vZHVsZXMvc3R5bGUuY3NzJztcbmltcG9ydCB0b2RvTGlzdCBmcm9tICcuL21vZHVsZXMvdG9kb1ByZXZpZXcuanMnO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tCdXR0b25cIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVUYXNrRm9ybVZpc2liaWxpdHkodHJ1ZSkpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlQWRkVGFza0J1dHRvblwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRvZ2dsZVRhc2tGb3JtVmlzaWJpbGl0eShmYWxzZSkpO1xuXG5mdW5jdGlvbiB0b2dnbGVUYXNrRm9ybVZpc2liaWxpdHkodmlzaWJsZSlcbntcbiAgY29uc3QgZGlzcGxheVZhbHVlID0gdmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1Db250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlWYWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlVGFza0Zvcm1WaXNpYmlsaXR5OyIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5jbGFzcyB0b2RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcm9qZWN0LHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlkID0gdXVpZHY0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0oKXtcbiAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tGb3JtXCIpO1xuICBsZXQgdGFza05hbWUgPSBhZGRUYXNrRm9ybS5lbGVtZW50c1tcInRhc2tOYW1lXCJdO1xuICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gYWRkVGFza0Zvcm0uZWxlbWVudHNbXCJ0YXNrRGVzY3JpcHRpb25cIl07XG4gIGxldCB0YXNrRHVlRGF0ZSA9IGFkZFRhc2tGb3JtLmVsZW1lbnRzW1widGFza0R1ZURhdGVcIl07XG4gIGxldCB0YXNrUHJvamVjdCA9IGFkZFRhc2tGb3JtLmVsZW1lbnRzW1widGFza1Byb2plY3RcIl07XG4gIGxldCB0YXNrUHJpb3JpdHkgPSBhZGRUYXNrRm9ybS5lbGVtZW50c1tcInRhc2tQcmlvcml0eVwiXTtcblxuICBjb25zdCBuZXd0b2RvSXRlbSA9IG5ldyB0b2RvSXRlbSh0YXNrTmFtZS52YWx1ZSx0YXNrRGVzY3JpcHRpb24udmFsdWUsdGFza0R1ZURhdGUudmFsdWUsdGFza1Byb2plY3QudmFsdWUsdGFza1ByaW9yaXR5LnZhbHVlKTtcbiAgXG4gIHJldHVybiBuZXd0b2RvSXRlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kb0l0ZW07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLml0ZW1zQnlJZCA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBhZGQobmV3SXRlbSlcbiAgICB7XG4gICAgICAgIHRoaXMuaXRlbXNCeUlkW25ld0l0ZW0uaWRdID0gbmV3SXRlbTtcbiAgICB9XG5cbiAgICBnZXQgaXRlbXMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5pdGVtc0J5SWQpO1xuICAgIH1cblxuICAgIGdldEl0ZW1CeUlEKGlkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNCeUlkW2lkXTtcbiAgICB9XG5cbiAgICByZW1vdmVCeUlkKGlkKVxuICAgIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuaXRlbXNCeUlkW2lkXTtcbiAgICB9XG59IiwiaW1wb3J0IGNyZWF0ZVRvZG9JdGVtIGZyb20gJy4vdG9kb0l0ZW0uanMnO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnO1xuaW1wb3J0IHRvZ2dsZVRhc2tGb3JtVmlzaWJpbGl0eSBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxubGV0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5sZXQgY2hlY2tFZGl0VGFzayA9IHtzdGF0dXM6IFwiZmFsc2VcIiwgaWQ6IFwiXCJ9O1xuXG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIik7XG5hZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGNoZWNrRWRpdFRhc2suc3RhdHVzPT10cnVlKXtcbiAgIGxldCB0YXNrSUQgPSBjaGVja0VkaXRUYXNrLmlkO1xuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFza0lEKS5yZW1vdmUoKTtcbiAgIHRvZG9MaXN0LnJlbW92ZUJ5SWQodGFza0lEKTtcbiAgIGNoZWNrRWRpdFRhc2suc3RhdHVzID0gZmFsc2U7XG4gIH1cbiAgbGV0IG5ld1RvZG9JdGVtID0gY3JlYXRlVG9kb0l0ZW0oKTtcbiAgdG9kb0xpc3QuYWRkKG5ld1RvZG9JdGVtKTtcbiAgZGlzcGxheVRvZG9UYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5VG9kb0l0ZW0obmV3VG9kb0l0ZW0pKTtcbiAgYWRkVGFza0Zvcm0ucmVzZXQoKTtcbiAgdG9nZ2xlVGFza0Zvcm1WaXNpYmlsaXR5KGZhbHNlKTtcbn0pO1xuXG5jb25zdCBkaXNwbGF5VG9kb1Rhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5VG9kb1Rhc2tzQ29udGFpbmVyXCIpO1xuXG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5wcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IFwiSW5kZXhcIjtcbmRpc3BsYXlUb2RvVGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb0l0ZW0gKGVsZW1lbnQpe1xuICBsZXQgdG9kb1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBsZXQgbGFiZWxDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IHRhc2tEdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIHRvZG9UYXNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvVGFza1wiKTtcbiAgdG9kb1Rhc2suc2V0QXR0cmlidXRlKCdpZCcsZWxlbWVudC5pZCk7XG4gIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveENvbnRhaW5lclwiKTtcblxuICB0YXNrQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgbGV0IG5ld1Rhc2tJRCA9IHV1aWR2NCgpO1xuICB0YXNrQ2hlY2tib3guaWQgPSAgbmV3VGFza0lEO1xuICB0YXNrQ2hlY2tib3gubmFtZSA9IFwiY2hlY2tUYXNrXCI7XG4gIGxhYmVsQ2hlY2tib3guaHRtbEZvciA9ICBuZXdUYXNrSUQ7XG4gIHNldFByaW9yaXR5Q29sb3IoZWxlbWVudCxsYWJlbENoZWNrYm94KTtcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxDaGVja2JveCk7XG5cbiAgdGFza05hbWUudGV4dENvbnRlbnQ9IGVsZW1lbnQubmFtZTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50PSBlbGVtZW50LmRlc2NyaXB0aW9uIDtcbiAgdGFza0R1ZWRhdGUudGV4dENvbnRlbnQ9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgdGFza1Byb2plY3QudGV4dENvbnRlbnQ9IGVsZW1lbnQucHJvamVjdDtcblxuICB0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVCdXR0b25cIik7XG4gIHRhc2tEZWxldGUuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tpZCcsZWxlbWVudC5pZCk7XG4gIHRhc2tEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spO1xuXG4gIHRhc2tFZGl0LnNldEF0dHJpYnV0ZSgnZGF0YS10YXNraWQnLGVsZW1lbnQuaWQpO1xuICB0YXNrRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xuXG4gIHRvZG9UYXNrLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcbiAgdG9kb1Rhc2suYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICB0b2RvVGFzay5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICB0b2RvVGFzay5hcHBlbmRDaGlsZCh0YXNrRHVlZGF0ZSk7XG4gIHRvZG9UYXNrLmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0KTtcbiAgdG9kb1Rhc2suYXBwZW5kQ2hpbGQodGFza0VkaXQpO1xuICB0b2RvVGFzay5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcblxuICByZXR1cm4gdG9kb1Rhc2s7XG59XG4gIFxuZnVuY3Rpb24gc2V0UHJpb3JpdHlDb2xvcihlbGVtZW50LCB0b2RvVGFzayl7XG4gIGxldCBwcmlvcml0eSA9IGVsZW1lbnQucHJpb3JpdHk7XG4gIHN3aXRjaChwcmlvcml0eSkge1xuICAgIGNhc2UgXCJsb3dQcmlvcml0eVwiOlxuICAgICAgdG9kb1Rhc2suc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmx1ZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1lZGl1bVByaW9yaXR5XCI6XG4gICAgICB0b2RvVGFzay5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCB5ZWxsb3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoaWdoUHJpb3JpdHlcIjpcbiAgICAgIHRvZG9UYXNrLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRvZG9UYXNrLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJnYig4MCwgODAsIDgwKVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soKXtcbiAgbGV0IHRhc2tJRCA9IHRoaXMuZGF0YXNldC50YXNraWQ7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tJRCkucmVtb3ZlKCk7XG4gIHRvZG9MaXN0LnJlbW92ZUJ5SWQodGFza0lEKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soKXtcbiAgbGV0IHRhc2tJRCA9IHRoaXMuZGF0YXNldC50YXNraWQ7XG4gIGxldCBpdGVtVG9FZGl0ID0gdG9kb0xpc3QuZ2V0SXRlbUJ5SUQodGFza0lEKTtcbiAgYWRkVGFza0Zvcm0uZWxlbWVudHNbXCJ0YXNrTmFtZVwiXS52YWx1ZSA9IGl0ZW1Ub0VkaXQubmFtZTtcbiAgYWRkVGFza0Zvcm0uZWxlbWVudHNbXCJ0YXNrRGVzY3JpcHRpb25cIl0udmFsdWUgPSBpdGVtVG9FZGl0LmRlc2NyaXB0aW9uO1xuICBhZGRUYXNrRm9ybS5lbGVtZW50c1tcInRhc2tEdWVEYXRlXCJdLnZhbHVlID0gaXRlbVRvRWRpdC5kdWVEYXRlO1xuICBhZGRUYXNrRm9ybS5lbGVtZW50c1tcInRhc2tQcm9qZWN0XCJdLnZhbHVlID0gaXRlbVRvRWRpdC5wcm9qZWN0O1xuICBhZGRUYXNrRm9ybS5lbGVtZW50c1tcInRhc2tQcmlvcml0eVwiXS52YWx1ZSA9IGl0ZW1Ub0VkaXQucHJpb3JpdHk7XG4gIGNoZWNrRWRpdFRhc2suc3RhdHVzID0gdHJ1ZTtcbiAgY2hlY2tFZGl0VGFzay5pZCA9IHRhc2tJRDtcbiAgdG9nZ2xlVGFza0Zvcm1WaXNpYmlsaXR5KHRydWUpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9MaXN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9