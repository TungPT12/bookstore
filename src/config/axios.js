import axios from 'axios';
const URL = "https://bookstore-tungpt-default-rtdb.firebaseio.com/";

const axiosInstance = axios.create({
    baseURL: URL
})

export default axiosInstance;
