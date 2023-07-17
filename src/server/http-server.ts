import axios from "axios";
import QS from 'qs';
import {getSearchParams} from "../unit/unit";
let baseURL;
if(process.env.NODE_ENV === 'development'){
  baseURL = 'http://10.230.27.100:8780/newevs-web/';
}else if(process.env.NODE_ENV === 'production'){
  baseURL = 'http://rdvs.deppon.com/newevs-web/'
}

const instance = axios.create({
  baseURL:baseURL,
  timeout:6000
});

instance.interceptors.request.use(config=>{
  //let urlParameter = getSearchParams();
  let urlParameter = {
    wechat_requesttype: "20000",
    wechat_usercode: "336745",
    wechat_token: "20000-c5de4d10-27f3-454e-82e3-3601407a9eb7"
  };
  let header:any = config.headers;
  header = Object.assign(header,urlParameter);
  config.headers = header;
  return config
},error => {
  Promise.reject(error)
});

instance.interceptors.response.use(config=>{
  let data= config && config.data;
  return data
},error => {
  Promise.reject(error);
});

export default instance