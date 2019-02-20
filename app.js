//app.js
var Bmob = require('utils/bmob.js');
Bmob.initialize("59db99b1905e91a35960c64dc5345ef1", "c5bd14f1e9636b84e1f7cd3df355c907");
App({
  onShow() {},
  // onLaunch: function() {
  //   var user = new Bmob.User() //开始注册用户
  //   user.auth().then(function(obj) {
  //       console.log('登陆成功')
  //     },
  //     function(err) {
  //       console.log('失败了', err)
  //     });
  // },
  // getUserInfo: function(cb) {
  //   var that = this
  //   if (this.globalData.userInfo) {
  //     typeof cb == 'function' && cb(this.globalData.userInfo)
  //   } else {
  //     //调用登录接口
  //     wx.login({
  //       success: function() {
  //         wx.getUserInfo({
  //           success: function(res) {
  //             that.globalData.userInfo = res.userInfo
  //             typeof cb == 'function' && cb(that.globalData.userInfo)
  //           }
  //         })
  //       }
  //     })
  //   }
  // },
})