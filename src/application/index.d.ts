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
  adresseEtablissement: AdressEtablissement;
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

declare interface AdressEtablissement {
  complementAdresseEtablissement: string | null;
  numeroVoieEtablissement: string | null;
  typeVoieEtablissement: string | null;
  libelleVoieEtablissement: string | null;
  codePostalEtablissement: string | null;
  libelleCommuneEtablissement: string | null;
}
