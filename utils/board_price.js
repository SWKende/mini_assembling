var items = [{
  "name": "微星B360M-MORTAR",
  "price": 599
}, {
  "name": "昂达H310C-SD3",
  "price": 339
}]

function rec() {
  for(let i=0;i<items.length;i++){
    items[i].id = 3
  }
  return items;
}

module.exports = {
  rec: rec
}