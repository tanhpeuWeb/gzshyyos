import Mock from 'mockjs'

const Domain = "https://api.gzshyyos.com"
// 构建一个函数对象，返回mock数据
const mockData = function () {
    let data = {
        code:1,
        msg:"登录成功"
    };
    // 此处省略对data的一系列运算
    return {data: data}
  }


  const loginData = ()=>{
        let data = {
            islogin:1,
            token:"asd123"
        };
        return {data:data}
  }
  // url是真实的url，第二个参数是post和get都管，第三个参数就是传入函数对象
  Mock.mock(`${Domain}/api/test`, /post/i, mockData);

  Mock.mock(`${Domain}/api/login`, /post/i,loginData);