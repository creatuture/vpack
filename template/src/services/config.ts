import qs from 'qs';

interface CustomWindow extends Window {
    __API_DOMAIN__: string;
}
export default {
    // eslint-disable-next-line
    baseURL: (window as CustomWindow).__API_DOMAIN__,
    // 请求前的数据处理
    transformRequest: [function(data: any) {
        return data;
    }],
    // 请求后的数据处理
    transformResponse: [function(data: any) {
        return data;
    }],
    // 自定义的请求头
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    // 查询对象序列化函数
    paramsSerializer: function(params: any) {
        return qs.stringify(params);
    },
    // 超时设置s
    timeout: 10000,
    // 跨域是否带Token
    withCredentials: true,
    // 响应的数据格式 json / blob /document /arraybuffer / text / stream
    responseType: 'json',
    // XSRF 设置
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',

    // 最多转发数，用于node.js
    maxRedirects: 5,
    // 最大响应数据大小
    maxContentLength: 2000,
    // 自定义错误状态码范围
    validateStatus: function(status: any) {
        return status >= 200 && status < 300;
    }
};
