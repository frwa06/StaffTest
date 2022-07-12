const resources= require("./resources")
const events = require("./routs/events")

module.exports = {
    route: (data, callback)=>
    callback(200,{message: 'this is /rout'}),
    users: (data, callback)=>{
    callback(200,[{name: 'user 1'},{name: 'user 3'},{name: 'user 2'}])},
    events: events(resources.events),
    noFound: (data, callback)=>{
        callback(404,{message: 'no found'})}
}