// 값에 변경이 불가능 한데
// 원시형 자료형 타입은 변경이 불가능 한데
// 오브젝트형 자료형 타입은 변경이 가능하다.
// 오브젝트형 자료형 타입 변수와 함수를 가지고 있었는것..
const person = { 
    name: '건우', 
    hi:function(){
    console.log('hihi'); 
     } 
 }
 person.name = '준후';
console.log(person.name);
// console.log(person.hi);
person.hi(); //함수호출