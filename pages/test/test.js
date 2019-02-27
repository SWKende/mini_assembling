const Bmob = require('../../utils/bmob.js');
Page({
  data: {
    array: ["cpu", "主板", "显卡", "内存条", "硬盘", "散热器", "电源", "机箱"],
    index: 0,
    items: [],
    tablename: "cpu_price",
    price: "",
    name: '',
    objectid: '',
    add_name: '',
    add_price: '',
    ifadd: true,
    ifchange: true,
  },
  onLoad() {
    this.firstin(this.data.tablename);
  },
  //数据初始化
  firstin(tablename) {
    let that = this
    var Diary_cpu = Bmob.Object.extend(tablename);
    var query_cpu = new Bmob.Query(Diary_cpu);
    query_cpu.find({
      success(res) {
        console.log(res)
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          res[i].attributes.objectid = res[i].id;
          arr.push(res[i].attributes)
        }
        that.setData({
          items: arr
        })
      },
      error(err) {}
    })

  },
  //选择器
  bindPickerChange(e) {
    let that = this
    let value = e.detail.value
    this.setData({
      index: value,
      ifchange: true,
      price: "",
      name: '',
      objectid: '',
    })
    if (value == "0") {
      //CPU
      this.setData({
        tablename: "cpu_price"
      })
    } else if (value == "1") {
      //主板
      this.setData({
        tablename: "board_price"
      })
    } else if (value == "2") {
      //显卡
      this.setData({
        tablename: "video_card_price"
      })
    } else if (value == "3") {
      //内存条
      this.setData({
        tablename: "memory_price"
      })
    } else if (value == "4") {
      //硬盘
      this.setData({
        tablename: "hard_disk_price"
      })
    } else if (value == "5") {
      //散热器
      this.setData({
        tablename: "hot_price"
      })
    } else if (value == "6") {
      //电源
      this.setData({
        tablename: "power_price"
      })
    } else if (value == "7") {
      //机箱
      this.setData({
        tablename: "chassis_price"
      })
    }
    this.getitems();
  },
  //获取列表信息
  getitems() {
    let that = this
    let tablename = this.data.tablename;
    var Diary = Bmob.Object.extend(tablename);
    var query = new Bmob.Query(Diary);
    query.find({
      success(res) {
        console.log(res)
        let arr = new Array();
        for (let i = 0; i < res.length; i++) {
          res[i].attributes.objectid = res[i].id;
          arr.push(res[i].attributes)
        }
        that.setData({
          items: arr
        })
      },
      error(err) {}
    })
  },
  changepricebtn(e) {
    this.setData({
      price: e.detail.value
    })
  },
  //修改价格
  changebtn(e) {
    this.setData({
      ifchange: false,
      objectid: e.currentTarget.dataset.objectid,
      name: e.currentTarget.dataset.name
    })



  },
  changesubmit() {
    let that = this
    let objectid = this.data.objectid
    let tablename = this.data.tablename;
    let price = parseInt(this.data.price)


    let Diary = Bmob.Object.extend(tablename);
    let query = new Bmob.Query(Diary);
    query.get(objectid, {
      success(res) {
        res.set('price', price);
        res.save();
        that.setData({
          ifchange: true,
          price: "",
          name: '',
          objectid: '',
        })
        that.firstin(tablename);
      },
      error(res) {
        console.log(res)
      }
    })
  },
  //删除item
  delectbtn(e) {
    let that = this
    let tablename = this.data.tablename;
    let objectid = e.currentTarget.dataset.objectid;
    let name = e.currentTarget.dataset.name;
    wx.showModal({
      title: '删除',
      success(res) {
        if (res.confirm) {
          let Diary = Bmob.Object.extend(tablename);
          let query = new Bmob.Query(Diary);
          query.get(objectid, {
            success(res) {
              res.destroy({
                success(deleteObject) {
                  that.firstin(tablename);
                },
                error(object, error) {
                  console.log('删除日记失败');
                }
              });
            },
            error(res) {
              console.log(res)
            }
          })
        } else if (res.cancel) {

        }
      }
    })
  },
  inputaddname(e) {
    this.setData({
      add_name: e.detail.value
    })
  },
  inputaddprice(e) {
    this.setData({
      add_price: e.detail.value
    })
  },
  //出现新增单
  addbtn() {
    this.setData({
      ifadd: false
    })
  },
  //提交新增
  addsubmit() {
    let that = this
    let add_name = this.data.add_name;
    let add_price = parseInt(this.data.add_price);
    let tablename = this.data.tablename;
    var Diary = Bmob.Object.extend(tablename);
    var diary = new Diary();
    diary.set("name", add_name);
    diary.set("price", add_price);
    diary.save(null, {
      success(res) {
        that.firstin(tablename);
      },
      error(result, error) {}
    });

  },
  //隐藏添加按钮
  addhidden() {
    this.setData({
      ifadd: true
    })
  }
})