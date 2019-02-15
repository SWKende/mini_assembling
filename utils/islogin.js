const Bmob = require('../utils/bmob.js');

function islogin(that, method) {
  wx.getStorage({
    key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
    success(res) {
      //通过返回过来的方法进行setData赋值
      that.setData(method)
    },
    fail(res) {
      wx.showToast({
        title: '登录后才可使用此功能',
        icon: 'none',
        success() {
          setTimeout(function() {
            wx.navigateTo({
              url: '../../pages/login/login',
            })
          }, 1000)
        }
      })
      return false;
    }
  })
}
module.exports = {
  islogin: islogin,
}