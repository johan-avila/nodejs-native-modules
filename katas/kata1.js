const getA = ()=>{
    return "A"
  }
  
  const getB =(cb)=>{
    setTimeout(()=>{
      cb("B")
    }, 10)
  }
  const getC = ()=> { 
    return new Promise((resolve,reject)=>{
      resolve("C")
    })
  }
  
  const getABC = ()=>{
    return new Promise( async(resolve,reject)=>{
      let arrFinal=[];
  
      let soyA = getA()
      let soyB; 
      setImmediate(()=>{
        getB(e=> console.log(e ))
      })
      let soyC = await getC()
      
      
      
      resolve(soyB)
    })
  }
  
  getABC().then(e => console.log(e))
  