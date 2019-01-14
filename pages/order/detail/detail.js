// pages/order/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  cartList:[],
  cupNumber:0,
  sumMonney:0,
  cutMonney:0,
  scrollHeight:0,
  scrollEnable:false,
  sureTime:new Date()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单详情',
    });
    var sureTime=wx.getStorageSync('sureTime');
    var cartlist=wx.getStorageSync('cartList');
    var sumMonney=wx.getStorageSync('sumMonney');
    var cupNumber=wx.getStorageSync('cupNumber');
    var height=wx.getSystemInfoSync().screenHeight;
    var heightShow=0;
    var scrollEnable=false;
    if(cupNumber<=2){
        heightShow=cupNumber*61;
        scrollEnable=false;
    }else{
      heightShow=2*61;
      scrollEnable=true;
    }
    var cutMonney=0;
    if(sumMonney>=20 && sumMonney<50){
      cutMonney=3;
    }else if(sumMonney>=50){
      cutMonney=10;
    }
    this.setData({
      cartList:cartlist,
      sumMonney:sumMonney,
      cupNumber:cupNumber,
      cutMonney:cutMonney,
      sureTime:sureTime,
      scrollHeight:heightShow,
      scrollEnable:scrollEnable
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  }
})