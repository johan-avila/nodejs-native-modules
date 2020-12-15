const asycCallback = (cb)=>{
    setTimeout(() => {
        if(Math.random() < 0.5){
            return cb(null, "Hello world!" )
        } else {
            cb(new Error("Hello error"))
        }
    }, 1000);
}

uno()