const jwt = require('jsonwebtoken');
const serect = 'token';  //��Կ�����ܶ�
module.exports = (tokens) => {
    if (tokens) {
        let toke = tokens.split(' ')[1];
        // ����
        let decoded = jwt.decode(toke, serect);
        if (decoded && decoded.exp <= new Date() / 1000) {
            return {
                message: 'token����',
                code: 403
            };
        } else {
            return {
                message: '�����ɹ�',
                code: 200
            }
        }
    } else {  // û��ȡ��token
        return {
            msg: 'û��token',
            code: 400
        }
    }
};