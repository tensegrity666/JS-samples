"use strict"

let playerCounter = 1;
let counter = 0;
const number = parseInt(Math.random() * 100);

let answer = prompt("Попробуй угадать число от 0 до 100.\n" +
    "Попытка " + playerCounter + " игрока.\n" +
    "Для выхода введите quit.", "");

while (true) {
    if (answer == number) {
        alert("Правильно! Победил игрок " + playerCounter + "\nЗагаданное число: " + number + "\nВсего ходов потребовалось: " + counter);
        break;
    } else if (answer > number) {
        answer = prompt("Слишком много, пропробуйте еще раз\n" +
            "Ход игрока " + playerCounter, "");
        counter++;
    } else if (answer < number) {
        answer = prompt("Маловато, пропробуйте еще раз\n" +
            "Ход игрока " + playerCounter, "");
        counter++;
    } else if (answer === 0) {
        answer = prompt("Маловато, пропробуйте еще раз\n" +
            "Ход игрока " + playerCounter, "");
        counter++;
    } else if (answer == "quit") {
        alert("Устали?(((");
        break;
    } else answer = prompt("Попробуйте ввести число...\n" +
        "Ход игрока " + playerCounter, "");

    if (playerCounter == 1) {
        playerCounter = 2;
    } else playerCounter = 1;
}