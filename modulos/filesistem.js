// const fs = require("fs")

// function leer (ruta, cb){
//     fs.readFile(ruta, async (error, data)=>{
//         cb(data.toString())
//     })
    
// }

// function escribir (ruta, contenido, cb){
//     fs.writeFile(ruta, contenido, (err)=>{
//         if (err) {
//             console.error("No se pudo escribir el archivo");
//         } else {
//             console.log("Se escribio bien");
//         }
//     })
// }

// function eliminar(ruta, cb) {
//     fs.unlink(ruta, cb)    
// }

// leer(__dirname+"/files/data.json", data => console.log(data) )

// escribir(__dirname+"/files/copy.json", data, console.log)


// eliminar(__dirname+"/files/copy.txt", (err, data)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succes");        
//     }
// })

console.log("SOY FILE SISTEM");