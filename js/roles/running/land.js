//导入游戏基类
import Sprite from '../../base/sprite'
//导入配置文件
import config from '../../config'
//导入游戏的宽高
import databus from '../../databus'
import land from "../start/land";
//这是start场景中的天空角色

const landList = []
const a =0.005
for(let i =0;i<8;i++) {
    const landSprite = new Sprite({
        img: 'land',
        ...config.gameInfo.land,
        x: i * config.gameInfo.land.width,
        speed:-2,

        init(){
            this.x = i * config.gameInfo.land.width
            this.speed = -2
        },
        update() {
            //console.log(this.x)
            this.speed -= a
            //天空自己实现update，用来改变自己的坐标
            this.x += this.speed
            if(this.speed<-15){
                this.speed  = -2
            }
            if(this.x <= -this.width){
                this.x = this.width-100
            }
        }
    })

    landList.push(landSprite)
}

export default landList

    