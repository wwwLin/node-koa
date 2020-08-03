/**
 * 
 * @param {*} params  ��������
 * @param {*} sql sql���
 * @description ���ݲ�������ȥ�ı�sql��䣬��󷵻ض�Ӧ��sql���
 * @return ���ش�����sql���
 */
const update = (params, sql) =>  {
    let keys = Object.keys(params)
    let arr = []
    keys.forEach((key) => {
      if (key) {
        sql = sql + `${key} = ? ,`
        arr.push(params[key])
      }
    })
    sql = sql.substring(0, sql.length - 1)
    return {
      args: arr,
      sql,
    }
  }
  
  module.exports = {
    NtNUpdate: update,
  }
  