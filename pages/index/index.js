Page({
  data: {
    tabs: '',
  },
  onLoad: function() {
    let tab = [{
      "id": 1,
      "name": "1",
    }, {
      "id": 2,
      "name": "2",
    }, {
      "id": 3,
      "name": "3",
    }, {
      "id": 4,
      "name": "4",
    }]
    this.setData({
      tabs: tab
    })
  },
  clickbutton(e) {
    console.log(e.currentTarget.dataset.id)
  }
})