"use strict"

const rubToDollar = 68.5;
const rubToEuro = 75.2;
const rub = +prompt("Введите количество рублей", "");

const dollar = rub/rubToDollar;
const euro = rub / rubToEuro;

alert( "Вы можете приобрести: \n" +
        dollar.toFixed(2) + " долларов \n" +
        euro.toFixed(2) + " евро" );