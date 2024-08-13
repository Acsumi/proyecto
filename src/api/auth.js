import axios from 'axios'

const API = 'https://localhost:4000/api'

export const RegisterRequest =  user => axios.post('${API}/register', user)