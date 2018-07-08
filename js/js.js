

var mapbtn = document.querySelector('.map');
var mapframe = document.querySelector('.map-window');
var closemodal = document.querySelectorAll('.form-close'); 
var formbtn = document.querySelector('.map-btn');
var formframe = document.querySelector('.form-answer');
var buy = document.querySelectorAll('.buy-btn'); 
var cartframe = document.querySelector('.cart-add');



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


for (var i = 0; i < buy.length; i++) {
  buy[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    closeAllModals(); 
    cartframe.classList.add('modal-show'); 
  });
}

for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    closeAllModals();
  });
}


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
