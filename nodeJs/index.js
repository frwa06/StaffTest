const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

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
    const data = {
        rout: cleanRout,
        query,
        method,
        headers,
         payload: buffer
    };
    let handler;
    if(cleanRout && router[cleanRout]){
        handler = router[cleanRout]
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
    users: (data, callback)=>
    callback(200,[{name: 'user 1'},{name: 'user 3'},{name: 'user 2'}]),
    noFound: (data, callback)=>
    callback(404,{message: 'no found'})
}

const server = http.createServer(requestP)

server.listen(5000, ()=>{
    console.log("Server Staff on")
})