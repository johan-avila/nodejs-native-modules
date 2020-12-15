process.on("uncaughtException",(err)=>{
    if (err instanceof TypeError) {
        throw ".._Type Error"
    } else if(err instanceof ReferenceError){
        console.log("._Reference Error");
        
    } else if(err instanceof RangeError){
        console.log("_Range Error");
    } else {
        throw "ERROR DESCONOCIDO"
    }
    
})
null.lenght()
