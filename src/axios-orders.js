import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-9d88d.firebaseio.com/',
})


export default instance;