"use strict"

alert("Вы запустили игру \"Отгадай загадку\",\n" +
    "ответ на каждую загадку состоит из одного слова. \n" +
    "Приступим!");

const questionFirst = prompt("Стоит дуб,\n" +
                            "В нем двенадцать гнезд,\n" +
                            "В каждом гнезде \n" +
                            "По четыре яйца,\n" +
                            "В каждом яйце \n" +
                            "По семи цыпленков.", "");
const questionSecond = prompt("Вот иголки и булавки \n" +
                            "Выползают из-под лавки,\n" +
                            "На меня они глядят,\n" +
                            "Молока они хотят.", "");
const questionThird = prompt("Страну чудес откроем мы \n" +
                            "И встретимся с героями \n" +
                            "В строчках,\n" +
                            "На листочках,\n" +
                            "Где станции на точках.", "");
const questionFourd = prompt("Мудрец в нем видел мудреца, \n" +
                            "Глупец — глупца,\n" +
                            "Баран — барана,\n" +
                            "Овцу в нем видела овца,\n" +
                            "И обезьяну — обезьяна,\n" +
                            "Но вот подвели к нему %USERNAME%,\n" +
                            "И %USERNAME% неряху увидел бородатого.", "");

alert( questionFirst.toLowerCase() );

//        if questionFirst == "год"