import Sprite from '../../base/sprite'

import config from '../../config'
import sceneManager from '../../scenes/index'

import music from '../../music/index'

export default new Sprite({

    img:'2',
    ...config.gameInfo.rankList,

   
    click(){

        sceneManager.changScene('rankList')
    }
})