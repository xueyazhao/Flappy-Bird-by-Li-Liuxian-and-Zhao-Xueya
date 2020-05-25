//导入场景
import Scene from '../base/scene'


//天空背景
import rankboard from '../roles/ranklist/rankboard'
//陆地背景

//导入音乐管理器
import music from '../music/index'
//导入场景管理器

import sceneManager from '../scenes/index'
export default new Scene({
    //当前场景角色列表:
    roles:[ 
      rankboard

    ],
    
    click(){
      // console.log('getready')
        //播放翅膀扇动的音乐
        music.playWing()
        sceneManager.changScene('start')
    }
  

})