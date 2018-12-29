// const Bmob = require('../../utils/bmob.js');

Page({
  data: {
    position: [],
    cpu_price: [],
    video_card_price: [],
    chassis_price: [],
    board_price: [],
    hot_price: [],
    power_price: [],
    hard_disk_price: [],
    memory_price: []
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

    let that = this;
    var Diary_cpu = Bmob.Object.extend("cpu_price");
    var query_cpu = new Bmob.Query(Diary_cpu);
    var Diary_video_card = Bmob.Object.extend("video_card_price");
    var query_video_card = new Bmob.Query(Diary_video_card);
    var Diary_board = Bmob.Object.extend("board_price");
    var query_board = new Bmob.Query(Diary_board);
    var Diary_memory = Bmob.Object.extend("memory_price");
    var query_memory = new Bmob.Query(Diary_memory);
    var Diary_hot = Bmob.Object.extend("hot_price");
    var query_hot = new Bmob.Query(Diary_hot);
    var Diary_hard_disk = Bmob.Object.extend("hard_disk_price");
    var query_hard_disk = new Bmob.Query(Diary_hard_disk);
    var Diary_power = Bmob.Object.extend("power_price");
    var query_power = new Bmob.Query(Diary_power);
    var Diary_chassis = Bmob.Object.extend("chassis_price");
    var query_chassis = new Bmob.Query(Diary_chassis);

    wx.showLoading({
      title: '数据获取中',
      mask: true
    })
    query_cpu.find({
      success(res) {
        wx.hideLoading()
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          arr.push(res[i].attributes);
        };
        that.setData({
          cpu_price: arr
        })
      },
      error(err) {
        wx.hideLoading();
      }
    })
    query_board.find({
      success(res) {
        wx.hideLoading()
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          arr.push(res[i].attributes);
        };
        that.setData({
          board_price: arr
        })
      },
      error(err) {
        wx.hideLoading();
      }
    })
    query_chassis.find({
      success(res) {
        wx.hideLoading()
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          arr.push(res[i].attributes);
        };
        that.setData({
          chassis_price: arr
        })
      },
      error(err) {
        wx.hideLoading();
      }
    })
    query_hard_disk.find({
      success(res) {
        wx.hideLoading()
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          arr.push(res[i].attributes);
        };
        that.setData({
          hard_disk_price: arr
        })
      },
      error(err) {
        wx.hideLoading();
      }
    })
    query_hot.find({
      success(res) {
        wx.hideLoading()
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          arr.push(res[i].attributes);
        };
        that.setData({
          hot_price: arr
        })
      },
      error(err) {
        wx.hideLoading();
      }
    })
    query_memory.find({
      success(res) {
        wx.hideLoading()
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          arr.push(res[i].attributes);
        };
        that.setData({
          memory_price: arr
        })
      },
      error(err) {
        wx.hideLoading();
      }
    })
    query_power.find({
      success(res) {
        wx.hideLoading()
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          arr.push(res[i].attributes);
        };
        that.setData({
          power_price: arr
        })
      },
      error(err) {
        wx.hideLoading();
      }
    })
    query_video_card.find({
      success(res) {
        wx.hideLoading()
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          arr.push(res[i].attributes);
        };
        that.setData({
          video_card_price: arr
        })
      },
      error(err) {
        wx.hideLoading();
      }
    })
  },
  clickbtn(e) {
    let index = e.currentTarget.dataset.id
    switch (index) {
      case 1:
        wx.setStorage({
          key: 'freedomlist',
          data: this.data.cpu_price,
        })
        break;
      case 2:
        wx.setStorage({
          key: 'freedomlist',
          data: this.data.video_card_price,
        })
        break;
      case 3:
        wx.setStorage({
          key: 'freedomlist',
          data: this.data.board_price,
        })
        break;
      case 4:
        wx.setStorage({
          key: 'freedomlist',
          data: this.data.memory_price,
        })
        break;
      case 5:
        wx.setStorage({
          key: 'freedomlist',
          data: this.data.hot_price,
        })
        break;
      case 6:
        wx.setStorage({
          key: 'freedomlist',
          data: this.data.hard_disk_price,
        })
        break;
      case 7:
        wx.setStorage({
          key: 'freedomlist',
          data: this.data.power_price,
        })
        break;
      case 8:
        wx.setStorage({
          key: 'freedomlist',
          data: this.data.chassis_price,
        })
        break;
    };
    wx.navigateTo({
      url: '../freedomlist/freedomlist',
    })
  },
})