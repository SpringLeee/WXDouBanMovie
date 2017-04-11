// View/list/list.js
Page({
  data:{
    title:"加载中...",
    movies:[],
    loading:false
  },
  onLoad:function(res){
  
   var movieurl=""
   if(res.type=="正在热映")
   {
      movieurl="http://api.douban.com/v2/movie/in_theaters?count=20"
   }
   if(res.type=="即将上映")
   {
      movieurl="http://api.douban.com/v2/movie/coming_soon?count=20"
   }
   if(res.type=="北美票房榜")
   {
      movieurl="http://api.douban.com/v2/movie/us_box?count=20"
   }
   if(res.type=="Top250")
   {
      movieurl="http://api.douban.com/v2/movie/top250?count=20"
   }
   
   var mythis=this
   wx.request({
     url: movieurl,
     method: 'GET', 
     header: {"Content-Type":"json"}, 
     success: function(data){ 
       mythis.setData({
        title:res.type,
        loading:true,
        movies:data.data.subjects,

       })

     console.log(data.data.subjects)

     }
      


   })
  
  



  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})