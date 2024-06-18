const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const EXP = 'exp'

const setAuthorization = (payload) => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.setItem(ACCESS_TOKEN, payload.access_token);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.setItem(REFRESH_TOKEN, payload.refresh_token);
    localStorage.removeItem(EXP);
    localStorage.setItem(EXP, payload.exp)
}

const getAccesstoken = () => {
    return localStorage.getItem(ACCESS_TOKEN)
}

export default { setAuthorization, getAccesstoken }