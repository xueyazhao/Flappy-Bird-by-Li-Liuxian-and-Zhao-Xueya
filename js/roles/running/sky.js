
import Sprite from '../../base/sprite'

import config from '../../config'

import databus from '../../databus'

const skyList = []

for(let i =0;i<2;i++) {
    const skySprite = new Sprite({
        img: 'sky',
        ...config.gameInfo.sky,
        x: i * config.gameInfo.sky.width,
        init(){
            this.x = i * config.gameInfo.sky.width
        },

        update() {

            this.x += this.speed
            if(this.x <= -this.width){
                this.x = this.width
            }
        }
    })

    skyList.push(skySprite)
}

export default skyList

