const islogin = require('../../utils/islogin.js');
const Bmob = require('../../utils/bmob.js');
Page({
  data: {
    userinfo: [],
    items: [],
    mesdata: "",
    comments: [],
    comvalue: '',
    correlationId: '',
    message: true,
    recset: [],
    rec_name: '',
    del_commend: ''
  },
  onLoad(e) {
    // console.log(e.correlationId);
    this.get_comment(e.correlationId)
    this.setData({
      correlationId: e.correlationId
    })
    islogin.getUserinfo(this)
  },
  onShow() {
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
          res[i].attributes.objectId = res[i].id;
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
    let mesdata = this.data.mesdata;
    if (firstname == undefined || firstuserid == undefined) {
      islogin.gotologin();
    } else {
      if (comvalue != "") {
        var Diary = Bmob.Object.extend("commend");
        var query = new Diary();
        query.set('firstname', firstname)
        query.set('firstuserid', firstuserid)
        query.set('commend', comvalue)
        query.set('correlationId', correlationId)
        //提前置空
        that.setData({
          comvalue: '',
        })
        query.save(null, {
          success(res) {
            console.log(res)
            wx.showToast({
              title: '评论成功',
              icon: "none"
            })
            setTimeout(function() {
              that.get_comment(that.data.correlationId)
            }, 1000)
          },
          error(res) {
            wx.showToast({
              title: '提交失败',
              icon: "none"
            })
          }
        });
      } else {
        wx.showToast({
          title: '内容不能为空',
          icon: "none"
        })
      }
    }
  },
  //判断是否可以回复
  recsubmit(e) {
    //被回复者
    let recname = e.currentTarget.dataset.firstname;
    let recid = e.currentTarget.dataset.id;
    //回复者
    let firstname = this.data.userinfo.username;
    let firstuserid = this.data.userinfo.objectId;

    if (firstname == undefined || firstuserid == undefined) {
      islogin.gotologin();
    } else {

      if (recid != firstuserid) {
        console.log("走回复流程")
        let recset = this.data.recset;
        recset.recname = recname
        recset.recid = recid
        recset.firstname = firstname
        recset.firstuserid = firstuserid
        console.log(this.data.recset)
        this.setData({
          message: false,
          recset: recset,
          rec_name: recname
        })
      }
    }
  },
  //删除评论
  delsubmit(e) {
    let that = this
    //要被删除的评论唯一id
    console.log(e.currentTarget.dataset.objectid);
    let objectId = e.currentTarget.dataset.objectid;
    //要被删除的用户
    let deluserid = e.currentTarget.dataset.id;
    let del_commend = e.currentTarget.dataset.commend;
    //当前用户
    let firstuserid = this.data.userinfo.objectId;
    if (firstuserid == deluserid) {
      wx.showModal({
        title: "提示",
        content: '请问确定要删除“' + del_commend + '”吗',
        success(res) {
          if (res.confirm) {
            let Diary = Bmob.Object.extend("commend");
            let query = new Bmob.Query(Diary);
            query.get(objectId, {
              success: function(object) {
                object.destroy({
                  success: function(deleteObject) {
                    wx.showToast({
                      title: '删除成功',
                      icon: "none"
                    })
                    setTimeout(function() {
                      that.get_comment(that.data.correlationId)
                    }, 1000)
                  },
                  error: function(object, error) {
                    wx.showToast({
                      title: '删除失败',
                      icon: "none"
                    })
                  }
                });
              },
              error: function(object, error) {
                console.log("query object fail");
              }
            });
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

  },
  //获取用户回复内容
  mesInput(e) {
    this.setData({
      mesdata: e.detail.value
    })
  },
  //隐藏回复单
  hiddenbg() {
    this.setData({
      message: true,
    })
  },
  //回复
  recclick() {
    let that = this;
    let recset = this.data.recset;
    let mesdata = this.data.mesdata;
    let correlationId = this.data.correlationId;
    if (mesdata != '') {
      var Diary = Bmob.Object.extend("commend");
      var query = new Diary();
      query.set('firstname', recset.firstname)
      query.set('firstuserid', recset.firstuserid)
      query.set('recname', recset.recname)
      query.set('commend', mesdata)
      query.set('correlationId', correlationId)
      //提前置空
      that.setData({
        mesdata: '',
        message: true,
      })
      query.save(null, {
        success(res) {
          wx.showToast({
            title: '回复成功',
            icon: "none"
          })
          setTimeout(function() {
            that.get_comment(that.data.correlationId)
          }, 1000)
        },
        error(res) {
          wx.showToast({
            title: '提交失败',
            icon: "none"
          })
        }
      });
    } else {
      wx.showToast({
        title: '内容不能为空',
        icon: "none"
      })
    }
  }
})