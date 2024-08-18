export default class HttpUtils {
  static get = (url: string, data: any) => {
    var getUrl =
      url +
      "?" +
      "?uuid=1FF90A9B-ADDC-475D-875C-A68CF44E4130&os=iOS&version=5.3.0&build_version=40002&lang=cn&world_code=HK&app_source=cn_tf&app_key=cn_tf&user_id=170000018&appsflyer_id=1FF90A9B-ADDC-475D-875C-A68CF44E4130";
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key];
        if (element !== null) {
          getUrl = getUrl + "&" + key + "=" + element;
        }
      }
    }
    console.log(getUrl);

    return new Promise((resolve, reject) => {
      //resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）
      fetch(getUrl) //默认是GET
        .then((response) => response.json()) //把数据解析成json格式,然后取出
        .then((result) => {
          resolve(result); //表示完成
        })
        .catch((error) => {
          reject(error); //表示失败
        });
    });
  };
  static post = (url: string, data: any) => {
    const postUrl =
      url +
      "?" +
      "?uuid=1FF90A9B-ADDC-475D-875C-A68CF44E4130&os=iOS&version=5.3.0&build_version=40002&lang=cn&world_code=HK&app_source=cn_tf&app_key=cn_tf&user_id=170000018&appsflyer_id=1FF90A9B-ADDC-475D-875C-A68CF44E4130";
    return new Promise((resolve, reject) => {
      fetch(postUrl, {
        method: "POST",
        headers: {
          Accept: "application/json", //告诉服务器，我们能接受json格式的返回类型，
          "Content-Type": "application/json", //告诉服务器，我们提交的数据类型
        },
        body: JSON.stringify(data), //(把你想提交得数据序列化为json字符串类型，然后提交)body中的数据就是我们需要向服务器提交的数据,比如用户名,密码等
      }) //返回 服务器处理的结果
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
