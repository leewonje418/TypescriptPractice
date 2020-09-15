interface Size {
    width: number;
    height: number;
}

interface Label {
    title: string;
    size: Size;
}

function labelPrint(label: Label): void {
    console.log(label);
}

let myLabel = <Label> {
    title: '타입스크립트 도서', size: { width: 20, height: 29}
};

labelPrint(myLabel);