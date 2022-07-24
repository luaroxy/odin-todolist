/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Cocogoose';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-style: normal;\n} \n  \n*{\n    margin:0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton:hover{\n    transform: scale(1.08);\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n#container {\n    display: grid;\n    grid: 10vh 1fr / clamp(13rem, 18%, 20rem) 1fr;\n    min-height: 100vh;\n}\n\n/* HEADER */\n#header {\n    grid-column: 1/3;\n    background-color: #89d8d3b9;\n    background-image: linear-gradient(315deg, #89d8d3bd 0%, #03c8a7b4 74%);\n    display: flex;\n    padding: 1rem;\n    justify-content: space-between;\n    align-content: center;\n    color: #fffcff;\n}\n\n#header p {\n    font-family: 'Cocogoose';\n    font-size: clamp(1rem, 1.5vw, 3rem);\n    display: flex;\n    align-items: center;\n}\n\n#header button{\n    display: flex;\n    align-items: center;\n    gap: 0.1vw;\n    font-weight: 600;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n}\n\n#header button img{\n    width: clamp(1rem, 2.3vw, 3rem);\n}\n\n/* SIDERBAR */\n#sidebar{\n    background-color: #e1e1e17c;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5vh;\n    padding: 1rem;\n}\n\n#sidebar button{\n    display: flex;\n    align-items: center;\n    gap: 0.5vw;\n    font-weight: 400;\n    font-size: clamp(1rem, 1vw, 4rem);\n}\n\n#sidebar button img{\n    width: clamp(1rem, 1.25vw, 2rem);\n}\n\n#priorityOptions h1, #projectOptions h1{\n    font-size: clamp(1rem, 1vw, 4rem);\n    font-weight: 200;\n}\n\n#priorityOptions, #projectOptions{\n    padding-left: 1rem;\n}\n\n#addProjectButton{\n    opacity: 0.5;\n}\n\n/* ADD TASK FORM */\n#addTaskFormContainer {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n\n.form-container{\n    width:50vw;\n    background:#e1e1e1;\n    border-radius:8px;\n    box-shadow: 4px 4px 5px 0px #000000af;\n    padding: 2vh 2vw;\n}\n  \n.rowContainer{\n    display: flex;\n    gap: 1rem;\n}\n  \n.form-buttons{\n    display: flex;\n    justify-content: end;\n    gap: 1rem;\n}\n  \n.inputContent{\n    display:flex;\n    flex-direction:column;\n    margin-top: 2vh;\n}\n  \n.form-container label{\n    font-family: 'Montserrat', monospace;\n    font-weight: 625;\n    letter-spacing: .02rem;\n    font-size: clamp(0.8rem, 1vw, 3rem)\n}\n  \n.form-container h2{\n    margin:0.5vh 0;\n    padding-bottom:0.25vh;\n    width:10vw;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n    color:#78788c;\n    border-bottom:3px solid #78788c;\n}\n  \n.form-container input, .form-container textarea, .form-container select {\n    width:100%;\n    padding:0.9vh;\n    box-sizing:border-box;\n    background:none;\n    outline:none;\n    resize:none;\n    border:0;\n    font-family:'Montserrat',sans-serif;\n    transition:all .3s;\n    border-bottom:2px solid #bebed2;\n}\n  \n.form-container input:focus, .form-container textarea:focus, .form-container select:focus{\n    border-bottom:2px solid #78788c\n}\n  \n.form-container button{\n    padding:0.5vh 0.5vw;\n    margin:1vh 0 0;\n    font-family:'Montserrat',sans-serif;\n    border:2px solid #78788c;\n    background:0;\n    color:#5a5a6e;\n    cursor:pointer;\n    transition:all .3s;\n    font-size: clamp(0.8rem, 1vw, 2rem);\n}\n  \n.form-container button:hover{\n    background:#78788c;\n    color:#fff\n}\n\n\n/* MAIN CONTENT - display Todo Items */\n#mainContent{\n    background-color: #d5fefd;\n    background-image: linear-gradient(0deg, #d5fefd 0%, #fffcff 74%);\n}\n\n#todoContainer{\n    padding: 35px 55px;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n.todoTask {\n    display: grid;\n    grid: 1fr 1fr 1fr / 2.5rem fit-content(300px) fit-content(300px) 1fr 20px 20px;\n    margin-top: 3vh;\n    border-bottom:1px solid #78788c;\n}\n\n.checkboxContainer {\n    position: relative;\n    grid-row: 1/4;\n}\n  \n.checkboxContainer label {\n    background-color: #fff;\n    border-radius: 50%;\n    cursor: pointer;\n    width: clamp(1.5rem,max(2vh,2vw),2rem);\n    height: clamp(1.5rem,max(2vh,2vw),2rem);\n    left: 0;\n    position: absolute;\n    top: 0;\n}\n  \n.checkboxContainer label:after {\n    border: 2.5px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.67);\n    left: calc(clamp(1.5rem,max(2vh,2vw),2rem)/5);\n    opacity: 0;\n    position: absolute;\n    top: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.5);;\n    transform: rotate(-45deg);\n    width: calc(clamp(1.5rem,max(2vh,2vw),2rem)/2.33);\n}\n  \n.checkboxContainer input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label {\n    background-color: #bdbaba;\n    border-color: #fefffe;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n}\n\n.onCheckbox{\n    opacity: 0.5;\n    text-decoration: line-through;\n}\n\n.todoTask h1{\n    grid-column: 2/7;\n    font-size: min(3vmin, 1.3rem)\n}\n\n.todoTask p:first-of-type{\n    grid-column: 2/7;\n}\n\n.todoTask p{\n    font-size: min(2.5vmin, 0.8rem);\n    margin-right: 10px;\n}\n\n.todoTask p:nth-of-type(2):before {\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask p:nth-of-type(3):before {\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask button:first-of-type {\n    grid-column: 5/6;\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n.todoTask button:nth-of-type(2) {\n    grid-column: 6/7;\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n\n@media (max-width: 768px) {\n    #sidebar {\n        display: none;\n    }\n    #mainContent{\n        grid-column: 1/3;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Cocogoose';\n    src: url('../fonts/Cocogoose.ttf') format('truetype');\n    font-style: normal;\n} \n  \n*{\n    margin:0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton:hover{\n    transform: scale(1.08);\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n#container {\n    display: grid;\n    grid: 10vh 1fr / clamp(13rem, 18%, 20rem) 1fr;\n    min-height: 100vh;\n}\n\n/* HEADER */\n#header {\n    grid-column: 1/3;\n    background-color: #89d8d3b9;\n    background-image: linear-gradient(315deg, #89d8d3bd 0%, #03c8a7b4 74%);\n    display: flex;\n    padding: 1rem;\n    justify-content: space-between;\n    align-content: center;\n    color: #fffcff;\n}\n\n#header p {\n    font-family: 'Cocogoose';\n    font-size: clamp(1rem, 1.5vw, 3rem);\n    display: flex;\n    align-items: center;\n}\n\n#header button{\n    display: flex;\n    align-items: center;\n    gap: 0.1vw;\n    font-weight: 600;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n}\n\n#header button img{\n    width: clamp(1rem, 2.3vw, 3rem);\n}\n\n/* SIDERBAR */\n#sidebar{\n    background-color: #e1e1e17c;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5vh;\n    padding: 1rem;\n}\n\n#sidebar button{\n    display: flex;\n    align-items: center;\n    gap: 0.5vw;\n    font-weight: 400;\n    font-size: clamp(1rem, 1vw, 4rem);\n}\n\n#sidebar button img{\n    width: clamp(1rem, 1.25vw, 2rem);\n}\n\n#priorityOptions h1, #projectOptions h1{\n    font-size: clamp(1rem, 1vw, 4rem);\n    font-weight: 200;\n}\n\n#priorityOptions, #projectOptions{\n    padding-left: 1rem;\n}\n\n#addProjectButton{\n    opacity: 0.5;\n}\n\n/* ADD TASK FORM */\n#addTaskFormContainer {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n\n.form-container{\n    width:50vw;\n    background:#e1e1e1;\n    border-radius:8px;\n    box-shadow: 4px 4px 5px 0px #000000af;\n    padding: 2vh 2vw;\n}\n  \n.rowContainer{\n    display: flex;\n    gap: 1rem;\n}\n  \n.form-buttons{\n    display: flex;\n    justify-content: end;\n    gap: 1rem;\n}\n  \n.inputContent{\n    display:flex;\n    flex-direction:column;\n    margin-top: 2vh;\n}\n  \n.form-container label{\n    font-family: 'Montserrat', monospace;\n    font-weight: 625;\n    letter-spacing: .02rem;\n    font-size: clamp(0.8rem, 1vw, 3rem)\n}\n  \n.form-container h2{\n    margin:0.5vh 0;\n    padding-bottom:0.25vh;\n    width:10vw;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n    color:#78788c;\n    border-bottom:3px solid #78788c;\n}\n  \n.form-container input, .form-container textarea, .form-container select {\n    width:100%;\n    padding:0.9vh;\n    box-sizing:border-box;\n    background:none;\n    outline:none;\n    resize:none;\n    border:0;\n    font-family:'Montserrat',sans-serif;\n    transition:all .3s;\n    border-bottom:2px solid #bebed2;\n}\n  \n.form-container input:focus, .form-container textarea:focus, .form-container select:focus{\n    border-bottom:2px solid #78788c\n}\n  \n.form-container button{\n    padding:0.5vh 0.5vw;\n    margin:1vh 0 0;\n    font-family:'Montserrat',sans-serif;\n    border:2px solid #78788c;\n    background:0;\n    color:#5a5a6e;\n    cursor:pointer;\n    transition:all .3s;\n    font-size: clamp(0.8rem, 1vw, 2rem);\n}\n  \n.form-container button:hover{\n    background:#78788c;\n    color:#fff\n}\n\n\n/* MAIN CONTENT - display Todo Items */\n#mainContent{\n    background-color: #d5fefd;\n    background-image: linear-gradient(0deg, #d5fefd 0%, #fffcff 74%);\n}\n\n#todoContainer{\n    padding: 35px 55px;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n.todoTask {\n    display: grid;\n    grid: 1fr 1fr 1fr / 2.5rem fit-content(300px) fit-content(300px) 1fr 20px 20px;\n    margin-top: 3vh;\n    border-bottom:1px solid #78788c;\n}\n\n.checkboxContainer {\n    position: relative;\n    grid-row: 1/4;\n}\n  \n.checkboxContainer label {\n    background-color: #fff;\n    border-radius: 50%;\n    cursor: pointer;\n    width: clamp(1.5rem,max(2vh,2vw),2rem);\n    height: clamp(1.5rem,max(2vh,2vw),2rem);\n    left: 0;\n    position: absolute;\n    top: 0;\n}\n  \n.checkboxContainer label:after {\n    border: 2.5px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.67);\n    left: calc(clamp(1.5rem,max(2vh,2vw),2rem)/5);\n    opacity: 0;\n    position: absolute;\n    top: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.5);;\n    transform: rotate(-45deg);\n    width: calc(clamp(1.5rem,max(2vh,2vw),2rem)/2.33);\n}\n  \n.checkboxContainer input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label {\n    background-color: #bdbaba;\n    border-color: #fefffe;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n}\n\n.onCheckbox{\n    opacity: 0.5;\n    text-decoration: line-through;\n}\n\n.todoTask h1{\n    grid-column: 2/7;\n    font-size: min(3vmin, 1.3rem)\n}\n\n.todoTask p:first-of-type{\n    grid-column: 2/7;\n}\n\n.todoTask p{\n    font-size: min(2.5vmin, 0.8rem);\n    margin-right: 10px;\n}\n\n.todoTask p:nth-of-type(2):before {\n    content: \"\";\n    display: block;\n    background: url(\"../images/calendar.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask p:nth-of-type(3):before {\n    content: \"\";\n    display: block;\n    background: url(\"../images/folder.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask button:first-of-type {\n    grid-column: 5/6;\n    content: \"\";\n    display: block;\n    background: url(\"../images/edit.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n.todoTask button:nth-of-type(2) {\n    grid-column: 6/7;\n    content: \"\";\n    display: block;\n    background: url(\"../images/delete.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n\n@media (max-width: 768px) {\n    #sidebar {\n        display: none;\n    }\n    #mainContent{\n        grid-column: 1/3;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/scripts/controllers/mainController.js":
/*!***************************************************!*\
  !*** ./src/scripts/controllers/mainController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainController)
/* harmony export */ });
class MainController
{
    constructor(model, view)
    {
        this.model = model;
        this.view = view;
        this.onEditTodoItem = {status: "false", element: ""};

        // hook up event handlers
        view.getByID("addTaskButton").addEventListener("click", () => view.toggleAddTaskFormVisibility(true,"addTaskFormContainer"));
        view.getByID("closeAddTaskButton").addEventListener("click", () => view.resetAndCloseAddTaskForm());
        view.getByID("addTaskForm").addEventListener("submit", (e) => this.onAddTaskFormSubmit(e));
        view.getByID("priorityButton").addEventListener("click", () => this.showOrHide("priorityImg","priorityOptions"));
        view.getByID("projectButton").addEventListener("click", () => this.showOrHide("projectImg","projectOptions"));
    }

