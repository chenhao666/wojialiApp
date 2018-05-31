//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      programmeIndex:0,//方案选择索引
    },
  //改变方案索引
    changeIndex:function(event){
      this.setData({ programmeIndex: event.currentTarget.dataset.index})
      //console.log(this.data.programmeIndex)
    },
    //跳转方案页面
    goProgramme:function(e){
      wx.navigateTo({
        url: '../programme/programme'
      })
    }
   
})
