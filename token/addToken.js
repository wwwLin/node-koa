const jwt = require('jsonwebtoken');
const serect = 'token';  //��Կ�����ܶ�
module.exports = (userinfo) => { //����token������
  const token = jwt.sign({
    user: userinfo.user,
    id: userinfo.id
  }, serect, {expiresIn: '1h'});
  return token;
};