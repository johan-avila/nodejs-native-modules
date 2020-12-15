const isOdd = require("is-odd")
const process = require("process")

try {
    
    console.log(isOdd("33c"));
} 
    catch (error) {
            // console.log("error");
}

process.on("exit",()=>{
    console.log("apunto mde salir del proceso");
})
process.on("uncaughtException",(err)=>{
    console.log("Hubo un error por ahi");
})