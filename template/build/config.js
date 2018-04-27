module.exports = {
    local: {
        apiDomain: '//localhost:8089',
        ssoDomain: '//develop.sso.test.sankuai.info',
        ssoClientId: 'com.sankuai.data.wanxiang.wanxiang',
        env: 'development',
        publicPath: '/',
    },
    test1: {
        apiDomain: '//10.20.60.229:8080',
        ssoDomain: '//develop.sso.test.sankuai.info',
        ssoClientId: 'com.sankuai.data.wanxiang.wanxiang',
        env: 'production',
        publicPath: '//static.fetc.test.sankuai.com/dataplat-wx-template-static/'
    },
    test2: {
        apiDomain: '//10.20.63.246:8080',
        ssoDomain: '//develop.sso.test.sankuai.info',
        ssoClientId: 'com.sankuai.data.wanxiang.wanxiang',
        env: 'production',
        publicPath: '//static.fetc.test.sankuai.com/dataplat-wx-template-static/'
    },
    staging1: {
        apiDomain: '//10.23.87.163:8080',
        ssoDomain: '//develop.sso.test.sankuai.info',
        ssoClientId: 'com.sankuai.data.wanxiang.wanxiang',
        env: 'production',
        publicPath: '//static.fetc.st.sankuai.com/dataplat-wx-template-static/'
    },
    staging2: {
        apiDomain: '//10.23.88.183:8080',
        ssoDomain: '//develop.sso.test.sankuai.info',
        ssoClientId: 'com.sankuai.data.wanxiang.wanxiang',
        env: 'production',
        publicPath: '//static.fetc.st.sankuai.com/dataplat-wx-template-static/'
    },
    online: {
        apiDomain: 'http://data.sankuai.com',
        ssoDomain: 'https://sso.sankuai.com',
        ssoClientId: 'com.sankuai.data.wanxiang.wanxiang',
        env: 'production',
        publicPath: '//s0.meituan.net/mxx/dataplat-wx-template-static/'
    }
};
