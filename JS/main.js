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

