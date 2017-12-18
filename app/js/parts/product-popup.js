(function () {
    var closePopupBtn = document.getElementById("close-product-cart"),
        popup = document.getElementById("product-popup"),
        productImg = document.getElementsByClassName("products-list__item-img"),
        productName = document.getElementsByClassName("products-list__item-name"),
        body = document.getElementsByTagName("body")[0],
        productImgCarpatu = document.getElementsByClassName("carpatu-tours__img"),
        productNameCarpatu = document.getElementsByClassName("carpatu-tours__title");


    if ( popup ) {
        closePopupBtn.addEventListener("click", function (e) {
            popup.classList.remove("product-popup--active");
            body.classList.remove("no-scroll");
        });
        if (productNameCarpatu.length > 0) {
            for (var x = 0; x < productNameCarpatu.length; x++) {
                productNameCarpatu[x].addEventListener("click", function (e) {
                    e.preventDefault();
                    popup.classList.add("product-popup--active");
                    body.classList.add("no-scroll");
                })
            }
            for (var u = 0; u < productImgCarpatu.length; u++) {
                productImgCarpatu[u].addEventListener("click", function (e) {
                    e.preventDefault();
                    popup.classList.add("product-popup--active");
                    body.classList.add("no-scroll");
                })
            }
        }
        else {
            for (var w = 0; w < productName.length; w++) {
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
        }
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
    //var info = JSON.stringify(data);
    // req.open('POST', "link_here", true);
    // req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // req.send(info);
})();