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

     
    })
    .catch((error) => console.error('Error fetching data:', error));
}
