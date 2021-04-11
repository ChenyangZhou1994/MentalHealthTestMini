var timer = require('../../colorui/wxTimer.js')
const app = getApp();

var tag = 0; 
var choosed = [];
var chooseArr = []; //被选择的答案
var wxTimer = new timer({//倒计时
  beginTime: "00:30",
  complete: function () {
    wx.showModal({
      title: '时间到',
      content: '未在指定时间内完成考试！',
      success(res) {
        if (res.confirm) {
          wx.reLaunch({
            url: '../index/index',
          })
        } else if (res.cancel) {
          wx.reLaunch({
            url: '../index/index',
          })
        }
      }
    })
  }
})


Page({
  data: {
    questions: [
      {
        "id": 0,
        "title": "我觉得闷闷不乐，情绪低沉",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 1,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 2,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 3,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 4,
            "checked": false
          }
        ],
      },
      {
        "id": 1,
        "title": "我觉得一天之中早晨最好",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 1,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 2,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 3,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 4,
            "checked": false
          }
        ],
      },
      {
        "id": 2,
        "title": "我一阵阵地哭出来或是想哭",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 1,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 2,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 3,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 4,
            "checked": false
          }
        ],
      },
      {
        "id": 3,
        "title": "我晚上睡眠不好",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 1,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 2,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 3,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 4,
            "checked": false
          }
        ],
      },
      {
        "id": 4,
        "title": "我吃的和平时一样多",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 1,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 2,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 3,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 4,
            "checked": false
          }
        ],
      },
      {
        "id": 5,
        "title": "我与异性接触时和以往一样感到愉快",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 1,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 2,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 3,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 4,
            "checked": false
          }
        ],
      },
      {
        "id": 6,
        "title": "我发觉我的体重在下降",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 1,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 2,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 3,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 4,
            "checked": false
          }
        ],
      },
      {
        "id": 7,
        "title": "我有便秘的苦恼",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 1,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 2,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 3,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 4,
            "checked": false
          }
        ],
      },
      {
        "id": 8,
        "title": "我心跳比平时快",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 1,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 2,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 3,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 4,
            "checked": false
          }
        ],
      },
      {
        "id": 9,
        "title": "我无缘无故感到疲乏",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 1,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 2,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 3,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 4,
            "checked": false
          }
        ],
      },
      {
        "id": 10,
        "title": "我的头脑和平时一样清楚",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 4,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 3,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 2,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 1,
            "checked": false
          }
        ],
      },
      {
        "id": 11,
        "title": "我觉得经常做的事情并没有困难",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 4,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 3,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 2,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 1,
            "checked": false
          }
        ],
      },
      {
        "id": 12,
        "title": "我觉得不安而平静不下来",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 4,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 3,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 2,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 1,
            "checked": false
          }
        ],
      },
      {
        "id": 13,
        "title": "我对将来抱有希望 ",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 4,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 3,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 2,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 1,
            "checked": false
          }
        ],
      },
      {
        "id": 14,
        "title": "我比平常容易激动",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 4,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 3,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 2,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 1,
            "checked": false
          }
        ],
      },
      {
        "id": 15,
        "title": "我觉得做出决定是容易的",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 4,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 3,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 2,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 1,
            "checked": false
          }
        ],
      },
      {
        "id": 16,
        "title": "我觉得自己是个有用的人，有人需要我",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 4,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 3,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 2,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 1,
            "checked": false
          }
        ],
      },
      {
        "id": 17,
        "title": "我的生活过得很有意思",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 4,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 3,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 2,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 1,
            "checked": false
          }
        ],
      },
      {
        "id": 18,
        "title": "我认为如果我死了别人会生活的更好些",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 4,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 3,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 2,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 1,
            "checked": false
          }
        ],
      },
      {
        "id": 19,
        "title": "平常感兴趣的事我仍然照样感兴趣",
        "options": [
          {
            "name": "没有或很少时间（过去一周内，出现这类情况的日子不超过一天）",
            "value": "A",
            "score": 4,
            "checked": false
          },
          {
            "name": "小部分时间（过去一周内，有1-2天有过这类情况）",
            "value": "B",
            "score": 3,
            "checked": false
          },
          {
            "name": "相当多时间（过去一周内，3-4天有过这类情况）",
            "value": "C",
            "score": 2,
            "checked": false,
          },
          {
            "name": "绝大部分或全部时间（过去一周内，有5-7天有过这类情况）",
            "value": "D",
            "score": 1,
            "checked": false
          }
        ],
      },
    ],
    tags: 0, //题目标识
    cardArr: [], //答题卡数组
    cardIndex: 0, //答题卡序号
    wxTimerList: {},
  },

  beforeQuestion: function() { //改变tags改变题目
    tag = tag - 1;
    if (tag < 0) {
      wx.showToast({
        title: '已经是第一题！',
        icon: 'none',
        duration: 2000
      })
      tag = 0;
    } else {
      this.setData({
        tags: tag,
      })
    }
  },

// 选择答案计算分数
  chooseAnswer: function(res) {
    let index = res.currentTarget.dataset.index;
    let chooseArr = this.data.questions[tag].options[index];
    //将其他选项为False
    this.data.questions[tag].options.forEach(item => {
      item.checked = false
    }),
    chooseArr.checked = true;
    console.log(this.data.questions.length);
    if (chooseArr.checked) {
      tag = tag + 1;
      if (tag >= this.data.questions.length) {
        tag = this.data.questions.length - 1;
      } else {
        this.setData({
          tags: tag,
        })
      }
    }
    this.data.cardArr.splice(tag, 1, true); //变更选中数组
    var cardarr = this.data.cardArr;
    this.setData({
      cardArr: cardarr //实时更新选中的数组
    })
    // console.log(this.data.cardArr)
  },

  submit: function() {
    // console.log(this.data.questions.length);
    var cardarr = this.data.cardArr;
    var sum_score = 0;
    var all = 0;
    var scoreArr = [];
    for (let i = 0; i < cardarr.length; i++) {
      if (cardarr[i] == true) {
        all += 1;
      }
    }
    if (all == this.data.questions.length) {
      wx.showLoading({
        title: '提交中..',
        mask: true,
      })
      for (var i of this.data.questions) {
        console.log(i);
        for (let j = 0; j <= 3; j++) {
          if (i.options[j].checked) {
            scoreArr.push(i.options[j].score)
          }
        }
      }
      scoreArr.forEach(item => {
        sum_score += item
      })
      app.globalData.score = sum_score; //将总分数传出
      console.log(app.globalData.score);
      wx.showToast({
        title: '答题已完成',
      })
      wx.reLaunch({
        url: '../index/index',
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请将所有题目答完后交卷！',
      })
    }
  },

  //点击答题卡跳转到相应的题
  cardClick: function(res) {
    const cardIndex = res.currentTarget.dataset.index;
    tag = cardIndex;
    console.log(tag);
    this.setData({
      tags: cardIndex,
      modalName: null,
    })
  },

  showModal(res) { //显示关闭答题卡
    this.setData({
      modalName: res.currentTarget.dataset.target
    })
  },

  hideModal(res) {
    this.setData({
      modalName: null
    })
  },


  onLoad: function(options) {
    wxTimer.start(this);
  },

  onShow:function(){
    wxTimer.calibration();
  },

  onUnload: function() {
    wxTimer.stop();
  }
})
