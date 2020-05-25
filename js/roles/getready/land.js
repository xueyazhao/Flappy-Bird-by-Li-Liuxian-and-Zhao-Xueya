
import Sprite from '../../base/sprite'

import config from '../../config'
const landList = []


for(let i =0;i<2;i++) {
    const landSprite = new Sprite({
        img: 'land',
        ...config.gameInfo.land,
        x: i * config.gameInfo.land.width,
    })
    landList.push(landSprite)
}
export default landList