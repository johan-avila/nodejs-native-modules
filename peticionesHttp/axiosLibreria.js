    const axios = require("axios")

    axios.get("https://api.itbook.store/1.0/search/mongodb")
        .then(res=> res.data)
        .then(data=>console.log(data) ) 
    
