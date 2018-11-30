const recommend = require("../../utils/recommend.js");
Page({
  data: {
    items: []
  },
  onLoad() {
    let that = this;
    recommend.init(that);
    console.log(this.data.items)
  },
})