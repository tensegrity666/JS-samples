"use strict";

function arrCreate(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array;
}

function arrSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function arrMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function arrMin(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            max = array[i];
        }
    }
    return min;
}

function arrEvens(array) {
    let even = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even.push(array[i]);
        }
    }
    return even;
}

let array = arrCreate(9);

alert(array);
alert(arrSum(array));
alert(arrMax(array));
alert(arrMin(array));
alert(arrEvens(array));