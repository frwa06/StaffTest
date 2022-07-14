module.exports = function servicessHandler(services){
    return{
        GET:(data, callback)=>
    {if(typeof data.indice !== "undefined"){
        if(services[data.indice])
        {return callback(200,services[data.indice])}
        return callback(404, {message:`Service with index ${data.indice} no found`})
    }
    callback(200,services);
    },
    POST:(data, callback)=>
    {   services.push(data.payload);
        callback(201, data.payload)}
    ,
    PUT:(data, callback)=>
    {if(typeof data.indice !== "undefined"){
        if(services[data.indice])
        {   services[data.indice] = data.payload;
            return callback(200,services[data.indice])}
        return callback(404, {message:`Service with index ${data.indice} no found`})
    }
    callback(400,{message: "index no sent"});
    },
    DELETE:(data, callback)=>{if(typeof data.indice !== "undefined"){
        if(services[data.indice])
        {   services = services.filter(
            (_services, indice)=>indice != data.indice);
            return callback(204,{message:`Element with index ${data.indice} delete`})}
        return callback(404, {message:`Service with index ${data.indice} no found`})
    }
    callback(400,{message: "index no sent"});
    }
    }
    

    }