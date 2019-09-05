"use strict"

const a = +prompt("Введите первое число", "");
const b = +prompt("Введите второе число", "");
const addition = a+b;
const subtraction = a-b;
const division = a/b;
const multiplication = a*b;
const average = (a+b)/2;


alert( "Результат сложения: " + addition + "\n" +
       "Результат вычитания: " + subtraction + "\n" +
       "Результат деления: " + division + "\n" +
       "Результат умножения: " + multiplication + "\n" +
       "Среднее арифметическое: " + average );