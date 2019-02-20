const Bmob = require('../utils/bmob.js');

//留言
function submit(that, method) {
  wx.getStorage({
    key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
    success(res) {
      //通过返回过来的方法进行setData赋值
      that.setData(method)
    },
    fail(res) {
      gotologin();
    }
  })
}

//收藏
function collection(correlationId) {
  wx.getStorage({
    key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
    success(res) {
      //获取到的用户数据
      let data = JSON.parse(res.data)
      //通过返回过来的方法进行setData赋值
      wx.showModal({
        title: '收藏',
        content: '收藏将会覆盖上一个',
        success(res) {
          if (res.confirm) {
            const Diary = new Bmob.Object.extend('_User');
            var query = new Bmob.Query(Diary);
            // 这个 id 是要修改条目的 id，你在生成这个存储并成功时可以获取到，请看前面的文档
            query.get(data.objectId, {
              success(res) {
                res.set('collection', correlationId)
                res.save();
                wx.showToast({
                  title: '收藏成功',
                  icon: 'none'
                })
              },
              error(res) {
                console.log("error")
              }
            })
          } else if (res.cancel) {

          }
        }
      })
    },
    fail(res) {
      gotologin();
    }
  })
}

function go_to_collection() {
  wx.getStorage({
    key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
    success(res) {
      wx.navigateTo({
        url: '../collection/collection',
      })
    },
    fail(res) {
      gotologin();
    }
  })
}

//未登录的用户 跳转到登陆界面
function gotologin() {
  wx.showToast({
    title: '登录后才可使用此功能',
    icon: 'none',
    success() {
      setTimeout(function() {
        wx.navigateTo({
          url: '../../pages/login/login',
        })
      }, 1000)
    }
  })
}
module.exports = {
  submit: submit,
  collection: collection,
  go_to_collection: go_to_collection
}