const islogin = require('../../utils/islogin.js');
const Bmob = require('../../utils/bmob.js');
Page({
  data: {
    items: [],
    nodata: false
  },
  onLoad() {
    let that = this;
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
  commentbtn() {
    let id = e.currentTarget.dataset.id
    //每组信息的唯一id
    let correlationId = this.data.items[id].correlationId
    // console.log(correlationId)
    wx.navigateTo({
      url: '../comment/comment',
    })
  },
  //收藏
  collectionbtn(e) {
    let id = e.currentTarget.dataset.id
    //每组信息的唯一id
    let correlationId = this.data.items[id].correlationId
    islogin.collection(correlationId);
    // console.log(correlationId)
  },
})