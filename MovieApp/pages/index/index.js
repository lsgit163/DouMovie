//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    year:new Date().getFullYear(),
    month:new Date().getMonth()+1,
    day:new Date().getDate(),
    imgs1:{},
    imgs2:{},
    imgs3:{}
  },
  
  onLoad: function () {
    var that = this;
    // 1-新歌榜
    wx.request({
      url: 'https://wwtliu.com/sxtstu/music/baidu/list.php?type=1&count=3&offset=0',
      method:'GET',
      success:function(res){
        var obj = {}
        obj.title = res.data.billboard.name;
        obj.arr = []
        for(var i=0; i<res.data.song_list.length;i++){
          obj.arr.push(res.data.song_list[i]['pic_big'])
        }
        // 修改data中的数据
        that.setData({
          imgs1:obj
        })
      }
    })

    // 2-热歌榜
    wx.request({
      url: 'https://wwtliu.com/sxtstu/music/baidu/list.php?type=2&count=3&offset=0',
      method: 'GET',
      success: function (res) {
        console.log(res)
        var obj = {}
        obj.title = res.data.billboard.name;
        obj.arr = []
        for (var i = 0; i < res.data.song_list.length; i++) {
          obj.arr.push(res.data.song_list[i]['pic_big'])
        }
        // 修改data中的数据
        that.setData({
          imgs2: obj
        })
      }
    })

    //11-摇滚榜
    wx.request({
      url: 'https://wwtliu.com/sxtstu/music/baidu/list.php?type=11&count=3&offset=0',
      method: 'GET',
      success: function (res) {
        console.log(res)
        var obj = {}
        obj.title = res.data.billboard.name;
        obj.arr = []
        for (var i = 0; i < res.data.song_list.length; i++) {
          obj.arr.push(res.data.song_list[i]['pic_big'])
        }
        // 修改data中的数据
        that.setData({
          imgs3: obj
        })
      }
    })
  }
})
