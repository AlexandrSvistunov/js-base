"use strict";

/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll("button[data-productId]");
    addToCartBtns.forEach(function (button) {
        button.addEventListener("click", addedProductHandler);
    });
}

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
    getProductData(event);

    addProductIntoBasket(productId);

    renderProductInBasket(productId);

    calcTotalSum();
}

addEventListenersForAddToCartButtons();
