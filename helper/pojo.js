const success = (result) => {
    return {
        retCode: 200,
        retValue: result
    }
}
const failed = (error) => {
    return {
        retCode: 500,
        msg: error.message || "�������쳣"
    }
}
module.exports = {
    success,
    failed
}