const recommend = require("../../utils/recommend.js")
Page({
  data: {
    items: '',
    position: []
  },
  onLoad: function() {
    let that = this;
    recommend.init(that);
    let position = [{
      "price": "2000",
      "name": "0-2000元",
      "image": "http://imgsrc.baidu.com/forum/w%3D580%3B/sign=855ca9415a2c11dfded1bf2b531c63d0/1b4c510fd9f9d72a87dc7ebfd92a2834359bbbdc.jpg",
      "position_data": []
    }, {
      "price": "4000",
      "name": "2000-4000元",
        "image": "http://imgsrc.baidu.com/forum/w%3D580%3B/sign=dfb2c69010950a7b75354ecc3aea60d9/bf096b63f6246b609f892fd2e6f81a4c500fa295.jpg",
      "position_data": []
    }, {
      "price": "6000",
      "name": "4000-6000元",
      "image": "http://imgsrc.baidu.com/forum/w%3D580%3B/sign=855ca9415a2c11dfded1bf2b531c63d0/1b4c510fd9f9d72a87dc7ebfd92a2834359bbbdc.jpg",
      "position_data": []
    }, {
      "price": "8000",
      "name": "6000-8000元",
      "image": "http://imgsrc.baidu.com/forum/w%3D580%3B/sign=855ca9415a2c11dfded1bf2b531c63d0/1b4c510fd9f9d72a87dc7ebfd92a2834359bbbdc.jpg",
      "position_data": []
    }, {
      "price": "10000",
      "name": "8000元以上",
      "image": "http://imgsrc.baidu.com/forum/w%3D580%3B/sign=855ca9415a2c11dfded1bf2b531c63d0/1b4c510fd9f9d72a87dc7ebfd92a2834359bbbdc.jpg",
      "position_data": []
    }]
    this.setData({
      position: position
    })
  },
  onShow() {
    let items = this.data.items;
    for (let i = 0; i < items.length; i++) {
      let data = this.data.position;
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
  titlebtn(){
    wx.navigateTo({
      url: '../indextitle/indextitle',
    })
  }
})