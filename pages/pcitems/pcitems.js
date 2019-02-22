const islogin = require('../../utils/islogin.js');
const Bmob = require('../../utils/bmob.js');
Page({
  data: {
    userinfo: [],
    items: [],
    nodata: false
  },
  onLoad() {
    let that = this;
    //获取用户信息
    islogin.getUserinfo(this)
    wx.getStorage({
      key: 'pc_items',
      success(res) {
        let arr = new Array();
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i] != null) {
            arr.push(res.data[i]);
          }
        }
        //给每个list附加id
        for (let j = 0; j < arr.length; j++) {
          arr[j].id = j;
        }
        console.log(arr);
        if (arr == "") {
          that.setData({
            nodata: true
          })
        } else {
          that.setData({
            items: arr
          })
        }
      },
      fail() {
        that.setData({
          nodata: true
        })
      }
    })
  },
  //点击卡片
  clickbutton(e) {
    let id = e.currentTarget.dataset.id
    console.log(this.data.items[id])
  },
  //评论
  commentbtn(e) {
    let id = e.currentTarget.dataset.id
    //每组信息的唯一id
    let correlationId = this.data.items[id].correlationId;
    // console.log(correlationId)
    wx.navigateTo({
      url: '../comment/comment?' + "correlationId=" + correlationId,
    })
  },
  //收藏
  collectionbtn(e) {
    let id = e.currentTarget.dataset.id
    //每组信息的唯一id
    let correlationId = this.data.items[id].correlationId
    let userinfo = this.data.userinfo
    if (this.data.userinfo.username == undefined || this.data.userinfo.objectId == undefined) {
      islogin.gotologin();
    } else {
      //获取到的用户数据
      wx.showModal({
        title: '收藏',
        content: '收藏将会覆盖上一个',
        success(res) {
          if (res.confirm) {
            const Diary = new Bmob.Object.extend('_User');
            var query = new Bmob.Query(Diary);
            // 这个 id 是要修改条目的 id，你在生成这个存储并成功时可以获取到，请看前面的文档
            query.get(userinfo.objectId, {
              success(res) {
                res.set('collection', correlationId)
                res.save();
                wx.showToast({
                  title: '收藏成功',
                  icon: 'none'
                })
              },
              error(res) {
                console.log("error")
              }
            })
          } else if (res.cancel) {

          }
        }
      })

    }

  },
})