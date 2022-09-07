import axios from "axios";


const client = axios.create({ baseURL: 'http://localhost:5000' });

const request = ({ ...options }) => {
    client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    const onSuccess = response => response.data;
    const onError = error => {
        //optionally catch error and additionaly logs here
        //here i can catch status codes and take action
        return error;
    }
    return client(options).then(onSuccess).catch(onError);
}
export default request;