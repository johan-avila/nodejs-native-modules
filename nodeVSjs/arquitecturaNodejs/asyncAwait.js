const promise = () => {
    new Promise ((resolve, reject)=>{
        setTimeout(() => {
            if(Math.random() < 0.5){
                return resolve("Hello world!" )
            } else {
                reject(new Error("Hello error"))
            }
        }, 1000);
    })
}

const promiseResolved =async ()=>{
    try {
        const response = promise()
        console.log(response);
    } catch (error) {
        console.log(error.Error);
    }
}