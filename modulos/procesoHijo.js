const { exec,spawn } = require("child_process")

// exec("rm banda.js", (err, stdout, sterr)=>{

//     console.log(err);
//     // console.log(stdout);
//     // console.log(sterr);
// })
// exec("node filesistem.js", (err, stdout, sterr)=>{
//     console.log(err);
//     // console.log(stdout);
//     // console.log(sterr);
// })

let proceso = spawn("ls" ,["-l" ])

console.log(proceso.pid);
console.log("connected",proceso.connected);

proceso.stdout.on("data", (dto)=>{
    console.log("killed",proceso.killed);
    console.log(dto.toString());
})

proceso.on("",()=>{
    console.log("Salimos del proceso");
    console.log("killed",proceso.killed);
})