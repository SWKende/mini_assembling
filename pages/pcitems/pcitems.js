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
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
        }
      },
    })
  },
})