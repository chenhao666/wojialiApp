// pages/user/setting/setting.js
var util = require('../../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    storageInfoSize:'0M'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    try {
      var res = wx.getStorageInfoSync()
      //console.log(res.keys)
     // console.log(res.currentSize)
      //console.log(res.limitSize)
      var num = res.currentSize / 1024;
      this.setData({
        storageInfoSize: num.toFixed(1)+'M'
      })
    } catch (e) {
      // Do something when catch error
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  //清除全部缓存
  clearAllStorage:function(e){
    util.showBusy('清理中');
    try {
      wx.clearStorageSync()
      util.showSuccess('清理成功');
    } catch (e) {
      // Do something when catch error
      util.showModel('清理失败',e);
    }
  },
  //退出登录
  loginOut:function(e){
    try {
      wx.removeStorageSync('loginFlag');
      util.showSuccess('退出成功');
    } catch (e) {
      // Do something when catch error
    }
  }
})