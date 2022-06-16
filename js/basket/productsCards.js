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
    const productId = event.currentTarget.getAttribute("data-productId");
    let productName =
        event.currentTarget.parentNode.parentNode.nextElementSibling.querySelector(
            ".featuredName"
        ).textContent;
    let productPrice =
        event.currentTarget.parentNode.parentNode.nextElementSibling.querySelector(
            ".featuredPrice"
        ).textContent;
    productPrice = Number(productPrice.replace("$", "")).toFixed(2);

    addProductIntoBasket(productId);

    let productExist = document.querySelector(
        `.productCount[data-productId="${productId}"]`
    );
    if (productExist) {
        const productCountEl = document.querySelector(
            `.productCount[data-productId="${productId}"]`
        );
        productCountEl.textContent++;

        const productTotalRowEl = document.querySelector(
            `.productTotalRow[data-productId="${productId}"]`
        );

        let totalPriceForRow = (basket[productId] * productPrice).toFixed(2);
        productTotalRowEl.textContent = totalPriceForRow;
    } else {
        let productRow = `
            <div class="basketRow">
                <div>${productName}</div>
                <div>
                    <span class="productCount" data-productId="${productId}">1</span> шт.
                </div>
                <div>$${productPrice}</div>
                <div>
                    $<span class="productTotalRow" data-productId="${productId}">${productPrice}</span>
                </div>
            </div>
        `;

        basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
    }

    let totalSum = 0;
    let sums = document.querySelectorAll(".productTotalRow");
    sums.forEach((element) => {
        totalSum += +element.textContent;
    });

    basketTotalValueEl.textContent = totalSum.toFixed(2);
}

addEventListenersForAddToCartButtons();
