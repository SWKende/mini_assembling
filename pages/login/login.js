const islogin = require('../../utils/islogin.js')
const Bmob = require('../../utils/bmob.js');
Page({
  data: {
    phone_value: '',
    name_value: '',
    pw_value: ''

  },
  onLoad() {

  },
  //手机号input
  phoneinput(e) {
    this.setData({
      phone_value: e.detail.value
    })
  },
  //昵称input
  nameinput(e) {
    this.setData({
      name_value: e.detail.value
    })
  },
  //密码input
  passwordinput(e) {
    this.setData({
      pw_value: e.detail.value
    })
  },
  signup() {
    let user = new Bmob.User();
    user.set("mobilePhoneNumber", this.data.phone_value)
    user.set("username", this.data.name_value)
    user.set("password", this.data.pw_value)
    user.signUp(null, {
      success(res) {
        wx.showToast({
          title: '注册成功',
          icon: "none"
        })
        console.log(res)
      },
      error(res) {
        wx.showToast({
          title: '此账号已存在',
          icon: "none"
        })
        console.log(res)
      }
    })
  },
  signin() {
    Bmob.User.logIn(this.data.phone_value, this.data.pw_value, {
      success(res) {
        wx.showToast({
          title: '登陆成功',
          icon: "none"
        })
        console.log(res)
      },
      error(res) {
        wx.showToast({
          title: '请检查账号密码',
          icon: "none"
        })
        console.log(res)
      }
    })
  },
})