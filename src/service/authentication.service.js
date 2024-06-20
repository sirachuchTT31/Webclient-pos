import Constant from '../constant/constant'
import axios from 'axios';

const signIn = async (payload) => {
    return axios.post(`${Constant.Api.baseUrl}v1/auth/signin`, { ...payload }, { headers: Constant.Api.options.headers });
}

const signInWithGoogle = async () => {
    return axios.get(`${Constant.Api.baseUrl}v1/auth/google`, { headers: Constant.Api.options.headers })
}


export default { signIn, signInWithGoogle }