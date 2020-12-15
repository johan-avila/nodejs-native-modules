const process = require("process")
console.log("process");

process.on("exit", ()=>{
    console.log("exit bb");
    process.exit()
})

process.on("uncaughtException", (err,otro)=>{
    console.log("olvido "+err);
})
process.on("uncaughtRejection",(err, otro)=>{
    console.log(err);
    console.log(otro);
})


// noexisto()

console.log("Recoger el error para capturarlo____");
