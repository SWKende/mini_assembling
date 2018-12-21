const recommend = require("../../utils/recommend.js");
Page({
  data: {
    btnlist: [],
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
    }]
    this.setData({
      btnlist: btnlist
    })
    console.log(this.data.btnlist)
  },
  clickbtn(e) {
    let index = e.currentTarget.dataset.id;
    if (index == 1) {
      wx.navigateTo({
        url: '../history/history',
      })
    } else if (index == 2) {
      wx.navigateTo({
        url: '../collection/collection',
      })
    } else if (index == 3) {
      wx.navigateTo({
        url: '../about/about',
      })
    }
  },
  freedombtn(){
    console.log("diy")
  }


})