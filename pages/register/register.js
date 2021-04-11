const app = getApp();
Page({
  data: {
    userName: "",
    userNumber: "",
    userPhone: "",
    userClass: "",
  },
  formSubmit: function(res) {
    console.log(res);
    const userValue = res.detail.value;
    if ((userValue.userClass && userValue.userName && userValue.userPhone && userValue.userNumber) == '') {
      wx.showModal({
        title: '错误',
        content: '请将所有信息填写完整！',
      })
    } else {
      wx.showModal({
        title: '确认信息',
        content: '请确认所有信息是否正确，一但提交无法更改！',
        success: res => {
          if (res.confirm) {
            wx.reLaunch({
              url: '/pages/index/index',
            })
            console.log(userValue.userName)
            app.globalData.username = userValue.userName
            app.globalData.userclass = userValue.userClass
          } else if (res.cancel) {
            return;
          }
        }
      })
    }
  }
})