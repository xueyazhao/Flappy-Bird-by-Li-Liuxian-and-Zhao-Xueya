import Sprite from '../../base/sprite'

import config from '../../config'

import databus from '../../databus'
const score = config.gameInfo.score
export default new Sprite({

    render(ctx){
        const scoreText = 'SCORE : '+databus.score
        const bestScoreText = 'Best : '+databus.bestScore
        ctx.font  = score.font
        ctx.fillStyle = score.fillStyle
        const scoreWidth = ctx.measureText(scoreText).width
        const bestScoreWidth = ctx.measureText(scoreText).width
        ctx.fillText(scoreText,(databus.screenWidth-scoreWidth)/2,
            score.scoreY)
        ctx.fillText(bestScoreText,(databus.screenWidth-scoreWidth )/2 +37,
            score.bestY)
    }
})