Page({
  data: {
    items: [],
    nodata: false,
    fdtitle: ''
  },
  onLoad() {
    let that = this
    wx.getStorage({
      key: 'freedomlist',
      success: function(res) {
        let fdtitle = "";
        switch (res.data[0].onlyid) {
          case 1:
            fdtitle = "CPU";
            break;
          case 2:
            fdtitle = "显卡";
            break;
          case 3:
            fdtitle = "主板";
            break;
          case 4:
            fdtitle = "内存条";
            break;
          case 5:
            fdtitle = "散热器";
            break;
          case 6:
            fdtitle = "硬盘";
            break;
          case 7:
            fdtitle = "电源";
            break;
          case 8:
            fdtitle = "机箱";
            break;
        }


        that.setData({
          items: res.data,
          fdtitle: fdtitle
        })
      },
      fail() {
        that.setData({
          nodata: true
        })
      }
    })
  },
  onShow() {

  },
})