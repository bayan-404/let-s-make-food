window.addEventListener('load',() => {
    getCategories();
    });



function getCategories() {
    //call express server
    //localhost:3000/catiegories
apiCall('GET','/categories' ,(res) => {
   
    let divContainer = document.getElementById('divCatigories')
    res.categories.forEach(category => {

       console.log(category.strCategory)
       console.log(category.strCategoryThumb)
       let dev = createCategoryItem(category)
       divContainer.appendChild(dev);
        
    });
    console.log(res);
});
}




function createCategoryItem(item){
let div = document.createElement('div')
let linkCategory = document.createElement('a');


linkCategory.setAttribute('href',`/categories/${item.strCategory}`);//new page


// linkCategory.addEventListener('click', getMeal);
let categoryImg = document.createElement('img');
categoryImg.src = item.strCategoryThumb;
let mealName = document.createElement('h1')
mealName.innerHTML = item.strCategory

linkCategory.appendChild(categoryImg).classList.add('meal_img');
linkCategory.appendChild(mealName).classList.add('name');
div.appendChild(linkCategory);

return div;
}