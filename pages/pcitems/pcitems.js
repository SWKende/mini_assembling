// pages/pcitems/pcitems.js
Page({
  data: {
    items: [],
    nodata: false
  },
  onLoad() {
    let that = this;
    wx.getStorage({
      key: 'pc_items',
      success(res) {
        let arr = new Array();
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i] != null) {
            arr.push(res.data[i]);
          }
        }
        //给每个list附加id
        for (let j = 0; j < arr.length; j++) {
          arr[j].id = j;
        }
        console.log(arr);
        if (arr == "") {
          that.setData({
            nodata: true
          })
        } else {
          that.setData({
            items: arr
          })
        }
      },
      fail() {
        that.setData({
          nodata: true
        })
      }
    })


  },
  clickbutton(e) {
    let id = e.currentTarget.dataset.id
    console.log(id);
  }
})