// 请求对应的controller模块
const controller = require('../../controllers/user')
    // 请求对应的模版对象
    // const model = require('../model')
    // 封装的pojo消息集，对返回数据的处理
const pojo = require('../../helper/pojo')
const addToken = require('../../token/addToken')
    // success: 成功返回
    // failed: 失败返回
    // filterUnderLine: 处理驼峰和下划线的区别
const { success, failed } = pojo


// 查询单个对象
const single = async ctx => {
    let res;
    try {
        // 获取的到参数 
        const val = ctx.request.body
            // 调用对应的controller层
        await controller.single(val).then(result => {
            // 对返回结果进行处理
            if (result.length === 0 || result === null || result === undefined)
            // 等于0或者null | undefined 返回失败的对象
                res = failed('操作失败')
            else
            // 其他返回成功的对象，处理一下从数据库拿到的数据
                res = success(filterUnderLine(result[0]))
        })
    } catch (err) {
        // 出错返回失败的对象
        res = failed(err)
    }
    // 数据返回给前台
    ctx.body = res
}
const login = async ctx => {
    let res;
    try {
        const val = ctx.request.body
        await controller.login(val).then(result => {
            console.log('result', result)
                // let token = addToken({ username: result[0].username, userId: result[0].userId })
            res = success({...result[0] });
            // res.token = token;
        })
    } catch (err) {
        res = failed(err)
    }
    ctx.body = res
}

const register = async ctx => {
    let res;
    try {
        const val = ctx.request.body
        await controller.register(val).then(result => {
            res = success(result);
        })
    } catch (err) {
        res = failed(err)
    }
    ctx.body = res
}

// 模块的对应导出
module.exports = {
    login,
    register,
}