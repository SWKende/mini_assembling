var items = [{
  "name": "华硕雪豹GTX1060 6G",
  "price": 2099
}, {
  "name": "迪兰恒进RX580 8G X-Serial战将",
  "price": 1369
}]

function rec() {
  for (let i = 0; i < items.length; i++) {
    items[i].id = 2
  }
  return items;
}

module.exports = {
  rec: rec
}