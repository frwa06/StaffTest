module.exports = {
    route: (data, callback)=>
    callback(200,{message: 'this is /rout'}),
    users: (data, callback)=>{
    callback(200,[{name: 'user 1'},{name: 'user 3'},{name: 'user 2'}])},
    events: {
        GET:(data, callback)=>
        {if(typeof data.indice !== "undefined"){
            if(global.resources.events[data.indice])
            {return callback(200,global.resources.events[data.indice])}
            return callback(404, {message:`Event with index ${data.indice} no found`})
        }
        callback(200,global.resources.events);
        },
        POST:(data, callback)=>
        {   global.resources.events.push(data.payload);
            callback(201, data.payload)}
        },
    noFound: (data, callback)=>{
    callback(404,{message: 'no found'})}
}