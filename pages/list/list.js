// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    activeIndex: 0,
    toView: 'a0',
    scrollTop: 100,
    screenWidth: 667,
    showModalStatus: false,
    currentType: 0,
    currentIndex: 0,
    sizeIndex: 0,
    sugarIndex: 0,
    temIndex: 0,
    sugar: ['常规糖', '无糖', '微糖', '半糖', '多糖'],
    tem: ['常规冰', '多冰', '少冰', '去冰', '温', '热'],
    size: ['常规', '珍珠', '西米露'],
    cartList: [],
    sumMonney: 0,
    cupNumber: 0,
    showCart: false,
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var sysinfo = wx.getSystemInfoSync().windowHeight;
    console.log(sysinfo)
    wx.showLoading({
      title: '努力加载中',
    });

      //将本来的后台换成了easy-mock 的接口，所有数据一次请求完 略大。。
      wx.request({
        url: 'https://easy-mock.com/mock/59abab95e0dc66334199cc5f/coco/aa',
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          wx.hideLoading();
          console.log(res)
          that.setData({
            listData: res.data,
            loading: true
          })
        }
      })
  },
/**
 * 选择对应的种类
 */
  selectMenu:function(e){
console.log(e);
var index=e.currentTarget.dataset.index;
console.log(index);
    this.setData({
      toView:'a'+index,
      activeIndex:index
    })
    console.log("a"+index);
  },

  scroll:function(e){
console.log(e);
var dis=e.detail.scrollTop;
if(dis>=0 && dis<1188){
  this.setData({
    activeIndex:0
  })
}else if(dis>=1188 && dis<1865){
  this.setData({
    activeIndex: 1
  })
}else if(dis>=1865 && dis<2177){
  this.setData({
    activeIndex: 2
  })
}else if(dis>=2177 && dis<2178){
  this.setData({
    activeIndex: 3
  })
}else if(dis>=2178 && dis<2874){
  this.setData({
    activeIndex: 4
  })
}else if(dis>=2875 && dis<4282){
  this.setData({
    activeIndex: 5
  })
}else if(dis>=4281 && dis<4447){
  this.setData({
    activeIndex: 6
  })
}else if(dis>=4447 && dis<4978){
  this.setData({
    activeIndex: 7
  })
}else{
  this.setData({
    activeIndex: 8
  })
}
  },

  selectInfo:function(e){
    console.log(e);
    var type1=e.target.dataset.type;
    var index=e.target.dataset.index;
    this.setData({
      showModalStatus: !this.data.showModalStatus,
      currentType:type1,
      currentIndex:index,
      sizeIndex: 0,
      sugarIndex: 0,
      temIndex: 0
    })
  },

  chooseSE:function(e){
    console.log(e);
    var type1=e.target.dataset.type;
    var index=e.target.dataset.index;
    if(type1==0){
      this.setData({
        sizeIndex:index
      })
    }else if(type1==1){
      this.setData({
        sugarIndex:index
      })
    }else{
      this.setData({
        temIndex:index
      })
    }
  },


  addToCart: function () {
    var a = this.data
    var addItem = {
      "name": a.listData[a.currentType].foods[a.currentIndex].name,
      "price": a.listData[a.currentType].foods[a.currentIndex].specfoods[0].price,
      "detail": a.size[a.sizeIndex] + "+" + a.sugar[a.sugarIndex] + "+" + a.tem[a.temIndex],
      "number": 1,
      "sum": a.listData[a.currentType].foods[a.currentIndex].specfoods[0].price,
    }
    var sumMonney = a.sumMonney + a.listData[a.currentType].foods[a.currentIndex].specfoods[0].price;
    var cartList = this.data.cartList;
    cartList.push(addItem);
    this.setData({
      cartList: cartList,
      showModalStatus: false,
      sumMonney: sumMonney,
      cupNumber: a.cupNumber + 1
    });
    console.log(this.data.cartList)
  },
  showCartList: function () {
    console.log(this.data.showCart)
    if (this.data.cartList.length != 0) {
      this.setData({
        showCart: !this.data.showCart,
      });
    }

  },
  decNumber:function(e){
    console.log(e);
    var index=e.target.dataset.index;
    var data=this.data;
    var sum = data.sumMonney - data.cartList[index].price;
    data.cartList[index].sum -= data.cartList[index].price;
    data.cartList[index].number == 1 ? data.cartList.splice(index, 1) : data.cartList[index].number--;
    this.setData({
      cartList:data.cartList,
      sumMonney:sum,
      showCart: data.cartList.length == 0 ? false : true,
      cupNumber: data.cupNumber - 1
    })
  },

  addNumber:function(e){
    console.log(e);
    var index = e.target.dataset.index;
    var data = this.data;
    var sum = data.sumMonney + data.cartList[index].price;
    data.cartList[index].sum += data.cartList[index].price;
    data.cartList[index].number+=1;
    this.setData({
      cartList: data.cartList,
      sumMonney: sum,
      cupNumber: data.cupNumber + 1
    })
  },
  goBalance:function(e){
    if (this.data.sumMonney != 0) {
      wx.setStorageSync('cartList', this.data.cartList);
      wx.setStorageSync('sumMonney', this.data.sumMonney);
      wx.setStorageSync('cupNumber', this.data.cupNumber);
      wx.navigateTo({
        url: '../order/balance/balance'
      })
    }
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