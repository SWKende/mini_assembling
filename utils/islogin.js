function islogin() {
  wx.getStorage({
    key: 'islogin',
    success(res) {
      return true;
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