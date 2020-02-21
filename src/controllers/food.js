const request = require('request');


const getFood = (req , res) => {
  request.get("https://www.themealdb.com/api/json/v1/1/random.php",(err,response,body)=>{
   
    const bodyObject = JSON.parse(body);
    //  console.log(bodyObject);

    res.send(bodyObject )
  })
}

module.exports = getFood; //includes the functions that you want app.js to read


