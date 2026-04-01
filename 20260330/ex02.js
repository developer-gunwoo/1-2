const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// 함수 선언 옛날 방법
// function aa(){}
// 함수 선언 es2015 새로나온 방법
// const aa = ()=>{ }

rl.question('숫자입력', (data) => {
    let num = 1;
    for(; num < 10; num = num + 1){
        console.log(`${data} * ${num} = ${data*num}`);
    }
    rl.close();
})

// dhrjsdn@dhrjsdnui-MacBookPro 20260330 % node ex02.js
// >>숫자입력123123 
// >>123123