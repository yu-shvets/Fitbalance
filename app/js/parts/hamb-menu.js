(function () {
    var hamburger = document.getElementById("hamburger"),
        menuList = document.getElementById("menu"),
        body = document.getElementsByTagName('body')[0],
        header = document.getElementById("header");
    hamburger.addEventListener("click", function (e) {
        hamburger.classList.toggle("hamburger--open");
        menuList.classList.toggle("header__menu--visible");
        body.classList.toggle("no-scroll");
        header.classList.toggle("header--prior")
    }, false);
})();
