/*
* ajax返回response.data
*/
import axios from 'axios'

export default function ajax(url,data={},type="GET") {
    return new Promise(function (resolve,reject) {
        let promiss
        if(type === 'GET') {
            let dataStr = ''
            Object.keys(data).forEach(key =>{
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substr(0,dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            //发送promiss请求
            promiss = axios.get(url)
        }else{
            promiss = axios.post(url,data)
        }
        promiss.then(function (response) {
            resolve(response.data)//成功回调
        }).catch(function (error) {
            reject(error) //失败回调
        })
    })
}
