// pages/order/balance/balance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  cartList:[],
    cutMonney:0,
    sumMonney:0,
    cupNumber:0,
    scrollEnable:false,
    scrollHeight:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单详情',
    })

    var carList=wx.getStorageSync('cartList');
    var sumMonney=wx.getStorageSync('sumMonney');
    var cutMonney=0;
    if(sumMonney>=20 && sumMonney<50){
      cutMonney=3;
    }else if(sumMonney>=50){
      cutMonney=10;
    }
    var cupNumber=wx.getStorageSync('cupNumber');
    var heights=cupNumber*59;
    var heightShow=0;
    var scrollEnable=false;
    var winHeight=wx.getSystemInfoSync().screenHeight;
    if(heights>=(winHeight-460)){
      heightShow=winHeight-460;
      scrollEnable=true;
    }else{
      heightShow=heights;
    }
    this.setData({
      cartList:carList,
      cutMonney:cutMonney,
      sumMonney:sumMonney,
      cupNumber:cupNumber,
      scrollHeight:heightShow,
      scrollEnable:scrollEnable
    })
  },

  payFor:function(e){
    wx.navigateTo({
      url: '../detail/detail',
    });
  var date=this.getTime();
    wx.setStorageSync('sureTime', date);

  },
  getTime:function(){
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var month1="";
    if(month<10){
      month1='0'+month;
    }else{
      month1=month;
    }
    var day=date.getDate();
    var day1="";
    if(day<10){
      day1='0'+day;
    }else{
      day1=day;
    }
    var hours=date.getHours();
    var hours1="";
    if(hours<10){
      hours1='0'+hours;
    }else{
      hours1=hours;
    }
    var minute=date.getMinutes();
    var minute1="";
    if(minute<10){
      minute1='0'+minute;
    }else{
      minute1=minute;
    }
    var second=date.getSeconds();
    var second1="";
    if(second<10){
      second1='0'+second;
    }else{
      second1=second;
    }
    return year+"-"+month1+"-"+day1+" "+hours1+":"+minute1+":"+second1;

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