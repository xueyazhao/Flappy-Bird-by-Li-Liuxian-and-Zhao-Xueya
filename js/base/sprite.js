import databus from '../databus'

const k = 0;
export default class Sprite{
    constructor(config){
        for(const k in config){
            this[k] = config[k]
        }
        this.init()
    }

    init(){
    }

    click(){

    }

    update(){

    }
    

    render(ctx){

        ctx.drawImage(databus.resources.images[this.img],
            this.x,this.y,this.width,this.height)
            
    }
}