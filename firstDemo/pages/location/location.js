Page({

  mapTap: function() {
    wx.openLocation({
      latitude: 30.657427,
      longitude: 104.066163,
      scale: 28,
      name:'成都市天府广场',
      address:"成都市天府广场",
      success: function(res) {
        console.log(res);
      },
      fail: function(err) {
        console.log(err);
      },
      complete: function(info) {
        console.log(info);
      }
    })
  },

//"获取位置信息" 按钮事件处理函数
  locationTap: function() {
    var self = this;
    wx.getLocation({
      type:'gcj02',
      success: function(res) {
        console.log(res);
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 28,
          name: "当前位置",
          address: '未知地址',
          success: function(res) {
            console.log(res);
          },
          fail: function(err) {
            console.log(err);
          },
          complete: function(info) {
            console.log(info);
          }
        })
      },
    })
  }
})