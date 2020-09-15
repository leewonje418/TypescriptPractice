// 논리(참/거짓)
let isRun: boolean = false;

//숫자
let decimal: number = 5; // 10진수
let hex: number = 0xff; // 16진수

//문자열
let firstName: string = '김';
let lastName: string = "철수";

let fullName: string = '김 철수';
let age: number = 11;
let profile = `Full Name : ${fullName}
Age : ${age}` // "Full Name : " + fullName + "\nAge : " + age;

//배열
let list: number[] = [1, 2, 3];
// 또는 let list: Array<number> = [1, 2, 3];

//튜플
let point: [string, number];
point = ["x", 10];
//point = [10, "x"]; 이건 오류

//열거(Enum)
enum Color {
    Red = 1,
    Green,
    Blue
};
let color: Color = Color.Green;
console.log(color);

//임의(Any)
let sure: any = 1;
sure = "이건 문자열";
sure = true;

//보이드(void)
function log(msg): void {
    console.log("LOG : " + msg);
}

//null과 undefined
let a: number = null;

//never(절대 발생하지 않을 값을 의미한다. 예를 들어, 절대 리턴이 발생하지 않는다던가 항상 예외값을 던져서 절대 반환을 하지 않는 경우를 의미한다.)
function error(message: string): never {
    throw new Error(message);
}

function forever(): never {
    while(true) {

    }
}

//겍체(Object)
let user: { name: string; age: number; } = { name: '김철수', age: 12 };
console.log(user.name);