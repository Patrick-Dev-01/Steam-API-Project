import axios from 'axios';

const steam = axios.create({
    baseURL: 'http://api.steampowered.com'
});

export { steam }