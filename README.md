# search-companies-france

![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)

Search french companies with INSEE Sirene API V3.11

## Setup

1. Create an account to https://api.insee.fr/catalogue/, login to your account and go to "Mes applications" to create your application and get your "Clef du consommateur" and "Secret du consommateur"... good luck 🍀

2. Create a .env with two variables:

- **INSEE_API_CONSUMER_KEY**="Clef du consommateur"
- **INSEE_API_CONSUMER_SECRET**="Secret du consommateur"

## Typescript config

There is a 🥊 between CommonJS and ESM... 😓

This project use the last version of node-fetch (^3.3.2) and node-fetch doesn't support the CommonJS anymore (only ESM) so we have to configure your **package.json** and your **tsconfig.json**:

- add `"type":"module"` to your **package.json**
- set `"module": "esnext"`, `"moduleResolution": "node10"` to your **tsconfig.json**,
- if you use `ts-mode` in your project, you can add:
  ```json
  "ts-node": {
      "esm": true, // «———— enabling ESM for ts-node
    },
  ```
  <br>

🎁 I give you a typical **tsconfig.json** working with this package:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "esnext",
    "moduleResolution": "node10",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "ts-node": {
    "esm": true
  }
}
```
