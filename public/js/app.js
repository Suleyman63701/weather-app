
// fetch(url = 'https://api.darksky.net/forecast/2cff53ca09258fe09ea3192b4c46f56c/37.8267,-122.4233').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne=document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    messageOne.textContent='Loading...'
    messageTwo.textContent = ''
    fetch(url = '/weather?address='+search.value).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent=data.error
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
            
        })
        
    })

    // const location = search.value
    // console.log(location)

})