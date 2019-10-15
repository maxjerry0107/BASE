import * as axios from 'axios';

var instance = axios.create();
instance.defaults.baseURL = 'http://192.168.207.143/app_base';
instance.defaults.timeout = 1000*30;
//...
//and other options

export { instance as default };

export function convertParam(url, params){
    let return_str=url+"?";
    let param_str="";
    for(let key in params)
    {
        param_str+=key+"="+params[key]+"&";
    }
    return_str+=param_str;
    return return_str;
}