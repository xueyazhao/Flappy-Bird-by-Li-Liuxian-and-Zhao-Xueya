//导入场景
import Scene from '../base/scene'

//导入当前场景中的角色：
//标题角色
import gameover from
'../roles/gameover/gameover'
//开始按钮
import replay from '../roles/gameover/replay'
import score from '../roles/gameover/score'
//天空背景

//创建gameover场景

export default new Scene({
    //当前场景角色列表:
    roles:[
        gameover,
        replay,
        score

    ],

    initRoles(roles){
        this.roles = [...roles,...this.roles]
    },
   

})