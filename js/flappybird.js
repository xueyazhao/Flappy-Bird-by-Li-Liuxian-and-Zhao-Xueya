
import './libs/weapp-adapter'
import config from './config'
//导入databus
import databus from './databus'
//导入游戏场景管理器
import sceneManager from './scenes/index'

//获取到绘制上下文
const firstTime = new Date()
const now = 0

const audios  =databus.resources.audios
const ctx = canvas.getContext('2d')

export default class FlappyBird{
    constructor(){

        //提供游戏时间
        //时间间隔:当前帧时间减去上一帧时间
       this.now = new Date()
        this.delta = 0
        this.curFrameTime = new Date() - 0
        //const data1 = new Date()
        //var data2 = new Data()
        
        this.lastFrameTime = new Date() - 0
        //解决this指向问题
        this.render = this.render.bind(this)
       // var requestId = requestAnimFrame(this.animate.bind(this));

        //调用start方法开始游戏
        this.start()
        
    }
    //wx.shareMessageToFriend(Object object)


    start(){
    //加载游戏资源
    this
    .loadResources()
    .then(() => {
        this.now = new Date()
        this.dalta1 = now - firstTime
        this.playbackground(this.dalta1)
      // if(this.dalta1 >= )
        
        this.curFrameTime = new Date() - 0
        //const data1 = new Date()
        this.lastFrameTime = new Date() - 0

        window.requestAnimationFrame(this.render)
       
        //绑定事件
        canvas.addEventListener('touchstart',(e)=>{
    //出发当前场景的事件，具体做什么有每个场景说了算
            sceneManager.click(e)
        })
       
      })
    }

    playbackground(dalta1){
      
        //播放嗖嗖的开始声
        audios.background.currenTime = 0
        audios.background.play()
       
    }

    // 游戏主循环，用来渲染游戏
    
     render(){

         this.curFrameTime = new Date() -0
         this.dalta1 = this.curFrameTime - firstTime
         this.playbackground(this.dalta1)
         this.delta = this.curFrameTime - this.lastFrameTime
         this.lastFrameTime = this.curFrameTime

        sceneManager.render(ctx,this.delta)


        window.requestAnimationFrame(this.render)
    
       
    }

    loadResources(){

        const resourcesList = 
        [...config.resources.IMG_NAME_LIST,
        ...config.resources.MUSIC_NAME_LIST
    ]
    let resource = null
    //加载完成的游戏的数量
    let loadedCount = 0

    return new Promise((resolve,reject) => {
    resourcesList.forEach(resName=>{
        if(resName.endsWith('.png')){
            //图片资源
            resource = new Image()//创建图片对象
            //图片路径必须是绝对路径
            resource.src = 'images/'+resName//确定图片路径
            //添加到图片资源中
            databus.resources.images[resName.slice(0,-4)] = resource
        }else if (resName.endsWith('.mp3') ||resName.endsWith('.ogg')){
            //音乐资源
            resource = new Audio()
            resource.src = 'audio/'+resName
            //添加到音乐资源中
            databus.resources.audios[resName.slice(0,-4)] = resource
        }

        resource.addEventListener('load',()=>{
            loadedCount++
            if(loadedCount === resourcesList.length){
                //此时，说明资源加载完成了
                console.log('资源加载完成',loadedCount)
                resolve()
            }
        })
        
        resource.addEventListener('error', () =>{
            reject()
        })
    })
    })
   
    }
   
    
   

    }
        
 


