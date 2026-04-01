const test1 = "test";
const test2 = undefined;

// ?? null이거나 undefined를 테스트합니다.
const result1 = test1 ?? null;
const result2 = test2 ?? null;

console.log(result1);
console.log(result2);
