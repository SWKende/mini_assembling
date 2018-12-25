var items = [{
  "name": "三星860evo固态 250G",
  "price": 329
}, {
    "name": "铭瑄终结者固态 240G",
    "price": 219
  }]

function rec() {
  for (let i = 0; i < items.length; i++) {
    items[i].id = 6
  }
  return items;
}

module.exports = {
  rec: rec
}