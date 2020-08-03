// 配置所有的routes文件
const routes = (config => {
    return config.reduce((copy, name) => {   // 这里是请求对应的路由模块，获得对应的对象
          
        const obj = require(`./${name}`)  
        const newArr = Object.keys(obj).reduce((total, each) => {   
            let item = { path: `/api/${name}/${each}`, method: obj[each].method, action: each, service: name }   
            total.push(item)   
            return total 
        }, [])  
        copy = copy.concat(newArr) 
        return copy
    }, [])
})(['chat', 'user'])

module.exports = routes