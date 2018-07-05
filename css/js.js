var mapbtn = document.querySelector(".map");
    mapframe = document.querySelector(".map-window");
    closemodal = document.querySelector(".form-close");

    mapbtn.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        mapframe.classList.add("modal-show");
        });