import axios from "axios";

// const api = axios.create({
//     baseURL : 'http://localhost:5000/api'
// })
const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`
});

export default api
