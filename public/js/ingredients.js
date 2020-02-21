window.addEventListener("load",getIngredients)

function getIngredients (res) {

    let mealId = window.location.pathname;
    apiCall('GET', `/api${mealId}`, res => {
    let mealStuff = document.getElementById("mealIngredients");
    let listM = document.getElementById("listM");
    let stuffImg = document.createElement('img');
    let stuffName = document.createElement('h1');
    const imgUrl ='https://www.themealdb.com/images/ingredients'
    console.log(res.meals[0])
    console.log(res.meals[0].strMeal)
    stuffImg.src = res.meals[0].strMealThumb;
    stuffName.innerHTML = res.meals[0].strMeal
    for( let i = 1 ; i <= 20 ; i++) {
        let x = res.meals[0][`strIngredient${i}`]
        let y = res.meals[0][`strMeasure${i}`]
        
        
        if(x!==undefined && x.length > 0)
        {

    //https://www.themealdb.com/images/ingredients/Lime-Small.png
        let list = document.createElement('li');
        let imgi = document.createElement('img')
        imgi.src = imgUrl+`/${x}.png`
        list.appendChild(imgi)
        list.innerHTML += x +" : "+ y ;
        listM.appendChild(list);
    }
        // console.log(imgi)
        
    }
    
    mealStuff.appendChild(stuffImg);
    mealStuff.appendChild(stuffName);

    res.meals[0];

 })


}