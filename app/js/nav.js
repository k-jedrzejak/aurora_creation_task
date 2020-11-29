const burgerBtn = document.querySelector(".js-toggle-menu");
const navList = document.querySelector(".js-nav-list");

let toggle = () => {
    burgerBtn.classList.toggle("is_active");
    navList.classList.toggle("is_open");
}

burgerBtn.addEventListener('click', toggle);


