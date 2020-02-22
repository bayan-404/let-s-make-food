window.addEventListener('load',() => {
    getMeal();
});


function getMeal(e){
    //gategories/beef
let categoryUrl = window.location.pathname;
apiCall('get',`/api${categoryUrl}`,res =>{
    
    let yummy = document.getElementById("yummy-meals")
    res.meals.forEach(meal => {
        let eat = filterCategory(meal)
        yummy.appendChild(eat)
    });
    console.log(res.meals);
});
}

function filterCategory(item){
    let div = document.createElement('div')
    let linkCategory = document.createElement('a'); 
    
    linkCategory.setAttribute('href',window.location.pathname +`/${item.idMeal}`);

    let categoryImg = document.createElement('img');
    categoryImg.src = item.strMealThumb;
    let mealName = document.createElement('h1')
    mealName.innerHTML = item.strMeal
    
    linkCategory.appendChild(categoryImg).classList.add("meal_img");
    linkCategory.appendChild(mealName).classList.add('meal_h1');
    div.appendChild(linkCategory).classList.add('foodDiv');
    return div;
};