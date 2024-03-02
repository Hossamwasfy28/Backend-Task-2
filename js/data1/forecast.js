const request = require("request")

const forecast = (latitude , longtitude , callback) => {

    const url ="https://api.weatherapi.com/v1/current.json?key=579d69cdc264468eae1114826242702&q=" + latitude + "," + longtitude
    
    request({url , json : true } , (error , response) =>{
    
      if (error){
        callback ("ERROR HAS OCCURED", undefined)
      }else if(response.body.error){
        callback (response.body.error.message , undefined)
      }else {
    
        callback (undefined , response.body.location.name + " is " + response.body.current.condition.text 
       + " and temp is : " + response.body.current.temp_c)
    
      }
    })
    }
    module.exports = forecast

  