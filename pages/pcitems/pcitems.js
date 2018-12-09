// pages/pcitems/pcitems.js
Page({
  data: {
    items: [],
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
        console.log(arr);
        that.setData({
          items: arr
        })
      },
    })
  },
})