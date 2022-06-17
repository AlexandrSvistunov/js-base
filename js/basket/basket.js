'use strict';

const openBasketBtn = document.querySelector('.cartIconWrap');
const basketEl = document.querySelector('.basket');
const basketCounterEl = document.querySelector('.cartIconWrap span');
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
let productId = null;
let productName = '';
let productPrice = '';


openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

/**
 * В корзине хранится количество каждого товара
 * Ключ это id продукта, значение это количество товаров в корзине, например:
 {
    1: 10,
    3: 2
 }
 */
 function getProductData(event) {
    productId = event.currentTarget.getAttribute("data-productId");
    productName =
        event.currentTarget.parentNode.parentNode.nextElementSibling.querySelector(
            ".featuredName"
        ).textContent;
    productPrice =
        event.currentTarget.parentNode.parentNode.nextElementSibling.querySelector(
            ".featuredPrice"
        ).textContent;
    productPrice = Number(productPrice.replace("$", "")).toFixed(2);
}


let basket = {};

/**
 * Метод добавляет продукт в объект basket.
 * @param {number} productId
 */
function addProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

/**
 * Функция срабатывает когда нужно отрисовать продукт в корзине.
 * @param {number} productId
 */
function renderProductInBasket(productId) {
    let productExist = document.querySelector(
    `.productCount[data-productId="${productId}"]`
    );
    if (productExist) {
        increaseProductCount(productId);

        calcSumForProduct(productId);
    } else {
        renderNewProductInBasket(productId);
    }
}

/**
 * Функция отрисовывает новый товар в корзине.
 * @param {number} productId
 */
function renderNewProductInBasket(productId) {
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

/**
 * Функция увеличивает количество товаров в строке в корзине.
 * @param {number} productId
 */
function increaseProductCount(productId) {
    const productCountEl = document.querySelector(
    `.productCount[data-productId="${productId}"]`
    );
    productCountEl.textContent++;

}

/**
 * Функция пересчитывает стоимость товара умноженное на количество товара
 * в корзине.
 * @param {number} productId
 */
function calcSumForProduct(productId) {
    const productTotalRowEl = document.querySelector(
    `.productTotalRow[data-productId="${productId}"]`
    );

    let totalPriceForRow = (basket[productId] * productPrice).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

/**
 * Функция пересчитывает общую стоимость корзины и выводит это значение на страницу.
 */
function calcTotalSum() {
    let totalSum = 0;
    let totalRowSum = document.querySelectorAll(".productTotalRow");
    totalRowSum.forEach((element) => {
        totalSum += +element.textContent;
    });

    basketTotalValueEl.textContent = totalSum.toFixed(2);
}

/**
 * Функция увеличивает счетчик количества товаров рядом с иконкой корзины.
 */
function increaseProductsCount() {
    basketCounterEl.textContent++;
}

/**
 * Эта функция срабатывает когда добавляют новый товар в корзину.
 * @param {number} productId
 */
function addProductIntoBasket(productId) {
    increaseProductsCount();
    addProductToObject(productId);
}

