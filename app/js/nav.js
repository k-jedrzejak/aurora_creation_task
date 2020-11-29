var burgerBtn = document.querySelector(".js-toggle-menu");
var navList = document.querySelector(".js-nav-list");

burgerBtn.addEventListener("click",function(){
    burgerBtn.classList.toggle("is_active");
    navList.classList.toggle("is_open");
})