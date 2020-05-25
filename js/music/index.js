import databus  from "../databus";
const audios  =databus.resources.audios

export default {
    playSwooshing(){

        audios.swooshing.currenTime = 0
        audios.swooshing.play()
    },
    playWing(){

        audios.wing.currenTime = 0
        audios.wing.play()
    },
    playPoint(){

        audios.point.currenTime = 0
        audios.point.play()
    },
    playDie(){

        audios.hit.currenTime = 0
        audios.hit.play()

        audios.die.currenTime = 0
        audios.die.play()
    },
    playbackground(){

        audios.background.currenTime = 0
        audios.background.play()
    }
}