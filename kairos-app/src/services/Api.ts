import axios from 'axios';
import Cookies from 'js-cookie';


const cookies = Cookies.get();


const ApiServidor = axios.create({ 
    baseURL: 'http://localhost:9129/api',
    headers: {
        Authorization: `Bearer ${ cookies["kairos.token.administrador"] }`,
    },
});


export { ApiServidor };