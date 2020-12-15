const asycCallback = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        if(Math.random() < 0.5){
            return resolve("Hello world!" )
        } else {
            reject(new Error("Hello error"))
        }
    }, 1000);
})

asycCallback
    .then(data => data.toUpperCase())
    .then(data => console.log(data))
    .catch(err=> console.log(err))