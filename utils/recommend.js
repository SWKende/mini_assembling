var items = [{
  "type": "Intel",
  "title": "i5 8400高性能游戏平台",
  "cpu": "Intel i5 8400",
  "cpu_p": 1273,
  "board": "微星B360M-MORTAR",
  "board_p": 599,
  "memory": "芝奇DDR4 8G",
  "memory_p": 369,
  "hot": "酷冷至尊T400i散热器",
  "hot_p": 79,
  "video_card": "华硕雪豹GTX1060 6G",
  "video_card_p": 2099,
  "hard_disk": "三星860evo固态 250G",
  "hard_disk_p": 329,
  "chassis": "酷冷至尊MasterBox Lite5机箱",
  "chassis_p": 299,
  "power": "航嘉jumper450B 450W",
  "power_p": 269
}, {
  "type": "Intel",
  "title": "i5 8400超高性价比平台",
  "cpu": "Intel i5 8400",
  "cpu_p": 1273,
  "board": "昂达H310C-SD3",
  "board_p": 339,
  "memory": "H110/H310集邦DDR3 8G",
  "memory_p": 119,
  "hot": "酷冷至尊T400i散热器",
  "hot_p": 79,
  "video_card": "迪兰恒进RX580 8G X-Serial战将",
  "video_card_p": 1369,
  "hard_disk": "铭瑄终结者固态 240G",
  "hard_disk_p": 219,
  "chassis": "TT启航者F1机箱",
  "chassis_p": 169,
  "power": "安钛克VP450P 450W",
  "power_p": 259
}, {
  "type": "Intel",
  "title": "i5 8400超高性价比平台",
  "cpu": "Intel i5 8400",
  "cpu_p": 1273,
  "board": "昂达H310C-SD3",
  "board_p": 339,
  "memory": "H110/H310集邦DDR3 8G",
  "memory_p": 119,
  "hot": "酷冷至尊T400i散热器",
  "hot_p": 79,
  "video_card": "迪兰恒进RX580 8G X-Serial战将",
  "video_card_p": 1369,
  "hard_disk": "铭瑄终结者固态 240G",
  "hard_disk_p": 219,
  "chassis": "TT启航者F1机箱",
  "chassis_p": 169,
  "power": "安钛克VP450P 450W",
  "power_p": 250
}]

function init(that) {
  that.setData({
    'items': items
  })
}

module.exports = {
  init: init
}