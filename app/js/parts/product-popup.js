(function () {
    var closePopupBtn = document.getElementById("close-product-cart"),
        popup = document.getElementById("product-popup"),
        productImg = document.getElementsByClassName("products-list__item-img"),
        productName = document.getElementsByClassName("products-list__item-name");

    body = document.getElementsByTagName("body")[0];
    closePopupBtn.addEventListener("click", function (e) {
        popup.classList.remove("product-popup--active");
        body.classList.remove("no-scroll");
    });
    for (var w = 0; w < productName.length; w++) {
        console.log(w);
        productName[w].addEventListener("click", function (e) {
            e.preventDefault();
            popup.classList.add("product-popup--active");
            body.classList.add("no-scroll");
        })
    }
    for (var i = 0; i < productImg.length; i++) {
        productImg[i].addEventListener("click", function (e) {
            e.preventDefault();
            popup.classList.add("product-popup--active");
            body.classList.add("no-scroll");
        })
    }

    // var req = getXmlHttp();
    // req.onreadystatechange = function () {
    //     if (req.readyState == 4) {
    //         if (req.status == 200) {
    //             var sessionAnw = req.responseText;
    //             totalItems.innerHTML = sessionAnw;
    //         }
    //     }
    // };
    //
    // req.open('POST', "link_here", true);
    // req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // req.send(info);
})();