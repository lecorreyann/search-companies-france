declare enum ErrorTexts {
    INVALID_SIREN_SIRET_NUMBER = "You have provided a number but it is not a SIREN or SIRET number.",
    NO_COMPANY_FOUND = "No company found.",
    NO_CONFIGURATION_FILE_FOUND = "No configuration file found.",
    TRY_TO_SET_INVALID_CONFIG = "You are trying to set an invalid configuration. Please provide a valid configuration ({INSEE_API_KEY: 'your INSEE Api key'}).",
    INVALID_CONFIGURATION_FILE = "Invalid configuration file.",
    INSEE_API_KEY_IS_EMPTY = "INSEE API Key is empty.",
    ERROR_CREATING_CONFIG_FILE = "Error creating config file.",
    ERROR_CREATING_CONFIG_FILE_INSEE_API_KEY_NOT_SET = "Error creating config file. INSEE_API_KEY is not set."
}
export default ErrorTexts;
