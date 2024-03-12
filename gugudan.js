#!/usr/bin/env node

const readline = require('readline');

function printMultiplicationTable(number) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('구구단을 출력할 숫자를 입력하세요: ', (answer) => {
    const number = parseInt(answer);
    if (!isNaN(number)) {
        console.log(`${number}단을 출력합니다:`);
        printMultiplicationTable(number);
    } else {
        console.log('유효한 숫자를 입력해주세요.');
    }
    rl.close();
});
