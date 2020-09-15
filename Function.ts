// 명명 함수(Named function)
function point1(x, y) {
    return x + y;
}

// 익명 함수 (Anonymous function)
let myPoint = function(x, y) { return x + y; };

// 함수의 파라미터 값에 타입을 작성할 수 있음
function point2(x: number, y: number): number {
    return x + y;
}

// 함수에서는 기본값을 넣어줄 수 있고, 필수 파라미터를 넣지 않을수도 있다. 필수 파라미터가 아닐경우 ?를 붙인다.
function point3(x: number, y: number = 10): number {
    return x + y;
}

console.log("OUTPUT:" + point3(20));

function optionPoint(x: number, y?: number): number {
    if(y) {
        return x + y;
    }
    return x;
}

console.log("OUTPUT:" + optionPoint(10, 10));
console.log("OPUPUT:" + optionPoint(10));

// 나머지 Rest파라미터는 파라미터들을 모아서 한 번에 변수로 대입해서 사용하는 방법이다.
function cities(name: string, ...restName: string[]) {
    return name + "," + restName.join(",");
}

let ourCities = cities("서울", "부산", "대구", "광주", "인천");
console.log(ourCities);