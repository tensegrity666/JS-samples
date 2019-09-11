"use strict";

let money = +prompt("Введите сумму вклада: ", "");
let year = +prompt("Введите срок вклада (целое количество лет): ", "");
let percents = +prompt("Введите желаемый процент вклада", "");

percents = percents / 100;
let total = "Изменение размера вклада по годам:\n";

for (let i = 1; i <= year; i++) {
    money = money + (money * percents);
    total += i + " год: " + money.toFixed(2) + " рублей;\n"
};

alert(total);