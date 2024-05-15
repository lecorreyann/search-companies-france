"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ErrorTexts_exports = {};
__export(ErrorTexts_exports, {
  default: () => ErrorTexts_default
});
module.exports = __toCommonJS(ErrorTexts_exports);
var ErrorTexts;
(function(ErrorTexts2) {
  ErrorTexts2["INVALID_SIREN_SIRET_NUMBER"] = "You have provided a number but it is not a SIREN or SIRET number.";
  ErrorTexts2["NO_COMPANY_FOUND"] = "No company found.";
  ErrorTexts2["NO_CONFIGURATION_FILE_FOUND"] = "No configuration file found.";
  ErrorTexts2["TRY_TO_SET_INVALID_CONFIG"] = "You are trying to set an invalid configuration. Please provide a valid configuration ({INSEE_API_KEY: 'your INSEE Api key'}).";
  ErrorTexts2["INVALID_CONFIGURATION_FILE"] = "Invalid configuration file.";
  ErrorTexts2["INSEE_API_KEY_IS_EMPTY"] = "INSEE API Key is empty.";
  ErrorTexts2["ERROR_CREATING_CONFIG_FILE"] = "Error creating config file.";
  ErrorTexts2["ERROR_CREATING_CONFIG_FILE_INSEE_API_KEY_NOT_SET"] = "Error creating config file. INSEE_API_KEY is not set.";
})(ErrorTexts || (ErrorTexts = {}));
var ErrorTexts_default = ErrorTexts;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=ErrorTexts.js.map
