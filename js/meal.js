const loadMeals = (searchText) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => showMeals(data.meals));
};

const showMeals = (meals) => {
  //   console.log(meals);
  const mealsContainer = document.getElementById("meal-container");
  mealsContainer.innerText = " ";
  meals.forEach((meals) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
        <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meals.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional
                content. This content is a little bit longer.</p>
        </div>
        <button onclick="showDetails(${meals.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
            Details
        </button>
    </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};

const showDetails = (mealId) => {
  console.log(mealId);
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showDetailsMeal(data.meals[0]));
};

const showDetailsMeal = (meal) => {
  console.log(meal);
  const mealTitle = document.getElementById("mealDetailsLabel");
  mealTitle.innerText = `${meal.strMeal}`;
  document.getElementById("meal-body").innerHTML = `
  <img class="img-fluid" src="${meal.strMealThumb}" alt="">
  `;
};

const searchMeal = () => {
  const searchField = document.getElementById("search-field");
  const searchFieldValue = searchField.value;
  loadMeals(searchFieldValue);
  searchField.value = " ";
};
// console.log(searchField.value);
loadMeals("rice");
