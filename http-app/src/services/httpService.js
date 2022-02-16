import axios from "axios";
import { toast } from 'react-toastify';

//使用axios拦截器处理未知的异常并将异常记录在日志中
axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (! expectedError) {
      console.log('Loging the error', error);
      toast.error("发生未知错误");
    }
      return Promise.reject(error);
  });

export default {
    get : axios.get,
    post : axios.post,
    put : axios.put,
    delete : axios.delete
};