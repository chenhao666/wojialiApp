//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 2,
    //列表
    nodes:[
      [
        {
          name: 'li',
          attrs: {
            class: 'step_item now_step',
            bindtap: 'chooseStep',
            dataIndex: '0'
          },
          children: [
            {
              name: 'div',
              attrs: {
                class: 'iconfont icon-circleyuanquan'
              }
            },
            {
              name: 'div',
              attrs: {
                class: 'step_text'
              },
              children: [
                {
                  type: 'text',
                  text: '准备'
                }
              ]
            }
          ]
        },
        {
          name: 'li',
          attrs: {
            class: 'step_item line'
          }
        },
        {
          name: 'div',
          attrs: {
            class: 'clear'
          }
        }
      ],[
        {
          name: 'li',
          attrs: {
            class: 'step_item',
            bindtap: 'chooseStep',
            dataIndex: '1'
          },
          children: [
            {
              name: 'div',
              attrs: {
                class: 'iconfont icon-shuidianbiaochaobiao'
              }
            },
            {
              name: 'div',
              attrs: {
                class: 'step_text'
              },
              children: [
                {
                  type: 'text',
                  text: '水电'
                }
              ]
            }
          ]
        },
        {
          name: 'li',
          attrs: {
            class: 'step_item line'
          }
        },
        {
          name: 'div',
          attrs: {
            class: 'clear'
          }
        }
      ],[
        {
          name: 'li',
          attrs: {
            class: 'step_item',
            bindtap: 'chooseStep',
            dataIndex: '2'
          },
          children: [
            {
              name: 'div',
              attrs: {
                class: 'iconfont icon-nishuigong01'
              }
            },
            {
              name: 'div',
              attrs: {
                class: 'step_text'
              },
              children: [
                {
                  type: 'text',
                  text: '泥木'
                }
              ]
            }
          ]
        },
        {
          name: 'li',
          attrs: {
            class: 'step_item line'
          }
        },
        {
          name: 'div',
          attrs: {
            class: 'clear'
          }
        }
      ],[
        {
          name: 'li',
          attrs: {
            class: 'step_item',
            bindtap: 'chooseStep',
            dataIndex: '3'
          },
          children: [
            {
              name: 'div',
              attrs: {
                class: 'iconfont icon-youqi'
              }
            },
            {
              name: 'div',
              attrs: {
                class: 'step_text'
              },
              children: [
                {
                  type: 'text',
                  text: '油漆'
                }
              ]
            }
          ]
        },
        {
          name: 'li',
          attrs: {
            class: 'step_item line'
          }
        },
        {
          name: 'div',
          attrs: {
            class: 'clear'
          }
        }
      ],[
        {
          name: 'li',
          attrs: {
            class: 'step_item',
            bindtap: 'chooseStep',
            dataIndex: '4'
          },
          children: [
            {
              name: 'div',
              attrs: {
                class: 'iconfont icon-anzhuanggongju'
              }
            },
            {
              name: 'div',
              attrs: {
                class: 'step_text'
              },
              children: [
                {
                  type: 'text',
                  text: '安装'
                }
              ]
            }
          ]
        },
        {
          name: 'li',
          attrs: {
            class: 'step_item line'
          }
        },
        {
          name: 'div',
          attrs: {
            class: 'clear'
          }
        }
      ],[
        {
          name: 'li',
          attrs: {
            class: 'step_item',
            bindtap: 'chooseStep',
            dataIndex: '5'
          },
          children: [
            {
              name: 'div',
              attrs: {
                class: 'iconfont icon-wancheng'
              }
            },
            {
              name: 'div',
              attrs: {
                class: 'step_text'
              },
              children: [
                {
                  type: 'text',
                  text: '竣工'
                }
              ]
            }
          ]
        },
        {
          name: 'div',
          attrs: {
            class: 'clear'
          }
        }
      ]
    ],
    active:'0',
    nowIndex:'0'
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;

    if (this.data.currentTab === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  },
  //跳转3D
  go3D:function(e){
    wx.navigateTo({
      url: './3dShow/3dShow'
    })
  },
  //选择阶段
  chooseStep:function(event){
    this.setData({
      active: event.target.dataset.index
    })
  }
})  