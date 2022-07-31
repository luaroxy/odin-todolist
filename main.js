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
        this.view.getByID(`checkbox-${projectView.element.id}`).remove();
        projectView.element.remove();
    }

    filterByProject(projectName)
    {
        let todoListObj = this.model.list.itemsById;

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
        let todoListObj = this.model.list.itemsById;

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
        let todoListObj = this.model.list.itemsById;

        Object.keys(todoListObj).forEach(key => 
            {
                const statusValue = todoListObj[key].dueDate == today ? true : false;
                this.view.toggleFilterVisibility(statusValue,key);
            }
        );

        this.view.getByID("titleName").textContent = "Today";
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

    createNewProject(name)
    {
        return new _project__WEBPACK_IMPORTED_MODULE_2__["default"](name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0scUNBQXFDLCtCQUErQiw0REFBNEQseUJBQXlC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QVM7QUFDM0IsaUJBQWlCLHVEQUFRO0FBQ3pCLHVCQUF1QixtRUFBYyxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVycy9tYWluQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvbW9kZWxzL21haW5Nb2RlbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL21vZGVscy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvbW9kZWxzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy92aWV3cy9tYWluVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvdmlld3MvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3ZpZXdzL3RvZG9JdGVtVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQ29jb2dvb3NlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYWxlbmRhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZm9sZGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9lZGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59IFxcbiAgXFxuKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xcbn1cXG5cXG5idXR0b24sIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxMHZoIDFmciAvIGNsYW1wKDEzcmVtLCAxOCUsIDIwcmVtKSAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ZDhkM2I5O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjODlkOGQzYmQgMCUsICMwM2M4YTdiNCA3NCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmZjZmY7XFxufVxcblxcbiNoZWFkZXIgcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29jb2dvb3NlJztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjV2dywgM3JlbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMXZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuM3Z3LCA0cmVtKTtcXG59XFxuXFxuI2hlYWRlciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogY2xhbXAoMXJlbSwgMi4zdncsIDNyZW0pO1xcbn1cXG5cXG4vKiBTSURFUkJBUiAqL1xcbiNzaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxN2M7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS41dmg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNzaWRlYmFyIGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjV2dztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDRyZW0pO1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuI3ByaW9yaXR5T3B0aW9ucyBoMSwgI3Byb2plY3RPcHRpb25zIHAge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgNHJlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3ByaW9yaXR5T3B0aW9ucyBoMTpob3ZlciwgI3Byb2plY3RPcHRpb25zIHA6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogY2xhbXAoMC44cmVtLCAxdncsIDEuOHJlbSk7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMsICNwcm9qZWN0T3B0aW9uc3tcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbntcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBBREQgVEFTSyBGT1JNICovXFxuI2FkZFRhc2tGb3JtQ29udGFpbmVyLCAjYWRkUHJvamVjdEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIHdpZHRoOjUwdnc7XFxuICAgIGJhY2tncm91bmQ6I2UxZTFlMTtcXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNXB4IDBweCAjMDAwMDAwYWY7XFxuICAgIHBhZGRpbmc6IDJ2aCAydnc7XFxufVxcbiAgXFxuLnJvd0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4gIFxcbi5mb3JtLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbiAgXFxuLmlucHV0Q29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgbGFiZWx7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYyNTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMnJlbTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDF2dywgM3JlbSlcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgaDJ7XFxuICAgIG1hcmdpbjowLjV2aCAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTowLjI1dmg7XFxuICAgIHdpZHRoOjEwdnc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4zdncsIDRyZW0pO1xcbiAgICBjb2xvcjojNzg3ODhjO1xcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCAjNzg3ODhjO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dCwgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhLCAuZm9ybS1jb250YWluZXIgc2VsZWN0IHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgcGFkZGluZzowLjl2aDtcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIG91dGxpbmU6bm9uZTtcXG4gICAgcmVzaXplOm5vbmU7XFxuICAgIGJvcmRlcjowO1xcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjphbGwgLjNzO1xcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjYmViZWQyO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cywgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhOmZvY3VzLCAuZm9ybS1jb250YWluZXIgc2VsZWN0OmZvY3Vze1xcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjNzg3ODhjXFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbntcXG4gICAgcGFkZGluZzowLjV2aCAwLjV2dztcXG4gICAgbWFyZ2luOjF2aCAwIDA7XFxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JyxzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6MnB4IHNvbGlkICM3ODc4OGM7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgY29sb3I6IzVhNWE2ZTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246YWxsIC4zcztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDF2dywgMnJlbSk7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDojNzg3ODhjO1xcbiAgICBjb2xvcjojZmZmXFxufVxcblxcblxcbi8qIE1BSU4gQ09OVEVOVCAtIGRpc3BsYXkgVG9kbyBJdGVtcyAqL1xcbiNtYWluQ29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZmVmZDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNkNWZlZmQgMCUsICNmZmZjZmYgNzQlKTtcXG59XFxuXFxuI3RvZG9Db250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDM1cHggNTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50b2RvVGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAxZnIgMWZyIC8gMi41cmVtIGZpdC1jb250ZW50KDMwMHB4KSBmaXQtY29udGVudCgzMDBweCkgMWZyIDIwcHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNzg3ODhjO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtcm93OiAxLzQ7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBsYWJlbDphZnRlciB7XFxuICAgIGJvcmRlcjogMi41cHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNC42Nyk7XFxuICAgIGxlZnQ6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS81KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS80LjUpOztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS8yLjMzKTtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiYWJhO1xcbiAgICBib3JkZXItY29sb3I6ICNmZWZmZmU7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm9uQ2hlY2tib3h7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvVGFzayBoMXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNztcXG4gICAgZm9udC1zaXplOiBtaW4oM3ZtaW4sIDEuM3JlbSlcXG59XFxuXFxuLnRvZG9UYXNrIHA6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNztcXG59XFxuXFxuLnRvZG9UYXNrIHB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDIuNXZtaW4sIDAuOHJlbSk7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvZG9UYXNrIHA6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbn1cXG5cXG4udG9kb1Rhc2sgcDpudGgtb2YtdHlwZSgzKTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxufVxcblxcbi50b2RvVGFzayBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4udG9kb1Rhc2sgYnV0dG9uOm50aC1vZi10eXBlKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDYvNztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgICNtYWluQ29udGVudHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBcUQ7SUFDckQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxpQkFBaUI7QUFDckI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixzRUFBc0U7SUFDdEUsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVB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LGNBQWM7SUFDZCw2REFBaUQ7SUFDakQsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkRBQStDO0lBQy9DLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkRBQWlEO0lBQ2pELFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29jb2dvb3NlJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL0NvY29nb29zZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59IFxcbiAgXFxuKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xcbn1cXG5cXG5idXR0b24sIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxMHZoIDFmciAvIGNsYW1wKDEzcmVtLCAxOCUsIDIwcmVtKSAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ZDhkM2I5O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjODlkOGQzYmQgMCUsICMwM2M4YTdiNCA3NCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmZjZmY7XFxufVxcblxcbiNoZWFkZXIgcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29jb2dvb3NlJztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjV2dywgM3JlbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMXZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuM3Z3LCA0cmVtKTtcXG59XFxuXFxuI2hlYWRlciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogY2xhbXAoMXJlbSwgMi4zdncsIDNyZW0pO1xcbn1cXG5cXG4vKiBTSURFUkJBUiAqL1xcbiNzaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxN2M7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS41dmg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNzaWRlYmFyIGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjV2dztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDRyZW0pO1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXG59XFxuXFxuI3ByaW9yaXR5T3B0aW9ucyBoMSwgI3Byb2plY3RPcHRpb25zIHAge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgNHJlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3ByaW9yaXR5T3B0aW9ucyBoMTpob3ZlciwgI3Byb2plY3RPcHRpb25zIHA6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogY2xhbXAoMC44cmVtLCAxdncsIDEuOHJlbSk7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMsICNwcm9qZWN0T3B0aW9uc3tcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbntcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBBREQgVEFTSyBGT1JNICovXFxuI2FkZFRhc2tGb3JtQ29udGFpbmVyLCAjYWRkUHJvamVjdEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIHdpZHRoOjUwdnc7XFxuICAgIGJhY2tncm91bmQ6I2UxZTFlMTtcXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNXB4IDBweCAjMDAwMDAwYWY7XFxuICAgIHBhZGRpbmc6IDJ2aCAydnc7XFxufVxcbiAgXFxuLnJvd0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4gIFxcbi5mb3JtLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbiAgXFxuLmlucHV0Q29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgbGFiZWx7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYyNTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMnJlbTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDF2dywgM3JlbSlcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgaDJ7XFxuICAgIG1hcmdpbjowLjV2aCAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTowLjI1dmg7XFxuICAgIHdpZHRoOjEwdnc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4zdncsIDRyZW0pO1xcbiAgICBjb2xvcjojNzg3ODhjO1xcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCAjNzg3ODhjO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dCwgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhLCAuZm9ybS1jb250YWluZXIgc2VsZWN0IHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgcGFkZGluZzowLjl2aDtcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIG91dGxpbmU6bm9uZTtcXG4gICAgcmVzaXplOm5vbmU7XFxuICAgIGJvcmRlcjowO1xcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjphbGwgLjNzO1xcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjYmViZWQyO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cywgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhOmZvY3VzLCAuZm9ybS1jb250YWluZXIgc2VsZWN0OmZvY3Vze1xcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjNzg3ODhjXFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbntcXG4gICAgcGFkZGluZzowLjV2aCAwLjV2dztcXG4gICAgbWFyZ2luOjF2aCAwIDA7XFxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JyxzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6MnB4IHNvbGlkICM3ODc4OGM7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgY29sb3I6IzVhNWE2ZTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246YWxsIC4zcztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDF2dywgMnJlbSk7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDojNzg3ODhjO1xcbiAgICBjb2xvcjojZmZmXFxufVxcblxcblxcbi8qIE1BSU4gQ09OVEVOVCAtIGRpc3BsYXkgVG9kbyBJdGVtcyAqL1xcbiNtYWluQ29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZmVmZDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNkNWZlZmQgMCUsICNmZmZjZmYgNzQlKTtcXG59XFxuXFxuI3RvZG9Db250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDM1cHggNTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50b2RvVGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAxZnIgMWZyIC8gMi41cmVtIGZpdC1jb250ZW50KDMwMHB4KSBmaXQtY29udGVudCgzMDBweCkgMWZyIDIwcHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNzg3ODhjO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtcm93OiAxLzQ7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBsYWJlbDphZnRlciB7XFxuICAgIGJvcmRlcjogMi41cHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNC42Nyk7XFxuICAgIGxlZnQ6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS81KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS80LjUpOztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS8yLjMzKTtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiYWJhO1xcbiAgICBib3JkZXItY29sb3I6ICNmZWZmZmU7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm9uQ2hlY2tib3h7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvVGFzayBoMXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNztcXG4gICAgZm9udC1zaXplOiBtaW4oM3ZtaW4sIDEuM3JlbSlcXG59XFxuXFxuLnRvZG9UYXNrIHA6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNztcXG59XFxuXFxuLnRvZG9UYXNrIHB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDIuNXZtaW4sIDAuOHJlbSk7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvZG9UYXNrIHA6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2ltYWdlcy9jYWxlbmRhci5zdmdcXFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG59XFxuXFxuLnRvZG9UYXNrIHA6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2ltYWdlcy9mb2xkZXIuc3ZnXFxcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxufVxcblxcbi50b2RvVGFzayBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWFnZXMvZWRpdC5zdmdcXFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4udG9kb1Rhc2sgYnV0dG9uOm50aC1vZi10eXBlKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDYvNztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2ltYWdlcy9kZWxldGUuc3ZnXFxcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICNzaWRlYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgI21haW5Db250ZW50e1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkNvbnRyb2xsZXJcbntcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldylcbiAgICB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5vbkVkaXRUb2RvSXRlbSA9IHtzdGF0dXM6IFwiZmFsc2VcIiwgZWxlbWVudDogXCJcIn07XG5cbiAgICAgICAgdmlldy5nZXRCeUlEKFwiYWRkVGFza0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdmlldy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkodHJ1ZSxcImFkZFRhc2tGb3JtQ29udGFpbmVyXCIpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwiY2xvc2VBZGRUYXNrQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2aWV3LnJlc2V0QW5kQ2xvc2VGb3JtQnlJRChcImFkZFRhc2tGb3JtXCIsXCJhZGRUYXNrRm9ybUNvbnRhaW5lclwiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImFkZFRhc2tGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHRoaXMub25BZGRUYXNrRm9ybVN1Ym1pdChlKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcInByaW9yaXR5QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dPckhpZGUoXCJwcmlvcml0eUltZ1wiLFwicHJpb3JpdHlPcHRpb25zXCIpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwicHJvamVjdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93T3JIaWRlKFwicHJvamVjdEltZ1wiLFwicHJvamVjdE9wdGlvbnNcIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJhZGRQcm9qZWN0QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2aWV3LnRvZ2dsZUFkZFRhc2tGb3JtVmlzaWJpbGl0eSh0cnVlLFwiYWRkUHJvamVjdEZvcm1Db250YWluZXJcIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJjbG9zZUFkZFByb2plY3RCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHZpZXcucmVzZXRBbmRDbG9zZUZvcm1CeUlEKFwiYWRkUHJvamVjdEZvcm1cIixcImFkZFByb2plY3RGb3JtQ29udGFpbmVyXCIpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwiYWRkUHJvamVjdEZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gdGhpcy5vbkFkZFByb2plY3RGb3JtU3VibWl0KGUpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwiaW5ib3hcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuZmlsdGVyQnlQcm9qZWN0KFwiSW5ib3hcIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJub1ByaW9yaXR5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmZpbHRlckJ5UHJpb3JpdHkoXCJub1ByaW9yaXR5XCIsIFwiTm9uZVwiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImxvd1ByaW9yaXR5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmZpbHRlckJ5UHJpb3JpdHkoXCJsb3dQcmlvcml0eVwiLCBcIkxvd1wiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcIm1lZGl1bVByaW9yaXR5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmZpbHRlckJ5UHJpb3JpdHkoXCJtZWRpdW1Qcmlvcml0eVwiLCBcIk1lZGl1bVwiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImhpZ2hQcmlvcml0eVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5maWx0ZXJCeVByaW9yaXR5KFwiaGlnaFByaW9yaXR5XCIsIFwiSGlnaFwiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcInRvZGF5QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmZpbHRlckJ5RHVlZGF0ZSgpKTtcbiAgICB9XG5cbiAgICBvbkFkZFRhc2tGb3JtU3VibWl0KGUpXG4gICAge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5vbkVkaXRUb2RvSXRlbS5zdGF0dXMgPT0gdHJ1ZSA/IHRoaXMudXBkYXRlVG9kb0l0ZW0oKSA6IHRoaXMuY3JlYXRlTmV3VG9kb0l0ZW0oKTtcbiAgICAgICAgdGhpcy52aWV3LnJlc2V0QW5kQ2xvc2VGb3JtQnlJRChcImFkZFRhc2tGb3JtXCIsXCJhZGRUYXNrRm9ybUNvbnRhaW5lclwiKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdUb2RvSXRlbSgpXG4gICAge1xuICAgICAgICBjb25zdCBuZXdUb2RvSXRlbSA9IHRoaXMuY3JlYXRlTmV3VG9kb0l0ZW1Gcm9tRm9ybUlucHV0cygpOyAgICAgICAgXG4gICAgICAgIHRoaXMuYXBwZW5kQW5kSG9va1VwTmV3VG9kb0l0ZW1Gcm9tTW9kZWwobmV3VG9kb0l0ZW0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVRvZG9JdGVtKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHNGcm9tRm9ybUlucHV0cygpO1xuICAgICAgICBjb25zdCB1cGRhdGVkVG9kb0l0ZW0gPSB0aGlzLm1vZGVsLnVwZGF0ZVRvZG9JdGVtKHRoaXMub25FZGl0VG9kb0l0ZW0uZWxlbWVudCxmb3JtRWxlbWVudHMubmFtZSwgZm9ybUVsZW1lbnRzLmRlc2MsIGZvcm1FbGVtZW50cy5kdWVEYXRlLCBmb3JtRWxlbWVudHMucHJvamVjdCwgZm9ybUVsZW1lbnRzLnByaW9yaXR5KVxuICAgICAgICB0aGlzLnZpZXcudXBkYXRlVG9kb0l0ZW0odXBkYXRlZFRvZG9JdGVtKTtcbiAgICAgICAgdGhpcy5vbkVkaXRUb2RvSXRlbS5zdGF0dXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50c0Zyb21Gb3JtSW5wdXRzKClcbiAgICB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnZpZXcuZ2V0QWRkVGFza0Zvcm1FbGVtZW50VmFsdWVCeU5hbWUoXCJ0YXNrTmFtZVwiKTtcbiAgICAgICAgY29uc3QgZGVzYyA9IHRoaXMudmlldy5nZXRBZGRUYXNrRm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShcInRhc2tEZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRoaXMudmlldy5nZXRBZGRUYXNrRm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShcInRhc2tEdWVEYXRlXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy52aWV3LmdldEFkZFRhc2tGb3JtRWxlbWVudFZhbHVlQnlOYW1lKFwidGFza1Byb2plY3RcIik7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gdGhpcy52aWV3LmdldEFkZFRhc2tGb3JtRWxlbWVudFZhbHVlQnlOYW1lKFwidGFza1ByaW9yaXR5XCIpO1xuXG4gICAgICAgIHJldHVybiB7bmFtZSwgZGVzYywgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHl9O1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld1RvZG9JdGVtRnJvbUZvcm1JbnB1dHMoKVxuICAgIHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnRzID0gdGhpcy5nZXRFbGVtZW50c0Zyb21Gb3JtSW5wdXRzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmNyZWF0ZUFuZEFkZE5ld1RvZG9JdGVtKGZvcm1FbGVtZW50cy5uYW1lLCBmb3JtRWxlbWVudHMuZGVzYywgZm9ybUVsZW1lbnRzLmR1ZURhdGUsIGZvcm1FbGVtZW50cy5wcm9qZWN0LCBmb3JtRWxlbWVudHMucHJpb3JpdHkpO1xuICAgIH1cblxuICAgIGFwcGVuZEFuZEhvb2tVcE5ld1RvZG9JdGVtRnJvbU1vZGVsKHRvZG9JdGVtKVxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3VG9kb0l0ZW1WaWV3ID0gdGhpcy52aWV3LmFwcGVuZFRvZG9JdGVtKHRvZG9JdGVtKTtcblxuICAgICAgICAvLyBob29rIHVwIGV2ZW50IGhhbmRsZXJzIG9mIG5ldyB2aWV3IGVsZW1lbnRcbiAgICAgICAgbmV3VG9kb0l0ZW1WaWV3LmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmRlbGV0ZVRvZG9JdGVtKG5ld1RvZG9JdGVtVmlldykpO1xuXG4gICAgICAgIG5ld1RvZG9JdGVtVmlldy5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcbiAgICAgICAgICAgICgpID0+IHRoaXMuZWRpdFRvZG9JdGVtKG5ld1RvZG9JdGVtVmlldykpO1xuXG4gICAgICAgIG5ld1RvZG9JdGVtVmlldy5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5jaGVja0NoZWNrYm94KG5ld1RvZG9JdGVtVmlldykpO1xuXG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZVRvZG9JdGVtKHRvZG9JdGVtVmlldylcbiAgICB7XG4gICAgICAgIHRoaXMubW9kZWwucmVtb3ZlSXRlbUJ5SWQodG9kb0l0ZW1WaWV3LmlkKTtcbiAgICAgICAgdG9kb0l0ZW1WaWV3LmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZWRpdFRvZG9JdGVtKHRvZG9JdGVtVmlldylcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkodHJ1ZSxcImFkZFRhc2tGb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnZpZXcuZmlsbEFkZEZvcm1XaGVuRWRpdCh0b2RvSXRlbVZpZXcpO1xuICAgICAgICB0aGlzLm9uRWRpdFRvZG9JdGVtLnN0YXR1cyA9IHRydWU7XG4gICAgICAgIHRoaXMub25FZGl0VG9kb0l0ZW0uZWxlbWVudCA9IHRvZG9JdGVtVmlldztcbiAgICB9XG5cbiAgICBjaGVja0NoZWNrYm94KHRvZG9JdGVtVmlldylcbiAgICB7ICAgXG4gICAgICAgIHBhcmVudCA9IHRoaXMudmlldy5nZXRCeUlEKFwiZGlzcGxheVRvZG9UYXNrc0NvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHRvZG9JdGVtVmlldy5jaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0b2RvSXRlbVZpZXcuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib25DaGVja2JveFwiKTtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodG9kb0l0ZW1WaWV3LmVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvSXRlbVZpZXcuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwib25DaGVja2JveFwiKTtcbiAgICAgICAgICAgIHBhcmVudC5wcmVwZW5kKHRvZG9JdGVtVmlldy5lbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd09ySGlkZShpbWdJZCwgb3B0aW9uc0lkKSBcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcuZ2V0QnlJRChvcHRpb25zSWQpLnN0eWxlLmRpc3BsYXkgPT0gXCJibG9ja1wiKSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdldEJ5SUQoaW1nSWQpLnNyYyA9IFwiLi9pbWFnZXMvZG93bmFycm93LnN2Z1wiO1xuICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZUFkZFRhc2tGb3JtVmlzaWJpbGl0eShmYWxzZSxvcHRpb25zSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5nZXRCeUlEKGltZ0lkKS5zcmMgPSBcIi4vaW1hZ2VzL3JpZ2h0YXJyb3cuc3ZnXCI7XG4gICAgICAgICAgICB0aGlzLnZpZXcudG9nZ2xlQWRkVGFza0Zvcm1WaXNpYmlsaXR5KHRydWUsb3B0aW9uc0lkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWRkUHJvamVjdEZvcm1TdWJtaXQoZSlcbiAgICB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICAgICAgdGhpcy52aWV3LnJlc2V0QW5kQ2xvc2VGb3JtQnlJRChcImFkZFByb2plY3RGb3JtXCIsXCJhZGRQcm9qZWN0Rm9ybUNvbnRhaW5lclwiKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdQcm9qZWN0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnZpZXcuZ2V0QWRkUHJvamVjdEZvcm1FbGVtZW50VmFsdWVCeU5hbWUoXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHRoaXMubW9kZWwuY3JlYXRlTmV3UHJvamVjdChuYW1lKTsgICAgICAgIFxuICAgICAgICB0aGlzLmFwcGVuZEFuZEhvb2tVcE5ld1Byb2plY3RGcm9tTW9kZWwobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgYXBwZW5kQW5kSG9va1VwTmV3UHJvamVjdEZyb21Nb2RlbChuZXdQcm9qZWN0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFZpZXcgPSB0aGlzLnZpZXcuYXBwZW5kUHJvamVjdChuZXdQcm9qZWN0KTtcblxuICAgICAgICBuZXdQcm9qZWN0Vmlldy5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5kZWxldGVQcm9qZWN0KG5ld1Byb2plY3RWaWV3KSk7XG5cbiAgICAgICAgbmV3UHJvamVjdFZpZXcucHJvamVjdE5hbWVQLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcbiAgICAgICAgICAgICgpID0+IHRoaXMuZmlsdGVyQnlQcm9qZWN0KG5ld1Byb2plY3RWaWV3LnByb2plY3ROYW1lUC50ZXh0Q29udGVudCkpO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3RWaWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3LmdldEJ5SUQoYGNoZWNrYm94LSR7cHJvamVjdFZpZXcuZWxlbWVudC5pZH1gKS5yZW1vdmUoKTtcbiAgICAgICAgcHJvamVjdFZpZXcuZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBmaWx0ZXJCeVByb2plY3QocHJvamVjdE5hbWUpXG4gICAge1xuICAgICAgICBsZXQgdG9kb0xpc3RPYmogPSB0aGlzLm1vZGVsLmxpc3QuaXRlbXNCeUlkO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRvZG9MaXN0T2JqKS5mb3JFYWNoKGtleSA9PiBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNWYWx1ZSA9IHRvZG9MaXN0T2JqW2tleV0ucHJvamVjdCA9PSBwcm9qZWN0TmFtZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcudG9nZ2xlRmlsdGVyVmlzaWJpbGl0eShzdGF0dXNWYWx1ZSxrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudmlldy5nZXRCeUlEKFwidGl0bGVOYW1lXCIpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZmlsdGVyQnlQcmlvcml0eShwcmlvcml0eSwgcHJpb3JpdHlOYW1lKVxuICAgIHtcbiAgICAgICAgbGV0IHRvZG9MaXN0T2JqID0gdGhpcy5tb2RlbC5saXN0Lml0ZW1zQnlJZDtcblxuICAgICAgICBPYmplY3Qua2V5cyh0b2RvTGlzdE9iaikuZm9yRWFjaChrZXkgPT4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVmFsdWUgPSB0b2RvTGlzdE9ialtrZXldLnByaW9yaXR5ID09IHByaW9yaXR5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVGaWx0ZXJWaXNpYmlsaXR5KHN0YXR1c1ZhbHVlLGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy52aWV3LmdldEJ5SUQoXCJ0aXRsZU5hbWVcIikudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJpb3JpdHlOYW1lfWA7XG5cbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLCAxMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZGF5KTtcbiAgICB9XG5cbiAgICBmaWx0ZXJCeUR1ZWRhdGUoKVxuICAgIHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLCAxMCk7XG4gICAgICAgIGxldCB0b2RvTGlzdE9iaiA9IHRoaXMubW9kZWwubGlzdC5pdGVtc0J5SWQ7XG5cbiAgICAgICAgT2JqZWN0LmtleXModG9kb0xpc3RPYmopLmZvckVhY2goa2V5ID0+IFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1ZhbHVlID0gdG9kb0xpc3RPYmpba2V5XS5kdWVEYXRlID09IHRvZGF5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVGaWx0ZXJWaXNpYmlsaXR5KHN0YXR1c1ZhbHVlLGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy52aWV3LmdldEJ5SUQoXCJ0aXRsZU5hbWVcIikudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdCc7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi90b2RvSXRlbSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTW9kZWxcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgVG9kb0xpc3QoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBbmRBZGROZXdUb2RvSXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpXG4gICAge1xuICAgICAgICBjb25zdCBuZXdUb2RvSXRlbSA9IG5ldyBUb2RvSXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpO1xuICAgICAgICB0aGlzLmxpc3QuYWRkKG5ld1RvZG9JdGVtKTtcblxuICAgICAgICByZXR1cm4gbmV3VG9kb0l0ZW07XG4gICAgfVxuXG4gICAgdXBkYXRlVG9kb0l0ZW0oZWxlbWVudCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KVxuICAgIHtcbiAgICAgICAgZWxlbWVudC5tb2RlbC5uYW1lID0gbmFtZTtcbiAgICAgICAgZWxlbWVudC5tb2RlbC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBlbGVtZW50Lm1vZGVsLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBlbGVtZW50Lm1vZGVsLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBlbGVtZW50Lm1vZGVsLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlSXRlbUJ5SWQoaWQpXG4gICAge1xuICAgICAgICB0aGlzLmxpc3QucmVtb3ZlQnlJZChpZCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3UHJvamVjdChuYW1lKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIH1cbn0gIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RcbntcbiAgY29uc3RydWN0b3IobmFtZSlcbiAge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IHV1aWR2NCgpO1xuICB9XG59ICIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSXRlbVxue1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpXG4gIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcbiAgfVxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdFxue1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHRoaXMuaXRlbXNCeUlkID0ge307XG4gICAgfVxuICAgIFxuICAgIGFkZChuZXdJdGVtKVxuICAgIHtcbiAgICAgICAgdGhpcy5pdGVtc0J5SWRbbmV3SXRlbS5pZF0gPSBuZXdJdGVtO1xuICAgIH1cblxuICAgIGdldCBpdGVtcygpXG4gICAge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLml0ZW1zQnlJZCk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbUJ5SUQoaWQpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc0J5SWRbaWRdO1xuICAgIH1cblxuICAgIHJlbW92ZUJ5SWQoaWQpXG4gICAge1xuICAgICAgICBkZWxldGUgdGhpcy5pdGVtc0J5SWRbaWRdO1xuICAgIH1cbn0iLCJpbXBvcnQgVG9kb0l0ZW1WaWV3IGZyb20gXCIuL3RvZG9JdGVtVmlld1wiO1xuaW1wb3J0IFByb2plY3RWaWV3IGZyb20gXCIuL3Byb2plY3RWaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3XG57XG4gICAgZ2V0QnlJRChpZClcbiAgICB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQWRkVGFza0Zvcm1WaXNpYmlsaXR5KHZpc2libGUsIGlkKVxuICAgIHtcbiAgICAgICAgY29uc3QgZGlzcGxheVZhbHVlID0gdmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChpZCkuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlWYWx1ZTtcbiAgICB9XG5cbiAgICB0b2dnbGVGaWx0ZXJWaXNpYmlsaXR5KHZpc2libGUsIGlkKVxuICAgIHtcbiAgICAgICAgY29uc3QgZGlzcGxheVZhbHVlID0gdmlzaWJsZSA/ICdncmlkJyA6ICdub25lJztcbiAgICAgICAgdGhpcy5nZXRCeUlEKGlkKS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVZhbHVlO1xuICAgIH1cblxuICAgIGdldEFkZFRhc2tGb3JtRWxlbWVudFZhbHVlQnlOYW1lKGVsZW1lbnROYW1lKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnlJRChcImFkZFRhc2tGb3JtXCIpLmVsZW1lbnRzW2VsZW1lbnROYW1lXS52YWx1ZTtcbiAgICB9XG5cbiAgICBnZXRBZGRQcm9qZWN0Rm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShlbGVtZW50TmFtZSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ5SUQoXCJhZGRQcm9qZWN0Rm9ybVwiKS5lbGVtZW50c1tlbGVtZW50TmFtZV0udmFsdWU7XG4gICAgfVxuXG4gICAgcmVzZXRBbmRDbG9zZUZvcm1CeUlEKGZvcm1JRCxmb3JtQ29udGFpbmVySUQpXG4gICAge1xuICAgICAgICB0aGlzLmdldEJ5SUQoZm9ybUlEKS5yZXNldCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZUFkZFRhc2tGb3JtVmlzaWJpbGl0eShmYWxzZSxmb3JtQ29udGFpbmVySUQpO1xuICAgIH1cbiAgICBhcHBlbmRUb2RvSXRlbShpdGVtKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IHRlbXBsYXRlIG1hcmt1cCBhbmQgY2xvbmUgZWxlbWVudCAoZGVlcCBjb3B5KVxuICAgICAgICBsZXQgdGVtcGxhdGVDb250ZW50ID0gdGhpcy5nZXRCeUlEKFwidG9kb0l0ZW1UZW1wbGF0ZVwiKS5jb250ZW50O1xuICAgICAgICBsZXQgdG9kb0l0ZW1EaXZFbGVtZW50Q2xvbmUgPSB0ZW1wbGF0ZUNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XG4gICAgICAgIGxldCB0b2RvSXRlbVZpZXcgPSBuZXcgVG9kb0l0ZW1WaWV3KHRvZG9JdGVtRGl2RWxlbWVudENsb25lLCBpdGVtKTtcblxuICAgICAgICAvLyB0aGVuIGluc2VydCBjbG9uZWQgbWFya3VwIGFzIG5ldyBjaGlsZCBvZiB0b2RvIHRhc2tzIGNvbnRhaW5lclxuICAgICAgICB0aGlzLmdldEJ5SUQoXCJkaXNwbGF5VG9kb1Rhc2tzQ29udGFpbmVyXCIpLmFwcGVuZCh0b2RvSXRlbVZpZXcuZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRvZG9JdGVtVmlldztcbiAgICB9XG4gICAgYXBwZW5kUHJvamVjdChpdGVtKVxuICAgIHtcbiAgICAgICAgLy8gUHJvamVjdCBpbiBzaWRlYmFyXG4gICAgICAgIGxldCB0ZW1wbGF0ZUNvbnRlbnQgPSB0aGlzLmdldEJ5SUQoXCJwcm9qZWN0VGVtcGxhdGVcIikuY29udGVudDtcbiAgICAgICAgbGV0IHByb2plY3REaXZFbGVtZW50Q2xvbmUgPSB0ZW1wbGF0ZUNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XG4gICAgICAgIGxldCBwcm9qZWN0VmlldyA9IG5ldyBQcm9qZWN0Vmlldyhwcm9qZWN0RGl2RWxlbWVudENsb25lLCBpdGVtKTtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwicHJvamVjdE9wdGlvbnNcIikuYXBwZW5kKHByb2plY3RWaWV3LmVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFByb2plY3QgaW4gQWRkVGFza0Zvcm1cbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBpdGVtLm5hbWU7XG4gICAgICAgIG9wdGlvbi5pZCA9IGBjaGVja2JveC0ke2l0ZW0uaWR9YDtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwidGFza1Byb2plY3RcIikuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdFZpZXc7XG4gICAgfVxuICAgIGZpbGxBZGRGb3JtV2hlbkVkaXQodG9kb0l0ZW1WaWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiYWRkVGFza0Zvcm1cIikuZWxlbWVudHNbXCJ0YXNrTmFtZVwiXS52YWx1ZSA9IHRvZG9JdGVtVmlldy5tb2RlbC5uYW1lO1xuICAgICAgICB0aGlzLmdldEJ5SUQoXCJhZGRUYXNrRm9ybVwiKS5lbGVtZW50c1tcInRhc2tEZXNjcmlwdGlvblwiXS52YWx1ZSA9IHRvZG9JdGVtVmlldy5tb2RlbC5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiYWRkVGFza0Zvcm1cIikuZWxlbWVudHNbXCJ0YXNrRHVlRGF0ZVwiXS52YWx1ZSA9IHRvZG9JdGVtVmlldy5tb2RlbC5kdWVEYXRlO1xuICAgICAgICB0aGlzLmdldEJ5SUQoXCJhZGRUYXNrRm9ybVwiKS5lbGVtZW50c1tcInRhc2tQcm9qZWN0XCJdLnZhbHVlID0gdG9kb0l0ZW1WaWV3Lm1vZGVsLnByb2plY3Q7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChcImFkZFRhc2tGb3JtXCIpLmVsZW1lbnRzW1widGFza1ByaW9yaXR5XCJdLnZhbHVlID0gdG9kb0l0ZW1WaWV3Lm1vZGVsLnByaW9yaXR5O1xuICAgIH1cbiAgICB1cGRhdGVUb2RvSXRlbShlbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IHRvZG9JdGVtVG9VcGRhdGUgPSB0aGlzLmdldEJ5SUQoZWxlbWVudC5pZCk7XG4gICAgICAgIG5ldyBUb2RvSXRlbVZpZXcodG9kb0l0ZW1Ub1VwZGF0ZSxlbGVtZW50Lm1vZGVsKTtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RWaWV3XG57XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJvamVjdE1vZGVsKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHByb2plY3RNb2RlbDtcblxuICAgICAgICB0aGlzLmlkID0gcHJvamVjdE1vZGVsLmlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9qZWN0TW9kZWwubmFtZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdE5hbWVQKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInBcIik7XG4gICAgfVxuICAgIFxuICAgIGdldCBpZCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgIH1cblxuICAgIGdldCBkZWxldGVCdXR0b24oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmRlbGV0ZVByb2plY3RCdXR0b25cIik7XG4gICAgfVxuXG5cbiAgICBzZXQgaWQodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgdmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICBzZXQgbmFtZSh2YWx1ZSlcbiAgICB7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVQLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuICAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtVmlld1xue1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRvZG9JdGVtTW9kZWwpXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm1vZGVsID0gdG9kb0l0ZW1Nb2RlbDtcblxuICAgICAgICB0aGlzLmlkID0gdG9kb0l0ZW1Nb2RlbC5pZDtcbiAgICAgICAgdGhpcy5uYW1lID0gdG9kb0l0ZW1Nb2RlbC5uYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdG9kb0l0ZW1Nb2RlbC5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWUgPSB0b2RvSXRlbU1vZGVsLmR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHRvZG9JdGVtTW9kZWwucHJvamVjdDtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHRvZG9JdGVtTW9kZWwucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0IGNoZWNrYm94KClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9Y2hlY2tUYXNrXVwiKTtcbiAgICB9XG4gICAgZ2V0IGNoZWNrYm94TGFiZWwoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwibGFiZWxbbmFtZT1jaGVja0JveExhYmVsXVwiKTtcbiAgICB9XG4gICAgZ2V0IHRhc2tOYW1lSDEoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvblBhcmFncmFwaCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwLmRlc2NcIik7XG4gICAgfVxuICAgIGdldCBkdWVQYXJhZ3JhcGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicC5kdWVcIik7XG4gICAgfVxuICAgIGdldCBwcm9qZWN0UGFyYWdyYXBoKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInAucHJvamVjdFwiKTtcbiAgICB9XG4gICAgZ2V0IGRlbGV0ZUJ1dHRvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uZGVsZXRlQnV0dG9uXCIpO1xuICAgIH1cblxuICAgIGdldCBlZGl0QnV0dG9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5lZGl0QnV0dG9uXCIpO1xuICAgIH1cblxuICAgIGdldCBpZCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgIH1cbiAgICBzZXQgaWQodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgdmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQm94SWQgPSBgY2hlY2tib3gtJHt2YWx1ZX1gO1xuICAgICAgICB0aGlzLmNoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGNoZWNrQm94SWQpO1xuICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGNoZWNrQm94SWQpO1xuICAgIH1cbiAgICBzZXQgbmFtZSh2YWx1ZSlcbiAgICB7XG4gICAgICAgIHRoaXMudGFza05hbWVIMS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uUGFyYWdyYXBoLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuICAgIHNldCBkdWUodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLmR1ZVBhcmFncmFwaC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXQgcHJvamVjdCh2YWx1ZSlcbiAgICB7XG4gICAgICAgIHRoaXMucHJvamVjdFBhcmFncmFwaC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpXG4gICAge1xuICAgICAgICBzd2l0Y2godmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgXCJsb3dQcmlvcml0eVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3hMYWJlbC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibHVlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkaXVtUHJpb3JpdHlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgI2YyZjIyMVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhpZ2hQcmlvcml0eVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3hMYWJlbC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveExhYmVsLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJnYig4MCwgODAsIDgwKVwiO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcyc7XG5cbmltcG9ydCBNYWluTW9kZWwgZnJvbSAnLi9tb2RlbHMvbWFpbk1vZGVsJztcbmltcG9ydCBNYWluVmlldyBmcm9tICcuL3ZpZXdzL21haW5WaWV3JztcbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL21haW5Db250cm9sbGVyJztcblxuLy8gd2lyaW5nIHVwIG1vZGVsLCB2aWV3cywgYW5kIGNvbnRyb2xsZXJzXG5jb25zdCBtb2RlbCA9IG5ldyBNYWluTW9kZWwoKTtcbmNvbnN0IHZpZXcgPSBuZXcgTWFpblZpZXcoKTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIobW9kZWwsIHZpZXcpOyAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=