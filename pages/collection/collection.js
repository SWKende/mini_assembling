const Bmob = require('../../utils/bmob.js');
Page({
  data: {
    items: [],
    nodata: false
  },
  onLoad() {
    let that = this;
    wx.showLoading({
      title: '数据获取中',
      mask: true
    })
    wx.getStorage({
      key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
      success(res) {
        let data = JSON.parse(res.data)

        var Diary = Bmob.Object.extend("_User");
        var query = new Bmob.Query(Diary);
        query.get(data.objectId, {
          success(res) {
            console.log(res)
            var Diary_getrec = Bmob.Object.extend("recommend");
            var diary_getrec = new Bmob.Query(Diary_getrec);
            console.log(res.attributes.collection)
            if (res.attributes.collection == undefined) {
              wx.hideLoading();
              that.setData({
                nodata: true
              })
              wx.showToast({
                title: '没有收藏',
                icon: "none"
              })
            } else {

              diary_getrec.get(res.attributes.collection, {
                success(res) {
                  wx.hideLoading();
                  console.log(res)
                  let arr = new Array()
                  arr.push(res.attributes)
                  that.setData({
                    items: arr
                  })
                },
                error(res) {
                  wx.hideLoading();
                  that.setData({
                    nodata: true
                  })
                  wx.showToast({
                    title: '数据获取失败',
                    icon: "none"
                  })
                }
              })
            }
          },
          error(res) {
            wx.hideLoading();
            that.setData({
              nodata: true
            })
            wx.showToast({
              title: '数据获取失败',
              icon: "none"
            })
          }
        })
      },
    })
  }
})