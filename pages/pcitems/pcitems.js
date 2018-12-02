// pages/pcitems/pcitems.js
Page({
  data: {

  },
  onLoad() {
    wx.getStorage({
      key: 'pc_items',
      success(res) {
        console.log(res)
      },
    })
  },
})