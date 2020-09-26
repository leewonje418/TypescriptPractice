class Face {
    private _edge: number = 3;
    get edge() {
        return this._edge;
    }
    set edge(value: number) {
        this._edge = value;
    }
}

const face = new Face();

console.log(face.edge);
face.edge = 5;
console.log(face.edge);