    onAddTaskFormSubmit(e)
    {
        e.preventDefault();

        this.onEditTodoItem.status == true ? this.updateTodoItem() : this.createNewTodoItem();
        this.view.resetAndCloseAddTaskForm();
    }

    createNewTodoItem()
    {
        const newTodoItem = this.createNewTodoItemFromFormInputs();        
        this.appendAndHookUpNewTodoItemFromModel(newTodoItem);
    }

    updateTodoItem()
    {
        const formElements = this.getElementsFromFormInputs();
        const updatedTodoItem = this.model.updateTodoItem(this.onEditTodoItem.element,formElements.name, formElements.desc, formElements.dueDate, formElements.project, formElements.priority)
        this.view.updateTodoItem(updatedTodoItem);
        this.onEditTodoItem.status = false;
    }

    getElementsFromFormInputs()
    {
        const name = this.view.getAddTaskFormElementValueByName("taskName");
        const desc = this.view.getAddTaskFormElementValueByName("taskDescription");
        const dueDate = this.view.getAddTaskFormElementValueByName("taskDueDate");
        const project = this.view.getAddTaskFormElementValueByName("taskProject");
        const priority = this.view.getAddTaskFormElementValueByName("taskPriority");

        return {name, desc, dueDate, project, priority};
    }

