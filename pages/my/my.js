const Bmob = require('../../utils/bmob.js');
const islogin = require('../../utils/islogin.js')
Page({
  data: {
    userinfo: [],
    btnlist: [],
    message: true,
    mesdata: '',
    mesboard: []
  },
  onLoad() {
    let btnlist = [{
      "name": "历史公告",
      "index": 1
    }, {
      "name": "收藏",
      "index": 2
    }, {
      "name": "关于",
      "index": 3
    }, {
      "name": "留言",
      "index": 4
    }, {
      "name": "退出登陆",
      "index": 5
    }]
    this.setData({
      btnlist: btnlist,
    })
    // wx.showLoading({
    //   title: '数据获取中',
    //   mask: true
    // })

  },
  onShow() {
    let that = this
    islogin.getUserinfo(this);
    let Diary = Bmob.Object.extend("message");
    let query = new Bmob.Query(Diary);
    query.equalTo("type", 1)
    query.find({
      success(res) {
        wx.hideLoading()
        // console.log(res)
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          if (res[i].attributes.answer == undefined) {
            res[i].attributes.answer = ""
          }
          arr.push(res[i].attributes);
        };
        that.setData({
          mesboard: arr
        })
        // console.log(typeof that.data.mesboard)
      },
      error(res) {
        wx.hideLoading()
        wx.showToast({
          title: '更新失败',
          icon: "none"
        })
      }
    })
  },
  clickbtn(e) {
    let index = e.currentTarget.dataset.id;
    let that = this
    if (index == 1) {
      wx.navigateTo({
        url: '../history/history',
      })
    } else if (index == 2) {
      if (this.data.userinfo.username == undefined || this.data.userinfo.objectId == undefined) {
        islogin.gotologin();
      } else {
        wx.navigateTo({
          url: '../collection/collection',
        })
      }

    } else if (index == 3) {
      wx.navigateTo({
        url: '../about/about',
      })
    } else if (index == 4) {
      if (this.data.userinfo.username == undefined || this.data.userinfo.objectId == undefined) {
        islogin.gotologin();
      } else {
        this.setData({
          message: false,
        })
      }
    } else if (index == 5) {
      if (this.data.userinfo.username != undefined) {
        wx.showModal({
          title: '提示',
          content: '请问您确定要退出吗',
          success(res) {
            if (res.confirm) {
              wx.showToast({
                title: '退出成功',
                icon: "none",
                success() {
                  wx.clearStorage();
                  that.setData({
                    userinfo: []
                  })
                }
              })
            } else if (res.cancel) {}
          },
        })
      } else {
        wx.showToast({
          title: '没登陆就不要点啦',
          icon: "none",
          success() {}
        })
      }

    }
  },
  messageboardbtn() {},
  //获取用户留言内容
  mesInput(e) {
    this.setData({
      mesdata: e.detail.value
    })
  },
  submit() {
    let that = this
    let mesdata = this.data.mesdata;
    wx.showModal({
      title: '留言',
      content: '点击确定后会审核，审核通过将会出现在网友留言板当中',
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
            query.save(null, {
              success(res) {
                console.log(res)
                wx.hideLoading()
                wx.showToast({
                  title: '提交成功',
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

        } else if (res.cancel) {}
      }
    })

  },
  //隐藏留言单
  hiddenbg() {
    this.setData({
      message: true,
    })
  }
})