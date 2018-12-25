var items = [{
  "name": "酷冷至尊MasterBox Lite5机箱",
  "price": 299
}, {
  "name": "TT启航者F1机箱",
  "price": 169
}]

function rec() {
  for (let i = 0; i < items.length; i++) {
    items[i].id = 8
  }
  return items;
}

module.exports = {
  rec: rec
}