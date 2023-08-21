// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

export default {
  graphqlURL: process?.env?.API_URL ?? 'http://127.0.0.1:1337/graphql',
  URL_SITE: process?.env?.SITE_URL ?? 'localhost:3000',
};
