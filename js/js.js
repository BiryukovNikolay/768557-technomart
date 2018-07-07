// Важность директивы var https://bit.ly/2NvPeQ7
 
 var mapbtn = document.querySelector('.map');
 var mapframe = document.querySelector('.map-window');
 var closemodal = document.querySelectorAll('.form-close'); // Тут у нас несколько элементов на странице, используем querySelectorAll и получим массив элементов
 var formbtn = document.querySelector('.map-btn');
 var formframe = document.querySelector('.form-answer');
 var buy = document.querySelectorAll('.buy-btn'); // Тоже может быть несколько элементов, используем querySelectorAll
 var cartframe = document.querySelector('.cart-add');
 
 // Элементов может не быть на странице, поэтому нужно проверить их наличие
 
 if (mapbtn) {
   mapbtn.addEventListener('click', function(evt) {
     evt.preventDefault();
     closeAllModals();
     mapframe.classList.add('modal-show');
   });
 }
 
 if (formbtn) {
   formbtn.addEventListener('click', function(evt) {
     evt.preventDefault();
     closeAllModals();
     formframe.classList.add('modal-show');
   });
 }
 
 // Массивы элементов переберем с помощью цикла for, и каждому навесим обработчик клика
 
 for (var i = 0; i < buy.length; i++) {
   buy[i].addEventListener('click', function(evt) {
     evt.preventDefault();
     closeAllModals(); // Закрываем все активные окна
     cartframe.classList.add('modal-show'); // Показываем нужное окно
   });
 }
 
 for (var i = 0; i < closemodal.length; i++) {
   closemodal[i].addEventListener('click', function(evt) {
     evt.preventDefault();
     closeAllModals();
   });
 }
 
 // Признаком хорошего интерфейса, является не более активного одного модального окна на странице
 // Создадим функцию, которая закрывает все модальные окна
 
 function closeAllModals() {
   if (cartframe) {
     cartframe.classList.remove('modal-show');
   }
 
   if (formframe) {
     formframe.classList.remove('modal-show');
   }
 
   if (mapframe) {
     mapframe.classList.remove('modal-show');
   }
 }