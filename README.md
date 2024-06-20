# search-companies-france

![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)

Search french companies with INSEE Sirene API V3.11

## Install

`npm i @lecorreyann/search-companies-france`

## Setup

1. Create an account to https://api.insee.fr/catalogue/, login to your account and go to "Mes applications" to create your application and get your "Clef du consommateur" and "Secret du consommateur"... good luck 🍀

2. Create a .env with two variables:

- **INSEE_API_CONSUMER_KEY**="Clef du consommateur"
- **INSEE_API_CONSUMER_SECRET**="Secret du consommateur"

## How to use?

### Request

```typescript
import getCompaniesFrance, {
  CompanyPaginate,
} from "@lecorreyann/search-companies-france";

const query = "SIREN, SIRET or Company name";
const response: CompanyPaginate = await getCompaniesFrance(query);
```

### Response

`CompanyPaginate`

```json
[
  companies: [{
    name: string;
    code: string; // for France = SIRET
    address: string;
    active: boolean;
    naf: string;
    activity: string;
  }],
  total: number;
  page: number;
  perPage: number;
  totalPage: number;
  nbElements: number;
]

```
