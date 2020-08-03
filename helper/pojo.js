const success = (result) => {
    return {
        retCode: 200,
        retValue: result
    }
}
const failed = (error) => {
    return {
        retCode: 500,
        msg: error.message || "·şÎñÆ÷Òì³£"
    }
}
module.exports = {
    success,
    failed
}