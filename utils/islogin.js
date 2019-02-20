const Bmob = require('../utils/bmob.js');

//留言
function submit(that, method) {
  wx.getStorage({
    key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
    success(res) {
      //通过返回过来的方法进行setData赋值
      that.setData(method)
    },
    fail(res) {
      gotologin();
    }
  })
}

//收藏
function collection() {
  wx.getStorage({
    key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
    success(res) {
      //通过返回过来的方法进行setData赋值
      wx.showModal({
        title: '收藏',
        content: '收藏将会覆盖上一个',
        success(res) {
          if (res.confirm) {
            wx.showToast({
              title: '收藏成功',
              icon: 'none'
            })
          } else if (res.cancel) {

          }
        }
      })
    },
    fail(res) {
      gotologin();
    }
  })
}

//未登录的用户 跳转到登陆界面
function gotologin() {
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
}
module.exports = {
  submit: submit,
  collection: collection
}