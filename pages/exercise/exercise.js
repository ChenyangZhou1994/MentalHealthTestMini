// pages/exercise/exercise.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    sentence: "",
  },

  bindTxt: function (e) {
    this.setData({
      sentence: e.detail.value,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  submit: function (e) {
    var sentence = this.data.sentence;
    app.globalData.sentence=sentence;
    console.log(app.globalData.sentence)
    wx.request({
      url: 'http://127.0.0.1:8000/api/submit/',
      data: {sentence: sentence},
      method: 'POST',
      success: (result) => {
        console.log(result.data)
        app.globalData.status = result.data;
        console.log(app.globalData.status)
      },
    }),
    wx.reLaunch({
      url: '../index/index',
    })
  },



  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})