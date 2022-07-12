module.exports = function eventsHandler(events){
    return{
        GET:(data, callback)=>
    {if(typeof data.indice !== "undefined"){
        if(events[data.indice])
        {return callback(200,events[data.indice])}
        return callback(404, {message:`Event with index ${data.indice} no found`})
    }
    callback(200,events);
    },
    POST:(data, callback)=>
    {   events.push(data.payload);
        callback(201, data.payload)}
    ,
    PUT:(data, callback)=>
    {if(typeof data.indice !== "undefined"){
        if(events[data.indice])
        {   events[data.indice] = data.payload;
            return callback(200,events[data.indice])}
        return callback(404, {message:`Event with index ${data.indice} no found`})
    }
    callback(400,{message: "index no sent"});
    },
    DELETE:(data, callback)=>{if(typeof data.indice !== "undefined"){
        if(events[data.indice])
        {   events = events.filter(
            (_events, indice)=>indice != data.indice);
            return callback(204,{message:`Element with index ${data.indice} delete`})}
        return callback(404, {message:`Event with index ${data.indice} no found`})
    }
    callback(400,{message: "index no sent"});
    }
    }
    

    }