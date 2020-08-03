const pool = require('../../lib/index')
const md5 = require("md5");
const STATUS = require('../../enum')
const { query } = pool
// 新添用户
const login = (val) => {
    console.log(val)
    const { username, email, sex } = val

    // 写好的sql语句
    const userId = new Date().getTime();
    const password = "1111111";
    const _sql = 'insert into user( userId,username, email, password, sex,creat_time) values(?,?,?,?,?,now());'
    const _sql_ = 'select username,userId from user where userId =? '
        // 执行数据库并且返回结果

    return query(_sql, [userId, username, email, password, sex, STATUS.NORMAL, ]).then((result) => {
        return query(_sql_, [userId, STATUS.NORMAL])
    });


}

// const login = (val) => {
//     const { username } = val
//     const password = "";
//     const _sql = 'select * from user where username = ? and password = ?;'
//     return query(_sql, [username, password, STATUS.NORMAL])
// }
module.exports = {
    // register,
    login,
}