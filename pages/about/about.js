const Bmob = require('../../utils/bmob.js');
Page({
  data: {
    mesdata: "",
    message: true,
  },
  onLoad(e) {},
  //获取用户留言内容
  mesInput(e) {
    this.setData({
      mesdata: e.detail.value
    })
  },
  //提交反馈单
  submit() {
    let that = this
    let mesdata = this.data.mesdata;
    wx.showModal({
      title: '反馈',
      content: '请问是否要提交？',
      success(res) {
        if (res.confirm) {
          if (mesdata == '') {
            wx.showToast({
              title: '内容不能为空',
              icon: "none"
            })
            // break;
          } else {
            wx.showLoading({
              title: '请稍等',
            })
            var Diary = Bmob.Object.extend("message");
            var query = new Diary();
            query.set('question', mesdata)
            query.set('type', 2)
            query.save(null, {
              success(res) {
                console.log(res)
                wx.hideLoading()
                wx.showToast({
                  title: '非常感谢您的宝贵建议',
                  icon: "none"
                })
                that.setData({
                  mesdata: '',
                  message: true
                })

              },
              error(res) {
                wx.hideLoading()
                wx.showToast({
                  title: '提交失败',
                  icon: "none"
                })
              }
            });
          }

        } else if (res.cancel) { }
      }
    })
  },
  hiddenbg() {
    this.setData({
      message: true
    })
  },
  feedback() {
    this.setData({
      message: false
    })
  }
})