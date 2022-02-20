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

// Кнопка бургера Показ\скрытие 
const iconBurger = document.querySelector('.burger-button');
const navList = document.querySelector('.header-menu');
iconBurger.addEventListener("click", function(e) {   
  navList.classList.toggle('_active'); // Меню выезжает/уезжает (toggle - добавляет/удаляет класс)
  document.body.classList.toggle('_lock'); // Предотвращаем скролл страницы под выехавшим меню бургера      
})

// Логика по клику на кнопку Заказать
// ----------------------------------------
// Получение текстов из элементов h3
document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms.main;
    let inputNew = document.createElement('input');
    form.appendChild(inputNew);
    inputNew.name = 'newInput';
    inputNew.value = 'услуга';
    inputNew.type = 'text';
    let mainLinks = document.querySelectorAll('.main-link');
    for (let i = 0; i < mainLinks.length; i++) {
        const mainLink = mainLinks[i];    
        let textLanding = mainLinks[0].innerText;
        let textShop = mainLinks[1].innerText;
        let textBoard = mainLinks[2].innerText;        
        console.log(textBoard);      
    }
    mainButtonLanding = document.querySelector('.buttonLanding');
    mainButtonLanding.addEventListener("click", function() {

    })
})