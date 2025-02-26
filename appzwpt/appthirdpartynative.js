(() => {
  // 按需注册 返回按钮监听
  SMGNativeJS?.registerPageBackHandler(function (params, responseCallBack) {
    responseCallBack({
      // 自定义
      isIntercept: true,
    });
  });

  const frame = document.createElement('iframe');

  frame.src = '/3rd/appzwpt/native-sdk.html';
  frame.style.display = 'none';
  frame.onload = function () {
    console.log('native-sdk 加载成功');

    if (this.contentWindow && this.contentWindow.lightAppJssdk && window.SMGNativeJS) {
      window.lightAppJssdk = this.contentWindow.lightAppJssdk;

      window.thirdPartyNative = (function () {
        const routeMethodMap = {
          openView: 'gt4://taxapp/commonService/openView',
          closeView: 'gt4://taxapp/commonService/closeView',
          revokeAccessToken: 'gt4://taxapp/tpass/revokeAccessToken',
          getEnvironment: 'gt4://taxapp/commonBiz/getEnvironment',
          recorderHttpBase: 'gt4://taxapp/recoder/httpbase',
          download: 'gt4://taxapp/share/download',
          savefile: 'gt4://taxapp/home/savefile',
          onPageBackHandLer: 'gt4://taxapp/commonService/onPageBackHandLer',
          // ❗️❗️ 默认 callback 返回空字符串，所以只处理能够抹平的
          // navBarHidden: 'gt4://taxapp/commonService/navBarHidden',
          // navBarTitle: 'gt4://taxapp/commonService/navBarTitle',
          // getEnvironment: 'gt4://taxapp/commonBiz/getEnvironment',
          // getusername: 'gt4://taxapp/home/getusername',
        };

        const env = window.SMGNativeJS.getEnvironment();

        return {
          handler: (routePath, json, callback) => {
            switch (routePath) {
              case routeMethodMap.openView:
                window.lightAppJssdk.navigation.show({
                  url: json.url,
                  title: json.title,
                });
                break;
              case routeMethodMap.closeView:
              case routeMethodMap.revokeAccessToken:
                window.lightAppJssdk.navigation.close({
                  success: function (data) {
                    callback();
                    console.log('success', data);
                  },
                  fail: function (data) {
                    console.log('fail', data);
                  },
                });
                break;
              case routeMethodMap.download:
              case routeMethodMap.savefile:
                window.lightAppJssdk.notification.alert({
                  message: '当前渠道不支持下载',
                  title: '提示',
                  buttonName: '确定',
                  success: function (data) {
                    callback();
                    console.log('success', data);
                  },
                  fail: function (data) {
                    console.log('fail', data);
                  },
                });
                break;
              case routeMethodMap.getEnvironment:
                callback(env);
                break;
              case routeMethodMap.recorderHttpBase:
                callback({
                  baseUrl:
                    env === 'pre'
                      ? 'https://etax-xwcj.sichuan.chinatax.gov.cn:5100'
                      : 'https://etax-xwcj.sichuan.chinatax.gov.cn',
                });
                break;

              case routeMethodMap.onPageBackHandLer:
                // window.lightAppJssdk.navigation.onPageBackHandLer({
                //   success: function (data) {
                //     callback();
                //     console.log('success', data);
                //   },
                //   fail: function (data) {
                //     console.log('fail', data);
                //   },
                // });
                break;
              default:
                callback('');

                break;
            }
          },
        };
      })();
    }
  };

  document.body.appendChild(frame);
})();
