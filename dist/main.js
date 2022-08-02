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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Cocogoose';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-style: normal;\n} \n  \n*{\n    margin:0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton:hover{\n    transform: scale(1.08);\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n#container {\n    display: grid;\n    grid: 10vh 1fr / clamp(13rem, 18%, 20rem) 1fr;\n    min-height: 100vh;\n}\n\n/* HEADER */\n#header {\n    grid-column: 1/3;\n    background-color: #89d8d3b9;\n    background-image: linear-gradient(315deg, #89d8d3bd 0%, #03c8a7b4 74%);\n    display: flex;\n    padding: 1rem;\n    justify-content: space-between;\n    align-content: center;\n    color: #fffcff;\n}\n\n#header p {\n    font-family: 'Cocogoose';\n    font-size: clamp(1rem, 1.5vw, 3rem);\n    display: flex;\n    align-items: center;\n}\n\n#header button{\n    display: flex;\n    align-items: center;\n    gap: 0.1vw;\n    font-weight: 600;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n}\n\n#header button img{\n    width: clamp(1rem, 2.3vw, 3rem);\n}\n\n/* SIDERBAR */\n#sidebar{\n    background-color: #e1e1e17c;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5vh;\n    padding: 1rem;\n}\n\n#sidebar button{\n    display: flex;\n    align-items: center;\n    gap: 0.5vw;\n    font-weight: 400;\n    font-size: clamp(1rem, 1vw, 4rem);\n}\n\n#sidebar button img{\n    width: clamp(1rem, 1.25vw, 2rem);\n}\n\n#priorityOptions h1, #projectOptions p {\n    font-size: clamp(1rem, 1vw, 4rem);\n    font-weight: 200;\n    cursor: pointer;\n}\n\n#priorityOptions h1:hover, #projectOptions p:hover {\n    transform: scale(1.05);\n}\n\n.projectContainer{\n    display: flex;\n    justify-content: space-between;\n}\n\n.projectContainer button img{\n    width: clamp(0.8rem, 1vw, 1.8rem);\n}\n\n#priorityOptions, #projectOptions{\n    padding-left: 1rem;\n}\n\n#addProjectButton{\n    opacity: 0.5;\n}\n\n/* ADD TASK FORM */\n#addTaskFormContainer, #addProjectFormContainer {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n\n.form-container{\n    width:50vw;\n    background:#e1e1e1;\n    border-radius:8px;\n    box-shadow: 4px 4px 5px 0px #000000af;\n    padding: 2vh 2vw;\n}\n  \n.rowContainer{\n    display: flex;\n    gap: 1rem;\n}\n  \n.form-buttons{\n    display: flex;\n    justify-content: end;\n    gap: 1rem;\n}\n  \n.inputContent{\n    display:flex;\n    flex-direction:column;\n    margin-top: 2vh;\n}\n  \n.form-container label{\n    font-family: 'Montserrat', monospace;\n    font-weight: 625;\n    letter-spacing: .02rem;\n    font-size: clamp(0.8rem, 1vw, 3rem)\n}\n  \n.form-container h2{\n    margin:0.5vh 0;\n    padding-bottom:0.25vh;\n    width:10vw;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n    color:#78788c;\n    border-bottom:3px solid #78788c;\n}\n  \n.form-container input, .form-container textarea, .form-container select {\n    width:100%;\n    padding:0.9vh;\n    box-sizing:border-box;\n    background:none;\n    outline:none;\n    resize:none;\n    border:0;\n    font-family:'Montserrat',sans-serif;\n    transition:all .3s;\n    border-bottom:2px solid #bebed2;\n}\n  \n.form-container input:focus, .form-container textarea:focus, .form-container select:focus{\n    border-bottom:2px solid #78788c\n}\n  \n.form-container button{\n    padding:0.5vh 0.5vw;\n    margin:1vh 0 0;\n    font-family:'Montserrat',sans-serif;\n    border:2px solid #78788c;\n    background:0;\n    color:#5a5a6e;\n    cursor:pointer;\n    transition:all .3s;\n    font-size: clamp(0.8rem, 1vw, 2rem);\n}\n  \n.form-container button:hover{\n    background:#78788c;\n    color:#fff\n}\n\n\n/* MAIN CONTENT - display Todo Items */\n#mainContent{\n    background-color: #d5fefd;\n    background-image: linear-gradient(0deg, #d5fefd 0%, #fffcff 74%);\n}\n\n#todoContainer{\n    padding: 35px 55px;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n.todoTask {\n    display: grid;\n    grid: 1fr 1fr 1fr / 2.5rem fit-content(300px) fit-content(300px) 1fr 20px 20px;\n    margin-top: 3vh;\n    border-bottom:1px solid #78788c;\n}\n\n.checkboxContainer {\n    position: relative;\n    grid-row: 1/4;\n}\n  \n.checkboxContainer label {\n    background-color: #fff;\n    border-radius: 50%;\n    cursor: pointer;\n    width: clamp(1.5rem,max(2vh,2vw),2rem);\n    height: clamp(1.5rem,max(2vh,2vw),2rem);\n    left: 0;\n    position: absolute;\n    top: 0;\n}\n  \n.checkboxContainer label:after {\n    border: 2.5px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.67);\n    left: calc(clamp(1.5rem,max(2vh,2vw),2rem)/5);\n    opacity: 0;\n    position: absolute;\n    top: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.5);;\n    transform: rotate(-45deg);\n    width: calc(clamp(1.5rem,max(2vh,2vw),2rem)/2.33);\n}\n  \n.checkboxContainer input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label {\n    background-color: #bdbaba;\n    border-color: #fefffe;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n}\n\n.onCheckbox{\n    opacity: 0.5;\n    text-decoration: line-through;\n}\n\n.todoTask h1{\n    grid-column: 2/7;\n    font-size: min(3vmin, 1.3rem)\n}\n\n.todoTask p:first-of-type{\n    grid-column: 2/7;\n}\n\n.todoTask p{\n    font-size: min(2.5vmin, 0.8rem);\n    margin-right: 10px;\n}\n\n.todoTask p:nth-of-type(2):before {\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask p:nth-of-type(3):before {\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask button:first-of-type {\n    grid-column: 5/6;\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n.todoTask button:nth-of-type(2) {\n    grid-column: 6/7;\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n\n@media (max-width: 768px) {\n    #sidebar {\n        display: none;\n    }\n    #mainContent{\n        grid-column: 1/3;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Cocogoose';\n    src: url('../fonts/Cocogoose.ttf') format('truetype');\n    font-style: normal;\n} \n  \n*{\n    margin:0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton:hover{\n    transform: scale(1.08);\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n#container {\n    display: grid;\n    grid: 10vh 1fr / clamp(13rem, 18%, 20rem) 1fr;\n    min-height: 100vh;\n}\n\n/* HEADER */\n#header {\n    grid-column: 1/3;\n    background-color: #89d8d3b9;\n    background-image: linear-gradient(315deg, #89d8d3bd 0%, #03c8a7b4 74%);\n    display: flex;\n    padding: 1rem;\n    justify-content: space-between;\n    align-content: center;\n    color: #fffcff;\n}\n\n#header p {\n    font-family: 'Cocogoose';\n    font-size: clamp(1rem, 1.5vw, 3rem);\n    display: flex;\n    align-items: center;\n}\n\n#header button{\n    display: flex;\n    align-items: center;\n    gap: 0.1vw;\n    font-weight: 600;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n}\n\n#header button img{\n    width: clamp(1rem, 2.3vw, 3rem);\n}\n\n/* SIDERBAR */\n#sidebar{\n    background-color: #e1e1e17c;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5vh;\n    padding: 1rem;\n}\n\n#sidebar button{\n    display: flex;\n    align-items: center;\n    gap: 0.5vw;\n    font-weight: 400;\n    font-size: clamp(1rem, 1vw, 4rem);\n}\n\n#sidebar button img{\n    width: clamp(1rem, 1.25vw, 2rem);\n}\n\n#priorityOptions h1, #projectOptions p {\n    font-size: clamp(1rem, 1vw, 4rem);\n    font-weight: 200;\n    cursor: pointer;\n}\n\n#priorityOptions h1:hover, #projectOptions p:hover {\n    transform: scale(1.05);\n}\n\n.projectContainer{\n    display: flex;\n    justify-content: space-between;\n}\n\n.projectContainer button img{\n    width: clamp(0.8rem, 1vw, 1.8rem);\n}\n\n#priorityOptions, #projectOptions{\n    padding-left: 1rem;\n}\n\n#addProjectButton{\n    opacity: 0.5;\n}\n\n/* ADD TASK FORM */\n#addTaskFormContainer, #addProjectFormContainer {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n\n.form-container{\n    width:50vw;\n    background:#e1e1e1;\n    border-radius:8px;\n    box-shadow: 4px 4px 5px 0px #000000af;\n    padding: 2vh 2vw;\n}\n  \n.rowContainer{\n    display: flex;\n    gap: 1rem;\n}\n  \n.form-buttons{\n    display: flex;\n    justify-content: end;\n    gap: 1rem;\n}\n  \n.inputContent{\n    display:flex;\n    flex-direction:column;\n    margin-top: 2vh;\n}\n  \n.form-container label{\n    font-family: 'Montserrat', monospace;\n    font-weight: 625;\n    letter-spacing: .02rem;\n    font-size: clamp(0.8rem, 1vw, 3rem)\n}\n  \n.form-container h2{\n    margin:0.5vh 0;\n    padding-bottom:0.25vh;\n    width:10vw;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n    color:#78788c;\n    border-bottom:3px solid #78788c;\n}\n  \n.form-container input, .form-container textarea, .form-container select {\n    width:100%;\n    padding:0.9vh;\n    box-sizing:border-box;\n    background:none;\n    outline:none;\n    resize:none;\n    border:0;\n    font-family:'Montserrat',sans-serif;\n    transition:all .3s;\n    border-bottom:2px solid #bebed2;\n}\n  \n.form-container input:focus, .form-container textarea:focus, .form-container select:focus{\n    border-bottom:2px solid #78788c\n}\n  \n.form-container button{\n    padding:0.5vh 0.5vw;\n    margin:1vh 0 0;\n    font-family:'Montserrat',sans-serif;\n    border:2px solid #78788c;\n    background:0;\n    color:#5a5a6e;\n    cursor:pointer;\n    transition:all .3s;\n    font-size: clamp(0.8rem, 1vw, 2rem);\n}\n  \n.form-container button:hover{\n    background:#78788c;\n    color:#fff\n}\n\n\n/* MAIN CONTENT - display Todo Items */\n#mainContent{\n    background-color: #d5fefd;\n    background-image: linear-gradient(0deg, #d5fefd 0%, #fffcff 74%);\n}\n\n#todoContainer{\n    padding: 35px 55px;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n.todoTask {\n    display: grid;\n    grid: 1fr 1fr 1fr / 2.5rem fit-content(300px) fit-content(300px) 1fr 20px 20px;\n    margin-top: 3vh;\n    border-bottom:1px solid #78788c;\n}\n\n.checkboxContainer {\n    position: relative;\n    grid-row: 1/4;\n}\n  \n.checkboxContainer label {\n    background-color: #fff;\n    border-radius: 50%;\n    cursor: pointer;\n    width: clamp(1.5rem,max(2vh,2vw),2rem);\n    height: clamp(1.5rem,max(2vh,2vw),2rem);\n    left: 0;\n    position: absolute;\n    top: 0;\n}\n  \n.checkboxContainer label:after {\n    border: 2.5px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.67);\n    left: calc(clamp(1.5rem,max(2vh,2vw),2rem)/5);\n    opacity: 0;\n    position: absolute;\n    top: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.5);;\n    transform: rotate(-45deg);\n    width: calc(clamp(1.5rem,max(2vh,2vw),2rem)/2.33);\n}\n  \n.checkboxContainer input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label {\n    background-color: #bdbaba;\n    border-color: #fefffe;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n}\n\n.onCheckbox{\n    opacity: 0.5;\n    text-decoration: line-through;\n}\n\n.todoTask h1{\n    grid-column: 2/7;\n    font-size: min(3vmin, 1.3rem)\n}\n\n.todoTask p:first-of-type{\n    grid-column: 2/7;\n}\n\n.todoTask p{\n    font-size: min(2.5vmin, 0.8rem);\n    margin-right: 10px;\n}\n\n.todoTask p:nth-of-type(2):before {\n    content: \"\";\n    display: block;\n    background: url(\"../images/calendar.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask p:nth-of-type(3):before {\n    content: \"\";\n    display: block;\n    background: url(\"../images/folder.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask button:first-of-type {\n    grid-column: 5/6;\n    content: \"\";\n    display: block;\n    background: url(\"../images/edit.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n.todoTask button:nth-of-type(2) {\n    grid-column: 6/7;\n    content: \"\";\n    display: block;\n    background: url(\"../images/delete.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n\n@media (max-width: 768px) {\n    #sidebar {\n        display: none;\n    }\n    #mainContent{\n        grid-column: 1/3;\n    }\n}"],"sourceRoot":""}]);
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

        view.getByID("addTaskButton").addEventListener("click", () => view.toggleAddTaskFormVisibility(true,"addTaskFormContainer"));
        view.getByID("closeAddTaskButton").addEventListener("click", () => view.resetAndCloseFormByID("addTaskForm","addTaskFormContainer"));
        view.getByID("addTaskForm").addEventListener("submit", (e) => this.onAddTaskFormSubmit(e));
        view.getByID("priorityButton").addEventListener("click", () => this.showOrHide("priorityImg","priorityOptions"));
        view.getByID("projectButton").addEventListener("click", () => this.showOrHide("projectImg","projectOptions"));
        view.getByID("addProjectButton").addEventListener("click", () => view.toggleAddTaskFormVisibility(true,"addProjectFormContainer"));
        view.getByID("closeAddProjectButton").addEventListener("click", () => view.resetAndCloseFormByID("addProjectForm","addProjectFormContainer"));
        view.getByID("addProjectForm").addEventListener("submit", (e) => this.onAddProjectFormSubmit(e));
        view.getByID("inbox").addEventListener("click", () => this.filterByProject("Inbox"));
        view.getByID("noPriority").addEventListener("click", () => this.filterByPriority("noPriority", "None"));
        view.getByID("lowPriority").addEventListener("click", () => this.filterByPriority("lowPriority", "Low"));
        view.getByID("mediumPriority").addEventListener("click", () => this.filterByPriority("mediumPriority", "Medium"));
        view.getByID("highPriority").addEventListener("click", () => this.filterByPriority("highPriority", "High"));
        view.getByID("todayButton").addEventListener("click", () => this.filterByDuedate());
        window.addEventListener("load", () => this.retrieveRecords());
    }

    onAddTaskFormSubmit(e)
    {
        e.preventDefault();

        this.onEditTodoItem.status == true ? this.updateTodoItem() : this.createNewTodoItem();
        this.view.resetAndCloseFormByID("addTaskForm","addTaskFormContainer");
    }

    createNewTodoItem()
    {
        const newTodoItem = this.createNewTodoItemFromFormInputs();        
        this.appendAndHookUpNewTodoItemFromModel(newTodoItem);

        this.model.updateTodoListLocalStorage();
    }

    updateTodoItem()
    {
        const formElements = this.getElementsFromFormInputs();
        const updatedTodoItem = this.model.updateTodoItem(this.onEditTodoItem.element,formElements.name, formElements.desc, formElements.dueDate, formElements.project, formElements.priority)
        this.view.updateTodoItem(updatedTodoItem);
        this.onEditTodoItem.status = false;
        
        this.model.updateTodoListLocalStorage();
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
        return this.model.createAndAddNewTodoItem(formElements.name, formElements.desc, formElements.dueDate, formElements.project, formElements.priority, false);
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

        return newTodoItemView;
    }
    
    deleteTodoItem(todoItemView)
    {
        this.model.removeItemById(todoItemView.id);
        todoItemView.element.remove();

        this.model.updateTodoListLocalStorage();
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
            this.model.updateCheckbox(todoItemView.id, true);
        } else {
            todoItemView.element.classList.remove("onCheckbox");
            parent.prepend(todoItemView.element);
            this.model.updateCheckbox(todoItemView.id, false);
        }
        this.model.updateTodoListLocalStorage();
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

    onAddProjectFormSubmit(e)
    {
        e.preventDefault();

        this.createNewProject();
        this.view.resetAndCloseFormByID("addProjectForm","addProjectFormContainer");
    }

    createNewProject()
    {
        const name = this.view.getAddProjectFormElementValueByName("projectName");
        const newProject = this.model.createNewProject(name);      
        this.appendAndHookUpNewProjectFromModel(newProject);

        this.model.updateProjectListLocalStorage();
    }

    appendAndHookUpNewProjectFromModel(newProject)
    {
        const newProjectView = this.view.appendProject(newProject);

        newProjectView.deleteButton.addEventListener("click", 
            () => this.deleteProject(newProjectView));

        newProjectView.projectNameP.addEventListener("click", 
            () => this.filterByProject(newProjectView.projectNameP.textContent));
    }
    
    deleteProject(projectView)
    {
        this.model.removeProjectById(projectView.id);
        projectView.element.remove();

        this.model.updateProjectListLocalStorage();
    }

    filterByProject(projectName)
    {
        let todoListObj = this.model.todoList.itemsById;

        Object.keys(todoListObj).forEach(key => 
            {
                const statusValue = todoListObj[key].project == projectName ? true : false;
                this.view.toggleFilterVisibility(statusValue,key);
            }
        );

        this.view.getByID("titleName").textContent = projectName;
    }

    filterByPriority(priority, priorityName)
    {
        let todoListObj = this.model.todoList.itemsById;

        Object.keys(todoListObj).forEach(key => 
            {
                const statusValue = todoListObj[key].priority == priority ? true : false;
                this.view.toggleFilterVisibility(statusValue,key);
            }
        );

        this.view.getByID("titleName").textContent = `Priority: ${priorityName}`;

        let today = new Date().toJSON().slice(0, 10);
        console.log(today);
    }

    filterByDuedate()
    {
        let today = new Date().toJSON().slice(0, 10);
        let todoListObj = this.model.todoList.itemsById;

        Object.keys(todoListObj).forEach(key => 
            {
                const statusValue = todoListObj[key].dueDate == today ? true : false;
                this.view.toggleFilterVisibility(statusValue,key);
            }
        );

        this.view.getByID("titleName").textContent = "Today";
    }

    retrieveRecords()
    {
        this.retrieveProjects();
        this.retrieveTodoList();
    }

    retrieveProjects()
    {
        if (window.localStorage.getItem('projectList')!== null){
            let temp = (JSON.parse(localStorage.getItem('projectList'))); 
            let projectListObj = temp.projectsById;

            Object.keys(projectListObj).forEach(key => 
            {
                const newProject = this.model.createNewProject(projectListObj[key].name);      
                this.appendAndHookUpNewProjectFromModel(newProject);
            }
        );
        }
    }

    retrieveTodoList()
    {
        if (window.localStorage.getItem('todoList')!== null){
            let temp = (JSON.parse(localStorage.getItem('todoList'))); 
            let todoListObj = temp.itemsById;

            Object.keys(todoListObj).forEach(key => 
            {
                const newTodoItem = this.model.createAndAddNewTodoItem(todoListObj[key].name, todoListObj[key].description, todoListObj[key].dueDate, todoListObj[key].project, todoListObj[key].priority, todoListObj[key].checkboxStatus);
                const newTodoItemView = this.appendAndHookUpNewTodoItemFromModel(newTodoItem);
            });

            this.retrieveCheckbox();
        }
    }

    retrieveCheckbox()
    {
        let todoListObj = this.model.todoList.itemsById;
        Object.keys(todoListObj).forEach(key => 
            {
                if(todoListObj[key].checkboxStatus == true)
                {
                    let todoItem = this.view.getByID(todoListObj[key].id);
                    todoItem.classList.add("onCheckbox");
                    this.view.getByID(`checkbox-${todoListObj[key].id}`).checked = true;
                    parent = this.view.getByID("displayTodoTasksContainer")
                    parent.append(todoItem);
                }
            });
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/scripts/models/project.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectList */ "./src/scripts/models/projectList.js");





class MainModel
{
    constructor()
    {
        this.todoList = new _todoList__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.projectList = new _projectList__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }

    createAndAddNewTodoItem(name, description, dueDate, project, priority,checkboxStatus)
    {
        const newTodoItem = new _todoItem__WEBPACK_IMPORTED_MODULE_1__["default"](name, description, dueDate, project, priority, checkboxStatus);
        this.todoList.add(newTodoItem);

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
        this.todoList.removeById(id);
    }

    createNewProject(name)
    {
        const newProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"](name);
        this.projectList.add(newProject);

        return newProject;
    }

    removeProjectById(id)
    {
        this.projectList.removeById(id);
    }

    updateTodoListLocalStorage()
    {
        window.localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }

    updateProjectListLocalStorage()
    {
        window.localStorage.setItem('projectList', JSON.stringify(this.projectList));
    }

    updateCheckbox(id, value)
    {
        this.todoList.getItemByID(id).checkboxStatus = value;
    }

} 

/***/ }),

