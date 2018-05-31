Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定

  },
  data: {
    // 这里是一些组件内部数据
    navIndex: 0
  },
  attached:function(){
    this.setData({
      // 更新属性和数据的方法与更新页面数据的方法类似
      navIndex: wx.getStorageSync('nav')
    })
  },
  methods: {
    // 这里是一个自定义方法
    navSelect: function (event) {
      //console.log(event)
      wx.setStorageSync('nav', event.currentTarget.dataset.index);
    }
  }
})