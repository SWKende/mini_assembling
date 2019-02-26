const islogin = require('../../utils/islogin.js')
const Bmob = require('../../utils/bmob.js');
Page({
  data: {
    phone_value: '',
    name_value: '',
    pw_value: '',
    inorup: false

  },
  onLoad() {

  },
  switchChange(e) {
    this.setData({
      inorup: e.detail.value
    })
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
    let that = this;
    let user = new Bmob.User();
    let phone_value = this.data.phone_value;
    let name_value = this.data.name_value;
    let pw_value = this.data.pw_value;
    if (phone_value != '' && name_value != '' && pw_value != '') {
      user.set("mobilePhoneNumber", phone_value)
      user.set("username", name_value)
      user.set("password", pw_value)
      user.signUp(null, {
        success(res) {
          wx.showToast({
            title: '注册成功',
            icon: "none"
          })
          setTimeout(function() {
            wx.navigateBack({
              delta: 1
            })
          }, 2000)
          console.log(res)
        },
        error(res) {
          wx.showToast({
            title: '此账号已存在或不合规',
            icon: "none"
          })
          console.log(res)
        }
      })
    } else {
      wx.showToast({
        title: '请将信息填写完整',
        icon: "none"
      })
    }
  },
  signin() {
    let phone_value = this.data.phone_value;
    let pw_value = this.data.pw_value;

    if (phone_value != '' && pw_value != '') {
      Bmob.User.logIn(this.data.phone_value, this.data.pw_value, {
        success(res) {
          wx.showToast({
            title: '登陆成功',
            icon: "none"
          })
          setTimeout(function() {
            wx.navigateBack({
              delta: 1
            })
          }, 2000)
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
    } else {
      wx.showToast({
        title: '请将信息填写完整',
        icon: "none"
      })
    }
  },
})