let otraFuncion=()=> {
    return seRompe()
}

let seRompe=()=> {
    return 23+z
}

let seRompeAsync=()=> {
    setTimeout(() => {
        try {
            return 3+z
        } catch (error) {
            console.log("Erooorrrrrrrr");
        }
    });
}

try {
    // otraFuncion( )
    seRompeAsync()
} catch(error){
    console.log(error);
}

console.log("Si pasó");