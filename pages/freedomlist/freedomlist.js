Page({
  data: {
    items: []
  },
  onLoad() {
    let that = this
    wx.getStorage({
      key: 'freedomlist',
      success: function(res) {
        console.log(res.data);
        that.setData({
          items: res.data
        })
      },
    })
  },
  onShow() {

  },
})