import * as axios from 'axios';

var instance = axios.create();
instance.defaults.baseURL = 'http://10.0.2.2/api_test/';
instance.defaults.timeout = 1000*10;
//...
//and other options

export { instance as default };