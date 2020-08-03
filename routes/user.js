const methods = require('./methods')

module.exports = {
    'login': { method: methods.post },
    'register': { method: methods.post },
}