let dic = new Object();

dic.boy = "소년";
dic.girl = "소녀";
dic.friend = "친구";
dic.doA = function(){
    console.log('doA 함수');
}

console.log(dic);
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

console.log(dic.doA);
dic.doA();