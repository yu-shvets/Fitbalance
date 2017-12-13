(function () {
    var hamburger = document.getElementById("hamburger"),
        menuList = document.getElementById("menu");
    hamburger.addEventListener("click", function (e) {
        hamburger.classList.toggle("hamburger--open");
        menuList.classList.toggle("header__menu--visible");
    }, false);
})();
