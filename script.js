const modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Закрыть",

})

const getButtons = document.querySelectorAll('.button');
for(let i = 0; i < getButtons.length; i++) {
    const getButton = getButtons[i];
    getButton.addEventListener("click", function() {
        modal.open()
        modal.setContent(document.querySelector(`.hidden-container`))
    })        
}

"use strict";

// Кнопка бургера /Показ\скрытие /Смена цвета плашки /Прокрутка к началу страницы 
const iconBurger = document.querySelector('.burger-button');
const navList = document.querySelector('.header-menu');
iconBurger.addEventListener("click", function(e) {   
  navList.classList.toggle('_active'); // Меню выезжает/уезжает (toggle - добавляет/удаляет класс)
  document.body.classList.toggle('_lock'); // Предотвращаем скролл страницы под выехавшим меню бургера      
});