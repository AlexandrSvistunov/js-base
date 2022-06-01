// Задание 1.1 в стиле es6

// Функция-конструктор
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // Добавляем метод make25PercentDiscount
  make25PercentDiscount() {
    this.price = this.price - (this.price / 100 * 25);
  }
}

// Инициализация объекта
const product1 = new Product('"лопата"', '200');
// Вызываем метод make25PercentDiscount
product1.make25PercentDiscount();

// Выводим значения свойств объекта product1
alert ('Стоимость продукта ' + product1.name +'со скидкой: '+ product1.price + ' рублей');


// Задание 1.2 в стиле es6

// Функция-конструктор Post
class Post {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
  // Добавляем метод edit
  edit(text) {
    this.text = text;
  }
}

// Инициализация объекта post1
const post1 = new Post('Александр', '' , '29.05.22');

// Вызываем метод edit
post1.edit(prompt("Введите текст поста"));


// Функция-конструктор AttachedPost наследуемая от Post
class AttachedPost extends Post {
  constructor(author, text, date) {
      super(author, text, date);
      this.highlighted = false;
  }
  // Добавляем метод makeTextHighlighted
  makeTextHighlighted() {
      this.highlighted = true;
  }
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


