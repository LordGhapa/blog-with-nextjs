// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

export default {
  graphqlURL: process?.env?.API_URL ?? 'http://127.0.0.1:1337/graphql',
  URL_SITE: 'localhost:3000',
};

console.log(`API Key: ${process.env.API_URL}`);
