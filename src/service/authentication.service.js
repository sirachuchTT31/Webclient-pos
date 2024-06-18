import Constant from '../constant/constant'
import axios from 'axios';

const signIn = async (payload) => {
    return axios.post(`${Constant.Api.baseUrl}v1/auth/signin`, { ...payload }, { headers: Constant.Api.options.headers });
}


export default { signIn }