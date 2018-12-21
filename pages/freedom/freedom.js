const board_price = require('../../utils/board_price.js')
const chassis_price = require('../../utils/chassis_price.js')
const cpu_price = require('../../utils/cpu_price.js')
const hard_disk_price = require('../../utils/hard_disk_price.js')
const hot_price = require('../../utils/hot_price.js')
const memory_price = require("../../utils/memory_price.js")
const power_price = require('../../utils/power_price.js')
const video_card_price = require('../../utils/video_card_price.js')
Page({
  data: {
    position: []
  },
  onLoad() {
    let position = [{
      "name": "CPU",
      "index": 1,
      "image": "../../image/cpu.jpg"
    }, {
      "name": "显卡",
      "index": 2,
      "image": "../../image/video_card.jpg"
    }, {
      "name": "主板",
      "index": 3,
      "image": "../../image/board.jpg"
    }, {
      "name": "内存条",
      "index": 4,
      "image": "../../image/memory.jpg"
    }, {
      "name": "散热器",
      "index": 5,
      "image": "../../image/hot.jpg"
    }, {
      "name": "硬盘",
      "index": 6,
      "image": "../../image/hard_disk.jpg"
    }, {
      "name": "电源",
      "index": 7,
      "image": "../../image/power.jpg"
    }, {
      "name": "机箱",
      "index": 8,
      "image": "../../image/chassis.jpg"
    }]
    this.setData({
      position: position
    })
  },
  onShow() {
    let xx = board_price.rec();
    console.log(xx)
  },
  clickbtn(e) {
    let index = e.currentTarget.dataset.id
    switch (index) {
      case 1:
        wx.setStorage({
          key: 'freedomlist',
          data: cpu_price.rec(),
        })
        break;
      case 2:
        wx.setStorage({
          key: 'freedomlist',
          data: video_card_price.rec(),
        })
        break;
      case 3:
        wx.setStorage({
          key: 'freedomlist',
          data: board_price.rec(),
        })
        break;
      case 4:
        wx.setStorage({
          key: 'freedomlist',
          data: memory_price.rec(),
        })
        break;
      case 5:
        wx.setStorage({
          key: 'freedomlist',
          data: hot_price.rec(),
        })
        break;
      case 6:
        wx.setStorage({
          key: 'freedomlist',
          data: hard_disk_price.rec(),
        })
        break;
      case 7:
        wx.setStorage({
          key: 'freedomlist',
          data: power_price.rec(),
        })
        break;
      case 8:
        wx.setStorage({
          key: 'freedomlist',
          data: chassis_price.rec(),
        })
        break;
    };
    wx.navigateTo({
      url: '../freedomlist/freedomlist',
    })
  }
})