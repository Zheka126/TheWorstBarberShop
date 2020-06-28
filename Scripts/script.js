var enter = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var map_button = document.querySelector(".contacts-button-map");
var how_to = document.querySelector(".how_to_get_button");
var popup_map = document.querySelector(".modal-map");
var close_map = popup_map.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false; 
}

enter.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
}); 

close.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error"); 
}); 

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;  
    popup.classList.add("modal-error"); 
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        
        if (popup_map.classList.contains("modal-show")) {
            popup_map.classList.remove("modal-show");
        }
    }
});

map_button.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    popup_map.classList.add("modal-show");
}); 

how_to.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    popup_map.classList.add("modal-show");
}); 

close_map.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    popup_map.classList.remove("modal-show");
}); 