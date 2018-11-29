const recommend = require("../../utils/recommend.js")
Page({
  data: {
    items:''
  },
  onLoad: function() {
    let that = this;
    recommend.init(that);
    console.log(this.data.items);
  },
  clickbutton(e) {
    console.log(e.currentTarget.dataset.id)
  }
})