    createNewTodoItemFromFormInputs()
    {
        const formElements = this.getElementsFromFormInputs();
        return this.model.createAndAddNewTodoItem(formElements.name, formElements.desc, formElements.dueDate, formElements.project, formElements.priority);
    }

    appendAndHookUpNewTodoItemFromModel(todoItem)
    {
        const newTodoItemView = this.view.appendTodoItem(todoItem);

        // hook up event handlers of new view element
        newTodoItemView.deleteButton.addEventListener("click", 
            () => this.deleteTodoItem(newTodoItemView));

        newTodoItemView.editButton.addEventListener("click", 
            () => this.editTodoItem(newTodoItemView));

        newTodoItemView.checkbox.addEventListener("change", 
            () => this.checkCheckbox(newTodoItemView));

    }
    
    deleteTodoItem(todoItemView)
    {
        this.model.removeItemById(todoItemView.id);
        todoItemView.element.remove();
    }

    editTodoItem(todoItemView)
    {
        this.view.toggleAddTaskFormVisibility(true,"addTaskFormContainer");
        this.view.fillAddFormWhenEdit(todoItemView);
        this.onEditTodoItem.status = true;
        this.onEditTodoItem.element = todoItemView;
    }

    checkCheckbox(todoItemView)
    {   
        parent = this.view.getByID("displayTodoTasksContainer");
        if (todoItemView.checkbox.checked) {
            todoItemView.element.classList.add("onCheckbox");
            parent.append(todoItemView.element);
          } else {
            todoItemView.element.classList.remove("onCheckbox");
            parent.prepend(todoItemView.element);
          }
    }

    showOrHide(imgId, optionsId) 
    {
        if (this.view.getByID(optionsId).style.display == "block") 
        {
            this.view.getByID(imgId).src = "./images/downarrow.svg";
            this.view.toggleAddTaskFormVisibility(false,optionsId);
        }
        else 
        {
            this.view.getByID(imgId).src = "./images/rightarrow.svg";
            this.view.toggleAddTaskFormVisibility(true,optionsId);
        }
    }
}



/***/ }),

/***/ "./src/scripts/models/mainModel.js":
/*!*****************************************!*\
  !*** ./src/scripts/models/mainModel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainModel)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/scripts/models/todoList.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItem */ "./src/scripts/models/todoItem.js");



class MainModel
{
    constructor()
    {
        this.list = new _todoList__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }

    createAndAddNewTodoItem(name, description, dueDate, project, priority)
    {
        const newTodoItem = new _todoItem__WEBPACK_IMPORTED_MODULE_1__["default"](name, description, dueDate, project, priority);
        this.list.add(newTodoItem);

        return newTodoItem;
    }

    updateTodoItem(element, name, description, dueDate, project, priority)
    {
        element.model.name = name;
        element.model.description = description;
        element.model.dueDate = dueDate;
        element.model.project = project;
        element.model.priority = priority;

        return element;
    }

    removeItemById(id)
    {
        this.list.removeById(id);
    }
} 

/***/ }),

/***/ "./src/scripts/models/todoItem.js":
/*!****************************************!*\
  !*** ./src/scripts/models/todoItem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoItem)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class TodoItem
{
  constructor(name, description, dueDate, project, priority)
  {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
} 

/***/ }),

/***/ "./src/scripts/models/todoList.js":
/*!****************************************!*\
  !*** ./src/scripts/models/todoList.js ***!
  \****************************************/
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

/***/ "./src/scripts/views/mainView.js":
/*!***************************************!*\
  !*** ./src/scripts/views/mainView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainView)
/* harmony export */ });
/* harmony import */ var _todoItemView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemView */ "./src/scripts/views/todoItemView.js");


class MainView
{
    getByID(id)
    {
        return document.getElementById(id);
    }

    toggleAddTaskFormVisibility(visible, id)
    {
        const displayValue = visible ? 'block' : 'none';
        this.getByID(id).style.display = displayValue;
    }
    getAddTaskFormElementValueByName(elementName)
    {
        return this.getByID("addTaskForm").elements[elementName].value;
    }
    resetAndCloseAddTaskForm()
    {
        this.getByID("addTaskForm").reset();
        this.toggleAddTaskFormVisibility(false,"addTaskFormContainer");
    }
    appendTodoItem(item)
    {
        // get template markup and clone element (deep copy)
        let templateContent = this.getByID("todoItemTemplate").content;
        let todoItemDivElementClone = templateContent.cloneNode(true).querySelector("div");
        let todoItemView = new _todoItemView__WEBPACK_IMPORTED_MODULE_0__["default"](todoItemDivElementClone, item);

        // then insert cloned markup as new child of todo tasks container
        this.getByID("displayTodoTasksContainer").append(todoItemView.element);

        return todoItemView;
    }
    fillAddFormWhenEdit(todoItemView)
    {
        this.getByID("addTaskForm").elements["taskName"].value = todoItemView.model.name;
        this.getByID("addTaskForm").elements["taskDescription"].value = todoItemView.model.description;
        this.getByID("addTaskForm").elements["taskDueDate"].value = todoItemView.model.dueDate;
        this.getByID("addTaskForm").elements["taskProject"].value = todoItemView.model.project;
        this.getByID("addTaskForm").elements["taskPriority"].value = todoItemView.model.priority;
    }
    updateTodoItem(element)
    {
        let todoItemToUpdate = this.getByID(element.id);
        new _todoItemView__WEBPACK_IMPORTED_MODULE_0__["default"](todoItemToUpdate,element.model);
    }
} 

