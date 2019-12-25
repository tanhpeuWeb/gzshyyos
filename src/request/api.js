import {post} from './http'


//登录接口

export const apiLogin = data => post("api/login",data);