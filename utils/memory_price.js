var items = [{
  "name": "芝奇DDR4-2400 8G",
  "price": 369
}, {
  "name": "H110/H310集邦DDR3 8G",
  "price": 119
}]

function rec() {
  for (let i = 0; i < items.length; i++) {
    items[i].id = 4
  }
  return items;
}

module.exports = {
  rec: rec
}