/***/ }),

/***/ "./src/scripts/views/todoItemView.js":
/*!*******************************************!*\
  !*** ./src/scripts/views/todoItemView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoItemView)
/* harmony export */ });
class TodoItemView
{
    constructor(element, todoItemModel)
    {
        this.element = element;
        this.model = todoItemModel;

        this.id = todoItemModel.id;
        this.name = todoItemModel.name;
        this.description = todoItemModel.description;
        this.due = todoItemModel.dueDate;
        this.project = todoItemModel.project;
        this.priority = todoItemModel.priority;
    }

    get checkbox()
    {
        return this.element.querySelector("input[name=checkTask]");
    }
    get checkboxLabel()
    {
        return this.element.querySelector("label[name=checkBoxLabel]");
    }
    get taskNameH1()
    {
        return this.element.querySelector("h1");
    }
    get descriptionParagraph()
    {
        return this.element.querySelector("p.desc");
    }
    get dueParagraph()
    {
        return this.element.querySelector("p.due");
    }
    get projectParagraph()
    {
        return this.element.querySelector("p.project");
    }
    get deleteButton()
    {
        return this.element.querySelector("button.deleteButton");
    }

    get editButton()
    {
        return this.element.querySelector("button.editButton");
    }

    get id()
    {
        return this.element.getAttribute("id");
    }
    set id(value)
    {
        this.element.setAttribute("id", value);

        const checkBoxId = `checkbox-${value}`
        this.checkbox.setAttribute("id", checkBoxId);
        this.checkboxLabel.setAttribute("for", checkBoxId);
    }
    set name(value)
    {
        this.taskNameH1.textContent = value;
    }
    set description(value)
    {
        this.descriptionParagraph.textContent = value;
    }
    set due(value)
    {
        this.dueParagraph.textContent = value;
    }
    set project(value)
    {
        this.projectParagraph.textContent = value;
    }
    set priority(value)
    {
        // TODO: can we delegate this to CSS?
        switch(value)
        {
            case "lowPriority":
                this.checkboxLabel.style.border = "2px solid blue";
                break;
            case "mediumPriority":
                this.checkboxLabel.style.border = "2px solid yellow";
                break;
            case "highPriority":
                this.checkboxLabel.style.border = "2px solid red";
                break;
            default:
                this.checkboxLabel.style.border = "2px solid rgb(80, 80, 80)";
        }
    }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _models_mainModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/mainModel */ "./src/scripts/models/mainModel.js");
/* harmony import */ var _views_mainView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/mainView */ "./src/scripts/views/mainView.js");
/* harmony import */ var _controllers_mainController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/mainController */ "./src/scripts/controllers/mainController.js");






