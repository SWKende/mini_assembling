const islogin = require('../../utils/islogin.js');
const Bmob = require('../../utils/bmob.js');
Page({
  data: {
    userinfo: [],
    items: [],
    comments: [],
    comvalue: '',
    correlationId: ''
  },
  onLoad(e) {
    // console.log(e.correlationId);
    this.get_comment(e.correlationId)
    this.setData({
      correlationId: e.correlationId
    })
    islogin.getUserinfo(this)
  },
  get_comment(correlationId) {
    let that = this
    wx.showLoading({
      title: '评论加载中',
    })
    console.log(correlationId)
    var Diary = Bmob.Object.extend("commend");
    var query = new Bmob.Query(Diary);
    query.equalTo("correlationId", correlationId);
    query.find({
      success(res) {
        wx.hideLoading()
        console.log("success")
        console.log(res)
        let arr = new Array()
        for (let i = 0; i < res.length; i++) {
          res[i].attributes.createdAt = res[i].createdAt;
          arr.push(res[i].attributes);
        }
        that.setData({
          items: arr
        })
        console.log(arr)
      },
      error(res) {
        wx.hideLoading()
        wx.showToast({
          title: '评论加载失败',
          icon: "none"
        })
      }
    })
  },
  comInput(e) {
    this.setData({
      comvalue: e.detail.value
    })
  },
  //评论
  submit() {
    let that = this;
    //保存用户的姓名
    let firstname = this.data.userinfo.username;
    //保存用户的id
    let firstuserid = this.data.userinfo.objectId;
    //用户的评论
    let comvalue = this.data.comvalue;
    //评论pcitem的唯一id
    let correlationId = this.data.correlationId;
    if (firstname == undefined || firstuserid == undefined || comvalue == undefined) {
      islogin.gotologin();
    } else {
      var Diary = Bmob.Object.extend("commend");
      var query = new Diary();
      query.set('firstname', firstname)
      query.set('firstuserid', firstuserid)
      query.set('commend', comvalue)
      query.set('correlationId', correlationId)
      query.save(null, {
        success(res) {
          console.log(res)
          wx.showToast({
            title: '评论成功',
            icon: "none"
          })
          that.setData({
            comvalue: '',
          })
          that.get_comment(that.data.correlationId)
        },
        error(res) {
          wx.showToast({
            title: '提交失败',
            icon: "none"
          })
        }
      });
    }
  },
  //回复
  recsubmit(e) {
    console.log(e.currentTarget.dataset.id)
  },
  //删除评论
  delsubmit(e) {
    wx.showModal({
      title: "提示",
      content: '请问确定要删除此条评论吗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})