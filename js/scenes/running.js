//导入场景
import Scene from '../base/scene'

//导入当前场景中的角色：
//标题角色

//开始按钮
import pipeList from '../roles/running/pipe'
//天空背景
import skyList from  '../roles/running/sky'
//陆地背景

import landList from '../roles/running/land'
//小鸟角色
import bird from '../roles/running/bird'
//创建start场景
//导入数据管理器
import databus from '../databus'
import sceneManager from '../scenes/index'
import score from '../roles/running/score'
import music from '../music/index'
import config from "../config"
export default new Scene({
    //当前场景角色列表:
    roles:[ 
        ...skyList,
        ...pipeList,

        score,
        ...landList,
        bird

    ],

    //小鸟总是使用，添加到当前场景中
    bird,
    land:landList[0],

//j检测传入的小鸟坐标与管道坐标有没有重合
    isCollisionWidth(bird,pipe){
        if(bird.x >= pipe.startX && bird.x<= pipe.endX &&
        bird.y >= pipe.startY && bird.y <= pipe.endY){
        return true
        }
        return false
    },

    //碰撞检测方法
    collisionDetection(){
        //遍历所有管道对象，判断小鸟中心点
         return pipeList.some(pipe =>{
            return this.isCollisionWidth(this.bird, pipe.position.top) ||
                this.isCollisionWidth(this.bird,pipe.position.bottom)

        })
    },

    //判断小鸟是否落地
    isLanded(){
        return this.bird.y >= databus.screeHeight - config.gameInfo.land.height
    },
    setScore(){
        pipeList.forEach(pipe =>{
        if(!pipe.scoreMark &&this.bird.x >= (pipe.x +pipe.width)){
            pipe.scoreMark = true
            databus.score +=1
            music.playPoint()
           
        }
        })
    },

    //碰撞检测
    //什么时候进行碰撞检测？
    //游戏每绘制一次就检测一次
    //哪的代码能够绘制一次
    update(){
        let isCollision = false
        let isLanded = false
        //如果小鸟与管道碰撞，那么小鸟落地后，再出现gameover
        //如果小鸟与陆地碰撞直接gameover
            if(!databus.gameover){
                isCollision = this.collisionDetection()
            }
            this.setScore()


             isLanded = this.isLanded()

            if(isCollision){
                music.playDie()
                databus.gameover = true
               //记录最高分

            }
            if(isLanded){
                if(!databus.gameover) {
                    music.playDie()
                }
                databus.gameover = true
                databus.bestScore = databus.score > databus.bestScore ?
                    databus.score : databus.bestScore
                sceneManager.changScene('gameover')
                music.playSwooshing()
            }

    },

    //用来是小鸟跳动
    click(){
        music.playWing()
        this.bird.speed = -30

    },
    init(){
        this.roles.forEach(role => {
            role.init()
        })
    },
   
       

})