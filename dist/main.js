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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Cocogoose';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-style: normal;\n} \n  \n*{\n    margin:0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton:hover{\n    transform: scale(1.08);\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n#container {\n    display: grid;\n    grid: 10vh 1fr / clamp(13rem, 18%, 20rem) 1fr;\n    min-height: 100vh;\n}\n\n/* HEADER */\n#header {\n    grid-column: 1/3;\n    background-color: #89d8d3b9;\n    background-image: linear-gradient(315deg, #89d8d3bd 0%, #03c8a7b4 74%);\n    display: flex;\n    padding: 1rem;\n    justify-content: space-between;\n    align-content: center;\n    color: #fffcff;\n}\n\n#header p {\n    font-family: 'Cocogoose';\n    font-size: clamp(1rem, 1.5vw, 3rem);\n    display: flex;\n    align-items: center;\n}\n\n#header button{\n    display: flex;\n    align-items: center;\n    gap: 0.1vw;\n    font-weight: 600;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n}\n\n#header button img{\n    width: clamp(1rem, 2.3vw, 3rem);\n}\n\n/* SIDERBAR */\n#sidebar{\n    background-color: #e1e1e17c;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5vh;\n    padding: 1rem;\n}\n\n#sidebar button{\n    display: flex;\n    align-items: center;\n    gap: 0.5vw;\n    font-weight: 400;\n    font-size: clamp(1rem, 1vw, 4rem);\n}\n\n#sidebar button img{\n    width: clamp(1rem, 1.25vw, 2rem);\n}\n\n#priorityOptions h1, #projectOptions p {\n    font-size: clamp(1rem, 1vw, 4rem);\n    font-weight: 200;\n}\n\n.projectContainer{\n    display: flex;\n    justify-content: space-between;\n}\n\n.projectContainer button img{\n    width: clamp(0.8rem, 1vw, 1.8rem);\n}\n\n#priorityOptions, #projectOptions{\n    padding-left: 1rem;\n}\n\n#addProjectButton{\n    opacity: 0.5;\n}\n\n/* ADD TASK FORM */\n#addTaskFormContainer, #addProjectFormContainer {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n\n.form-container{\n    width:50vw;\n    background:#e1e1e1;\n    border-radius:8px;\n    box-shadow: 4px 4px 5px 0px #000000af;\n    padding: 2vh 2vw;\n}\n  \n.rowContainer{\n    display: flex;\n    gap: 1rem;\n}\n  \n.form-buttons{\n    display: flex;\n    justify-content: end;\n    gap: 1rem;\n}\n  \n.inputContent{\n    display:flex;\n    flex-direction:column;\n    margin-top: 2vh;\n}\n  \n.form-container label{\n    font-family: 'Montserrat', monospace;\n    font-weight: 625;\n    letter-spacing: .02rem;\n    font-size: clamp(0.8rem, 1vw, 3rem)\n}\n  \n.form-container h2{\n    margin:0.5vh 0;\n    padding-bottom:0.25vh;\n    width:10vw;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n    color:#78788c;\n    border-bottom:3px solid #78788c;\n}\n  \n.form-container input, .form-container textarea, .form-container select {\n    width:100%;\n    padding:0.9vh;\n    box-sizing:border-box;\n    background:none;\n    outline:none;\n    resize:none;\n    border:0;\n    font-family:'Montserrat',sans-serif;\n    transition:all .3s;\n    border-bottom:2px solid #bebed2;\n}\n  \n.form-container input:focus, .form-container textarea:focus, .form-container select:focus{\n    border-bottom:2px solid #78788c\n}\n  \n.form-container button{\n    padding:0.5vh 0.5vw;\n    margin:1vh 0 0;\n    font-family:'Montserrat',sans-serif;\n    border:2px solid #78788c;\n    background:0;\n    color:#5a5a6e;\n    cursor:pointer;\n    transition:all .3s;\n    font-size: clamp(0.8rem, 1vw, 2rem);\n}\n  \n.form-container button:hover{\n    background:#78788c;\n    color:#fff\n}\n\n\n/* MAIN CONTENT - display Todo Items */\n#mainContent{\n    background-color: #d5fefd;\n    background-image: linear-gradient(0deg, #d5fefd 0%, #fffcff 74%);\n}\n\n#todoContainer{\n    padding: 35px 55px;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n.todoTask {\n    display: grid;\n    grid: 1fr 1fr 1fr / 2.5rem fit-content(300px) fit-content(300px) 1fr 20px 20px;\n    margin-top: 3vh;\n    border-bottom:1px solid #78788c;\n}\n\n.checkboxContainer {\n    position: relative;\n    grid-row: 1/4;\n}\n  \n.checkboxContainer label {\n    background-color: #fff;\n    border-radius: 50%;\n    cursor: pointer;\n    width: clamp(1.5rem,max(2vh,2vw),2rem);\n    height: clamp(1.5rem,max(2vh,2vw),2rem);\n    left: 0;\n    position: absolute;\n    top: 0;\n}\n  \n.checkboxContainer label:after {\n    border: 2.5px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.67);\n    left: calc(clamp(1.5rem,max(2vh,2vw),2rem)/5);\n    opacity: 0;\n    position: absolute;\n    top: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.5);;\n    transform: rotate(-45deg);\n    width: calc(clamp(1.5rem,max(2vh,2vw),2rem)/2.33);\n}\n  \n.checkboxContainer input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label {\n    background-color: #bdbaba;\n    border-color: #fefffe;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n}\n\n.onCheckbox{\n    opacity: 0.5;\n    text-decoration: line-through;\n}\n\n.todoTask h1{\n    grid-column: 2/7;\n    font-size: min(3vmin, 1.3rem)\n}\n\n.todoTask p:first-of-type{\n    grid-column: 2/7;\n}\n\n.todoTask p{\n    font-size: min(2.5vmin, 0.8rem);\n    margin-right: 10px;\n}\n\n.todoTask p:nth-of-type(2):before {\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask p:nth-of-type(3):before {\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask button:first-of-type {\n    grid-column: 5/6;\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n.todoTask button:nth-of-type(2) {\n    grid-column: 6/7;\n    content: \"\";\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n\n@media (max-width: 768px) {\n    #sidebar {\n        display: none;\n    }\n    #mainContent{\n        grid-column: 1/3;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Cocogoose';\n    src: url('../fonts/Cocogoose.ttf') format('truetype');\n    font-style: normal;\n} \n  \n*{\n    margin:0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton:hover{\n    transform: scale(1.08);\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n#container {\n    display: grid;\n    grid: 10vh 1fr / clamp(13rem, 18%, 20rem) 1fr;\n    min-height: 100vh;\n}\n\n/* HEADER */\n#header {\n    grid-column: 1/3;\n    background-color: #89d8d3b9;\n    background-image: linear-gradient(315deg, #89d8d3bd 0%, #03c8a7b4 74%);\n    display: flex;\n    padding: 1rem;\n    justify-content: space-between;\n    align-content: center;\n    color: #fffcff;\n}\n\n#header p {\n    font-family: 'Cocogoose';\n    font-size: clamp(1rem, 1.5vw, 3rem);\n    display: flex;\n    align-items: center;\n}\n\n#header button{\n    display: flex;\n    align-items: center;\n    gap: 0.1vw;\n    font-weight: 600;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n}\n\n#header button img{\n    width: clamp(1rem, 2.3vw, 3rem);\n}\n\n/* SIDERBAR */\n#sidebar{\n    background-color: #e1e1e17c;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5vh;\n    padding: 1rem;\n}\n\n#sidebar button{\n    display: flex;\n    align-items: center;\n    gap: 0.5vw;\n    font-weight: 400;\n    font-size: clamp(1rem, 1vw, 4rem);\n}\n\n#sidebar button img{\n    width: clamp(1rem, 1.25vw, 2rem);\n}\n\n#priorityOptions h1, #projectOptions p {\n    font-size: clamp(1rem, 1vw, 4rem);\n    font-weight: 200;\n}\n\n.projectContainer{\n    display: flex;\n    justify-content: space-between;\n}\n\n.projectContainer button img{\n    width: clamp(0.8rem, 1vw, 1.8rem);\n}\n\n#priorityOptions, #projectOptions{\n    padding-left: 1rem;\n}\n\n#addProjectButton{\n    opacity: 0.5;\n}\n\n/* ADD TASK FORM */\n#addTaskFormContainer, #addProjectFormContainer {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n\n.form-container{\n    width:50vw;\n    background:#e1e1e1;\n    border-radius:8px;\n    box-shadow: 4px 4px 5px 0px #000000af;\n    padding: 2vh 2vw;\n}\n  \n.rowContainer{\n    display: flex;\n    gap: 1rem;\n}\n  \n.form-buttons{\n    display: flex;\n    justify-content: end;\n    gap: 1rem;\n}\n  \n.inputContent{\n    display:flex;\n    flex-direction:column;\n    margin-top: 2vh;\n}\n  \n.form-container label{\n    font-family: 'Montserrat', monospace;\n    font-weight: 625;\n    letter-spacing: .02rem;\n    font-size: clamp(0.8rem, 1vw, 3rem)\n}\n  \n.form-container h2{\n    margin:0.5vh 0;\n    padding-bottom:0.25vh;\n    width:10vw;\n    font-size: clamp(1rem, 1.3vw, 4rem);\n    color:#78788c;\n    border-bottom:3px solid #78788c;\n}\n  \n.form-container input, .form-container textarea, .form-container select {\n    width:100%;\n    padding:0.9vh;\n    box-sizing:border-box;\n    background:none;\n    outline:none;\n    resize:none;\n    border:0;\n    font-family:'Montserrat',sans-serif;\n    transition:all .3s;\n    border-bottom:2px solid #bebed2;\n}\n  \n.form-container input:focus, .form-container textarea:focus, .form-container select:focus{\n    border-bottom:2px solid #78788c\n}\n  \n.form-container button{\n    padding:0.5vh 0.5vw;\n    margin:1vh 0 0;\n    font-family:'Montserrat',sans-serif;\n    border:2px solid #78788c;\n    background:0;\n    color:#5a5a6e;\n    cursor:pointer;\n    transition:all .3s;\n    font-size: clamp(0.8rem, 1vw, 2rem);\n}\n  \n.form-container button:hover{\n    background:#78788c;\n    color:#fff\n}\n\n\n/* MAIN CONTENT - display Todo Items */\n#mainContent{\n    background-color: #d5fefd;\n    background-image: linear-gradient(0deg, #d5fefd 0%, #fffcff 74%);\n}\n\n#todoContainer{\n    padding: 35px 55px;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n.todoTask {\n    display: grid;\n    grid: 1fr 1fr 1fr / 2.5rem fit-content(300px) fit-content(300px) 1fr 20px 20px;\n    margin-top: 3vh;\n    border-bottom:1px solid #78788c;\n}\n\n.checkboxContainer {\n    position: relative;\n    grid-row: 1/4;\n}\n  \n.checkboxContainer label {\n    background-color: #fff;\n    border-radius: 50%;\n    cursor: pointer;\n    width: clamp(1.5rem,max(2vh,2vw),2rem);\n    height: clamp(1.5rem,max(2vh,2vw),2rem);\n    left: 0;\n    position: absolute;\n    top: 0;\n}\n  \n.checkboxContainer label:after {\n    border: 2.5px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.67);\n    left: calc(clamp(1.5rem,max(2vh,2vw),2rem)/5);\n    opacity: 0;\n    position: absolute;\n    top: calc(clamp(1.5rem,max(2vh,2vw),2rem)/4.5);;\n    transform: rotate(-45deg);\n    width: calc(clamp(1.5rem,max(2vh,2vw),2rem)/2.33);\n}\n  \n.checkboxContainer input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label {\n    background-color: #bdbaba;\n    border-color: #fefffe;\n}\n  \n.checkboxContainer input[type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n}\n\n.onCheckbox{\n    opacity: 0.5;\n    text-decoration: line-through;\n}\n\n.todoTask h1{\n    grid-column: 2/7;\n    font-size: min(3vmin, 1.3rem)\n}\n\n.todoTask p:first-of-type{\n    grid-column: 2/7;\n}\n\n.todoTask p{\n    font-size: min(2.5vmin, 0.8rem);\n    margin-right: 10px;\n}\n\n.todoTask p:nth-of-type(2):before {\n    content: \"\";\n    display: block;\n    background: url(\"../images/calendar.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask p:nth-of-type(3):before {\n    content: \"\";\n    display: block;\n    background: url(\"../images/folder.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n}\n\n.todoTask button:first-of-type {\n    grid-column: 5/6;\n    content: \"\";\n    display: block;\n    background: url(\"../images/edit.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n.todoTask button:nth-of-type(2) {\n    grid-column: 6/7;\n    content: \"\";\n    display: block;\n    background: url(\"../images/delete.svg\") no-repeat;\n    width: 15px;\n    height: 15px;\n    float: left;\n    margin: 0 6px 0 0;\n    opacity: 0.6;\n}\n\n\n@media (max-width: 768px) {\n    #sidebar {\n        display: none;\n    }\n    #mainContent{\n        grid-column: 1/3;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFZOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9EQUFXO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFZO0FBQ3hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0VlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCOztBQUVlO0FBQ0g7QUFDa0I7O0FBRTFEO0FBQ0Esa0JBQWtCLHlEQUFTO0FBQzNCLGlCQUFpQix1REFBUTtBQUN6Qix1QkFBdUIsbUVBQWMsZSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvY29udHJvbGxlcnMvbWFpbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL21vZGVscy9tYWluTW9kZWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL21vZGVscy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9tb2RlbHMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL21vZGVscy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvdmlld3MvbWFpblZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3ZpZXdzL3Byb2plY3RWaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy92aWV3cy90b2RvSXRlbVZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0NvY29nb29zZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2FsZW5kYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2ZvbGRlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb2NvZ29vc2UnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG4gIFxcbip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMTB2aCAxZnIgLyBjbGFtcCgxM3JlbSwgMTglLCAyMHJlbSkgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWQ4ZDNiOTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzg5ZDhkM2JkIDAlLCAjMDNjOGE3YjQgNzQlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmY2ZmO1xcbn1cXG5cXG4jaGVhZGVyIHAge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41dncsIDNyZW0pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjF2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjN2dywgNHJlbSk7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDIuM3Z3LCAzcmVtKTtcXG59XFxuXFxuLyogU0lERVJCQVIgKi9cXG4jc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTdjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuNXZoO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCA0cmVtKTtcXG59XFxuXFxuI3NpZGViYXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMgaDEsICNwcm9qZWN0T3B0aW9ucyBwIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDRyZW0pO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogY2xhbXAoMC44cmVtLCAxdncsIDEuOHJlbSk7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMsICNwcm9qZWN0T3B0aW9uc3tcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbntcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBBREQgVEFTSyBGT1JNICovXFxuI2FkZFRhc2tGb3JtQ29udGFpbmVyLCAjYWRkUHJvamVjdEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIHdpZHRoOjUwdnc7XFxuICAgIGJhY2tncm91bmQ6I2UxZTFlMTtcXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNXB4IDBweCAjMDAwMDAwYWY7XFxuICAgIHBhZGRpbmc6IDJ2aCAydnc7XFxufVxcbiAgXFxuLnJvd0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4gIFxcbi5mb3JtLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbiAgXFxuLmlucHV0Q29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgbGFiZWx7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYyNTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMnJlbTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDF2dywgM3JlbSlcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgaDJ7XFxuICAgIG1hcmdpbjowLjV2aCAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTowLjI1dmg7XFxuICAgIHdpZHRoOjEwdnc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4zdncsIDRyZW0pO1xcbiAgICBjb2xvcjojNzg3ODhjO1xcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCAjNzg3ODhjO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dCwgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhLCAuZm9ybS1jb250YWluZXIgc2VsZWN0IHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgcGFkZGluZzowLjl2aDtcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIG91dGxpbmU6bm9uZTtcXG4gICAgcmVzaXplOm5vbmU7XFxuICAgIGJvcmRlcjowO1xcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjphbGwgLjNzO1xcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjYmViZWQyO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cywgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhOmZvY3VzLCAuZm9ybS1jb250YWluZXIgc2VsZWN0OmZvY3Vze1xcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjNzg3ODhjXFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbntcXG4gICAgcGFkZGluZzowLjV2aCAwLjV2dztcXG4gICAgbWFyZ2luOjF2aCAwIDA7XFxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JyxzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6MnB4IHNvbGlkICM3ODc4OGM7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgY29sb3I6IzVhNWE2ZTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246YWxsIC4zcztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDF2dywgMnJlbSk7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDojNzg3ODhjO1xcbiAgICBjb2xvcjojZmZmXFxufVxcblxcblxcbi8qIE1BSU4gQ09OVEVOVCAtIGRpc3BsYXkgVG9kbyBJdGVtcyAqL1xcbiNtYWluQ29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZmVmZDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNkNWZlZmQgMCUsICNmZmZjZmYgNzQlKTtcXG59XFxuXFxuI3RvZG9Db250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDM1cHggNTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50b2RvVGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAxZnIgMWZyIC8gMi41cmVtIGZpdC1jb250ZW50KDMwMHB4KSBmaXQtY29udGVudCgzMDBweCkgMWZyIDIwcHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNzg3ODhjO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtcm93OiAxLzQ7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBsYWJlbDphZnRlciB7XFxuICAgIGJvcmRlcjogMi41cHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNC42Nyk7XFxuICAgIGxlZnQ6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS81KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS80LjUpOztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS8yLjMzKTtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiYWJhO1xcbiAgICBib3JkZXItY29sb3I6ICNmZWZmZmU7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm9uQ2hlY2tib3h7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvVGFzayBoMXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNztcXG4gICAgZm9udC1zaXplOiBtaW4oM3ZtaW4sIDEuM3JlbSlcXG59XFxuXFxuLnRvZG9UYXNrIHA6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNztcXG59XFxuXFxuLnRvZG9UYXNrIHB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDIuNXZtaW4sIDAuOHJlbSk7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvZG9UYXNrIHA6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbn1cXG5cXG4udG9kb1Rhc2sgcDpudGgtb2YtdHlwZSgzKTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxufVxcblxcbi50b2RvVGFzayBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4udG9kb1Rhc2sgYnV0dG9uOm50aC1vZi10eXBlKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDYvNztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgICNtYWluQ29udGVudHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBcUQ7SUFDckQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxpQkFBaUI7QUFDckI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixzRUFBc0U7SUFDdEUsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBLGFBQWE7QUFDYjtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVB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QUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9Db2NvZ29vc2UudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufSBcXG4gIFxcbip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMTB2aCAxZnIgLyBjbGFtcCgxM3JlbSwgMTglLCAyMHJlbSkgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWQ4ZDNiOTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzg5ZDhkM2JkIDAlLCAjMDNjOGE3YjQgNzQlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmY2ZmO1xcbn1cXG5cXG4jaGVhZGVyIHAge1xcbiAgICBmb250LWZhbWlseTogJ0NvY29nb29zZSc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41dncsIDNyZW0pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjF2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjN2dywgNHJlbSk7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDIuM3Z3LCAzcmVtKTtcXG59XFxuXFxuLyogU0lERVJCQVIgKi9cXG4jc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTdjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuNXZoO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCA0cmVtKTtcXG59XFxuXFxuI3NpZGViYXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMgaDEsICNwcm9qZWN0T3B0aW9ucyBwIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDRyZW0pO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogY2xhbXAoMC44cmVtLCAxdncsIDEuOHJlbSk7XFxufVxcblxcbiNwcmlvcml0eU9wdGlvbnMsICNwcm9qZWN0T3B0aW9uc3tcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbntcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBBREQgVEFTSyBGT1JNICovXFxuI2FkZFRhc2tGb3JtQ29udGFpbmVyLCAjYWRkUHJvamVjdEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIHdpZHRoOjUwdnc7XFxuICAgIGJhY2tncm91bmQ6I2UxZTFlMTtcXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNXB4IDBweCAjMDAwMDAwYWY7XFxuICAgIHBhZGRpbmc6IDJ2aCAydnc7XFxufVxcbiAgXFxuLnJvd0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4gIFxcbi5mb3JtLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbiAgXFxuLmlucHV0Q29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgbGFiZWx7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYyNTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMnJlbTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDF2dywgM3JlbSlcXG59XFxuICBcXG4uZm9ybS1jb250YWluZXIgaDJ7XFxuICAgIG1hcmdpbjowLjV2aCAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTowLjI1dmg7XFxuICAgIHdpZHRoOjEwdnc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4zdncsIDRyZW0pO1xcbiAgICBjb2xvcjojNzg3ODhjO1xcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCAjNzg3ODhjO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dCwgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhLCAuZm9ybS1jb250YWluZXIgc2VsZWN0IHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgcGFkZGluZzowLjl2aDtcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIG91dGxpbmU6bm9uZTtcXG4gICAgcmVzaXplOm5vbmU7XFxuICAgIGJvcmRlcjowO1xcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjphbGwgLjNzO1xcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjYmViZWQyO1xcbn1cXG4gIFxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cywgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhOmZvY3VzLCAuZm9ybS1jb250YWluZXIgc2VsZWN0OmZvY3Vze1xcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjNzg3ODhjXFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbntcXG4gICAgcGFkZGluZzowLjV2aCAwLjV2dztcXG4gICAgbWFyZ2luOjF2aCAwIDA7XFxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JyxzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6MnB4IHNvbGlkICM3ODc4OGM7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgY29sb3I6IzVhNWE2ZTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246YWxsIC4zcztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDF2dywgMnJlbSk7XFxufVxcbiAgXFxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDojNzg3ODhjO1xcbiAgICBjb2xvcjojZmZmXFxufVxcblxcblxcbi8qIE1BSU4gQ09OVEVOVCAtIGRpc3BsYXkgVG9kbyBJdGVtcyAqL1xcbiNtYWluQ29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZmVmZDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNkNWZlZmQgMCUsICNmZmZjZmYgNzQlKTtcXG59XFxuXFxuI3RvZG9Db250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDM1cHggNTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50b2RvVGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAxZnIgMWZyIC8gMi41cmVtIGZpdC1jb250ZW50KDMwMHB4KSBmaXQtY29udGVudCgzMDBweCkgMWZyIDIwcHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNzg3ODhjO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtcm93OiAxLzQ7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBjbGFtcCgxLjVyZW0sbWF4KDJ2aCwydncpLDJyZW0pO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG4gIFxcbi5jaGVja2JveENvbnRhaW5lciBsYWJlbDphZnRlciB7XFxuICAgIGJvcmRlcjogMi41cHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiBjYWxjKGNsYW1wKDEuNXJlbSxtYXgoMnZoLDJ2dyksMnJlbSkvNC42Nyk7XFxuICAgIGxlZnQ6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS81KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS80LjUpOztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IGNhbGMoY2xhbXAoMS41cmVtLG1heCgydmgsMnZ3KSwycmVtKS8yLjMzKTtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuICBcXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiYWJhO1xcbiAgICBib3JkZXItY29sb3I6ICNmZWZmZmU7XFxufVxcbiAgXFxuLmNoZWNrYm94Q29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm9uQ2hlY2tib3h7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvVGFzayBoMXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNztcXG4gICAgZm9udC1zaXplOiBtaW4oM3ZtaW4sIDEuM3JlbSlcXG59XFxuXFxuLnRvZG9UYXNrIHA6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNztcXG59XFxuXFxuLnRvZG9UYXNrIHB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDIuNXZtaW4sIDAuOHJlbSk7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvZG9UYXNrIHA6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2ltYWdlcy9jYWxlbmRhci5zdmdcXFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG59XFxuXFxuLnRvZG9UYXNrIHA6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2ltYWdlcy9mb2xkZXIuc3ZnXFxcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxufVxcblxcbi50b2RvVGFzayBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWFnZXMvZWRpdC5zdmdcXFwiKSBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4udG9kb1Rhc2sgYnV0dG9uOm50aC1vZi10eXBlKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDYvNztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2ltYWdlcy9kZWxldGUuc3ZnXFxcIikgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICNzaWRlYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgI21haW5Db250ZW50e1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkNvbnRyb2xsZXJcbntcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldylcbiAgICB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5vbkVkaXRUb2RvSXRlbSA9IHtzdGF0dXM6IFwiZmFsc2VcIiwgZWxlbWVudDogXCJcIn07XG5cbiAgICAgICAgdmlldy5nZXRCeUlEKFwiYWRkVGFza0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdmlldy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkodHJ1ZSxcImFkZFRhc2tGb3JtQ29udGFpbmVyXCIpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwiY2xvc2VBZGRUYXNrQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2aWV3LnJlc2V0QW5kQ2xvc2VGb3JtQnlJRChcImFkZFRhc2tGb3JtXCIsXCJhZGRUYXNrRm9ybUNvbnRhaW5lclwiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImFkZFRhc2tGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHRoaXMub25BZGRUYXNrRm9ybVN1Ym1pdChlKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcInByaW9yaXR5QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dPckhpZGUoXCJwcmlvcml0eUltZ1wiLFwicHJpb3JpdHlPcHRpb25zXCIpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwicHJvamVjdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93T3JIaWRlKFwicHJvamVjdEltZ1wiLFwicHJvamVjdE9wdGlvbnNcIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJhZGRQcm9qZWN0QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2aWV3LnRvZ2dsZUFkZFRhc2tGb3JtVmlzaWJpbGl0eSh0cnVlLFwiYWRkUHJvamVjdEZvcm1Db250YWluZXJcIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJjbG9zZUFkZFByb2plY3RCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHZpZXcucmVzZXRBbmRDbG9zZUZvcm1CeUlEKFwiYWRkUHJvamVjdEZvcm1cIixcImFkZFByb2plY3RGb3JtQ29udGFpbmVyXCIpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwiYWRkUHJvamVjdEZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gdGhpcy5vbkFkZFByb2plY3RGb3JtU3VibWl0KGUpKTtcbiAgICAgICAgdmlldy5nZXRCeUlEKFwiaW5ib3hcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuZmlsdGVyQnlQcm9qZWN0KFwiSW5ib3hcIikpO1xuICAgICAgICB2aWV3LmdldEJ5SUQoXCJub1ByaW9yaXR5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmZpbHRlckJ5UHJpb3JpdHkoXCJub1ByaW9yaXR5XCIsIFwiTm9uZVwiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImxvd1ByaW9yaXR5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmZpbHRlckJ5UHJpb3JpdHkoXCJsb3dQcmlvcml0eVwiLCBcIkxvd1wiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcIm1lZGl1bVByaW9yaXR5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmZpbHRlckJ5UHJpb3JpdHkoXCJtZWRpdW1Qcmlvcml0eVwiLCBcIk1lZGl1bVwiKSk7XG4gICAgICAgIHZpZXcuZ2V0QnlJRChcImhpZ2hQcmlvcml0eVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5maWx0ZXJCeVByaW9yaXR5KFwiaGlnaFByaW9yaXR5XCIsIFwiSGlnaFwiKSk7XG4gICAgfVxuXG4gICAgb25BZGRUYXNrRm9ybVN1Ym1pdChlKVxuICAgIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMub25FZGl0VG9kb0l0ZW0uc3RhdHVzID09IHRydWUgPyB0aGlzLnVwZGF0ZVRvZG9JdGVtKCkgOiB0aGlzLmNyZWF0ZU5ld1RvZG9JdGVtKCk7XG4gICAgICAgIHRoaXMudmlldy5yZXNldEFuZENsb3NlRm9ybUJ5SUQoXCJhZGRUYXNrRm9ybVwiLFwiYWRkVGFza0Zvcm1Db250YWluZXJcIik7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3VG9kb0l0ZW0oKVxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3VG9kb0l0ZW0gPSB0aGlzLmNyZWF0ZU5ld1RvZG9JdGVtRnJvbUZvcm1JbnB1dHMoKTsgICAgICAgIFxuICAgICAgICB0aGlzLmFwcGVuZEFuZEhvb2tVcE5ld1RvZG9JdGVtRnJvbU1vZGVsKG5ld1RvZG9JdGVtKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUb2RvSXRlbSgpXG4gICAge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzRnJvbUZvcm1JbnB1dHMoKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9JdGVtID0gdGhpcy5tb2RlbC51cGRhdGVUb2RvSXRlbSh0aGlzLm9uRWRpdFRvZG9JdGVtLmVsZW1lbnQsZm9ybUVsZW1lbnRzLm5hbWUsIGZvcm1FbGVtZW50cy5kZXNjLCBmb3JtRWxlbWVudHMuZHVlRGF0ZSwgZm9ybUVsZW1lbnRzLnByb2plY3QsIGZvcm1FbGVtZW50cy5wcmlvcml0eSlcbiAgICAgICAgdGhpcy52aWV3LnVwZGF0ZVRvZG9JdGVtKHVwZGF0ZWRUb2RvSXRlbSk7XG4gICAgICAgIHRoaXMub25FZGl0VG9kb0l0ZW0uc3RhdHVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudHNGcm9tRm9ybUlucHV0cygpXG4gICAge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy52aWV3LmdldEFkZFRhc2tGb3JtRWxlbWVudFZhbHVlQnlOYW1lKFwidGFza05hbWVcIik7XG4gICAgICAgIGNvbnN0IGRlc2MgPSB0aGlzLnZpZXcuZ2V0QWRkVGFza0Zvcm1FbGVtZW50VmFsdWVCeU5hbWUoXCJ0YXNrRGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSB0aGlzLnZpZXcuZ2V0QWRkVGFza0Zvcm1FbGVtZW50VmFsdWVCeU5hbWUoXCJ0YXNrRHVlRGF0ZVwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMudmlldy5nZXRBZGRUYXNrRm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShcInRhc2tQcm9qZWN0XCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRoaXMudmlldy5nZXRBZGRUYXNrRm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShcInRhc2tQcmlvcml0eVwiKTtcblxuICAgICAgICByZXR1cm4ge25hbWUsIGRlc2MsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5fTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdUb2RvSXRlbUZyb21Gb3JtSW5wdXRzKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHNGcm9tRm9ybUlucHV0cygpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5jcmVhdGVBbmRBZGROZXdUb2RvSXRlbShmb3JtRWxlbWVudHMubmFtZSwgZm9ybUVsZW1lbnRzLmRlc2MsIGZvcm1FbGVtZW50cy5kdWVEYXRlLCBmb3JtRWxlbWVudHMucHJvamVjdCwgZm9ybUVsZW1lbnRzLnByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBhcHBlbmRBbmRIb29rVXBOZXdUb2RvSXRlbUZyb21Nb2RlbCh0b2RvSXRlbSlcbiAgICB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9JdGVtVmlldyA9IHRoaXMudmlldy5hcHBlbmRUb2RvSXRlbSh0b2RvSXRlbSk7XG5cbiAgICAgICAgLy8gaG9vayB1cCBldmVudCBoYW5kbGVycyBvZiBuZXcgdmlldyBlbGVtZW50XG4gICAgICAgIG5ld1RvZG9JdGVtVmlldy5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5kZWxldGVUb2RvSXRlbShuZXdUb2RvSXRlbVZpZXcpKTtcblxuICAgICAgICBuZXdUb2RvSXRlbVZpZXcuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmVkaXRUb2RvSXRlbShuZXdUb2RvSXRlbVZpZXcpKTtcblxuICAgICAgICBuZXdUb2RvSXRlbVZpZXcuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBcbiAgICAgICAgICAgICgpID0+IHRoaXMuY2hlY2tDaGVja2JveChuZXdUb2RvSXRlbVZpZXcpKTtcblxuICAgIH1cbiAgICBcbiAgICBkZWxldGVUb2RvSXRlbSh0b2RvSXRlbVZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLm1vZGVsLnJlbW92ZUl0ZW1CeUlkKHRvZG9JdGVtVmlldy5pZCk7XG4gICAgICAgIHRvZG9JdGVtVmlldy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGVkaXRUb2RvSXRlbSh0b2RvSXRlbVZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcudG9nZ2xlQWRkVGFza0Zvcm1WaXNpYmlsaXR5KHRydWUsXCJhZGRUYXNrRm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy52aWV3LmZpbGxBZGRGb3JtV2hlbkVkaXQodG9kb0l0ZW1WaWV3KTtcbiAgICAgICAgdGhpcy5vbkVkaXRUb2RvSXRlbS5zdGF0dXMgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRWRpdFRvZG9JdGVtLmVsZW1lbnQgPSB0b2RvSXRlbVZpZXc7XG4gICAgfVxuXG4gICAgY2hlY2tDaGVja2JveCh0b2RvSXRlbVZpZXcpXG4gICAgeyAgIFxuICAgICAgICBwYXJlbnQgPSB0aGlzLnZpZXcuZ2V0QnlJRChcImRpc3BsYXlUb2RvVGFza3NDb250YWluZXJcIik7XG4gICAgICAgIGlmICh0b2RvSXRlbVZpZXcuY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgdG9kb0l0ZW1WaWV3LmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm9uQ2hlY2tib3hcIik7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRvZG9JdGVtVmlldy5lbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb0l0ZW1WaWV3LmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm9uQ2hlY2tib3hcIik7XG4gICAgICAgICAgICBwYXJlbnQucHJlcGVuZCh0b2RvSXRlbVZpZXcuZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dPckhpZGUoaW1nSWQsIG9wdGlvbnNJZCkgXG4gICAge1xuICAgICAgICBpZiAodGhpcy52aWV3LmdldEJ5SUQob3B0aW9uc0lkKS5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIikgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5nZXRCeUlEKGltZ0lkKS5zcmMgPSBcIi4vaW1hZ2VzL2Rvd25hcnJvdy5zdmdcIjtcbiAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkoZmFsc2Usb3B0aW9uc0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ2V0QnlJRChpbWdJZCkuc3JjID0gXCIuL2ltYWdlcy9yaWdodGFycm93LnN2Z1wiO1xuICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZUFkZFRhc2tGb3JtVmlzaWJpbGl0eSh0cnVlLG9wdGlvbnNJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkZFByb2plY3RGb3JtU3VibWl0KGUpXG4gICAge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVOZXdQcm9qZWN0KCk7XG4gICAgICAgIHRoaXMudmlldy5yZXNldEFuZENsb3NlRm9ybUJ5SUQoXCJhZGRQcm9qZWN0Rm9ybVwiLFwiYWRkUHJvamVjdEZvcm1Db250YWluZXJcIik7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3UHJvamVjdCgpXG4gICAge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy52aWV3LmdldEFkZFByb2plY3RGb3JtRWxlbWVudFZhbHVlQnlOYW1lKFwicHJvamVjdE5hbWVcIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSB0aGlzLm1vZGVsLmNyZWF0ZU5ld1Byb2plY3QobmFtZSk7ICAgICAgICBcbiAgICAgICAgdGhpcy5hcHBlbmRBbmRIb29rVXBOZXdQcm9qZWN0RnJvbU1vZGVsKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGFwcGVuZEFuZEhvb2tVcE5ld1Byb2plY3RGcm9tTW9kZWwobmV3UHJvamVjdClcbiAgICB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RWaWV3ID0gdGhpcy52aWV3LmFwcGVuZFByb2plY3QobmV3UHJvamVjdCk7XG5cbiAgICAgICAgbmV3UHJvamVjdFZpZXcuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcbiAgICAgICAgICAgICgpID0+IHRoaXMuZGVsZXRlUHJvamVjdChuZXdQcm9qZWN0VmlldykpO1xuXG4gICAgICAgIG5ld1Byb2plY3RWaWV3LnByb2plY3ROYW1lUC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmZpbHRlckJ5UHJvamVjdChuZXdQcm9qZWN0Vmlldy5wcm9qZWN0TmFtZVAudGV4dENvbnRlbnQpKTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0VmlldylcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5nZXRCeUlEKGBjaGVja2JveC0ke3Byb2plY3RWaWV3LmVsZW1lbnQuaWR9YCkucmVtb3ZlKCk7XG4gICAgICAgIHByb2plY3RWaWV3LmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZmlsdGVyQnlQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgIHtcbiAgICAgICAgbGV0IHRvZG9MaXN0T2JqID0gdGhpcy5tb2RlbC5saXN0Lml0ZW1zQnlJZDtcblxuICAgICAgICBPYmplY3Qua2V5cyh0b2RvTGlzdE9iaikuZm9yRWFjaChrZXkgPT4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVmFsdWUgPSB0b2RvTGlzdE9ialtrZXldLnByb2plY3QgPT0gcHJvamVjdE5hbWUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZUZpbHRlclZpc2liaWxpdHkoc3RhdHVzVmFsdWUsa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnZpZXcuZ2V0QnlJRChcInRpdGxlTmFtZVwiKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGZpbHRlckJ5UHJpb3JpdHkocHJpb3JpdHksIHByaW9yaXR5TmFtZSlcbiAgICB7XG4gICAgICAgIGxldCB0b2RvTGlzdE9iaiA9IHRoaXMubW9kZWwubGlzdC5pdGVtc0J5SWQ7XG5cbiAgICAgICAgT2JqZWN0LmtleXModG9kb0xpc3RPYmopLmZvckVhY2goa2V5ID0+IFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1ZhbHVlID0gdG9kb0xpc3RPYmpba2V5XS5wcmlvcml0eSA9PSBwcmlvcml0eSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcudG9nZ2xlRmlsdGVyVmlzaWJpbGl0eShzdGF0dXNWYWx1ZSxrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudmlldy5nZXRCeUlEKFwidGl0bGVOYW1lXCIpLnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3ByaW9yaXR5TmFtZX1gO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QnO1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vdG9kb0l0ZW0nO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1vZGVsXG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IFRvZG9MaXN0KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQW5kQWRkTmV3VG9kb0l0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KVxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3VG9kb0l0ZW0gPSBuZXcgVG9kb0l0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KTtcbiAgICAgICAgdGhpcy5saXN0LmFkZChuZXdUb2RvSXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1RvZG9JdGVtO1xuICAgIH1cblxuICAgIHVwZGF0ZVRvZG9JdGVtKGVsZW1lbnQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSlcbiAgICB7XG4gICAgICAgIGVsZW1lbnQubW9kZWwubmFtZSA9IG5hbWU7XG4gICAgICAgIGVsZW1lbnQubW9kZWwuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgZWxlbWVudC5tb2RlbC5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgZWxlbWVudC5tb2RlbC5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgZWxlbWVudC5tb2RlbC5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJlbW92ZUl0ZW1CeUlkKGlkKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0LnJlbW92ZUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld1Byb2plY3QobmFtZSlcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKTtcbiAgICB9XG59ICIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0XG57XG4gIGNvbnN0cnVjdG9yKG5hbWUpXG4gIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcbiAgfVxufSAiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0l0ZW1cbntcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KVxuICB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlkID0gdXVpZHY0KCk7XG4gIH1cbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLml0ZW1zQnlJZCA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBhZGQobmV3SXRlbSlcbiAgICB7XG4gICAgICAgIHRoaXMuaXRlbXNCeUlkW25ld0l0ZW0uaWRdID0gbmV3SXRlbTtcbiAgICB9XG5cbiAgICBnZXQgaXRlbXMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5pdGVtc0J5SWQpO1xuICAgIH1cblxuICAgIGdldEl0ZW1CeUlEKGlkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNCeUlkW2lkXTtcbiAgICB9XG5cbiAgICByZW1vdmVCeUlkKGlkKVxuICAgIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuaXRlbXNCeUlkW2lkXTtcbiAgICB9XG59IiwiaW1wb3J0IFRvZG9JdGVtVmlldyBmcm9tIFwiLi90b2RvSXRlbVZpZXdcIjtcbmltcG9ydCBQcm9qZWN0VmlldyBmcm9tIFwiLi9wcm9qZWN0Vmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlld1xue1xuICAgIGdldEJ5SUQoaWQpXG4gICAge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIHRvZ2dsZUFkZFRhc2tGb3JtVmlzaWJpbGl0eSh2aXNpYmxlLCBpZClcbiAgICB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICB0aGlzLmdldEJ5SUQoaWQpLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5VmFsdWU7XG4gICAgfVxuXG4gICAgdG9nZ2xlRmlsdGVyVmlzaWJpbGl0eSh2aXNpYmxlLCBpZClcbiAgICB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHZpc2libGUgPyAnZ3JpZCcgOiAnbm9uZSc7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChpZCkuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlWYWx1ZTtcbiAgICB9XG5cbiAgICBnZXRBZGRUYXNrRm9ybUVsZW1lbnRWYWx1ZUJ5TmFtZShlbGVtZW50TmFtZSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ5SUQoXCJhZGRUYXNrRm9ybVwiKS5lbGVtZW50c1tlbGVtZW50TmFtZV0udmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0QWRkUHJvamVjdEZvcm1FbGVtZW50VmFsdWVCeU5hbWUoZWxlbWVudE5hbWUpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCeUlEKFwiYWRkUHJvamVjdEZvcm1cIikuZWxlbWVudHNbZWxlbWVudE5hbWVdLnZhbHVlO1xuICAgIH1cblxuICAgIHJlc2V0QW5kQ2xvc2VGb3JtQnlJRChmb3JtSUQsZm9ybUNvbnRhaW5lcklEKVxuICAgIHtcbiAgICAgICAgdGhpcy5nZXRCeUlEKGZvcm1JRCkucmVzZXQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVBZGRUYXNrRm9ybVZpc2liaWxpdHkoZmFsc2UsZm9ybUNvbnRhaW5lcklEKTtcbiAgICB9XG4gICAgYXBwZW5kVG9kb0l0ZW0oaXRlbSlcbiAgICB7XG4gICAgICAgIC8vIGdldCB0ZW1wbGF0ZSBtYXJrdXAgYW5kIGNsb25lIGVsZW1lbnQgKGRlZXAgY29weSlcbiAgICAgICAgbGV0IHRlbXBsYXRlQ29udGVudCA9IHRoaXMuZ2V0QnlJRChcInRvZG9JdGVtVGVtcGxhdGVcIikuY29udGVudDtcbiAgICAgICAgbGV0IHRvZG9JdGVtRGl2RWxlbWVudENsb25lID0gdGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuICAgICAgICBsZXQgdG9kb0l0ZW1WaWV3ID0gbmV3IFRvZG9JdGVtVmlldyh0b2RvSXRlbURpdkVsZW1lbnRDbG9uZSwgaXRlbSk7XG5cbiAgICAgICAgLy8gdGhlbiBpbnNlcnQgY2xvbmVkIG1hcmt1cCBhcyBuZXcgY2hpbGQgb2YgdG9kbyB0YXNrcyBjb250YWluZXJcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiZGlzcGxheVRvZG9UYXNrc0NvbnRhaW5lclwiKS5hcHBlbmQodG9kb0l0ZW1WaWV3LmVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiB0b2RvSXRlbVZpZXc7XG4gICAgfVxuICAgIGFwcGVuZFByb2plY3QoaXRlbSlcbiAgICB7XG4gICAgICAgIC8vIFByb2plY3QgaW4gc2lkZWJhclxuICAgICAgICBsZXQgdGVtcGxhdGVDb250ZW50ID0gdGhpcy5nZXRCeUlEKFwicHJvamVjdFRlbXBsYXRlXCIpLmNvbnRlbnQ7XG4gICAgICAgIGxldCBwcm9qZWN0RGl2RWxlbWVudENsb25lID0gdGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuICAgICAgICBsZXQgcHJvamVjdFZpZXcgPSBuZXcgUHJvamVjdFZpZXcocHJvamVjdERpdkVsZW1lbnRDbG9uZSwgaXRlbSk7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChcInByb2plY3RPcHRpb25zXCIpLmFwcGVuZChwcm9qZWN0Vmlldy5lbGVtZW50KTtcblxuICAgICAgICAvLyBQcm9qZWN0IGluIEFkZFRhc2tGb3JtXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLm5hbWU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgICBvcHRpb24uaWQgPSBgY2hlY2tib3gtJHtpdGVtLmlkfWA7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChcInRhc2tQcm9qZWN0XCIpLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RWaWV3O1xuICAgIH1cbiAgICBmaWxsQWRkRm9ybVdoZW5FZGl0KHRvZG9JdGVtVmlldylcbiAgICB7XG4gICAgICAgIHRoaXMuZ2V0QnlJRChcImFkZFRhc2tGb3JtXCIpLmVsZW1lbnRzW1widGFza05hbWVcIl0udmFsdWUgPSB0b2RvSXRlbVZpZXcubW9kZWwubmFtZTtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiYWRkVGFza0Zvcm1cIikuZWxlbWVudHNbXCJ0YXNrRGVzY3JpcHRpb25cIl0udmFsdWUgPSB0b2RvSXRlbVZpZXcubW9kZWwuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZ2V0QnlJRChcImFkZFRhc2tGb3JtXCIpLmVsZW1lbnRzW1widGFza0R1ZURhdGVcIl0udmFsdWUgPSB0b2RvSXRlbVZpZXcubW9kZWwuZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5nZXRCeUlEKFwiYWRkVGFza0Zvcm1cIikuZWxlbWVudHNbXCJ0YXNrUHJvamVjdFwiXS52YWx1ZSA9IHRvZG9JdGVtVmlldy5tb2RlbC5wcm9qZWN0O1xuICAgICAgICB0aGlzLmdldEJ5SUQoXCJhZGRUYXNrRm9ybVwiKS5lbGVtZW50c1tcInRhc2tQcmlvcml0eVwiXS52YWx1ZSA9IHRvZG9JdGVtVmlldy5tb2RlbC5wcmlvcml0eTtcbiAgICB9XG4gICAgdXBkYXRlVG9kb0l0ZW0oZWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCB0b2RvSXRlbVRvVXBkYXRlID0gdGhpcy5nZXRCeUlEKGVsZW1lbnQuaWQpO1xuICAgICAgICBuZXcgVG9kb0l0ZW1WaWV3KHRvZG9JdGVtVG9VcGRhdGUsZWxlbWVudC5tb2RlbCk7XG4gICAgfVxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Vmlld1xue1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByb2plY3RNb2RlbClcbiAgICB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9kZWwgPSBwcm9qZWN0TW9kZWw7XG5cbiAgICAgICAgdGhpcy5pZCA9IHByb2plY3RNb2RlbC5pZDtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvamVjdE1vZGVsLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3ROYW1lUCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgaWQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICB9XG5cbiAgICBnZXQgZGVsZXRlQnV0dG9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kZWxldGVQcm9qZWN0QnV0dG9uXCIpO1xuICAgIH1cblxuXG4gICAgc2V0IGlkKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgc2V0IG5hbWUodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lUC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSXRlbVZpZXdcbntcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCB0b2RvSXRlbU1vZGVsKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRvZG9JdGVtTW9kZWw7XG5cbiAgICAgICAgdGhpcy5pZCA9IHRvZG9JdGVtTW9kZWwuaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHRvZG9JdGVtTW9kZWwubmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRvZG9JdGVtTW9kZWwuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlID0gdG9kb0l0ZW1Nb2RlbC5kdWVEYXRlO1xuICAgICAgICB0aGlzLnByb2plY3QgPSB0b2RvSXRlbU1vZGVsLnByb2plY3Q7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSB0b2RvSXRlbU1vZGVsLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCBjaGVja2JveCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPWNoZWNrVGFza11cIik7XG4gICAgfVxuICAgIGdldCBjaGVja2JveExhYmVsKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsW25hbWU9Y2hlY2tCb3hMYWJlbF1cIik7XG4gICAgfVxuICAgIGdldCB0YXNrTmFtZUgxKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb25QYXJhZ3JhcGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicC5kZXNjXCIpO1xuICAgIH1cbiAgICBnZXQgZHVlUGFyYWdyYXBoKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInAuZHVlXCIpO1xuICAgIH1cbiAgICBnZXQgcHJvamVjdFBhcmFncmFwaCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwLnByb2plY3RcIik7XG4gICAgfVxuICAgIGdldCBkZWxldGVCdXR0b24oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmRlbGV0ZUJ1dHRvblwiKTtcbiAgICB9XG5cbiAgICBnZXQgZWRpdEJ1dHRvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uZWRpdEJ1dHRvblwiKTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICB9XG4gICAgc2V0IGlkKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHZhbHVlKTtcblxuICAgICAgICBjb25zdCBjaGVja0JveElkID0gYGNoZWNrYm94LSR7dmFsdWV9YDtcbiAgICAgICAgdGhpcy5jaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjaGVja0JveElkKTtcbiAgICAgICAgdGhpcy5jaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBjaGVja0JveElkKTtcbiAgICB9XG4gICAgc2V0IG5hbWUodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLnRhc2tOYW1lSDEudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXQgZHVlKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5kdWVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IHByb2plY3QodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLnByb2plY3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKVxuICAgIHtcbiAgICAgICAgc3dpdGNoKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFwibG93UHJpb3JpdHlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmx1ZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGl1bVByaW9yaXR5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveExhYmVsLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICNmMmYyMjFcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoaWdoUHJpb3JpdHlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgcmVkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3hMYWJlbC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZ2IoODAsIDgwLCA4MClcIjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuXG5pbXBvcnQgTWFpbk1vZGVsIGZyb20gJy4vbW9kZWxzL21haW5Nb2RlbCc7XG5pbXBvcnQgTWFpblZpZXcgZnJvbSAnLi92aWV3cy9tYWluVmlldyc7XG5pbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9tYWluQ29udHJvbGxlcic7XG5cbi8vIHdpcmluZyB1cCBtb2RlbCwgdmlld3MsIGFuZCBjb250cm9sbGVyc1xuY29uc3QgbW9kZWwgPSBuZXcgTWFpbk1vZGVsKCk7XG5jb25zdCB2aWV3ID0gbmV3IE1haW5WaWV3KCk7XG5jb25zdCBjb250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKG1vZGVsLCB2aWV3KTsgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9