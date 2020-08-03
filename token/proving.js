const jwt = require('jsonwebtoken');
const serect = 'token';  //密钥，不能丢
module.exports = (tokens) => {
    if (tokens) {
        let toke = tokens.split(' ')[1];
        // 解析
        let decoded = jwt.decode(toke, serect);
        if (decoded && decoded.exp <= new Date() / 1000) {
            return {
                message: 'token过期',
                code: 403
            };
        } else {
            return {
                message: '解析成功',
                code: 200
            }
        }
    } else {  // 没有取到token
        return {
            msg: '没有token',
            code: 400
        }
    }
};