
import Sprite from '../../base/sprite'

import config from '../../config'

import databus from '../../databus'

export default new Sprite({
    img:'yellowBird',
    ...config.gameInfo.bird,


    a : 4 ,

    speed : 0,
   

    render(ctx,delta) {


        const delta2 = delta / 150;
        this.speed = this.speed + this.a * delta2
    this.y += this.speed * delta2 + 1/2 *
    this.a * delta2 * delta2

    if(this.y >=225){
        this.speed = -15
    }

    const img = databus.resources.images[this.img]
    const x = (databus.screenWidth - this.width) / 2
    ctx.drawImage(img ,
        x,this.y,this.width,this.height)

    }
 })
