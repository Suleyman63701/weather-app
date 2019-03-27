const express = require ('express');


const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const path=require('path');
const hbs = require('hbs');


const app=express();
const port = process.env.PORT || 3000;
// Define paths for express config
const publicDirectoryPath=path.join(__dirname, '../public');
const viewsPath=path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handle bar engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve 
app.use(express.static(publicDirectoryPath));

app.get('', (req, res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Suleyman'
    })
})

app.get('/about', (reg, res)=>{
    res.render('about', {
        title:'About',
        name:'Suleyman Solak'
    })
})

app.get('/help', (req,res)=>{
    res.render('help', {
        title:'Help',
        helpmessage:'Help documents',
        name:'Jasmine Solak'
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({error:'You must provide an adress'})
    }

    geocode(req.query.address, (error, {latitute, longitute, location}={})=>{
        if(error){
            return res.send({error})
        }
 
        forecast(latitute, longitute, (error, forecast)=>{
            if(error){
                return res.send({error})
            }
            res.send({
            forecast,
            location,
            address:req.query.address
        })
        })
    
        
    })

})

app.get('/help/*', (reg, res)=>{
    res.render('404',{
        title:'404',
        error:'page cannot be found',
        name:'admin'
    })
})
app.get('*', (req, res)=>{
    res.render('404', {
        title:'404',
        name:'Admin',
        error:'Cannot access site'
    })
})



app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
});



