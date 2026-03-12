import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://trainee.fidelis.workers.dev/api',
  //withCredentials: true,
  headers: {
    // ✔️ Cole aqui o seu token pessoal! 8fdffb8d-5cf2-4c69-bb20-7415644eb0a5
    // Acesse trainee.fidelis.workers.dev/inicio para pegar o seu.
    'Authorization': 'Bearer 8fdffb8d-5cf2-4c69-bb20-7415644eb0a5',
    'Content-Type': 'application/json',
  },
});