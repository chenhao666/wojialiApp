// user/user.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginFlag: false,//登录状态
    nikeName:'',
    userPhoto:'',//用户头像
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
    if (wx.getStorageSync('loginFlag')){
      var that=this;
      showUserInfo(function(result){
        that.setData({
          loginFlag: true,
          nikeName: result.nickName,
          userPhoto: result.avatarUrl
        })
      })
    }else{
      this.setData({
        loginFlag:false
      })
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
  // 首次登录
  bindGetUserInfo: function (e) {
    if (this.data.loginFlag) return;
    util.showBusy('正在登录');

    var that = this;
    var userInfo = e.detail.userInfo;

    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {

          // 检查登录是否过期
          wx.checkSession({
            success: function () {
              // 登录态未过期
              util.showSuccess('登录成功');
              /*that.setData({
                userInfo: userInfo,
                logged: true
              })*/
              //登录状态缓存
              wx.setStorageSync("loginFlag", true)
              showUserInfo(function (result) {
                that.setData({
                  loginFlag: true,
                  nikeName: result.nickName,
                  userPhoto: result.avatarUrl
                })
              })
            },

            fail: function () {
              qcloud.clearSession();
              // 登录态已过期，需重新登录
              var options = {
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv,
                userInfo: userInfo
              }
              that.doLogin(options);
            },
          });
        } else {
          util.showModel('用户未授权', e.detail.errMsg);
        }
      }
    });
  },
  //登录
  doLogin: function (options) {
    var that = this;
    wx.login({
      success: function (loginResult) {
        var loginParams = {
          code: loginResult.code,
          encryptedData: options.encryptedData,
          iv: options.iv,
        }
        qcloud.requestLogin({
          loginParams, success() {
            util.showSuccess('登录成功');

            /*that.setData({
                 userInfo: userInfo,
                 logged: true
               })*/
            //登录状态缓存
            wx.setStorageSync("loginFlag", true)
            showUserInfo(function (result) {
              that.setData({
                loginFlag: true,
                nikeName: result.nickName,
                userPhoto: result.avatarUrl
              })
            })
          },
          fail(error) {
            util.showModel('登录失败', error)
            console.log('登录失败', error)
          }
        });
      },
      fail: function (loginError) {
        util.showModel('登录失败', loginError)
        console.log('登录失败', loginError)
      },
    });
  },
  //跳转到设置页面
  goSetting:function(){
    wx.navigateTo({
      url: './setting/setting'
    })
  }
})
function showUserInfo(callback){
  qcloud.request({
    url: config.service.requestUrl,
    login: true,
    success(result) {
      //util.showSuccess('登录成功')
      //console.log(result.data.data)
      callback(result.data.data)
    },

    fail(error) {
      util.showModel('请求失败', error)
      console.log('request fail', error)
    }
  })
}