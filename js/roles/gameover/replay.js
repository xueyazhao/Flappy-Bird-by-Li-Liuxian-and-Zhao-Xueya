//导入游戏角色基类
import Sprite from '../../base/sprite'
//导入游戏配置
import config from '../../config'
import sceneManager from '../../scenes/index'
import databus from "../../databus";
import music from '../../music/index'



export default new Sprite({
    //资源名称
    img:'replay',
    ...config.gameInfo.replay,

    click(){
        //重置当前分数
        music.playSwooshing()
        databus.score = 0
        sceneManager.changScene('getready')
        databus.gameover = false
    }
})
