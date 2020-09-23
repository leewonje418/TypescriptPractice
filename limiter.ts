// public
class Face {
    public edge: number;

    constructor(edge: number) {
        this.edge = edge;
    }
}

class Rect extends Face {
    constructor() {
        super(4);
    }
}

//private
class Face2 {
    private edge: number;

    constructor(edge: number) {
        this.edge
    }

    public addEdge() {
        this.edge++;
    }

    protected getEdge() {
        return this.edge;
    }
}

class Rect2 extends Face {
    constructor() {
        super(4);
    }

    public getEdge() {
        return this.getEdge()
    }
}

const rect = new Rect2();
console.log(rect.getEdge());