module.exports = function ourStaffsHandler(ourStaff){
    return{
        GET:(data, callback)=>
    {if(typeof data.indice !== "undefined"){
        if(ourStaff[data.indice])
        {return callback(200,ourStaff[data.indice])}
        return callback(404, {message:`OurStaff with index ${data.indice} no found`})
    }
    callback(200,ourStaff);
    },
    POST:(data, callback)=>
    {   ourStaff.push(data.payload);
        callback(201, data.payload)}
    ,
    PUT:(data, callback)=>
    {if(typeof data.indice !== "undefined"){
        if(ourStaff[data.indice])
        {   ourStaff[data.indice] = data.payload;
            return callback(200,ourStaff[data.indice])}
        return callback(404, {message:`OurStaff with index ${data.indice} no found`})
    }
    callback(400,{message: "index no sent"});
    },
    DELETE:(data, callback)=>{if(typeof data.indice !== "undefined"){
        if(ourStaff[data.indice])
        {   ourStaff = ourStaff.filter(
            (_ourStaff, indice)=>indice != data.indice);
            return callback(204,{message:`Element with index ${data.indice} delete`})}
        return callback(404, {message:`OurStaff with index ${data.indice} no found`})
    }
    callback(400,{message: "index no sent"});
    }
    }
    

    }