/*
这是游戏场景管理器
作用：
1.管理游戏中所有场景
2.渲染场景
3.切换场景
4.处理当前场景的事件
*/
//导入第一个场景
import start from './start'
import getready from './getready'
import running from './running'
import gameover from './gameover'
import rankList from './rankingList'
import '../libs/weapp-adapter'
//import music from '../music/index'

export default{
    //游戏场景集合
    scenesList:{
        start,
        getready,
        running,
        gameover,
        rankList
    },
    //当前场景名称：默认值为 start
    currentSceneName:'start',


//用来触发当前场景的事件
    click(e){

        this.scenesList[this.currentSceneName].click(e)
    },

   //渲染场景
   render(ctx,delta){
       //根据当前场景的名称，获取当前场景
       //并且渲染当前场景




    this.scenesList[this.currentSceneName].render
    (ctx,delta)

   // his.scenesList[this.currentSceneName].update
    
    
       
     //console.log('场景管理器已经渲染')
   } ,
   //切换场景
   changScene(sceneName){
        //切换场景时，决定是否复用上一个场景中的角色
       //提供一个通用方式


       //sceneName表示要切换到哪个场景
       //切换场景

       //currentSceneName 赋值前表示上一个场景
       this.scenesList[sceneName].initRoles(this.scenesList
           [this.currentSceneName].roles)
       //
       this.scenesList[sceneName].init()
       this.currentSceneName = sceneName

   }

    
    

}