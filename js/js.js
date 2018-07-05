var mapbtn = document.querySelector(".map");
    mapframe = document.querySelector(".map-window");
    closemodal = document.querySelector(".form-close");
    formbtn  = document.querySelector(".map-btn");
    formframe = document.querySelector(".form-answer");
    buy  = document.querySelectorAll(".buy-btn");
    cartframe = document.querySelector(".cart-add");

    mapbtn.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        mapframe.classList.add("modal-show");
    });
    closemodal.addEventListener("click", function(evt) {
        evt.preventDefault();      
        mapframe.classList.remove("modal-show");
    });

        formbtn.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        formframe.classList.add("modal-show");
    });
    closemodal.addEventListener("click", function(evt) {
        evt.preventDefault();      
        formframe.classList.remove("modal-show");
    });

        buy.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        cartframe.classList.add("modal-show");
    });
    closemodal.addEventListener("click", function(evt) {
        evt.preventDefault();      
        cartframe.classList.remove("modal-show");
    });