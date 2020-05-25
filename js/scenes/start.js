//导入场景
import Scene from '../base/scene'

//导入当前场景中的角色：
//标题角色
import flappyBirdTitle from 
'../roles/start/flappybirdtitle'
//开始按钮
import replay from '../roles/start/replay'
//天空背景
import sky from '../roles/start/sky'
//陆地背景

import landList from '../roles/start/land'
//小鸟角色
import bird from '../roles/start/bird'

import rankList from '../roles/start/rankList'
//创建start场景
var shareImgUrl = "http://game.people.com.cn/n/2014/0210/c210053-24308934.html"
export default new Scene({
    //当前场景角色列表:
    roles:[ 
        sky,
        flappyBirdTitle,
        replay,
        ...landList ,
        bird,
        ...landList,
        rankList
       
        
        
    ],
    onLoad(){
        wx.shareAppMessage({
          title:"来啊！来battle啊~",
          imageUrl:shareImgUrl,
          success:function success(res){
            console.log("分享成功",res);
            wx.showShareMenu({
              withShareTicket:true,
            });
          },
          fail:function fail(res){
            console.log("分享失败",res)
          }
    
        })
      }
       

})
