var items = [{
  "name": "T400i散热器",
  "price": 79
}]

function rec() {
  for (let i = 0; i < items.length; i++) {
    items[i].id = 5
  }
  return items;
}

module.exports = {
  rec: rec
}