import Sprite from '../../base/sprite'

import config from '../../config'

import databus from '../../databus'



const MAX_ANGLE = 90
const MAX_SPEED = 60
const Max_Height = databus.screeHeight - config.gameInfo.land.height

export default new Sprite({
    img:'yellowBird',
    ...config.gameInfo.bird,


    a : 9.8 ,

    speed : 0,




    init(){
        this.y = config.gameInfo.bird.y
        this.x = config.gameInfo.bird.x
        this.speed = 0
    },
    render(ctx,delta) {

        const delta2 = delta / 150;
        this.speed = this.speed + this.a * delta2
    this.y += this.speed * delta2 + 1/2 *
    this.a * delta2 * delta2
    //console.log(this.speed)

        if(this.y >= Max_Height){
            this.y = Max_Height
        }


    ctx.save()


        ctx.translate(this.x,this.y)

        let curAngle = this.speed / MAX_SPEED *MAX_ANGLE
        if(curAngle>MAX_ANGLE){
            curAngle = MAX_ANGLE
        }


        ctx.rotate(curAngle / 180 *Math.PI)
    const img = databus.resources.images[this.img]

    ctx.drawImage(img ,
        -1/2 * this.width,-1/2 * this.height,this.width,this.height)

        ctx.restore()
    }
 })