/***/ "./src/scripts/models/project.js":
/*!***************************************!*\
  !*** ./src/scripts/models/project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Project
{
  constructor(name)
  {
    this.name = name;
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
} 

/***/ }),

/***/ "./src/scripts/models/projectList.js":
/*!*******************************************!*\
  !*** ./src/scripts/models/projectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
class ProjectList
{
    constructor()
    {
        this.projectsById = {};
    }
    
    add(newItem)
    {
        this.projectsById[newItem.id] = newItem;
    }

    get items()
    {
        return Object.values(this.itemsById);
    }

    getItemByID(id)
    {
        return this.projectsById[id];
    }

    removeById(id)
    {
        delete this.projectsById[id];
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
  constructor(name, description, dueDate, project, priority, checkboxStatus)
  {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.checkboxStatus = checkboxStatus;
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
/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectView */ "./src/scripts/views/projectView.js");



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

    toggleFilterVisibility(visible, id)
    {
        const displayValue = visible ? 'grid' : 'none';
        this.getByID(id).style.display = displayValue;
    }

    getAddTaskFormElementValueByName(elementName)
    {
        return this.getByID("addTaskForm").elements[elementName].value;
    }

    getAddProjectFormElementValueByName(elementName)
    {
        return this.getByID("addProjectForm").elements[elementName].value;
    }

    resetAndCloseFormByID(formID,formContainerID)
    {
        this.getByID(formID).reset();
        this.toggleAddTaskFormVisibility(false,formContainerID);
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
    appendProject(item)
    {
        // Project in sidebar
        let templateContent = this.getByID("projectTemplate").content;
        let projectDivElementClone = templateContent.cloneNode(true).querySelector("div");
        let projectView = new _projectView__WEBPACK_IMPORTED_MODULE_1__["default"](projectDivElementClone, item);
        this.getByID("projectOptions").append(projectView.element);

        // Project in AddTaskForm
        let option = document.createElement("option");
        option.value = item.name;
        option.text = item.name;
        option.id = `checkbox-${item.id}`;
        this.getByID("taskProject").appendChild(option);

        return projectView;
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

/***/ "./src/scripts/views/projectView.js":
/*!******************************************!*\
  !*** ./src/scripts/views/projectView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectView)
/* harmony export */ });
class ProjectView
{
    constructor(element, projectModel)
    {
        this.element = element;
        this.model = projectModel;

        this.id = projectModel.id;
        this.name = projectModel.name;
    }

