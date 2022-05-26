"use strict";

//Задание 2.
//Выведите в консоль значения, указанные рядом с комментариями:

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, //вывести это число
            },
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log('autor: ' + post.author);
console.log('comments dislikes: ' + post.comments[0].rating.dislikes);
console.log('userId: ' + post.comments[1].userId);
console.log('user text: ' + post.comments[1].text);

//Задание 3.
/* 
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, можете использовать метод forEach
*/
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(element => {
  let total = (element.price - (element.price/100)*15);
  console.log('У товара №' + element.id + ' цена со скидкой: ' + total);
});
