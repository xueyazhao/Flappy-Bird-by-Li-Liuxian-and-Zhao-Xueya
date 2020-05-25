//导入场景
import Scene from '../base/scene'

//导入当前场景中的角色：
//标题角色
import getready from 
'../roles/getready/getready'
//开始按钮
import tap from '../roles/getready/tap'
//天空背景
import sky from '../roles/getready/sky'
//陆地背景

import landList from '../roles/getready/land'
//小鸟角色
import bird from '../roles//getready/bird'
//创建start场景
//导入音乐管理器
import music from '../music/index'
//导入场景管理器

import sceneManager from '../scenes/index'
export default new Scene({
    //当前场景角色列表:
    roles:[ 
        sky,
        getready,
        bird,
        ...landList,
        tap

        
    ],
    //因为当前场景点哪都会到下一个场景，因此直接在getready场景
    //中添加click
    click(){
      // console.log('getready')
        //播放翅膀扇动的音乐
        music.playWing()
        sceneManager.changScene('running')
    }
  

})