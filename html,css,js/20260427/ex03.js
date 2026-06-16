function solution(price) {
    // price 100000원 이상일때는 5%
    // 300000만원 이상일때는 10%
    // 500000만원 이상일때는 20%
    if (price >= 500000) {
        return parseInt(price * 0.8);
    } else if (price >= 300000) {
        return parseInt(price * 0.9);
    } else if(price >= 100000) {
        return parseInt(price * 0.95);
    }else{
        return price;
    }
}


const ret = solution(580000);
console.log(ret);