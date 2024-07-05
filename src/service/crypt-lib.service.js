import * as cryptoJS from 'crypto-js'
import constant from '../constant/constant';
const encrypt = (original) => {
    const cipler = cryptoJS.AES.encrypt(original, constant.secreatKey);
    return cipler.toString();
}

const decrypt = (cipler) => {
    const bytes = cryptoJS.AES.decrypt(cipler, constant.secreatKey).toString(cryptoJS.enc.Utf8);
    return bytes
}

export default { encrypt, decrypt }