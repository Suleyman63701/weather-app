let request = require('request');
const chalk = require ('chalk');


    const geocode=(address, callback)=>{
        let url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia2FudW5pc3VsbyIsImEiOiJjanQyZDZjMzUwbnVkM3ltanA4dzVjc2ZiIn0.BF2PXfqiQ80PwYFHB1nB-Q'

       request({url, json:true },(error,response,body)=>{
       if(error){
           callback('Unable to reach map api', undefined)
       }else if(body.features.length===0){
           callback('Invalid entry', undefined)
       }else{
           callback(undefined, {
            longitute:response.body.features[0].center[1],
            latitute:response.body.features[0].center[0],
            location:response.body.features[0].place_name,
            
           })
           
       }
   console
   })
   
   }
   module.exports=geocode

