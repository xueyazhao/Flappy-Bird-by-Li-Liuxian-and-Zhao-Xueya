import databus from './databus'
const screenWidth = databus.screenWidth
const screenHeight = databus.screenHeight
//游戏图片资源名称集合
const IMG_NAME_LIST = [
    'sky.png', 
    'background2.png',
    'land.png',
    'replay.png',
    'pipe_buttom.png',
    'pipe_top.png',
    'yellowBird.png',
    'flappybird.png',
    'getready.png',
    'tap.png',
    'gameover.png',
    '2.png',
    'rankboard.png'
]
//游戏音乐资源名称集合
const MUSIC_NAME_LIST = [
    'wing.ogg',
    'die.ogg',
    'hit.ogg',
    'point.ogg',
    'swooshing.ogg',
    'background.mp3'
]
//rankboard
const RANKBOSRD_WIDTH = 300
const RANKBOSRD_Height = 507
const RANKBOARD_X = 30
const RANKBOARD_Y = 50

//rankList
const RANKLIST_WIDTH = 27
const RANKLIST_HEIGHT = 30
const RANKLIST_X = 300
const RANKLIST_Y = 50

//bird
const BIRD_WIDTH = 50
const BIRD_HEIGHT = 45
const BIRD_X = 60
const BIRD_Y = 200

//天空
const SKY_WIDTH = 400
const SKY_HEIGHT = window.innerHeight

//陆地
const LAND_X = 0
const LAND_Y = 545
const  LAND_WIDTH = 336
const LAND_HEIGHT = 112

//管道
const PIPE_WIDTH = 52
const PIPE_HEIGHT = 420

//flappybird标题
const FLAPPYBIRD_Y = 100
const FLAPPYBIRD_WIDTH  = 254
const FLAPPYBIRD_HEIGHT = 73

//replay
const REPLAY_Y = 350
const REPLAY_WIDTH = 108
const REPLAY_HEIGHT = 65

//getready
const GETREADY_Y = 200
const GETREADY_WIDTH = 254
const GETREADY_HEIGHT = 73

//TAP
const TAP_Y = 350
const TAP_WIDTH = 152
const TAP_HEIGHT = 143

//GAMEOVER
const GAMEOVER_Y = 100
const GAMEOVER_WIDTH = 273
const GAMEOVER_HEIGHT = 64

//游戏速度
const SPEED = -2

const config = {
    //游戏资源集合
    resources:{
        IMG_NAME_LIST,
        MUSIC_NAME_LIST,
    },

    //游戏信息：所有精灵的坐标和宽高
    gameInfo:{
        //游戏速度
        speed:SPEED,

        rankboard:{
            x:RANKBOARD_X,
            y:RANKBOARD_Y,
            width:RANKBOSRD_WIDTH,
            height:RANKBOSRD_Height

        },
        rankList:{
            x:RANKLIST_X,
            y:RANKLIST_Y,
            width:RANKLIST_WIDTH,
            height:RANKLIST_HEIGHT
        },
        bird:{
            x:BIRD_X,
            y:BIRD_Y,
            width:BIRD_WIDTH ,
            height:BIRD_HEIGHT,
            speed:0
        },
        sky:{
            x:0,
            y:0,
            width:SKY_WIDTH,
            height:SKY_HEIGHT,
            speed:SPEED
        },
        land:{
            x:LAND_X,
            y:LAND_Y,
            width:LAND_WIDTH,
            height:LAND_HEIGHT,
            speed:SPEED

        },
        pipe:{
            x:0,
            y:-20,
            width:PIPE_WIDTH,
            height:PIPE_HEIGHT,
            speed:SPEED,
            horizontalGap:130,
            verticalGap:200,
        },
        flappybird:{
            x:(screenWidth - FLAPPYBIRD_WIDTH) / 2,
            y:FLAPPYBIRD_Y,
            width:FLAPPYBIRD_WIDTH,
            height:FLAPPYBIRD_HEIGHT
        },
        replay:{
            x:(screenWidth - REPLAY_WIDTH) / 2,
            y:REPLAY_Y,
            width:REPLAY_WIDTH,
            height:REPLAY_HEIGHT
        },
        getready:{
            x:(screenWidth - FLAPPYBIRD_WIDTH) / 2,
            y:GETREADY_Y,
            width:FLAPPYBIRD_WIDTH,
            height:FLAPPYBIRD_HEIGHT
        },
        tap:{
            x:(screenWidth - TAP_WIDTH) / 2,
            y:TAP_Y-35,
            width:TAP_WIDTH,
            height:TAP_HEIGHT
        },
        gameover:{
            x:(screenWidth - GETREADY_WIDTH) / 2,
            y:GETREADY_Y -50,
            width:GETREADY_WIDTH,
            height:GETREADY_HEIGHT
        },
        //分数
        curScore:{
            y:80,
            font:'bolder 32px "微软雅黑"',
            fillStyle:'#fff'
        },
        //游戏结束后显示分数和最高分：
        score:{
            scoreY:280,
            bestY:320,
            font:'bolder 32px "微软雅黑"',
            fillStyle:'#fff'
        }

    }

}

export default config