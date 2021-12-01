import axios from 'axios';

const api = axios.create({
    baseURL: 'https://manzoni-gama-example.herokuapp.com/'
})

export default api;