const pool = require('../../lib/index')
const { NtNUpdate } = require('../../helper')
const STATUS = require('../../enum')
const { query } = pool
// ��������Ա
const add = (val) => {
    const { account, phone, password, name, creator, type } = val
    // д�õ�sql���
    const _sql = 'insert into tour_admin(account,phone,password,create_time,creator,name,type,status) values(?,?,?,now(),?,?,?,?);'
        // ִ�����ݿⲢ�ҷ��ؽ��
    return query(_sql, [account, phone, password, creator, name, type, STATUS.NORMAL, ])
}

const login = (val) => {
    const { account, password } = val
    const _sql = 'select * from tour_admin where account = ? and password = ? and status = ?'
    return query(_sql, [account, password, STATUS.NORMAL])
}

// ���Ĺ���Ա
const update = (val) => {
    const { account, phone, password, name, type, id } = val
    let _sql = 'update tour_admin set '
    const { sql, args } = NtNUpdate({ account, phone, password, name, type }, _sql)
    _sql = sql + 'where id = ?'
    const arr = [...args, id]
    return query(_sql, arr)
}

// ��ѯ����Ա
const list = val => {
    const sql = 'select * from tour_admin where status != ?'
    return query(sql, [STATUS.DELED])
}

// ��ѯ��������ԱbyId
const single = val => {
    const { id } = val
    const sql = 'select * from tour_admin where status != ? and id = ?'
    return query(sql, [STATUS.DELED, id])
}

// ɾ������Ա
const del = val => {
    const { id } = val
    const sql = 'update tour_admin set status = ? where id = ?'
    return query(sql, [STATUS.DELED, id])
}

//��ѯ������Ϣ��Ϣ

const getMsg = val => {
    // const { id } = val
    const sql = 'select * from message  order by date_time DESC'
    return query(sql, [STATUS.NORMAL])
}

const sendMsg = val => {
    const { username, userId: p_id, msg } = val;
    const msgId = new Date().getTime();
    const sql = 'insert into message(msgId,p_id,username,msg,date_time) values(?,?,?,?,now());'
    return query(sql, [msgId, p_id, username, msg, , STATUS.NORMAL]);
}

module.exports = {
    getMsg,
    sendMsg,
}