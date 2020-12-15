let hola = (name, miCallback)=>{
    console.log("Soy asincrona");
    setTimeout(()=>{    
        console.log("Hola "+ name);
        miCallback()
    }, 2000)
}
console.log("Iniciando proceso...");

hola("Johan",()=>{})

console.log("Terminando proceso");