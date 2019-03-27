let request = require('request');
const chalk = require ('chalk');


const forecast=(latitute, longitute, callback)=>{
     const url = 'https://api.darksky.net/forecast/2cff53ca09258fe09ea3192b4c46f56c/'+longitute+','+ latitute;
   
    request({url, json:true },(error, {body})=>{
    if(error){
        callback('Unable to reach weather service', undefined)
    }else if(!body.currently){
        callback('Unable to find location', undefined)
    }else{
        callback(undefined, `${body.daily.data[0].summary} .It is currently ${ body.currently.temperature} Today's high ${body.daily.data[0].temperatureHigh} and Today's low ${body.daily.data[0].temperatureLow}.There is a ${body.currently.precipProbability} % change of rain`)
    
    }

})

}
module.exports=forecast