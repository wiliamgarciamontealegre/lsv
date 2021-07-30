import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.defaults.headers.common.Accept = "application/json;";
axios.defaults.headers.common.Authorization = `q6y3fbrgqirzumf9o9w8vfbibmg8z5de`;


axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error)

    return Promise.reject(error);
  }
);

export default axios;
