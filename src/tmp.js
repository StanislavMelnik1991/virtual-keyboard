class Rectangle{
    constructor(height, width){
        this.height = height
        this.width = width
    }
    p(){
        return this.height*this.width
    }
}
const S = new Rectangle(1, 2)
class Square extends Rectangle{
    constructor(size){
        super(size, size)
    }
}
const sq = new Square(4)

class Round{
    constructor(radius){
        this.radius = radius
    }
    p(){
        return Math.PI*(this.radius**2)
    }
}
const r1 = new Round(2)
r1.p()

export const arr = [S, sq, r1]

