const express = require('express')
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const app = express();
const request = require('request')
const foodApi = 'https://www.themealdb.com/api/json/v1/1/';
const errors = require('./controllers/errors')
const food = require('./controllers/food');
// const mealImg = require('./controllers/food')

app.set('port',process.env.PORT||3000)

app.disable('x-powred-by')

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'..', 'public'),{maxAge: '30d'}))

//this function will get information as "JSON" we will purs it in dom
app.get('/categories',(req,res) =>{
    request(foodApi+'categories.php',(err,response,body)=>{
    if (err){
        return res.status(500).send(err);
    }
    if ( !err && body !== null){
        res.send(body)
    }
    })
})


//"/categories/Beef"

app.get('/categories/:categoryName',(req,res)=> {
    res.sendFile(path.join(__dirname,'..', 'public','meal-category.html'))

});



app.get('/api/categories/:categoryName',(req,res) => {


    console.log('this console is for nothing ')
request(foodApi + `filter.php?c=${req.params.categoryName}`,(err,response,body) => {
    if(err)
    {
        console.log(err)
    }
    if(!err&&body !== null) 
    {
        res.send(body)
    }
  }
 );
});


app.get('/categories/:categoryName/:IdMeal',(req,res) =>{
    res.sendFile(path.join(__dirname,'..','public','Ingredients.html'))
});


app.get('/api/categories/:categoryName/:IdMeal',(req,res) =>{
    
    console.log ('yaaaaaaay function works')


    request(foodApi +`lookup.php?i=${req.params.IdMeal}`,(err,response,body) => {
        if(err){
            console.log(err)
        }
        if(!err&&body !== null){
            // console.log(body)

            res.send(body)
        }
    });
});









 //     request(foodApi + `filter.php?c=${req.params.categoryName}`,(err,response,body)=>{
//         res.send(body)}); 


app.listen(app.get('port'));



