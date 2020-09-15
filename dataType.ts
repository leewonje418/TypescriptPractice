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