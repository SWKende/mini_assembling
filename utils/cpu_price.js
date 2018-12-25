var items  = [{
  "name":"i5 8400",
  "price": 1273
}]

function rec(){
  for (let i = 0; i < items.length; i++) {
    items[i].id = 1
  }
  return items;
}

module.exports = {
  rec: rec
}