const Bmob = require('../../utils/bmob.js');
Page({
  data: {
    items: [],
    position: []
  },
  onLoad: function() {
    let that = this;
    let position = [{
      "price": "2000",
      "name": "0-2000元",
      "image": "../../image/1.jpg",
      "position_data": []
    }, {
      "price": "4000",
      "name": "2000-4000元",
      "image": "../../image/2.jpg",
      "position_data": []
    }, {
      "price": "6000",
      "name": "4000-6000元",
      "image": "../../image/3.jpg",
      "position_data": []
    }, {
      "price": "8000",
      "name": "6000-8000元",
      "image": "../../image/4.jpg",
      "position_data": []
    }, {
      "price": "10000",
      "name": "8000元以上",
      "image": "../../image/5.jpg",
      "position_data": []
    }]
    this.setData({
      position: position
    })

    var Diary = Bmob.Object.extend("recommend");
    var query = new Bmob.Query(Diary);
    wx.showLoading({
      title: '数据获取中',
      mask: true
    })
    query.find({
      success(res) {
        // console.log(res)
        wx.hideLoading()
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          res[i].attributes.correlationId = res[i].id
          arr.push(res[i].attributes);
        };
        let items = arr;
        for (let i = 0; i < items.length; i++) {
          let data = that.data.position;
          let price =
            items[i].board_p +
            items[i].chassis_p +
            items[i].cpu_p +
            items[i].hard_disk_p +
            items[i].hot_p +
            items[i].memory_p +
            items[i].power_p +
            items[i].video_card_p;
          if (0 < price && price <= 2000) {
            data[0].position_data[i] = items[i]
          } else if (2000 < price && price <= 4000) {
            data[1].position_data[i] = items[i]
          } else if (4000 < price && price <= 6000) {
            data[2].position_data[i] = items[i]
          } else if (6000 < price && price <= 8000) {
            data[3].position_data[i] = items[i]
          } else if (8000 < price) {
            data[4].position_data[i] = items[i]
          }
        }
      },
      error(err) {
        wx.hideLoading();
      }
    })

  },
  onShow() {

  },
  clickbtn(e) {
    let id = e.currentTarget.dataset.id;
    let position = this.data.position;
    for (let i = 0; i < position.length; i++) {
      if (id == position[i].price) {
        console.log(position[i])
        wx.setStorage({
          key: 'pc_items',
          data: position[i].position_data,
        })
        wx.navigateTo({
          url: '../pcitems/pcitems',
        })
      }
    }
  },
  titlebtn() {
    wx.navigateTo({
      url: '../indextitle/indextitle',
    })
  }
})