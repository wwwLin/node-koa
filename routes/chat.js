const methods = require('./methods.js')

module.exports = {
    'getMsg': { method: methods.get },
    'sendMsg': { method: methods.post },
}