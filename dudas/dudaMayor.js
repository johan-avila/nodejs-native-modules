const getA = ()=>{
    return "A"
  }
  
const getB = (cb) => {
  setTimeout(()=>{
    cb("B")
  }, 10)
}

const getC = () => { 
  return new Promise((resolve,reject)=>{
    resolve("C")
  })
}

const getABC = () => {
  return new Promise((resolve, reject)=>{
    getB( async element => {
        let soyA = getA()
        let soyC = await getC()
        resolve([soyA, element, soyC])
    })
  })
}

getABC().then(e => console.log(e))
  