window.onload = () => {
    //Вызов функций после прогрузки станицы
    buttonShareMenu();
}

const shareMenu = document.getElementById('share__menu'),
    popUpMenuShare =document.querySelector('.popUpMenuShare');

function buttonShareMenu() {
    shareMenu.addEventListener('click', () => {
       popUpMenuShare.classList.toggle("show");
    });
}