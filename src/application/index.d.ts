declare interface AccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

declare interface Etablissement {
  siret: string;
  uniteLegale: {
    denominationUniteLegale: string;
  };
  adresseEtablissement: {
    numeroVoieEtablissement: string;
    typeVoieEtablissement: string;
    libelleVoieEtablissement: string;
    codePostalEtablissement: string;
    libelleCommuneEtablissement: string;
  };
}

declare interface INSEEApiResponse {
  header: {
    statut: number;
    message: string;
    total: number;
    debut: number;
    nombre: number;
  };
  etablissements: Etablissement[];
}
