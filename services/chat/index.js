// 请求对应的controller模块
const controller = require('../../controllers/chat')
    // 请求对应的模版对象
    // const model = require('../model')
    // 封装的pojo消息集，对返回数据的处理
const pojo = require('../../helper/pojo')
const proving = require('../../token/proving')
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


const getMsg = async ctx => {
    let res;
    try {
        const val = ctx.request.body
        await controller.getMsg(val).then(result => {
            res = success(result);
        })
    } catch (err) {
        res = failed(err)
    }
    ctx.body = res
}

const sendMsg = async ctx => {
    let res;
    try {
        // let token = ctx.request.header.authorization;//token验证
        // if (proving(token).code === 200) {

        // } else {
        //     res = proving(token);
        // }
        const val = ctx.request.body;
        await controller.sendMsg(val).then(result => {
            res = success({ retCode: result.retCode, retMsg: "success" });
        })

    } catch (err) {
        res = failed(err)
    }
    ctx.body = res
}

// 模块的对应导出
module.exports = {
    getMsg,
    sendMsg,
}