    get projectNameP()
    {
        return this.element.querySelector("p");
    }
    
    get id()
    {
        return this.element.getAttribute("id");
    }

    get deleteButton()
    {
        return this.element.querySelector("button.deleteProjectButton");
    }


    set id(value)
    {
        this.element.setAttribute("id", value);
    }
    
    set name(value)
    {
        this.projectNameP.textContent = value;
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

        const checkBoxId = `checkbox-${value}`;
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
        switch(value)
        {
            case "lowPriority":
                this.checkboxLabel.style.border = "2px solid blue";
                break;
            case "mediumPriority":
                this.checkboxLabel.style.border = "2px solid #f2f221";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0scUNBQXFDLCtCQUErQiw0REFBNEQseUJBQXlC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QixvREFBVztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBWTtBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9FZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxNQUFNO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFZTtBQUNIO0FBQ2tCOztBQUUxRDtBQUNBLGtCQUFrQix5REFBUztBQUMzQixpQkFBaUIsdURBQVE7QUFDekIsdUJBQXVCLG1FQUFjLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXJzL21haW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9tb2RlbHMvbWFpbk1vZGVsLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvbW9kZWxzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9tb2RlbHMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL21vZGVscy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvdmlld3MvbWFpblZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3ZpZXdzL3Byb2plY3RWaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy92aWV3cy90b2RvSXRlbVZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0NvY29nb29zZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2FsZW5kYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2ZvbGRlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb2NvZ29vc2UnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG4gIFxcbip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMTB2aCAxZnIgLyBjbGFtcCgxM3JlbSwgMTglLCAyMHJlbSkgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWQ4ZDNiOTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzg5ZDhkM2JkIDAlLCAjMDNjOGE3YjQgNzQlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmY2ZmO1xcbn1cXG5cXG4jaGVhZGVyIHAge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41dncsIDNyZW0pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjF2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjN2dywgNHJlbSk7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDIuM3Z3LCAzcmVtKTtcXG59XFxuXFxuLyogU0lERVJCQVIgKi9cXG4jc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTdjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuNXZoO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCA0cmVtKTtcXG59XFxuXFxuI3NpZGViYXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMgaDEsICNwcm9qZWN0T3B0aW9ucyBwIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDRyZW0pO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMgaDE6aG92ZXIsICNwcm9qZWN0T3B0aW9ucyBwOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDAuOHJlbSwgMXZ3LCAxLjhyZW0pO1xcbn1cXG5cXG4jcHJpb3JpdHlPcHRpb25zLCAjcHJvamVjdE9wdGlvbnN7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b257XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogQUREIFRBU0sgRk9STSAqL1xcbiNhZGRUYXNrRm9ybUNvbnRhaW5lciwgI2FkZFByb2plY3RGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmZvcm0tY29udGFpbmVye1xcbiAgICB3aWR0aDo1MHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiNlMWUxZTE7XFxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDVweCAwcHggIzAwMDAwMGFmO1xcbiAgICBwYWRkaW5nOiAydmggMnZ3O1xcbn1cXG4gIFxcbi5yb3dDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuICBcXG4uZm9ybS1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4gIFxcbi5pbnB1dENvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGxhYmVse1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MjU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMDJyZW07XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxdncsIDNyZW0pXFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGgye1xcbiAgICBtYXJnaW46MC41dmggMDtcXG4gICAgcGFkZGluZy1ib3R0b206MC4yNXZoO1xcbiAgICB3aWR0aDoxMHZ3O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuM3Z3LCA0cmVtKTtcXG4gICAgY29sb3I6Izc4Nzg4YztcXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgIzc4Nzg4YztcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgaW5wdXQsIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSwgLmZvcm0tY29udGFpbmVyIHNlbGVjdCB7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHBhZGRpbmc6MC45dmg7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBvdXRsaW5lOm5vbmU7XFxuICAgIHJlc2l6ZTpub25lO1xcbiAgICBib3JkZXI6MDtcXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XFxuICAgIHRyYW5zaXRpb246YWxsIC4zcztcXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2JlYmVkMjtcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1cywgLmZvcm0tY29udGFpbmVyIHNlbGVjdDpmb2N1c3tcXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzc4Nzg4Y1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBidXR0b257XFxuICAgIHBhZGRpbmc6MC41dmggMC41dnc7XFxuICAgIG1hcmdpbjoxdmggMCAwO1xcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjNzg3ODhjO1xcbiAgICBiYWNrZ3JvdW5kOjA7XFxuICAgIGNvbG9yOiM1YTVhNmU7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOmFsbCAuM3M7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxdncsIDJyZW0pO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6Izc4Nzg4YztcXG4gICAgY29sb3I6I2ZmZlxcbn1cXG5cXG5cXG4vKiBNQUlOIENPTlRFTlQgLSBkaXNwbGF5IFRvZG8gSXRlbXMgKi9cXG4jbWFpbkNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWZlZmQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZDVmZWZkIDAlLCAjZmZmY2ZmIDc0JSk7XFxufVxcblxcbiN0b2RvQ29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAzNXB4IDU1cHg7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udG9kb1Rhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgMWZyIDFmciAvIDIuNXJlbSBmaXQtY29udGVudCgzMDBweCkgZml0LWNvbnRlbnQoMzAwcHgpIDFmciAyMHB4IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzc4Nzg4YztcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLXJvdzogMS80O1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgbGFiZWw6YWZ0ZXIge1xcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogY2FsYyhjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pLzQuNjcpO1xcbiAgICBsZWZ0OiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNC41KTs7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHdpZHRoOiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvMi4zMyk7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmFiYTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmVmZmZlO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5vbkNoZWNrYm94e1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kb1Rhc2sgaDF7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxuICAgIGZvbnQtc2l6ZTogbWluKDN2bWluLCAxLjNyZW0pXFxufVxcblxcbi50b2RvVGFzayBwOmZpcnN0LW9mLXR5cGV7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxufVxcblxcbi50b2RvVGFzayBwe1xcbiAgICBmb250LXNpemU6IG1pbigyLjV2bWluLCAwLjhyZW0pO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50b2RvVGFzayBwOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG59XFxuXFxuLnRvZG9UYXNrIHA6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbn1cXG5cXG4udG9kb1Rhc2sgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRvZG9UYXNrIGJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiA2Lzc7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAjbWFpbkNvbnRlbnR7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQXFEO0lBQ3JELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsWUFBWTtDQUNaLFVBQVU7Q0FDVixhQUFhO0NBQ2IsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsaUJBQWlCO0FBQ3JCOztBQUVBLFdBQVc7QUFDWDtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isc0VBQXNFO0lBQ3RFLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQSxhQUFhO0FBQ2I7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FB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aUI7SUFDakIsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9Db2NvZ29vc2UudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG4gIFxcbip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMTB2aCAxZnIgLyBjbGFtcCgxM3JlbSwgMTglLCAyMHJlbSkgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWQ4ZDNiOTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzg5ZDhkM2JkIDAlLCAjMDNjOGE3YjQgNzQlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmY2ZmO1xcbn1cXG5cXG4jaGVhZGVyIHAge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41dncsIDNyZW0pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjF2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjN2dywgNHJlbSk7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDIuM3Z3LCAzcmVtKTtcXG59XFxuXFxuLyogU0lERVJCQVIgKi9cXG4jc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTdjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuNXZoO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCA0cmVtKTtcXG59XFxuXFxuI3NpZGViYXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMgaDEsICNwcm9qZWN0T3B0aW9ucyBwIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDRyZW0pO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMgaDE6aG92ZXIsICNwcm9qZWN0T3B0aW9ucyBwOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDAuOHJlbSwgMXZ3LCAxLjhyZW0pO1xcbn1cXG5cXG4jcHJpb3JpdHlPcHRpb25zLCAjcHJvamVjdE9wdGlvbnN7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b257XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogQUREIFRBU0sgRk9STSAqL1xcbiNhZGRUYXNrRm9ybUNvbnRhaW5lciwgI2FkZFByb2plY3RGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmZvcm0tY29udGFpbmVye1xcbiAgICB3aWR0aDo1MHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiNlMWUxZTE7XFxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDVweCAwcHggIzAwMDAwMGFmO1xcbiAgICBwYWRkaW5nOiAydmggMnZ3O1xcbn1cXG4gIFxcbi5yb3dDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuICBcXG4uZm9ybS1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4gIFxcbi5pbnB1dENvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGxhYmVse1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MjU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMDJyZW07XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxdncsIDNyZW0pXFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGgye1xcbiAgICBtYXJnaW46MC41dmggMDtcXG4gICAgcGFkZGluZy1ib3R0b206MC4yNXZoO1xcbiAgICB3aWR0aDoxMHZ3O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuM3Z3LCA0cmVtKTtcXG4gICAgY29sb3I6Izc4Nzg4YztcXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgIzc4Nzg4YztcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgaW5wdXQsIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSwgLmZvcm0tY29udGFpbmVyIHNlbGVjdCB7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHBhZGRpbmc6MC45dmg7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBvdXRsaW5lOm5vbmU7XFxuICAgIHJlc2l6ZTpub25lO1xcbiAgICBib3JkZXI6MDtcXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XFxuICAgIHRyYW5zaXRpb246YWxsIC4zcztcXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2JlYmVkMjtcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1cywgLmZvcm0tY29udGFpbmVyIHNlbGVjdDpmb2N1c3tcXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzc4Nzg4Y1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBidXR0b257XFxuICAgIHBhZGRpbmc6MC41dmggMC41dnc7XFxuICAgIG1hcmdpbjoxdmggMCAwO1xcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjNzg3ODhjO1xcbiAgICBiYWNrZ3JvdW5kOjA7XFxuICAgIGNvbG9yOiM1YTVhNmU7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOmFsbCAuM3M7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxdncsIDJyZW0pO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6Izc4Nzg4YztcXG4gICAgY29sb3I6I2ZmZlxcbn1cXG5cXG5cXG4vKiBNQUlOIENPTlRFTlQgLSBkaXNwbGF5IFRvZG8gSXRlbXMgKi9cXG4jbWFpbkNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWZlZmQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZDVmZWZkIDAlLCAjZmZmY2ZmIDc0JSk7XFxufVxcblxcbiN0b2RvQ29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAzNXB4IDU1cHg7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udG9kb1Rhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgMWZyIDFmciAvIDIuNXJlbSBmaXQtY29udGVudCgzMDBweCkgZml0LWNvbnRlbnQoMzAwcHgpIDFmciAyMHB4IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzc4Nzg4YztcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLXJvdzogMS80O1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgbGFiZWw6YWZ0ZXIge1xcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogY2FsYyhjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pLzQuNjcpO1xcbiAgICBsZWZ0OiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNC41KTs7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHdpZHRoOiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvMi4zMyk7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmFiYTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmVmZmZlO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5vbkNoZWNrYm94e1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kb1Rhc2sgaDF7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxuICAgIGZvbnQtc2l6ZTogbWluKDN2bWluLCAxLjNyZW0pXFxufVxcblxcbi50b2RvVGFzayBwOmZpcnN0LW9mLXR5cGV7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxufVxcblxcbi50b2RvVGFzayBwe1xcbiAgICBmb250LXNpemU6IG1pbigyLjV2bWluLCAwLjhyZW0pO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50b2RvVGFzayBwOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWFnZXMvY2FsZW5kYXIuc3ZnXFxcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxufVxcblxcbi50b2RvVGFzayBwOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWFnZXMvZm9sZGVyLnN2Z1xcXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbn1cXG5cXG4udG9kb1Rhc2sgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi4vaW1hZ2VzL2VkaXQuc3ZnXFxcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRvZG9UYXNrIGJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiA2Lzc7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWFnZXMvZGVsZXRlLnN2Z1xcXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgICNtYWluQ29udGVudHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250cm9sbGVyXG57XG4gICAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMub25FZGl0VG9kb0l0ZW0gPSB7c3RhdHVzOiBcImZhbHNlXCIsIGVsZW1lbnQ6IFwiXCJ9O1xuXG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImFkZFRhc2tCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHZpZXcudG9nZ2xlQWRkVGFza0Zvcm1WaXNpYmlsaXR5KHRydWUsXCJhZGRUYXNrRm9ybUNvbnRhaW5lclwiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImNsb3NlQWRkVGFza0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdmlldy5yZXNldEFuZENsb3NlRm9ybUJ5SUQoXCJhZGRUYXNrRm9ybVwiLFwiYWRkVGFza0Zvcm1Db250YWluZXJcIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJhZGRUYXNrRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB0aGlzLm9uQWRkVGFza0Zvcm1TdWJtaXQoZSkpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJwcmlvcml0eUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93T3JIaWRlKFwicHJpb3JpdHlJbWdcIixcInByaW9yaXR5T3B0aW9uc1wiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcInByb2plY3RCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2hvd09ySGlkZShcInByb2plY3RJbWdcIixcInByb2plY3RPcHRpb25zXCIpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwiYWRkUHJvamVjdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdmlldy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkodHJ1ZSxcImFkZFByb2plY3RGb3JtQ29udGFpbmVyXCIpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwiY2xvc2VBZGRQcm9qZWN0QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2aWV3LnJlc2V0QW5kQ2xvc2VGb3JtQnlJRChcImFkZFByb2plY3RGb3JtXCIsXCJhZGRQcm9qZWN0Rm9ybUNvbnRhaW5lclwiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImFkZFByb2plY3RGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHRoaXMub25BZGRQcm9qZWN0Rm9ybVN1Ym1pdChlKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImluYm94XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmZpbHRlckJ5UHJvamVjdChcIkluYm94XCIpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwibm9Qcmlvcml0eVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5maWx0ZXJCeVByaW9yaXR5KFwibm9Qcmlvcml0eVwiLCBcIk5vbmVcIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJsb3dQcmlvcml0eVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5maWx0ZXJCeVByaW9yaXR5KFwibG93UHJpb3JpdHlcIiwgXCJMb3dcIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJtZWRpdW1Qcmlvcml0eVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5maWx0ZXJCeVByaW9yaXR5KFwibWVkaXVtUHJpb3JpdHlcIiwgXCJNZWRpdW1cIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJoaWdoUHJpb3JpdHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuZmlsdGVyQnlQcmlvcml0eShcImhpZ2hQcmlvcml0eVwiLCBcIkhpZ2hcIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJ0b2RheUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5maWx0ZXJCeUR1ZWRhdGUoKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB0aGlzLnJldHJpZXZlUmVjb3JkcygpKTtcbiAgICB9XG5cbiAgICBvbkFkZFRhc2tGb3JtU3VibWl0KGUpXG4gICAge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5vbkVkaXRUb2RvSXRlbS5zdGF0dXMgPT0gdHJ1ZSA/IHRoaXMudXBkYXRlVG9kb0l0ZW0oKSA6IHRoaXMuY3JlYXRlTmV3VG9kb0l0ZW0oKTtcbiAgICAgICAgdGhpcy52aWV3LnJlc2V0QW5kQ2xvc2VGb3JtQnlJRChcImFkZFRhc2tGb3JtXCIsXCJhZGRUYXNrRm9ybUNvbnRhaW5lclwiKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdUb2RvSXRlbSgpXG4gICAge1xuICAgICAgICBjb25zdCBuZXdUb2RvSXRlbSA9IHRoaXMuY3JlYXRlTmV3VG9kb0l0ZW1Gcm9tRm9ybUlucHV0cygpOyAgICAgICAgXG4gICAgICAgIHRoaXMuYXBwZW5kQW5kSG9va1VwTmV3VG9kb0l0ZW1Gcm9tTW9kZWwobmV3VG9kb0l0ZW0pO1xuXG4gICAgICAgIHRoaXMubW9kZWwudXBkYXRlVG9kb0xpc3RMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUb2RvSXRlbSgpXG4gICAge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzRnJvbUZvcm1JbnB1dHMoKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9JdGVtID0gdGhpcy5tb2RlbC51cGRhdGVUb2RvSXRlbSh0aGlzLm9uRWRpdFRvZG9JdGVtLmVsZW1lbnQsZm9ybUVsZW1lbnRzLm5hbWUsIGZvcm1FbGVtZW50cy5kZXNjLCBmb3JtRWxlbWVudHMuZHVlRGF0ZSwgZm9ybUVsZW1lbnRzLnByb2plY3QsIGZvcm1FbGVtZW50cy5wcmlvcml0eSlcbiAgICAgICAgdGhpcy52aWV3LnVwZGF0ZVRvZG9JdGVtKHVwZGF0ZWRUb2RvSXRlbSk7XG4gICAgICAgIHRoaXMub25FZGl0VG9kb0l0ZW0uc3RhdHVzID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vZGVsLnVwZGF0ZVRvZG9MaXN0TG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudHNGcm9tRm9ybUlucHV0cygpXG4gICAge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy52aWV3LmdldEFkZFRhc2tGb3JtRWxlbWVudFZhbHVlQnlOYW1lKFwidGFza05hbWVcIik7XG4gICAgICAgIGNvbnN0IGRlc2MgPSB0aGlzLnZpZXcuZ2V0QWRkVGFza0Zvcm1FbGVtZW50VmFsdWVCeU5hbWUoXCJ0YXNrRGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSB0aGlzLnZpZXcuZ2V0QWRkVGFza0Zvcm1FbGVtZW50VmFsdWVCeU5hbWUoXCJ0YXNrRHVlRGF0ZVwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMudmlldy5nZXRBZGRUYXNrRm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShcInRhc2tQcm9qZWN0XCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRoaXMudmlldy5nZXRBZGRUYXNrRm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShcInRhc2tQcmlvcml0eVwiKTtcblxuICAgICAgICByZXR1cm4ge25hbWUsIGRlc2MsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5fTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdUb2RvSXRlbUZyb21Gb3JtSW5wdXRzKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHNGcm9tRm9ybUlucHV0cygpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5jcmVhdGVBbmRBZGROZXdUb2RvSXRlbShmb3JtRWxlbWVudHMubmFtZSwgZm9ybUVsZW1lbnRzLmRlc2MsIGZvcm1FbGVtZW50cy5kdWVEYXRlLCBmb3JtRWxlbWVudHMucHJvamVjdCwgZm9ybUVsZW1lbnRzLnByaW9yaXR5LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgYXBwZW5kQW5kSG9va1VwTmV3VG9kb0l0ZW1Gcm9tTW9kZWwodG9kb0l0ZW0pXG4gICAge1xuICAgICAgICBjb25zdCBuZXdUb2RvSXRlbVZpZXcgPSB0aGlzLnZpZXcuYXBwZW5kVG9kb0l0ZW0odG9kb0l0ZW0pO1xuXG4gICAgICAgIC8vIGhvb2sgdXAgZXZlbnQgaGFuZGxlcnMgb2YgbmV3IHZpZXcgZWxlbWVudFxuICAgICAgICBuZXdUb2RvSXRlbVZpZXcuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcbiAgICAgICAgICAgICgpID0+IHRoaXMuZGVsZXRlVG9kb0l0ZW0obmV3VG9kb0l0ZW1WaWV3KSk7XG5cbiAgICAgICAgbmV3VG9kb0l0ZW1WaWV3LmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5lZGl0VG9kb0l0ZW0obmV3VG9kb0l0ZW1WaWV3KSk7XG5cbiAgICAgICAgbmV3VG9kb0l0ZW1WaWV3LmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmNoZWNrQ2hlY2tib3gobmV3VG9kb0l0ZW1WaWV3KSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1RvZG9JdGVtVmlldztcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlVG9kb0l0ZW0odG9kb0l0ZW1WaWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy5tb2RlbC5yZW1vdmVJdGVtQnlJZCh0b2RvSXRlbVZpZXcuaWQpO1xuICAgICAgICB0b2RvSXRlbVZpZXcuZWxlbWVudC5yZW1vdmUoKTtcblxuICAgICAgICB0aGlzLm1vZGVsLnVwZGF0ZVRvZG9MaXN0TG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgZWRpdFRvZG9JdGVtKHRvZG9JdGVtVmlldylcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkodHJ1ZSxcImFkZFRhc2tGb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnZpZXcuZmlsbEFkZEZvcm1XaGVuRWRpdCh0b2RvSXRlbVZpZXcpO1xuICAgICAgICB0aGlzLm9uRWRpdFRvZG9JdGVtLnN0YXR1cyA9IHRydWU7XG4gICAgICAgIHRoaXMub25FZGl0VG9kb0l0ZW0uZWxlbWVudCA9IHRvZG9JdGVtVmlldztcbiAgICB9XG5cbiAgICBjaGVja0NoZWNrYm94KHRvZG9JdGVtVmlldylcbiAgICB7ICAgXG4gICAgICAgIHBhcmVudCA9IHRoaXMudmlldy5nZXRCeUlEKFwiZGlzcGxheVRvZG9UYXNrc0NvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHRvZG9JdGVtVmlldy5jaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0b2RvSXRlbVZpZXcuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib25DaGVja2JveFwiKTtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodG9kb0l0ZW1WaWV3LmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbC51cGRhdGVDaGVja2JveCh0b2RvSXRlbVZpZXcuaWQsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb0l0ZW1WaWV3LmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm9uQ2hlY2tib3hcIik7XG4gICAgICAgICAgICBwYXJlbnQucHJlcGVuZCh0b2RvSXRlbVZpZXcuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnVwZGF0ZUNoZWNrYm94KHRvZG9JdGVtVmlldy5pZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwudXBkYXRlVG9kb0xpc3RMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBzaG93T3JIaWRlKGltZ0lkLCBvcHRpb25zSWQpIFxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMudmlldy5nZXRCeUlEKG9wdGlvbnNJZCkuc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ2V0QnlJRChpbWdJZCkuc3JjID0gXCIuL2ltYWdlcy9kb3duYXJyb3cuc3ZnXCI7XG4gICAgICAgICAgICB0aGlzLnZpZXcudG9nZ2xlQWRkVGFza0Zvcm1WaXNpYmlsaXR5KGZhbHNlLG9wdGlvbnNJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdldEJ5SUQoaW1nSWQpLnNyYyA9IFwiLi9pbWFnZXMvcmlnaHRhcnJvdy5zdmdcIjtcbiAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkodHJ1ZSxvcHRpb25zSWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZGRQcm9qZWN0Rm9ybVN1Ym1pdChlKVxuICAgIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgICAgICB0aGlzLnZpZXcucmVzZXRBbmRDbG9zZUZvcm1CeUlEKFwiYWRkUHJvamVjdEZvcm1cIixcImFkZFByb2plY3RGb3JtQ29udGFpbmVyXCIpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld1Byb2plY3QoKVxuICAgIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMudmlldy5nZXRBZGRQcm9qZWN0Rm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShcInByb2plY3ROYW1lXCIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gdGhpcy5tb2RlbC5jcmVhdGVOZXdQcm9qZWN0KG5hbWUpOyAgICAgIFxuICAgICAgICB0aGlzLmFwcGVuZEFuZEhvb2tVcE5ld1Byb2plY3RGcm9tTW9kZWwobmV3UHJvamVjdCk7XG5cbiAgICAgICAgdGhpcy5tb2RlbC51cGRhdGVQcm9qZWN0TGlzdExvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGFwcGVuZEFuZEhvb2tVcE5ld1Byb2plY3RGcm9tTW9kZWwobmV3UHJvamVjdClcbiAgICB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RWaWV3ID0gdGhpcy52aWV3LmFwcGVuZFByb2plY3QobmV3UHJvamVjdCk7XG5cbiAgICAgICAgbmV3UHJvamVjdFZpZXcuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcbiAgICAgICAgICAgICgpID0+IHRoaXMuZGVsZXRlUHJvamVjdChuZXdQcm9qZWN0VmlldykpO1xuXG4gICAgICAgIG5ld1Byb2plY3RWaWV3LnByb2plY3ROYW1lUC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmZpbHRlckJ5UHJvamVjdChuZXdQcm9qZWN0Vmlldy5wcm9qZWN0TmFtZVAudGV4dENvbnRlbnQpKTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0VmlldylcbiAgICB7XG4gICAgICAgIHRoaXMubW9kZWwucmVtb3ZlUHJvamVjdEJ5SWQocHJvamVjdFZpZXcuaWQpO1xuICAgICAgICBwcm9qZWN0Vmlldy5lbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICAgIHRoaXMubW9kZWwudXBkYXRlUHJvamVjdExpc3RMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBmaWx0ZXJCeVByb2plY3QocHJvamVjdE5hbWUpXG4gICAge1xuICAgICAgICBsZXQgdG9kb0xpc3RPYmogPSB0aGlzLm1vZGVsLnRvZG9MaXN0Lml0ZW1zQnlJZDtcblxuICAgICAgICBPYmplY3Qua2V5cyh0b2RvTGlzdE9iaikuZm9yRWFjaChrZXkgPT4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVmFsdWUgPSB0b2RvTGlzdE9ialtrZXldLnByb2plY3QgPT0gcHJvamVjdE5hbWUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZUZpbHRlclZpc2liaWxpdHkoc3RhdHVzVmFsdWUsa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnZpZXcuZ2V0QnlJRChcInRpdGxlTmFtZVwiKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGZpbHRlckJ5UHJpb3JpdHkocHJpb3JpdHksIHByaW9yaXR5TmFtZSlcbiAgICB7XG4gICAgICAgIGxldCB0b2RvTGlzdE9iaiA9IHRoaXMubW9kZWwudG9kb0xpc3QuaXRlbXNCeUlkO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRvZG9MaXN0T2JqKS5mb3JFYWNoKGtleSA9PiBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNWYWx1ZSA9IHRvZG9MaXN0T2JqW2tleV0ucHJpb3JpdHkgPT0gcHJpb3JpdHkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZUZpbHRlclZpc2liaWxpdHkoc3RhdHVzVmFsdWUsa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnZpZXcuZ2V0QnlJRChcInRpdGxlTmFtZVwiKS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcmlvcml0eU5hbWV9YDtcblxuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kYXkpO1xuICAgIH1cblxuICAgIGZpbHRlckJ5RHVlZGF0ZSgpXG4gICAge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgbGV0IHRvZG9MaXN0T2JqID0gdGhpcy5tb2RlbC50b2RvTGlzdC5pdGVtc0J5SWQ7XG5cbiAgICAgICAgT2JqZWN0LmtleXModG9kb0xpc3RPYmopLmZvckVhY2goa2V5ID0+IFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1ZhbHVlID0gdG9kb0xpc3RPYmpba2V5XS5kdWVEYXRlID09IHRvZGF5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVGaWx0ZXJWaXNpYmlsaXR5KHN0YXR1c1ZhbHVlLGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy52aWV3LmdldEJ5SUQoXCJ0aXRsZU5hbWVcIikudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgfVxuXG4gICAgcmV0cmlldmVSZWNvcmRzKClcbiAgICB7XG4gICAgICAgIHRoaXMucmV0cmlldmVQcm9qZWN0cygpO1xuICAgICAgICB0aGlzLnJldHJpZXZlVG9kb0xpc3QoKTtcbiAgICB9XG5cbiAgICByZXRyaWV2ZVByb2plY3RzKClcbiAgICB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykhPT0gbnVsbCl7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKSk7IFxuICAgICAgICAgICAgbGV0IHByb2plY3RMaXN0T2JqID0gdGVtcC5wcm9qZWN0c0J5SWQ7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb2plY3RMaXN0T2JqKS5mb3JFYWNoKGtleSA9PiBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gdGhpcy5tb2RlbC5jcmVhdGVOZXdQcm9qZWN0KHByb2plY3RMaXN0T2JqW2tleV0ubmFtZSk7ICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRBbmRIb29rVXBOZXdQcm9qZWN0RnJvbU1vZGVsKG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0cmlldmVUb2RvTGlzdCgpXG4gICAge1xuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpIT09IG51bGwpe1xuICAgICAgICAgICAgbGV0IHRlbXAgPSAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSkpOyBcbiAgICAgICAgICAgIGxldCB0b2RvTGlzdE9iaiA9IHRlbXAuaXRlbXNCeUlkO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0b2RvTGlzdE9iaikuZm9yRWFjaChrZXkgPT4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9kb0l0ZW0gPSB0aGlzLm1vZGVsLmNyZWF0ZUFuZEFkZE5ld1RvZG9JdGVtKHRvZG9MaXN0T2JqW2tleV0ubmFtZSwgdG9kb0xpc3RPYmpba2V5XS5kZXNjcmlwdGlvbiwgdG9kb0xpc3RPYmpba2V5XS5kdWVEYXRlLCB0b2RvTGlzdE9ialtrZXldLnByb2plY3QsIHRvZG9MaXN0T2JqW2tleV0ucHJpb3JpdHksIHRvZG9MaXN0T2JqW2tleV0uY2hlY2tib3hTdGF0dXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvZG9JdGVtVmlldyA9IHRoaXMuYXBwZW5kQW5kSG9va1VwTmV3VG9kb0l0ZW1Gcm9tTW9kZWwobmV3VG9kb0l0ZW0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMucmV0cmlldmVDaGVja2JveCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0cmlldmVDaGVja2JveCgpXG4gICAge1xuICAgICAgICBsZXQgdG9kb0xpc3RPYmogPSB0aGlzLm1vZGVsLnRvZG9MaXN0Lml0ZW1zQnlJZDtcbiAgICAgICAgT2JqZWN0LmtleXModG9kb0xpc3RPYmopLmZvckVhY2goa2V5ID0+IFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRvZG9MaXN0T2JqW2tleV0uY2hlY2tib3hTdGF0dXMgPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvSXRlbSA9IHRoaXMudmlldy5nZXRCeUlEKHRvZG9MaXN0T2JqW2tleV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwib25DaGVja2JveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LmdldEJ5SUQoYGNoZWNrYm94LSR7dG9kb0xpc3RPYmpba2V5XS5pZH1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gdGhpcy52aWV3LmdldEJ5SUQoXCJkaXNwbGF5VG9kb1Rhc2tzQ29udGFpbmVyXCIpXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodG9kb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QnO1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vdG9kb0l0ZW0nO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tICcuL3Byb2plY3RMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1vZGVsXG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy50b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gbmV3IFByb2plY3RMaXN0KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQW5kQWRkTmV3VG9kb0l0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5LGNoZWNrYm94U3RhdHVzKVxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3VG9kb0l0ZW0gPSBuZXcgVG9kb0l0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5LCBjaGVja2JveFN0YXR1cyk7XG4gICAgICAgIHRoaXMudG9kb0xpc3QuYWRkKG5ld1RvZG9JdGVtKTtcblxuICAgICAgICByZXR1cm4gbmV3VG9kb0l0ZW07XG4gICAgfVxuXG4gICAgdXBkYXRlVG9kb0l0ZW0oZWxlbWVudCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KVxuICAgIHtcbiAgICAgICAgZWxlbWVudC5tb2RlbC5uYW1lID0gbmFtZTtcbiAgICAgICAgZWxlbWVudC5tb2RlbC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBlbGVtZW50Lm1vZGVsLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBlbGVtZW50Lm1vZGVsLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBlbGVtZW50Lm1vZGVsLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlSXRlbUJ5SWQoaWQpXG4gICAge1xuICAgICAgICB0aGlzLnRvZG9MaXN0LnJlbW92ZUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld1Byb2plY3QobmFtZSlcbiAgICB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5hZGQobmV3UHJvamVjdCk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdEJ5SWQoaWQpXG4gICAge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0LnJlbW92ZUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRvZG9MaXN0TG9jYWxTdG9yYWdlKClcbiAgICB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRvZG9MaXN0KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvamVjdExpc3RMb2NhbFN0b3JhZ2UoKVxuICAgIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdExpc3QpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDaGVja2JveChpZCwgdmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLnRvZG9MaXN0LmdldEl0ZW1CeUlEKGlkKS5jaGVja2JveFN0YXR1cyA9IHZhbHVlO1xuICAgIH1cblxufSAiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdFxue1xuICBjb25zdHJ1Y3RvcihuYW1lKVxuICB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkID0gdXVpZHY0KCk7XG4gIH1cbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdExpc3RcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLnByb2plY3RzQnlJZCA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBhZGQobmV3SXRlbSlcbiAgICB7XG4gICAgICAgIHRoaXMucHJvamVjdHNCeUlkW25ld0l0ZW0uaWRdID0gbmV3SXRlbTtcbiAgICB9XG5cbiAgICBnZXQgaXRlbXMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5pdGVtc0J5SWQpO1xuICAgIH1cblxuICAgIGdldEl0ZW1CeUlEKGlkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNCeUlkW2lkXTtcbiAgICB9XG5cbiAgICByZW1vdmVCeUlkKGlkKVxuICAgIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJvamVjdHNCeUlkW2lkXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtXG57XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSwgY2hlY2tib3hTdGF0dXMpXG4gIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcbiAgICB0aGlzLmNoZWNrYm94U3RhdHVzID0gY2hlY2tib3hTdGF0dXM7XG4gIH1cbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLml0ZW1zQnlJZCA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBhZGQobmV3SXRlbSlcbiAgICB7XG4gICAgICAgIHRoaXMuaXRlbXNCeUlkW25ld0l0ZW0uaWRdID0gbmV3SXRlbTtcbiAgICB9XG5cbiAgICBnZXQgaXRlbXMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5pdGVtc0J5SWQpO1xuICAgIH1cblxuICAgIGdldEl0ZW1CeUlEKGlkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNCeUlkW2lkXTtcbiAgICB9XG5cbiAgICByZW1vdmVCeUlkKGlkKVxuICAgIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuaXRlbXNCeUlkW2lkXTtcbiAgICB9XG59IiwiaW1wb3J0IFRvZG9JdGVtVmlldyBmcm9tIFwiLi90b2RvSXRlbVZpZXdcIjtcbmltcG9ydCBQcm9qZWN0VmlldyBmcm9tIFwiLi9wcm9qZWN0Vmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlld1xue1xuICAgIGdldEJ5SUQoaWQpXG4gICAge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIHRvZ2dsZUFkZFRhc2tGb3JtVmlzaWJpbGl0eSh2aXNpYmxlLCBpZClcbiAgICB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICB0aGlzLmdldEJ5SUQoaWQpLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5VmFsdWU7XG4gICAgfVxuXG4gICAgdG9nZ2xlRmlsdGVyVmlzaWJpbGl0eSh2aXNpYmxlLCBpZClcbiAgICB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHZpc2libGUgPyAnZ3JpZCcgOiAnbm9uZSc7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChpZCkuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlWYWx1ZTtcbiAgICB9XG5cbiAgICBnZXRBZGRUYXNrRm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShlbGVtZW50TmFtZSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ5SUQoXCJhZGRUYXNrRm9ybVwiKS5lbGVtZW50c1tlbGVtZW50TmFtZV0udmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0QWRkUHJvamVjdEZvcm1FbGVtZW50VmFsdWVCeU5hbWUoZWxlbWVudE5hbWUpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCeUlEKFwiYWRkUHJvamVjdEZvcm1cIikuZWxlbWVudHNbZWxlbWVudE5hbWVdLnZhbHVlO1xuICAgIH1cblxuICAgIHJlc2V0QW5kQ2xvc2VGb3JtQnlJRChmb3JtSUQsZm9ybUNvbnRhaW5lcklEKVxuICAgIHtcbiAgICAgICAgdGhpcy5nZXRCeUlEKGZvcm1JRCkucmVzZXQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkoZmFsc2UsZm9ybUNvbnRhaW5lcklEKTtcbiAgICB9XG4gICAgYXBwZW5kVG9kb0l0ZW0oaXRlbSlcbiAgICB7XG4gICAgICAgIC8vIGdldCB0ZW1wbGF0ZSBtYXJrdXAgYW5kIGNsb25lIGVsZW1lbnQgKGRlZXAgY29weSlcbiAgICAgICAgbGV0IHRlbXBsYXRlQ29udGVudCA9IHRoaXMuZ2V0QnlJRChcInRvZG9JdGVtVGVtcGxhdGVcIikuY29udGVudDtcbiAgICAgICAgbGV0IHRvZG9JdGVtRGl2RWxlbWVudENsb25lID0gdGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuICAgICAgICBsZXQgdG9kb0l0ZW1WaWV3ID0gbmV3IFRvZG9JdGVtVmlldyh0b2RvSXRlbURpdkVsZW1lbnRDbG9uZSwgaXRlbSk7XG5cbiAgICAgICAgLy8gdGhlbiBpbnNlcnQgY2xvbmVkIG1hcmt1cCBhcyBuZXcgY2hpbGQgb2YgdG9kbyB0YXNrcyBjb250YWluZXJcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiZGlzcGxheVRvZG9UYXNrc0NvbnRhaW5lclwiKS5hcHBlbmQodG9kb0l0ZW1WaWV3LmVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiB0b2RvSXRlbVZpZXc7XG4gICAgfVxuICAgIGFwcGVuZFByb2plY3QoaXRlbSlcbiAgICB7XG4gICAgICAgIC8vIFByb2plY3QgaW4gc2lkZWJhclxuICAgICAgICBsZXQgdGVtcGxhdGVDb250ZW50ID0gdGhpcy5nZXRCeUlEKFwicHJvamVjdFRlbXBsYXRlXCIpLmNvbnRlbnQ7XG4gICAgICAgIGxldCBwcm9qZWN0RGl2RWxlbWVudENsb25lID0gdGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuICAgICAgICBsZXQgcHJvamVjdFZpZXcgPSBuZXcgUHJvamVjdFZpZXcocHJvamVjdERpdkVsZW1lbnRDbG9uZSwgaXRlbSk7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChcInByb2plY3RPcHRpb25zXCIpLmFwcGVuZChwcm9qZWN0Vmlldy5lbGVtZW50KTtcblxuICAgICAgICAvLyBQcm9qZWN0IGluIEFkZFRhc2tGb3JtXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLm5hbWU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgICBvcHRpb24uaWQgPSBgY2hlY2tib3gtJHtpdGVtLmlkfWA7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChcInRhc2tQcm9qZWN0XCIpLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RWaWV3O1xuICAgIH1cbiAgICBmaWxsQWRkRm9ybVdoZW5FZGl0KHRvZG9JdGVtVmlldylcbiAgICB7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChcImFkZFRhc2tGb3JtXCIpLmVsZW1lbnRzW1widGFza05hbWVcIl0udmFsdWUgPSB0b2RvSXRlbVZpZXcubW9kZWwubmFtZTtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiYWRkVGFza0Zvcm1cIikuZWxlbWVudHNbXCJ0YXNrRGVzY3JpcHRpb25cIl0udmFsdWUgPSB0b2RvSXRlbVZpZXcubW9kZWwuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZ2V0QnlJRChcImFkZFRhc2tGb3JtXCIpLmVsZW1lbnRzW1widGFza0R1ZURhdGVcIl0udmFsdWUgPSB0b2RvSXRlbVZpZXcubW9kZWwuZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiYWRkVGFza0Zvcm1cIikuZWxlbWVudHNbXCJ0YXNrUHJvamVjdFwiXS52YWx1ZSA9IHRvZG9JdGVtVmlldy5tb2RlbC5wcm9qZWN0O1xuICAgICAgICB0aGlzLmdldEJ5SUQoXCJhZGRUYXNrRm9ybVwiKS5lbGVtZW50c1tcInRhc2tQcmlvcml0eVwiXS52YWx1ZSA9IHRvZG9JdGVtVmlldy5tb2RlbC5wcmlvcml0eTtcbiAgICB9XG4gICAgdXBkYXRlVG9kb0l0ZW0oZWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCB0b2RvSXRlbVRvVXBkYXRlID0gdGhpcy5nZXRCeUlEKGVsZW1lbnQuaWQpO1xuICAgICAgICBuZXcgVG9kb0l0ZW1WaWV3KHRvZG9JdGVtVG9VcGRhdGUsZWxlbWVudC5tb2RlbCk7XG4gICAgfVxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Vmlld1xue1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByb2plY3RNb2RlbClcbiAgICB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9kZWwgPSBwcm9qZWN0TW9kZWw7XG5cbiAgICAgICAgdGhpcy5pZCA9IHByb2plY3RNb2RlbC5pZDtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvamVjdE1vZGVsLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3ROYW1lUCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgaWQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICB9XG5cbiAgICBnZXQgZGVsZXRlQnV0dG9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kZWxldGVQcm9qZWN0QnV0dG9uXCIpO1xuICAgIH1cblxuXG4gICAgc2V0IGlkKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgc2V0IG5hbWUodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lUC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSXRlbVZpZXdcbntcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCB0b2RvSXRlbU1vZGVsKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRvZG9JdGVtTW9kZWw7XG5cbiAgICAgICAgdGhpcy5pZCA9IHRvZG9JdGVtTW9kZWwuaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHRvZG9JdGVtTW9kZWwubmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRvZG9JdGVtTW9kZWwuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlID0gdG9kb0l0ZW1Nb2RlbC5kdWVEYXRlO1xuICAgICAgICB0aGlzLnByb2plY3QgPSB0b2RvSXRlbU1vZGVsLnByb2plY3Q7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSB0b2RvSXRlbU1vZGVsLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCBjaGVja2JveCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPWNoZWNrVGFza11cIik7XG4gICAgfVxuICAgIGdldCBjaGVja2JveExhYmVsKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsW25hbWU9Y2hlY2tCb3hMYWJlbF1cIik7XG4gICAgfVxuICAgIGdldCB0YXNrTmFtZUgxKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb25QYXJhZ3JhcGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicC5kZXNjXCIpO1xuICAgIH1cbiAgICBnZXQgZHVlUGFyYWdyYXBoKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInAuZHVlXCIpO1xuICAgIH1cbiAgICBnZXQgcHJvamVjdFBhcmFncmFwaCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwLnByb2plY3RcIik7XG4gICAgfVxuICAgIGdldCBkZWxldGVCdXR0b24oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmRlbGV0ZUJ1dHRvblwiKTtcbiAgICB9XG5cbiAgICBnZXQgZWRpdEJ1dHRvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uZWRpdEJ1dHRvblwiKTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICB9XG4gICAgc2V0IGlkKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHZhbHVlKTtcblxuICAgICAgICBjb25zdCBjaGVja0JveElkID0gYGNoZWNrYm94LSR7dmFsdWV9YDtcbiAgICAgICAgdGhpcy5jaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjaGVja0JveElkKTtcbiAgICAgICAgdGhpcy5jaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBjaGVja0JveElkKTtcbiAgICB9XG4gICAgc2V0IG5hbWUodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLnRhc2tOYW1lSDEudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXQgZHVlKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5kdWVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IHByb2plY3QodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLnByb2plY3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKVxuICAgIHtcbiAgICAgICAgc3dpdGNoKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFwibG93UHJpb3JpdHlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmx1ZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGl1bVByaW9yaXR5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveExhYmVsLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICNmMmYyMjFcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoaWdoUHJpb3JpdHlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgcmVkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3hMYWJlbC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZ2IoODAsIDgwLCA4MClcIjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuXG5pbXBvcnQgTWFpbk1vZGVsIGZyb20gJy4vbW9kZWxzL21haW5Nb2RlbCc7XG5pbXBvcnQgTWFpblZpZXcgZnJvbSAnLi92aWV3cy9tYWluVmlldyc7XG5pbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9tYWluQ29udHJvbGxlcic7XG5cbi8vIHdpcmluZyB1cCBtb2RlbCwgdmlld3MsIGFuZCBjb250cm9sbGVyc1xuY29uc3QgbW9kZWwgPSBuZXcgTWFpbk1vZGVsKCk7XG5jb25zdCB2aWV3ID0gbmV3IE1haW5WaWV3KCk7XG5jb25zdCBjb250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKG1vZGVsLCB2aWV3KTsgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9