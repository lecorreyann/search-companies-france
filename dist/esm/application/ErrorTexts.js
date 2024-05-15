var ErrorTexts;
(function (ErrorTexts) {
    ErrorTexts["INVALID_SIREN_SIRET_NUMBER"] = "You have provided a number but it is not a SIREN or SIRET number.";
    ErrorTexts["NO_COMPANY_FOUND"] = "No company found.";
    ErrorTexts["NO_CONFIGURATION_FILE_FOUND"] = "No configuration file found.";
    ErrorTexts["TRY_TO_SET_INVALID_CONFIG"] = "You are trying to set an invalid configuration. Please provide a valid configuration ({INSEE_API_KEY: 'your INSEE Api key'}).";
    ErrorTexts["INVALID_CONFIGURATION_FILE"] = "Invalid configuration file.";
    ErrorTexts["INSEE_API_KEY_IS_EMPTY"] = "INSEE API Key is empty.";
    ErrorTexts["ERROR_CREATING_CONFIG_FILE"] = "Error creating config file.";
    ErrorTexts["ERROR_CREATING_CONFIG_FILE_INSEE_API_KEY_NOT_SET"] = "Error creating config file. INSEE_API_KEY is not set.";
})(ErrorTexts || (ErrorTexts = {}));
export default ErrorTexts;
