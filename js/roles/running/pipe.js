
import Sprite from '../../base/sprite'

import config from '../../config'
import databus from '../../databus'


const pipeList = []
const pipeConfig = config.gameInfo.pipe
const a = 0.005
for(let i = 0;i < 3;i++){
    const pipeSprite = new Sprite({
        img:'pipe_top',
        bottomImage:'pipe_buttom',
        ...pipeConfig,
        x : databus.screenWidth+(pipeConfig.width+pipeConfig.horizontalGap)*i,
        bottomY:0,
        speed:-2,

        scoreMark:false,
        init(){
            this.x = databus.screenWidth+(pipeConfig.width+pipeConfig.horizontalGap)*i,
            this.y = pipeConfig.y
            this.bottomY = 0

            this.setPipeY()

            this.setPosition()
            this.scoreMark = false
            this.speed = -2

        },

        setPosition(){
            const position = {

                startX: this.x,
                startY: this.y,
                endX:this.x + this.width,
                endY:this.y + this.height
            }
            this.position = {
                top: position,
                bottom:{...position, startY:this.bottomY,
                    endY : this.bottomY + this.height}
            }
        },

        setPipeY(){

            const randomHeight = Math.random() * 200 + 150

            this.y = randomHeight - this.height

            this.bottomY = randomHeight +this.verticalGap

        },

        update(){
            this.speed -= a
            this.x += this.speed
            if(this.speed < -15){
                this.speed = -2
            }

            if(this.x < -(this.width + this.horizontalGap)){
                this.x += (this.width + this.horizontalGap)  * 3

                this.setPipeY()
                this.scoreMark = false
            }


            this.setPosition()
        },


        render(ctx){
            ctx.drawImage(databus.resources.images[this.img],
                this.x,this.y,this.width,this.height)
            ctx.drawImage(databus.resources.images[this.bottomImage],
                this.x,this.bottomY,this.width,this.height)
        }
    })

    pipeList.push(pipeSprite)
}

export default pipeList