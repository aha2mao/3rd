const loadScript = (src, callback) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.async = true;
  script.defer = true;
  script.onload = () => {
    console.log('JSSDK-API 加载成功');
    callback();
  };
  document.head.appendChild(script);
};


const frame = document.createElement('iframe');
frame.src = './inner.html';
frame.style.display = 'none';

frame.onload = function () {
  console.log('iframe 加载成功');


  window.lightAppJssdk =
    this.contentWindow.lightAppJssdk;
  window.thirdPartyNative = (function () {
    // 获取操作系统
    const os = window.SMGNativeJS.mobilePlatform; // ios/android/harmonyos
    // 判断是否指定 userAgent, 如是否天府通办政务渠道
    const isMyApp = window.SMGNativeJS.isMyApp('xxxxx'); // true / false

    // 引入 天府通办 jssdk
    // const script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src = '//tftb.sczwfw.gov.cn/jssdk/index.js';
    // script.async = true;
    // document.head.appendChild(script);

    // // // TODO: async load
    // script.onload = () => {
    //   console.log('JSSDK-API 加载成功');
    //   console.log(window.lightAppJssdk);
    //   console.log(Object.keys(window));
    // };
    return {
      closeView: (json, responseCallback) => {
        // todo
        lightAppJssdk.navigation.close({
          success: function (data) {
            responseCallback();
          },
          fail: function (data) {
            console.log('fail', data);
            //错误返回
          }
        });
      },
      navBarHidden: (json, responseCallback) => {
        // todo
      },
      navBarTitle: (json, responseCallback) => {
        // todo
      },
      // SMGNativeJS.commonuseTypes.nativeRouter('revokeAccessToken');
      revokeAccessToken: (json, responseCallback) => {
        // todo 天府通办称还是 close，不要 logout
        // lightAppJssdk.user.logout
        lightAppJssdk.navigation.close({
          success: function (data) {
            responseCallback();
          },
          fail: function (data) {
            //错误返回
          }
        });
      },
      getEnvironment: (json, responseCallback) => {
        // todo
        responseCallback('');
      },
      getusername: (json, responseCallback) => {
        // todo
        responseCallback('');
      }
      // },
    };
  })();

  window.SMGNativeJS = {
    ...window.SMGNativeJS,
    commonuseTypes: {
      ...SMGNativeJS.commonuseTypes,
      '3rd': {
        ...window.thirdPartyNative,
      },
    },
  };
};

document.body.appendChild(frame);


// 业务调用
// SMGNativeJS.commonuseTypes.closeView(
//   {
//     url: '/abcd',
//   },
//   () => {
//     console.log('callback');
//   },
// );

// // or

// SMGNativeJS.commonuseTypes.nativeRouter(
//   '/commonService/closeView',
//   {
//     url: '/abcd',
//   },
//   () => {
//     console.log('callback');
//   },
// );
