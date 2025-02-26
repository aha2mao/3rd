// ❗️❗️❗️务必实现 window.thirdPartyNative方法
window.thirdPartyNative = (function () {
  // 以下方法为新电局自带，请按需使用
  // window.SMGNativeJS.isMyApp(appUserAgent) // 判断是否指定app
  // window.SMGNativeJS.getEnvironment(); // pre 预生产，prod 生产（默认）

  // 原生路由映射
  const routeMethodMap = {
    getEnvironment: 'gt4://taxapp/commonBiz/getEnvironment',
    closeView: 'gt4://taxapp/commonService/closeView',
  };

  // 对照文档，按政务应用内实际使用到的方法做最小化适配
  return {
    // ❗️❗️❗️务必实现 handler 方法
    handler: (routePath, json, callback) => {
      switch (routePath) {
        case routeMethodMap.getEnvironment:
          callback(window.SMGNativeJS.getEnvironment());
          break;
        case routeMethodMap.closeView:
          //此处调用政务应用的js-api，如四川天府通办app closeView的方法
          //若当前省份存在多个对接的政务应用，此处通过useragent区分不同政务应用并调用各自的api
          //传入对应的params参数，并将政务应用返回的数据按照文档要求改成新电局所需的格式
          xxSDK.closeView(json, callback);
          break;
        default:
          break;
      }
    },
  };
})();
