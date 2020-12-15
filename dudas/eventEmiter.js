const EventEmiter = require("events")

class Logger extends EventEmiter {
    execute(cb){
        console.log("Before");
        this.emit("Start")
        cb()
        this.emit("finish")
        console.log("After");
    }
}


const logger = new Logger()

logger.on("Start", ()=> console.log("Soy Start"))
logger.on("finish", ()=> console.log("Soy Finish"))
logger.on("finish", ()=> console.log("Soy Finish2"))

logger.execute(()=>{
    console.log("Hola XD XD XD ");
})