// wiring up model, views, and controllers
const model = new _models_mainModel__WEBPACK_IMPORTED_MODULE_1__["default"]();
const view = new _views_mainView__WEBPACK_IMPORTED_MODULE_2__["default"]();
const controller = new _controllers_mainController__WEBPACK_IMPORTED_MODULE_3__["default"](model, view); 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFZTtBQUNIO0FBQ2tCOztBQUUxRDtBQUNBLGtCQUFrQix5REFBUztBQUMzQixpQkFBaUIsdURBQVE7QUFDekIsdUJBQXVCLG1FQUFjLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXJzL21haW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9tb2RlbHMvbWFpbk1vZGVsLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9tb2RlbHMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL21vZGVscy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvdmlld3MvbWFpblZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3ZpZXdzL3RvZG9JdGVtVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQ29jb2dvb3NlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYWxlbmRhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZm9sZGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9lZGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59IFxcbiAgXFxuKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xcbn1cXG5cXG5idXR0b24sIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxMHZoIDFmciAvIGNsYW1wKDEzcmVtLCAxOCUsIDIwcmVtKSAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ZDhkM2I5O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjODlkOGQzYmQgMCUsICMwM2M4YTdiNCA3NCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmZjZmY7XFxufVxcblxcbiNoZWFkZXIgcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29jb2dvb3NlJztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjV2dywgM3JlbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMXZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuM3Z3LCA0cmVtKTtcXG59XFxuXFxuI2hlYWRlciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogY2xhbXAoMXJlbSwgMi4zdncsIDNyZW0pO1xcbn1cXG5cXG4vKiBTSURFUkJBUiAqL1xcbiNzaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxN2M7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS41dmg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNzaWRlYmFyIGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjV2dztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDRyZW0pO1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuI3ByaW9yaXR5T3B0aW9ucyBoMSwgI3Byb2plY3RPcHRpb25zIGgxe1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgNHJlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMsICNwcm9qZWN0T3B0aW9uc3tcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbntcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBBREQgVEFTSyBGT1JNICovXFxuI2FkZFRhc2tGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmZvcm0tY29udGFpbmVye1xcbiAgICB3aWR0aDo1MHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiNlMWUxZTE7XFxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDVweCAwcHggIzAwMDAwMGFmO1xcbiAgICBwYWRkaW5nOiAydmggMnZ3O1xcbn1cXG4gIFxcbi5yb3dDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuICBcXG4uZm9ybS1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4gIFxcbi5pbnB1dENvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGxhYmVse1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MjU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMDJyZW07XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxdncsIDNyZW0pXFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGgye1xcbiAgICBtYXJnaW46MC41dmggMDtcXG4gICAgcGFkZGluZy1ib3R0b206MC4yNXZoO1xcbiAgICB3aWR0aDoxMHZ3O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuM3Z3LCA0cmVtKTtcXG4gICAgY29sb3I6Izc4Nzg4YztcXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgIzc4Nzg4YztcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgaW5wdXQsIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSwgLmZvcm0tY29udGFpbmVyIHNlbGVjdCB7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHBhZGRpbmc6MC45dmg7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBvdXRsaW5lOm5vbmU7XFxuICAgIHJlc2l6ZTpub25lO1xcbiAgICBib3JkZXI6MDtcXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XFxuICAgIHRyYW5zaXRpb246YWxsIC4zcztcXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2JlYmVkMjtcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1cywgLmZvcm0tY29udGFpbmVyIHNlbGVjdDpmb2N1c3tcXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzc4Nzg4Y1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBidXR0b257XFxuICAgIHBhZGRpbmc6MC41dmggMC41dnc7XFxuICAgIG1hcmdpbjoxdmggMCAwO1xcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjNzg3ODhjO1xcbiAgICBiYWNrZ3JvdW5kOjA7XFxuICAgIGNvbG9yOiM1YTVhNmU7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOmFsbCAuM3M7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxdncsIDJyZW0pO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6Izc4Nzg4YztcXG4gICAgY29sb3I6I2ZmZlxcbn1cXG5cXG5cXG4vKiBNQUlOIENPTlRFTlQgLSBkaXNwbGF5IFRvZG8gSXRlbXMgKi9cXG4jbWFpbkNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWZlZmQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZDVmZWZkIDAlLCAjZmZmY2ZmIDc0JSk7XFxufVxcblxcbiN0b2RvQ29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAzNXB4IDU1cHg7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udG9kb1Rhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgMWZyIDFmciAvIDIuNXJlbSBmaXQtY29udGVudCgzMDBweCkgZml0LWNvbnRlbnQoMzAwcHgpIDFmciAyMHB4IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzc4Nzg4YztcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLXJvdzogMS80O1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgbGFiZWw6YWZ0ZXIge1xcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogY2FsYyhjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pLzQuNjcpO1xcbiAgICBsZWZ0OiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNC41KTs7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHdpZHRoOiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvMi4zMyk7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmFiYTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmVmZmZlO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5vbkNoZWNrYm94e1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kb1Rhc2sgaDF7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxuICAgIGZvbnQtc2l6ZTogbWluKDN2bWluLCAxLjNyZW0pXFxufVxcblxcbi50b2RvVGFzayBwOmZpcnN0LW9mLXR5cGV7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxufVxcblxcbi50b2RvVGFzayBwe1xcbiAgICBmb250LXNpemU6IG1pbigyLjV2bWluLCAwLjhyZW0pO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50b2RvVGFzayBwOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG59XFxuXFxuLnRvZG9UYXNrIHA6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbn1cXG5cXG4udG9kb1Rhc2sgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRvZG9UYXNrIGJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiA2Lzc7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAjbWFpbkNvbnRlbnR7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQXFEO0lBQ3JELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsWUFBWTtDQUNaLFVBQVU7Q0FDVixhQUFhO0NBQ2IsZUFBZTtDQUNmLGdCQUFnQjtB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QUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkRBQW1EO0lBQ25ELFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkRBQWlEO0lBQ2pELFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLDZEQUErQztJQUMvQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLDZEQUFpRDtJQUNqRCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9Db2NvZ29vc2UudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG4gIFxcbip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMTB2aCAxZnIgLyBjbGFtcCgxM3JlbSwgMTglLCAyMHJlbSkgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWQ4ZDNiOTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzg5ZDhkM2JkIDAlLCAjMDNjOGE3YjQgNzQlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmY2ZmO1xcbn1cXG5cXG4jaGVhZGVyIHAge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41dncsIDNyZW0pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjF2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjN2dywgNHJlbSk7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDIuM3Z3LCAzcmVtKTtcXG59XFxuXFxuLyogU0lERVJCQVIgKi9cXG4jc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTdjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuNXZoO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCA0cmVtKTtcXG59XFxuXFxuI3NpZGViYXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMgaDEsICNwcm9qZWN0T3B0aW9ucyBoMXtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDRyZW0pO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4jcHJpb3JpdHlPcHRpb25zLCAjcHJvamVjdE9wdGlvbnN7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b257XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogQUREIFRBU0sgRk9STSAqL1xcbiNhZGRUYXNrRm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6NTB2dztcXG4gICAgYmFja2dyb3VuZDojZTFlMWUxO1xcbiAgICBib3JkZXItcmFkaXVzOjhweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA1cHggMHB4ICMwMDAwMDBhZjtcXG4gICAgcGFkZGluZzogMnZoIDJ2dztcXG59XFxuICBcXG4ucm93Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcbiAgXFxuLmZvcm0tYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuICBcXG4uaW5wdXRDb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogMnZoO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBsYWJlbHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgbW9ub3NwYWNlO1xcbiAgICBmb250LXdlaWdodDogNjI1O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjAycmVtO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMXZ3LCAzcmVtKVxcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBoMntcXG4gICAgbWFyZ2luOjAuNXZoIDA7XFxuICAgIHBhZGRpbmctYm90dG9tOjAuMjV2aDtcXG4gICAgd2lkdGg6MTB2dztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjN2dywgNHJlbSk7XFxuICAgIGNvbG9yOiM3ODc4OGM7XFxuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkICM3ODc4OGM7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGlucHV0LCAuZm9ybS1jb250YWluZXIgdGV4dGFyZWEsIC5mb3JtLWNvbnRhaW5lciBzZWxlY3Qge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBwYWRkaW5nOjAuOXZoO1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgb3V0bGluZTpub25lO1xcbiAgICByZXNpemU6bm9uZTtcXG4gICAgYm9yZGVyOjA7XFxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JyxzYW5zLXNlcmlmO1xcbiAgICB0cmFuc2l0aW9uOmFsbCAuM3M7XFxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNiZWJlZDI7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGlucHV0OmZvY3VzLCAuZm9ybS1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciBzZWxlY3Q6Zm9jdXN7XFxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICM3ODc4OGNcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgYnV0dG9ue1xcbiAgICBwYWRkaW5nOjAuNXZoIDAuNXZ3O1xcbiAgICBtYXJnaW46MXZoIDAgMDtcXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjoycHggc29saWQgIzc4Nzg4YztcXG4gICAgYmFja2dyb3VuZDowO1xcbiAgICBjb2xvcjojNWE1YTZlO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjphbGwgLjNzO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMXZ3LCAycmVtKTtcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiM3ODc4OGM7XFxuICAgIGNvbG9yOiNmZmZcXG59XFxuXFxuXFxuLyogTUFJTiBDT05URU5UIC0gZGlzcGxheSBUb2RvIEl0ZW1zICovXFxuI21haW5Db250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVmZWZkO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2Q1ZmVmZCAwJSwgI2ZmZmNmZiA3NCUpO1xcbn1cXG5cXG4jdG9kb0NvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMzVweCA1NXB4O1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnRvZG9UYXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIDFmciAxZnIgLyAyLjVyZW0gZml0LWNvbnRlbnQoMzAwcHgpIGZpdC1jb250ZW50KDMwMHB4KSAxZnIgMjBweCAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzdmg7XFxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM3ODc4OGM7XFxufVxcblxcbi5jaGVja2JveENvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1yb3c6IDEvNDtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSk7XFxuICAgIGhlaWdodDogY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKTtcXG4gICAgbGVmdDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGxhYmVsOmFmdGVyIHtcXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS80LjY3KTtcXG4gICAgbGVmdDogY2FsYyhjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pLzUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYyhjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pLzQuNSk7O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB3aWR0aDogY2FsYyhjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pLzIuMzMpO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJhYmE7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZlZmZmZTtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ub25DaGVja2JveHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG9UYXNrIGgxe1xcbiAgICBncmlkLWNvbHVtbjogMi83O1xcbiAgICBmb250LXNpemU6IG1pbigzdm1pbiwgMS4zcmVtKVxcbn1cXG5cXG4udG9kb1Rhc2sgcDpmaXJzdC1vZi10eXBle1xcbiAgICBncmlkLWNvbHVtbjogMi83O1xcbn1cXG5cXG4udG9kb1Rhc2sgcHtcXG4gICAgZm9udC1zaXplOiBtaW4oMi41dm1pbiwgMC44cmVtKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udG9kb1Rhc2sgcDpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi4vaW1hZ2VzL2NhbGVuZGFyLnN2Z1xcXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbn1cXG5cXG4udG9kb1Rhc2sgcDpudGgtb2YtdHlwZSgzKTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi4vaW1hZ2VzL2ZvbGRlci5zdmdcXFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG59XFxuXFxuLnRvZG9UYXNrIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2ltYWdlcy9lZGl0LnN2Z1xcXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi50b2RvVGFzayBidXR0b246bnRoLW9mLXR5cGUoMikge1xcbiAgICBncmlkLWNvbHVtbjogNi83O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi4vaW1hZ2VzL2RlbGV0ZS5zdmdcXFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAjbWFpbkNvbnRlbnR7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQ29udHJvbGxlclxue1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsLCB2aWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLm9uRWRpdFRvZG9JdGVtID0ge3N0YXR1czogXCJmYWxzZVwiLCBlbGVtZW50OiBcIlwifTtcblxuICAgICAgICAvLyBob29rIHVwIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImFkZFRhc2tCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHZpZXcudG9nZ2xlQWRkVGFza0Zvcm1WaXNpYmlsaXR5KHRydWUsXCJhZGRUYXNrRm9ybUNvbnRhaW5lclwiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImNsb3NlQWRkVGFza0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdmlldy5yZXNldEFuZENsb3NlQWRkVGFza0Zvcm0oKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImFkZFRhc2tGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHRoaXMub25BZGRUYXNrRm9ybVN1Ym1pdChlKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcInByaW9yaXR5QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dPckhpZGUoXCJwcmlvcml0eUltZ1wiLFwicHJpb3JpdHlPcHRpb25zXCIpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwicHJvamVjdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93T3JIaWRlKFwicHJvamVjdEltZ1wiLFwicHJvamVjdE9wdGlvbnNcIikpO1xuICAgIH1cblxuICAgIG9uQWRkVGFza0Zvcm1TdWJtaXQoZSlcbiAgICB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLm9uRWRpdFRvZG9JdGVtLnN0YXR1cyA9PSB0cnVlID8gdGhpcy51cGRhdGVUb2RvSXRlbSgpIDogdGhpcy5jcmVhdGVOZXdUb2RvSXRlbSgpO1xuICAgICAgICB0aGlzLnZpZXcucmVzZXRBbmRDbG9zZUFkZFRhc2tGb3JtKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3VG9kb0l0ZW0oKVxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3VG9kb0l0ZW0gPSB0aGlzLmNyZWF0ZU5ld1RvZG9JdGVtRnJvbUZvcm1JbnB1dHMoKTsgICAgICAgIFxuICAgICAgICB0aGlzLmFwcGVuZEFuZEhvb2tVcE5ld1RvZG9JdGVtRnJvbU1vZGVsKG5ld1RvZG9JdGVtKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUb2RvSXRlbSgpXG4gICAge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzRnJvbUZvcm1JbnB1dHMoKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9JdGVtID0gdGhpcy5tb2RlbC51cGRhdGVUb2RvSXRlbSh0aGlzLm9uRWRpdFRvZG9JdGVtLmVsZW1lbnQsZm9ybUVsZW1lbnRzLm5hbWUsIGZvcm1FbGVtZW50cy5kZXNjLCBmb3JtRWxlbWVudHMuZHVlRGF0ZSwgZm9ybUVsZW1lbnRzLnByb2plY3QsIGZvcm1FbGVtZW50cy5wcmlvcml0eSlcbiAgICAgICAgdGhpcy52aWV3LnVwZGF0ZVRvZG9JdGVtKHVwZGF0ZWRUb2RvSXRlbSk7XG4gICAgICAgIHRoaXMub25FZGl0VG9kb0l0ZW0uc3RhdHVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudHNGcm9tRm9ybUlucHV0cygpXG4gICAge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy52aWV3LmdldEFkZFRhc2tGb3JtRWxlbWVudFZhbHVlQnlOYW1lKFwidGFza05hbWVcIik7XG4gICAgICAgIGNvbnN0IGRlc2MgPSB0aGlzLnZpZXcuZ2V0QWRkVGFza0Zvcm1FbGVtZW50VmFsdWVCeU5hbWUoXCJ0YXNrRGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSB0aGlzLnZpZXcuZ2V0QWRkVGFza0Zvcm1FbGVtZW50VmFsdWVCeU5hbWUoXCJ0YXNrRHVlRGF0ZVwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMudmlldy5nZXRBZGRUYXNrRm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShcInRhc2tQcm9qZWN0XCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRoaXMudmlldy5nZXRBZGRUYXNrRm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShcInRhc2tQcmlvcml0eVwiKTtcblxuICAgICAgICByZXR1cm4ge25hbWUsIGRlc2MsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5fTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdUb2RvSXRlbUZyb21Gb3JtSW5wdXRzKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHNGcm9tRm9ybUlucHV0cygpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5jcmVhdGVBbmRBZGROZXdUb2RvSXRlbShmb3JtRWxlbWVudHMubmFtZSwgZm9ybUVsZW1lbnRzLmRlc2MsIGZvcm1FbGVtZW50cy5kdWVEYXRlLCBmb3JtRWxlbWVudHMucHJvamVjdCwgZm9ybUVsZW1lbnRzLnByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBhcHBlbmRBbmRIb29rVXBOZXdUb2RvSXRlbUZyb21Nb2RlbCh0b2RvSXRlbSlcbiAgICB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9JdGVtVmlldyA9IHRoaXMudmlldy5hcHBlbmRUb2RvSXRlbSh0b2RvSXRlbSk7XG5cbiAgICAgICAgLy8gaG9vayB1cCBldmVudCBoYW5kbGVycyBvZiBuZXcgdmlldyBlbGVtZW50XG4gICAgICAgIG5ld1RvZG9JdGVtVmlldy5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5kZWxldGVUb2RvSXRlbShuZXdUb2RvSXRlbVZpZXcpKTtcblxuICAgICAgICBuZXdUb2RvSXRlbVZpZXcuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmVkaXRUb2RvSXRlbShuZXdUb2RvSXRlbVZpZXcpKTtcblxuICAgICAgICBuZXdUb2RvSXRlbVZpZXcuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBcbiAgICAgICAgICAgICgpID0+IHRoaXMuY2hlY2tDaGVja2JveChuZXdUb2RvSXRlbVZpZXcpKTtcblxuICAgIH1cbiAgICBcbiAgICBkZWxldGVUb2RvSXRlbSh0b2RvSXRlbVZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLm1vZGVsLnJlbW92ZUl0ZW1CeUlkKHRvZG9JdGVtVmlldy5pZCk7XG4gICAgICAgIHRvZG9JdGVtVmlldy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGVkaXRUb2RvSXRlbSh0b2RvSXRlbVZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcudG9nZ2xlQWRkVGFza0Zvcm1WaXNpYmlsaXR5KHRydWUsXCJhZGRUYXNrRm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy52aWV3LmZpbGxBZGRGb3JtV2hlbkVkaXQodG9kb0l0ZW1WaWV3KTtcbiAgICAgICAgdGhpcy5vbkVkaXRUb2RvSXRlbS5zdGF0dXMgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRWRpdFRvZG9JdGVtLmVsZW1lbnQgPSB0b2RvSXRlbVZpZXc7XG4gICAgfVxuXG4gICAgY2hlY2tDaGVja2JveCh0b2RvSXRlbVZpZXcpXG4gICAgeyAgIFxuICAgICAgICBwYXJlbnQgPSB0aGlzLnZpZXcuZ2V0QnlJRChcImRpc3BsYXlUb2RvVGFza3NDb250YWluZXJcIik7XG4gICAgICAgIGlmICh0b2RvSXRlbVZpZXcuY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgdG9kb0l0ZW1WaWV3LmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm9uQ2hlY2tib3hcIik7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRvZG9JdGVtVmlldy5lbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb0l0ZW1WaWV3LmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm9uQ2hlY2tib3hcIik7XG4gICAgICAgICAgICBwYXJlbnQucHJlcGVuZCh0b2RvSXRlbVZpZXcuZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dPckhpZGUoaW1nSWQsIG9wdGlvbnNJZCkgXG4gICAge1xuICAgICAgICBpZiAodGhpcy52aWV3LmdldEJ5SUQob3B0aW9uc0lkKS5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIikgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5nZXRCeUlEKGltZ0lkKS5zcmMgPSBcIi4vaW1hZ2VzL2Rvd25hcnJvdy5zdmdcIjtcbiAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkoZmFsc2Usb3B0aW9uc0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ2V0QnlJRChpbWdJZCkuc3JjID0gXCIuL2ltYWdlcy9yaWdodGFycm93LnN2Z1wiO1xuICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZUFkZFRhc2tGb3JtVmlzaWJpbGl0eSh0cnVlLG9wdGlvbnNJZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiIsImltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0JztcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL3RvZG9JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1vZGVsXG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IFRvZG9MaXN0KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQW5kQWRkTmV3VG9kb0l0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KVxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3VG9kb0l0ZW0gPSBuZXcgVG9kb0l0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KTtcbiAgICAgICAgdGhpcy5saXN0LmFkZChuZXdUb2RvSXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1RvZG9JdGVtO1xuICAgIH1cblxuICAgIHVwZGF0ZVRvZG9JdGVtKGVsZW1lbnQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSlcbiAgICB7XG4gICAgICAgIGVsZW1lbnQubW9kZWwubmFtZSA9IG5hbWU7XG4gICAgICAgIGVsZW1lbnQubW9kZWwuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgZWxlbWVudC5tb2RlbC5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgZWxlbWVudC5tb2RlbC5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgZWxlbWVudC5tb2RlbC5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJlbW92ZUl0ZW1CeUlkKGlkKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0LnJlbW92ZUJ5SWQoaWQpO1xuICAgIH1cbn0gIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtXG57XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSlcbiAge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pZCA9IHV1aWR2NCgpO1xuICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0XG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pdGVtc0J5SWQgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgYWRkKG5ld0l0ZW0pXG4gICAge1xuICAgICAgICB0aGlzLml0ZW1zQnlJZFtuZXdJdGVtLmlkXSA9IG5ld0l0ZW07XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1zKClcbiAgICB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuaXRlbXNCeUlkKTtcbiAgICB9XG5cbiAgICBnZXRJdGVtQnlJRChpZClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zQnlJZFtpZF07XG4gICAgfVxuXG4gICAgcmVtb3ZlQnlJZChpZClcbiAgICB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLml0ZW1zQnlJZFtpZF07XG4gICAgfVxufSIsImltcG9ydCBUb2RvSXRlbVZpZXcgZnJvbSBcIi4vdG9kb0l0ZW1WaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3XG57XG4gICAgZ2V0QnlJRChpZClcbiAgICB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQWRkVGFza0Zvcm1WaXNpYmlsaXR5KHZpc2libGUsIGlkKVxuICAgIHtcbiAgICAgICAgY29uc3QgZGlzcGxheVZhbHVlID0gdmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChpZCkuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlWYWx1ZTtcbiAgICB9XG4gICAgZ2V0QWRkVGFza0Zvcm1FbGVtZW50VmFsdWVCeU5hbWUoZWxlbWVudE5hbWUpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCeUlEKFwiYWRkVGFza0Zvcm1cIikuZWxlbWVudHNbZWxlbWVudE5hbWVdLnZhbHVlO1xuICAgIH1cbiAgICByZXNldEFuZENsb3NlQWRkVGFza0Zvcm0oKVxuICAgIHtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiYWRkVGFza0Zvcm1cIikucmVzZXQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkoZmFsc2UsXCJhZGRUYXNrRm9ybUNvbnRhaW5lclwiKTtcbiAgICB9XG4gICAgYXBwZW5kVG9kb0l0ZW0oaXRlbSlcbiAgICB7XG4gICAgICAgIC8vIGdldCB0ZW1wbGF0ZSBtYXJrdXAgYW5kIGNsb25lIGVsZW1lbnQgKGRlZXAgY29weSlcbiAgICAgICAgbGV0IHRlbXBsYXRlQ29udGVudCA9IHRoaXMuZ2V0QnlJRChcInRvZG9JdGVtVGVtcGxhdGVcIikuY29udGVudDtcbiAgICAgICAgbGV0IHRvZG9JdGVtRGl2RWxlbWVudENsb25lID0gdGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuICAgICAgICBsZXQgdG9kb0l0ZW1WaWV3ID0gbmV3IFRvZG9JdGVtVmlldyh0b2RvSXRlbURpdkVsZW1lbnRDbG9uZSwgaXRlbSk7XG5cbiAgICAgICAgLy8gdGhlbiBpbnNlcnQgY2xvbmVkIG1hcmt1cCBhcyBuZXcgY2hpbGQgb2YgdG9kbyB0YXNrcyBjb250YWluZXJcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiZGlzcGxheVRvZG9UYXNrc0NvbnRhaW5lclwiKS5hcHBlbmQodG9kb0l0ZW1WaWV3LmVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiB0b2RvSXRlbVZpZXc7XG4gICAgfVxuICAgIGZpbGxBZGRGb3JtV2hlbkVkaXQodG9kb0l0ZW1WaWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiYWRkVGFza0Zvcm1cIikuZWxlbWVudHNbXCJ0YXNrTmFtZVwiXS52YWx1ZSA9IHRvZG9JdGVtVmlldy5tb2RlbC5uYW1lO1xuICAgICAgICB0aGlzLmdldEJ5SUQoXCJhZGRUYXNrRm9ybVwiKS5lbGVtZW50c1tcInRhc2tEZXNjcmlwdGlvblwiXS52YWx1ZSA9IHRvZG9JdGVtVmlldy5tb2RlbC5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiYWRkVGFza0Zvcm1cIikuZWxlbWVudHNbXCJ0YXNrRHVlRGF0ZVwiXS52YWx1ZSA9IHRvZG9JdGVtVmlldy5tb2RlbC5kdWVEYXRlO1xuICAgICAgICB0aGlzLmdldEJ5SUQoXCJhZGRUYXNrRm9ybVwiKS5lbGVtZW50c1tcInRhc2tQcm9qZWN0XCJdLnZhbHVlID0gdG9kb0l0ZW1WaWV3Lm1vZGVsLnByb2plY3Q7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChcImFkZFRhc2tGb3JtXCIpLmVsZW1lbnRzW1widGFza1ByaW9yaXR5XCJdLnZhbHVlID0gdG9kb0l0ZW1WaWV3Lm1vZGVsLnByaW9yaXR5O1xuICAgIH1cbiAgICB1cGRhdGVUb2RvSXRlbShlbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IHRvZG9JdGVtVG9VcGRhdGUgPSB0aGlzLmdldEJ5SUQoZWxlbWVudC5pZCk7XG4gICAgICAgIG5ldyBUb2RvSXRlbVZpZXcodG9kb0l0ZW1Ub1VwZGF0ZSxlbGVtZW50Lm1vZGVsKTtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtVmlld1xue1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRvZG9JdGVtTW9kZWwpXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm1vZGVsID0gdG9kb0l0ZW1Nb2RlbDtcblxuICAgICAgICB0aGlzLmlkID0gdG9kb0l0ZW1Nb2RlbC5pZDtcbiAgICAgICAgdGhpcy5uYW1lID0gdG9kb0l0ZW1Nb2RlbC5uYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdG9kb0l0ZW1Nb2RlbC5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWUgPSB0b2RvSXRlbU1vZGVsLmR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHRvZG9JdGVtTW9kZWwucHJvamVjdDtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHRvZG9JdGVtTW9kZWwucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0IGNoZWNrYm94KClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9Y2hlY2tUYXNrXVwiKTtcbiAgICB9XG4gICAgZ2V0IGNoZWNrYm94TGFiZWwoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwibGFiZWxbbmFtZT1jaGVja0JveExhYmVsXVwiKTtcbiAgICB9XG4gICAgZ2V0IHRhc2tOYW1lSDEoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvblBhcmFncmFwaCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwLmRlc2NcIik7XG4gICAgfVxuICAgIGdldCBkdWVQYXJhZ3JhcGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicC5kdWVcIik7XG4gICAgfVxuICAgIGdldCBwcm9qZWN0UGFyYWdyYXBoKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInAucHJvamVjdFwiKTtcbiAgICB9XG4gICAgZ2V0IGRlbGV0ZUJ1dHRvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uZGVsZXRlQnV0dG9uXCIpO1xuICAgIH1cblxuICAgIGdldCBlZGl0QnV0dG9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5lZGl0QnV0dG9uXCIpO1xuICAgIH1cblxuICAgIGdldCBpZCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgIH1cbiAgICBzZXQgaWQodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgdmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQm94SWQgPSBgY2hlY2tib3gtJHt2YWx1ZX1gXG4gICAgICAgIHRoaXMuY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgY2hlY2tCb3hJZCk7XG4gICAgICAgIHRoaXMuY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgY2hlY2tCb3hJZCk7XG4gICAgfVxuICAgIHNldCBuYW1lKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy50YXNrTmFtZUgxLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSlcbiAgICB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IGR1ZSh2YWx1ZSlcbiAgICB7XG4gICAgICAgIHRoaXMuZHVlUGFyYWdyYXBoLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuICAgIHNldCBwcm9qZWN0KHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSlcbiAgICB7XG4gICAgICAgIC8vIFRPRE86IGNhbiB3ZSBkZWxlZ2F0ZSB0aGlzIHRvIENTUz9cbiAgICAgICAgc3dpdGNoKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFwibG93UHJpb3JpdHlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmx1ZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGl1bVByaW9yaXR5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveExhYmVsLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHllbGxvd1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhpZ2hQcmlvcml0eVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3hMYWJlbC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveExhYmVsLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJnYig4MCwgODAsIDgwKVwiO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcyc7XG5cbmltcG9ydCBNYWluTW9kZWwgZnJvbSAnLi9tb2RlbHMvbWFpbk1vZGVsJztcbmltcG9ydCBNYWluVmlldyBmcm9tICcuL3ZpZXdzL21haW5WaWV3JztcbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL21haW5Db250cm9sbGVyJztcblxuLy8gd2lyaW5nIHVwIG1vZGVsLCB2aWV3cywgYW5kIGNvbnRyb2xsZXJzXG5jb25zdCBtb2RlbCA9IG5ldyBNYWluTW9kZWwoKTtcbmNvbnN0IHZpZXcgPSBuZXcgTWFpblZpZXcoKTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIobW9kZWwsIHZpZXcpOyAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=