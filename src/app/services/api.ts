import axios from "axios";
import { parseCookies } from 'nookies'

const { "nextauth-token": token } = parseCookies();

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})

// Opção do Next para interceptar os dados que estão sendo enviados. Uma solução para conferir, uma vez que não temos a rota 3333 e nem um backend de fato.
api.interceptors.request.use(config => {
  console.log("API", config);

  return config;
})

// Bearer é o tipo de autorização usada para autenticar solicitações HTTP usando JWT, JSON Web Token.
// Outros tipos são:
//Basic (Base64),
//ApiKey (chave única fornecida pela API para autenticação)
//Basic Auth (envolve hashing)
if(token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}` 
}