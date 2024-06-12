"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCompaniesFranceFromINSEEApi_1 = __importDefault(require("../infrastructure/getCompaniesFranceFromINSEEApi"));
const getINSEEApiAccessToken_1 = __importDefault(require("./getINSEEApiAccessToken"));
const getQuery_1 = __importDefault(require("./getQuery"));
const renewINSEEApiAccessToken_1 = __importDefault(require("./renewINSEEApiAccessToken"));
function addressFormatter(adresseEtablissement) {
    let address = "";
    if (adresseEtablissement.numeroVoieEtablissement) {
        address += adresseEtablissement.numeroVoieEtablissement + " ";
    }
    if (adresseEtablissement.typeVoieEtablissement) {
        address += adresseEtablissement.typeVoieEtablissement + " ";
    }
    if (adresseEtablissement.libelleVoieEtablissement) {
        address += adresseEtablissement.libelleVoieEtablissement + " ";
    }
    if (adresseEtablissement.codePostalEtablissement) {
        address += adresseEtablissement.codePostalEtablissement + " ";
    }
    if (adresseEtablissement.libelleCommuneEtablissement) {
        address += adresseEtablissement.libelleCommuneEtablissement;
    }
    return address;
}
function getCompaniesFrance(query, active // A => only active companies / C => only closed companies
) {
    return __awaiter(this, void 0, void 0, function* () {
        let INSEE_API_KEY;
        try {
            INSEE_API_KEY = yield (0, getINSEEApiAccessToken_1.default)();
        }
        catch (error) {
            yield (0, renewINSEEApiAccessToken_1.default)();
            INSEE_API_KEY = yield (0, getINSEEApiAccessToken_1.default)();
        }
        const buildQuery = (0, getQuery_1.default)(query, active);
        let response = yield (0, getCompaniesFranceFromINSEEApi_1.default)(buildQuery, INSEE_API_KEY);
        if (response.status === 401) {
            yield (0, renewINSEEApiAccessToken_1.default)();
            const INSEE_API_KEY = yield (0, getINSEEApiAccessToken_1.default)();
            response = yield (0, getCompaniesFranceFromINSEEApi_1.default)(buildQuery, INSEE_API_KEY);
        }
        const data = yield response.json();
        let companies = [];
        if (response.status === 404) {
            return companies;
        }
        companies = data.etablissements.map((company) => {
            return {
                code: typeof company === "object" &&
                    company !== null &&
                    Object.keys(company).includes("siret")
                    ? company.siret
                    : "",
                name: typeof company === "object" &&
                    company !== null &&
                    Object.keys(company).includes("uniteLegale") &&
                    typeof company.uniteLegale === "object" &&
                    Object(company.uniteLegale) !== null &&
                    Object.keys(Object(company.uniteLegale)).includes("denominationUniteLegale")
                    ? company.uniteLegale.denominationUniteLegale
                    : "",
                address: typeof company === "object" &&
                    company !== null &&
                    Object.keys(company).includes("uniteLegale") &&
                    typeof company.adresseEtablissement === "object" &&
                    Object(company.adresseEtablissement) !== null
                    ? addressFormatter(company.adresseEtablissement)
                    : "",
                active: typeof company === "object" &&
                    company !== null &&
                    Object.keys(company).includes("uniteLegale") &&
                    typeof company.uniteLegale === "object" &&
                    Object(company.uniteLegale) !== null &&
                    Object.keys(Object(company.uniteLegale)).includes("etatAdministratifUniteLegale") &&
                    company.uniteLegale.etatAdministratifUniteLegale === "A"
                    ? true
                    : false,
            };
        });
        return companies;
    });
}
exports.default = getCompaniesFrance;
