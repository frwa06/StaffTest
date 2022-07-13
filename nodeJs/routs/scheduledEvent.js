module.exports = function scheduledEventHandler(scheduledEvent){
    return{
        GET:(data, callback)=>
    {if(typeof data.indice !== "undefined"){
        if(scheduledEvent[data.indice])
        {return callback(200,scheduledEvent[data.indice])}
        return callback(404, {message:`scheduledEvent with index ${data.indice} no found`})
    }
    callback(200,scheduledEvent);
    },
    POST:(data, callback)=>{
        const newScheduledE= data.payload
        newScheduledE.dateEvent = new Date();
        newScheduledE.editDateEvent = null;
        scheduledEvent =[...scheduledEvent, newScheduledE];
        callback(201, newScheduledE)}
    ,
    PUT:(data, callback)=>
    {if(typeof data.indice !== "undefined"){
        if(scheduledEvent[data.indice])
        {   scheduledEvent[data.indice] = data.payload;
            return callback(200,scheduledEvent[data.indice])}
        return callback(404, {message:`scheduledEvent with index ${data.indice} no found`})
    }
    callback(400,{message: "index no sent"});
    },
    DELETE:(data, callback)=>{if(typeof data.indice !== "undefined"){
        if(scheduledEvent[data.indice])
        {   scheduledEvent = scheduledEvent.filter(
            (_scheduledEvent, indice)=>indice != data.indice);
            return callback(204,{message:`Element with index ${data.indice} delete`})}
        return callback(404, {message:`scheduledEvent with index ${data.indice} no found`})
    }
    callback(400,{message: "index no sent"});
    }
    }
    

    }