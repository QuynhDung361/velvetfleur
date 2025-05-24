import axios from "axios";


// const local = 'http://localhost:5000'
// const production = ''
// const api = axios.create({
//     baseURL : `${local}/api`
// })

// Sử dụng biến môi trường để chọn đúng URL
const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`
});

// Thêm interceptor để gửi token với mỗi request
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('customerToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api
