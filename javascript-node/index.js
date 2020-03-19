//const request = require("request");

//request("http://google.com",function(){
//   console.log("Termine la peticion de Google");
//});

//console.log("Yo voy despues, en el codigo, de la peticion a Google");
const request = require("request");

function leer(url){
  return new Promise(function(resolve,reject){
    request(url,function(err, response){
      if(err){
          reject(err);
      }else{
        resolve(response);
      }
    });
  });
}

 leer("http://codigofacilito.com")
   .then(function(response){
       console.log(response);
   })
   .catch(function(err){
       console.log(err);
   });
