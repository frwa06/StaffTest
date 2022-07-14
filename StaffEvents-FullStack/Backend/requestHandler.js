const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const router = require('./router');


module.exports = (req, res) =>{
    const urlCurrent = req.url;
    const urlParse = url.parse(urlCurrent, true);
    const rout = urlParse.pathname;
    const cleanRout = rout.replace(/^\/+|\/+$/g, "");
    const method = req.method;
    const { query }= urlParse;
    const  {headers} = req;
    const decoder = new StringDecoder("utf-8");
    let buffer = "";
    req.on("data", (data)=>{
        buffer += decoder.write(data)
    });
    req.on("end",()=>{
        buffer += decoder.end();
        if (headers['content-type'] === 'application/json'){
            buffer = JSON.parse(buffer)
        }
        if(cleanRout.indexOf("/") > -1){
            var [firstRout, indice] = cleanRout.split('/');
        }
        const data = {
        indice,
        rout: firstRout || cleanRout, 
        query,
        method,
        payload: buffer
    };

 

    console.log({data})
   

    let handler;
    if(data.rout && router[data.rout] && router[data.rout][method]){
        handler = router[data.rout][method]
    }else{
        handler = router.noFound
    }
    
    if(typeof handler === 'function'){
        handler(data, (statusCode= 200, message)=>{
            const response = JSON.stringify(message);
            res.setHeader("Content-Type", "application/json");
            res.writeHead(statusCode);
            res.end(response)
        })
    }
    })
};