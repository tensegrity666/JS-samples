"use strict"

let checkAnswer = true;
let count = 0;

function askQuestion(question, answers) {
    let userAnswer = prompt(question, "");
    userAnswer = userAnswer.toLowerCase();

    for (let i = 0; i < answers.length; i++) {
        if (userAnswer === answers[i]) {
            count++;
            alert("Правильно! Переходим к следующей загадке");
            return;
        }
    }
    alert(`Неправильно :-( Верных ответов: ${count}`);
    checkAnswer = false;
}

alert("Вы запустили игру \"Отгадай загадку\",\n" +
    "ответ на каждую загадку состоит из одного слова. \n" +
    "Приступим!");

if (checkAnswer === true) {
    askQuestion("Стоит дуб,\n" +
                "В нем двенадцать гнезд,\n" +
                "В каждом гнезде \n" +
                "По четыре яйца,\n" +
                "В каждом яйце \n" +
                "По семи цыпленков.", ["год",]);
}

if (checkAnswer === true) {
    askQuestion("Вот иголки и булавки \n" +
                "Выползают из-под лавки,\n" +
                "На меня они глядят,\n" +
                "Молока они хотят.", ["ёж", "ежик", "ёжик", "еж",]);
}

if (checkAnswer === true) {
    askQuestion("Страну чудес откроем мы \n" +
                "И встретимся с героями \n" +
                "В строчках,\n" +
                "На листочках,\n" +
                "Где станции на точках.", ["книга", "книжка",]);
}

if (checkAnswer === true) {
    askQuestion("Мудрец в нем видел мудреца, \n" +
                "Глупец — глупца,\n" +
                "Баран — барана,\n" +
                "Овцу в нем видела овца,\n" +
                "И обезьяну — обезьяна,\n" +
                "Но вот подвели к нему %USERNAME%,\n" +
                "И %USERNAME% неряху увидел бородатого.", ["зеркало", "отражение",]);
}

alert(`Вы справились с ${count} загадками!`);