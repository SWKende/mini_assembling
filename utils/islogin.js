const Bmob = require('../utils/bmob.js');

//获取用户本地信息并回传给页面的data中 PS：晚点用
function getUserinfo(that) {
  wx.getStorage({
    key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
    success(res) {
      console.log(res);
      //获取到的用户数据
      let data = JSON.parse(res.data)
      //通过返回过来的方法进行setData赋值
      that.setData({
        userinfo: data
      })
      // console.log(that.data.userinfo)
    },
    fail(res) {
      console.log("用户未登陆")
    }
  })
}



//收藏
function collection(correlationId) {
  wx.getStorage({
    key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
    success(res) {

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
  gotologin: gotologin,
  getUserinfo: getUserinfo,
  collection: collection,
}