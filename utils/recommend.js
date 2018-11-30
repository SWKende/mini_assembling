const cpu_price = require("../utils/cpu_price.js");
const board_price = require("../utils/board_price.js");
const chassis_price = require("../utils/chassis_price.js");
const hard_disk_price = require("../utils/hard_disk_price.js");
const hot_price = require("../utils/hot_price.js");
const memory_price = require("../utils/memory_price.js");
const power_price = require("../utils/power_price.js");
const video_card_price = require("../utils/video_card_price.js");

var items = [{
  "type": "Intel",
  "title": "i5 8400高性能游戏平台",
  "cpu": "i5 8400",
  "cpu_p": 0,
  "board": "微星B360M-MORTAR",
  "board_p": 0,
  "memory": "芝奇DDR4-2400 8G",
  "memory_p": 0,
  "hot": "T400i散热器",
  "hot_p": 0,
  "video_card": "华硕雪豹GTX1060 6G",
  "video_card_p": 0,
  "hard_disk": "三星860evo固态 250G",
  "hard_disk_p": 0,
  "chassis": "酷冷至尊MasterBox Lite5机箱",
  "chassis_p": 0,
  "power": "航嘉jumper450B 450W",
  "power_p": 0
}, {
  "type": "Intel",
  "title": "i5 8400超高性价比平台",
  "cpu": "i5 8400",
  "cpu_p": 0,
  "board": "昂达H310C-SD3",
  "board_p": 0,
  "memory": "H110/H310集邦DDR3 8G",
  "memory_p": 0,
  "hot": "T400i散热器",
  "hot_p": 0,
  "video_card": "迪兰恒进RX580 8G X-Serial战将",
  "video_card_p": 1369,
  "hard_disk": "铭瑄终结者固态 240G",
  "hard_disk_p": 0,
  "chassis": "TT启航者F1机箱",
  "chassis_p": 0,
  "power": "安钛克VP450P 450W",
  "power_p": 259
}, {
  "type": "Intel",
  "title": "i5 8400超高性价比平台",
  "cpu": "i5 8400",
  "cpu_p": 0,
  "board": "昂达H310C-SD3",
  "board_p": 0,
  "memory": "H110/H310集邦DDR3 8G",
  "memory_p": 0,
  "hot": "T400i散热器",
  "hot_p": 0,
  "video_card": "迪兰恒进RX580 8G X-Serial战将",
  "video_card_p": 0,
  "hard_disk": "铭瑄终结者固态 240G",
  "hard_disk_p": 0,
  "chassis": "TT启航者F1机箱",
  "chassis_p": 0,
  "power": "安钛克VP450P 450W",
  "power_p": 250
}]

function init(that) {
  let cpu_items = cpu_price.rec();
  let board_items = board_price.rec();
  let chassis_items = chassis_price.rec();
  let hard_disk_items = hard_disk_price.rec();
  let hot_items = hot_price.rec();
  let memory_items = memory_price.rec();
  let power_items = power_price.rec();
  let video_card_items = video_card_price.rec();
  //cpu循环
  for (let i = 0; i < cpu_items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (cpu_items[i].name == items[j].cpu) {
        items[j].cpu_p = cpu_items[i].price;
      }
    }
  }
  //主板循环
  for (let i = 0; i < board_items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (board_items[i].name == items[j].board) {
        items[j].board_p = board_items[i].price;
      }
    }
  }
  //机箱循环
  for (let i = 0; i < chassis_items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (chassis_items[i].name == items[j].chassis) {
        items[j].chassis_p = chassis_items[i].price;
      }
    }
  }
  //硬盘循环
  for (let i = 0; i < hard_disk_items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (hard_disk_items[i].name == items[j].hard_disk) {
        items[j].hard_disk_p = hard_disk_items[i].price;
      }
    }
  }
  //散热器循环
  for (let i = 0; i < hot_items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (hot_items[i].name == items[j].hot) {
        items[j].hot_p = hot_items[i].price;
      }
    }
  }
  //内存循环
  for (let i = 0; i < memory_items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (memory_items[i].name == items[j].memory) {
        items[j].memory_p = memory_items[i].price;
      }
    }
  }
  //电源循环
  for (let i = 0; i < power_items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (power_items[i].name == items[j].power) {
        items[j].power_p = power_items[i].price;
      }
    }
  }
  //显卡循环
  for (let i = 0; i < video_card_items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (video_card_items[i].name == items[j].video_card) {
        items[j].video_card_p = video_card_items[i].price;
      }
    }
  }

  that.setData({
    'items': items
  })
}

module.exports = {
  init: init
}