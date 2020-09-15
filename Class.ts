// 클래스 기본 구성
class Animal {
    name: string; // 프로퍼티
    legs: number; // 프로퍼티

    constructor(name: string, legs: number = 4) { // 생성자
        this.name = name;
        this.legs = legs;
    }

    info(): string { // 함수
        return `${this.name} has ${this.legs} legs`;
    }
}

let dog: Animal = new Animal("Happy");
console.log(dog.info());

// 상속
class Animal2 {
    name: string;
    legs: number;

    constructor(name: string, legs: number = 4) {
        this.name = name;
        this.legs = legs;
    }

    info(): string {
        return `${this.name}는 다리가 ${this.legs}개다.`;
    }

    move(meters: number): string {
        return this.name + "가 " + meters + "미터를 움직였다."
    }
}