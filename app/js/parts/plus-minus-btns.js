(function () {
    var plusBtnArr = document.getElementsByClassName("btn-plus-row"),
        minusBtnArr = document.getElementsByClassName("btn-minus-row"),
        quantityArr = document.getElementsByClassName("product-quantity-row"),
        minusBtnCartArr = document.getElementsByClassName("btn-minus-cart"),
        plusBtnCartArr = document.getElementsByClassName("btn-plus-cart"),
        quantityCartArr = document.getElementsByClassName("btn-quantity-cart"),
        plusBtnBasketArr = document.getElementsByClassName("btn-plus-basket"),
        minusBtnBasketArr = document.getElementsByClassName("btn-minus-basket"),
        quantityBtnBasketArr = document.getElementsByClassName("btn-quantity-basket"),
        sumRowBasket = document.getElementsByClassName("basket-row-sum"),
        priceRowBasket = document.getElementsByClassName("basket-price-value"),
        basketTotalSum = document.getElementById("basket-total-sum"),
        deleteItemArr = document.getElementsByClassName("delete"),
        basketItemArr = document.getElementsByClassName("basket-table__row");


    var increaseNumber = function (event, index, inputValueArr, count) {
        event.preventDefault();
        var quantity = inputValueArr[index],
            quantityValue = inputValueArr[index].value;
        inputValueArr[index].value = ++quantityValue;
        if (count) {
            countBasketSum(inputValueArr, index);
        }
    };
    var decreaseNumber = function (event, index, inputValueArr, count) {
        event.preventDefault();
        var quantity = inputValueArr[index],
            quantityValue = inputValueArr[index].value;
        if (quantityValue > 1) {
            inputValueArr[index].value = --quantityValue;
        }
        if (count) {
            countBasketSum(inputValueArr, index);
        }
    };
    var countBasketSum = function (quantity, index) {
        if (index) {
            sumRowBasket[index].innerHTML = quantity[index].value * priceRowBasket[index].innerHTML;
        }
        else {
            for (var i = 0; i < sumRowBasket.length; i++) {
                sumRowBasket[i].innerHTML = quantityBtnBasketArr[i].value * priceRowBasket[i].innerHTML;
            }
        }
        var sum = 0;
        for (var h = 0; h < sumRowBasket.length; h++) {
            sum += Number(sumRowBasket[h].innerHTML);
        }
        basketTotalSum.innerHTML = sum;
    };
    (function () {
        for (var i = 0; i < deleteItemArr.length; i++) {
            deleteItemArr[i].addEventListener("click", function (event) {
                var basketItemClicked = this.parentElement.parentElement;
                basketItemClicked.classList.add("basket-row--hidden");
                setTimeout(function () {
                    basketItemClicked.remove();
                    console.log(basketItemArr.length);
                    if ( basketItemArr.length == 0 ) {
                        var emptyBasket =
                            "<div class='empty-basket title'>" +
                            "<div class='empty-basket__container'> " +
                            "К сожалению ваша корзина пуста. " +
                            "<br>" +
                            "Но вы легко можете это исправить" +
                            "<br>" +
                            "<a class='products-row-item__btn products-row-item__btn--pink' href='fitbalance-products.html'> Перейти </a>" +
                            "</div>" +
                            " </div>";
                        document.getElementsByTagName("main")[0].innerHTML = emptyBasket;
                    }
                    countBasketSum(null, null);
                }, 500);
            });
        }
    })();

    /* count onload */
    (function () {
        if (basketTotalSum) {
            countBasketSum(null, null);
        }
    })();
    /* end count onload */

    /* products row items */
    (function () {
        if (plusBtnArr) {
            for (var i = 0; i < plusBtnArr.length; i++) {
                (function () {
                    var elem = i;
                    plusBtnArr[i].addEventListener("click", function (event) {
                        increaseNumber(event, elem, quantityArr);
                    });
                })();
            }
        }
    })();
    (function () {
        if (minusBtnCartArr) {
            for (var i = 0; i < minusBtnCartArr.length; i++) {
                (function () {
                    var elem = i;
                    minusBtnCartArr[i].addEventListener("click", function (event) {
                        decreaseNumber(event, elem, quantityCartArr);
                    });
                })();
            }
        }
    })();
    /* end products row items */

    /* product  cart*/
    (function () {
        if (minusBtnArr) {
            for (var i = 0; i < minusBtnArr.length; i++) {
                (function () {
                    var elem = i;
                    minusBtnArr[i].addEventListener("click", function (event) {
                        decreaseNumber(event, elem, quantityArr);
                    });
                })();
            }
        }
    })();
    (function () {
        if (plusBtnCartArr) {
            for (var i = 0; i < plusBtnCartArr.length; i++) {
                (function () {
                    var elem = i;
                    plusBtnCartArr[i].addEventListener("click", function (event) {
                        increaseNumber(event, elem, quantityCartArr);
                    });
                })();
            }
        }
    })();
    /* end product cart*/

    /* basket items*/
    (function () {
        if (minusBtnBasketArr) {
            for (var i = 0; i < minusBtnBasketArr.length; i++) {
                (function () {
                    var elem = i;
                    minusBtnBasketArr[i].addEventListener("click", function (event) {
                        decreaseNumber(event, elem, quantityBtnBasketArr, countBasketSum);
                    });
                })();
            }
        }
    })();
    (function () {
        if (plusBtnBasketArr) {
            for (var i = 0; i < plusBtnBasketArr.length; i++) {
                (function () {
                    var elem = i;
                    plusBtnBasketArr[i].addEventListener("click", function (event) {
                        increaseNumber(event, elem, quantityBtnBasketArr, countBasketSum);
                    });
                })();
            }
        }
    })();
    /* end basket items*/

})();