// pages/welcome/weilcome.js

const app = getApp();
Page({
  data: {
    avatarUrl: '',
    userInfo: {},
  },
  userLogin: function(e) {
    wx.reLaunch({
      url: '/pages/register/register',
    })
 },

  onLoad: function(options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              wx.reLaunch({
                url: '/pages/register/register',
              })
            }
          })
        }
      }
    })
  }
})