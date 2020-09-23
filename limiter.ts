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
    
}