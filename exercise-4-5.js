"use strict";

//Задание 4.
/* Перед вами находится массив с продуктами в интернет-магазине. Вам нужно: 
1. Получить все товары, у которых есть фотографии, можете использовать метод filter 
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort */
const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"],
    },
    {
        id: 8,
        price: 78,
    },
];

let resultFilter = products.filter(elem => "photos" in elem && elem.photos.length > 0);
console.log(JSON.stringify(resultFilter));

let resultSort = products.sort((prev, next) => prev.price - next.price);
console.log(JSON.stringify(resultSort));

//Задание 5.

/* 
Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно примерно так:
for(…){ здесь пусто }
*/
for (let i = 0; i <= 9; console.log(i++));

