var items = [{
  "name": "航嘉jumper450B 450W",
  "price": 269
}, {
    "name": "安钛克VP450P 450W",
    "price": 259
  }]

function rec() {
  for (let i = 0; i < items.length; i++) {
    items[i].id = 7
  }
  return items;
}

module.exports = {
  rec: rec
}