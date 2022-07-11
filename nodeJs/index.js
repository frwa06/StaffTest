const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;


let resources = {
    events: [{name:'Marina',
    service:'Furniture',
    specific:'Chair',
    radio:'Bello'},
    {name:'Stella',
    service:'food',
    specific:'Meal and wine',
    radio:'Envigado'}]

}




const requestP = (req, res) =>{
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
const router = {
    route: (data, callback)=>
    callback(200,{message: 'this is /rout'}),
    users: (data, callback)=>{
    callback(200,[{name: 'user 1'},{name: 'user 3'},{name: 'user 2'}])},
    events: {
        GET:(data, callback)=>
        {if(typeof data.indice !== "undefined"){
            if(resources.events[data.indice])
            {return callback(200,resources.events[data.indice])}
            return callback(404, {message:`Event with index ${data.indice} no found`})
        }
        callback(200,resources.events);
        },
        POST:(data, callback)=>
        {   resources.events.push(data.payload);
            callback(201, data.payload)}
        },
    noFound: (data, callback)=>{
    callback(404,{message: 'no found'})}
}

const server = http.createServer(requestP)

server.listen(5000, ()=>{
    console.log("Server Staff on")
})