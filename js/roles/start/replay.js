
import Sprite from '../../base/sprite'

import config from '../../config'
import sceneManager from '../../scenes/index'

import music from '../../music/index'

export default new Sprite({

    img:'replay',
    ...config.gameInfo.replay,

   click(){

       music.playSwooshing()
       sceneManager.changScene('getready')
   }
})
wx.login({
    success:function(res){
        if(res.code){
            console.log("登陆成功，获取到code",res.code)
        }

    }
  
})