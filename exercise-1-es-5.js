"use strict";

// Задание 1.1 в стиле es5

/* 
. Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/
// Функция-конструктор
function Product(name, price) {
  this.name = name;
  this.price = price;
}
// Добавляем метод make25PercentDiscount
Product.prototype.make25PercentDiscount = function () {
  this.price = this.price - (this.price/100 * 25);
}

// Инициализация объекта
const product1 = new Product('"лопата"', '200');

// Вызываем метод make25PercentDiscount
product1.make25PercentDiscount();

// Выводим значения свойств объекта product1
alert ('Стоимость продукта ' + product1.name +'со скидкой: '+ product1.price + ' рублей');


// Задание 1.2 в стиле es5
/* Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования), а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта. б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true. */


// Функция-конструктор Post
function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}
// Добавляем метод edit
Post.prototype.edit = function (text) {
  this.text = text;
}

// Инициализация объекта post1
const post1 = new Post('Александр', '' , '29.05.22');

// Вызываем метод edit
post1.edit(prompt("Введите текст поста"));


// Функция-конструктор AttachedPost наследуемая от Post
function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

// Наследуем методы Post для AttachedPost
AttachedPost.prototype = Object.create(Post.prototype);

// Возвращаем свойство constructor для AttachedPost
AttachedPost.prototype.constructor = AttachedPost;

// Добавляем метод makeTextHighlighted для AttachedPost
AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
}


// Инициализация объекта postAttached
const postAttached = new AttachedPost('Михаил', '' , '30.05.22');

// Вызываем метод edit
postAttached.edit(prompt("Введите текст прикреплённого поста"));

// Вызываем метод makeTextHighlighted
postAttached.makeTextHighlighted();

// Выводим свойства объекта post1
alert(JSON.stringify(post1));

// Выводим свойства объекта postAttached
alert(JSON.stringify(postAttached));
