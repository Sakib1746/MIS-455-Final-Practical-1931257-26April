const mobileSidebar = document.getElementById('mobileSidebar');

function showSideMenu() {
  mobileSidebar.classList.remove('hidden');

  mobileSidebar.classList.add('fixed');
}

function hideSideMenu() {
  mobileSidebar.classList.remove('fixed');

  mobileSidebar.classList.add('hidden');
}

function showMore() {
  document.getElementById('mealMore').classList.toggle('hidden');
}

function searchMeal() {
  const mealInput = document.getElementById('Search').value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const meals = data.meals;

      const mealMore = document.getElementById('mealMore');
      const mealBasic = document.getElementById('mealBasic');
      const firstBlock = document.getElementById('firstBlock');
      const showMoreBtn = document.getElementById('showMoreBtn');

      mealMore.classList.add('hidden');

      mealBasic.innerHTML = '';
      mealMore.innerHTML = '';

      if (meals.length > 5) {
        showMoreBtn.classList.remove('hidden');
      } else {
        showMoreBtn.classList.add('hidden');
      }

      for (let index = 0; index < meals.length; index++) {
        let constructSingleMeal = `<article
            class="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          >
            <img
              alt=""
              src="${meals[index].strMealThumb}"
              class="h-56 w-full object-cover"
            />

            <div class="bg-white p-4 sm:p-6">
              <span class="block font-medium text-lg text-gray-500">
                Meal ID: ${meals[index].idMeal}
              </span>

              <span class="block font-medium text-lg text-gray-500">
                Title: ${meals[index].strCategory}
              </span>

              <h3 class="mt-0.5 text-lg text-gray-900">
                ${meals[index].strMeal}
              </h3>

              <p class="mt-2 text-sm/relaxed text-gray-500">
                ${meals[index].strInstructions}
              </p>
            </div>
          </article>`;

        if (index < 5) {
          mealBasic.innerHTML += constructSingleMeal;
        } else {
          mealMore.innerHTML += constructSingleMeal;
        }
      }

      firstBlock.classList.remove('hidden');
    })
    .catch((error) => console.error('Error fetching data:', error));
}
