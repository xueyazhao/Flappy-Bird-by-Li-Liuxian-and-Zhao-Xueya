import databus from "../databus";
export default class Scene{

    constructor(config){

        for(let k in config){
            this[k] = config[k]
        }
    }

    render(ctx,delta){
        this.roles.forEach(role => {
            role.render(ctx,delta)

            if(!databus.gameover){
                role.update()
            }
        }) 

        this. update()

    }

    click(e){
        const clientX = e.touches[0].clientX
        const clientY = e.touches[0].clientY
        this.roles.forEach(role => {
           if(clientX >= role.x && clientX <= (role.x + role.width) &&
          clientY >= role.y && clientY <= (role.y + role.height)){
               role.click()
           }
        })
    }

    initRoles(roles){}
    onload(){}


    update() {

    }
//
    init() {

    }
}