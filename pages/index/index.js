//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    images: ['../../images/1.jpg',
    '../../images/2.jpg',
      '../../images/3.jpg',
      '../../images/4.jpg',
      '../../images/5.jpg',
      '../../images/6.jpg'
      ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  
  onLoad: function () {
   
  },
  golist: function () {
    wx.navigateTo({
      url: '../list/list'
    })
  },
})
