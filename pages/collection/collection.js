Page({
  data: {
    data: ''
  },
  onLoad: function(options) {

  },
  onChange(e) {
    console.log(e.detail)
    console.log(e.detail.x)
    if (e.detail.x > 90 && e.detail.x < 237) {
      if (e.detail.y > 31 && e.detail.y < 274) {
        this.setData({
          data: "成功"
        })
      } else {
        this.setData({
          data: "失败"
        })
      }
    } else {
      this.setData({
        data: "失败"
      })
    }
  }
})