'use strict';

// Задание 1. Объясните почему код даёт именно такие результаты?
//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2
/*
1. Переменным 'а' и 'b' присвоитли значение 1. 
2. Переменной 'с' присвоитли значение переменной 'а' c префиксным инкрементом. 
Префиксный инкремент возвращает значение увеличенное на 1, поэтому с == 2
*/

//пример 2
d = b++;
alert(d); //ответ: 1
/*
1. Переменной 'd' присвоитли значение переменной 'b' c постфиксным инкрементом. 
2. Постфиксный инкремент также увеличивает значение на 1, но возвращает старое значение (которое было до увеличения) , поэтому d == 1
*/

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5
/*
1. Переменной 'c' присвоитли сумму числа 2 и значение переменной 'а' c префиксным инкрементом. 
2. Префиксный инкремент возвращает значение увеличенное на 1, поэтому a == 2 + 1 == 3.
3. c == 2 + 3 == 5 
*/

//пример 4
d = 2 + b++;
alert(d); //ответ: 4
/*
1. Переменной 'd' присвоитли сумму числа 2 и значение переменной 'b' c постфиксным инкрементом. 
2. Постфиксный инкремент возвращает старое значение (которое было до увеличения) , поэтому d == 2 + 2 == 4. Но переменная 'b' при этом становится равной 3. Переменная 'a' в прошлом примере стала равной 3.
*/

alert(a); //3 
alert(b); //3



/*Задание 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий).
*/
a = 2;
let x = 1 + (a *= 2);
console.log (a); //4
console.log (x); //5
/*
1. Переменной 'a' присвоитли значение 2.
2. По приоритету сначала вычисляется выражение в скобках a = a * 2. Теперь а == 4.
3. Переменной 'х' присвоитли сумму числа 1 и значение переменной 'а'.
4. x == 1 + 4 == 5
*/

