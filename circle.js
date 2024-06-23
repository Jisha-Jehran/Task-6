class Circle{
    constructor(double=1.0,String='red'){
        this.double=double;
        this.String=String
    }
    getRadius(){
        return this.double;
    }
    setRadius(radius){
        return this.double=radius;
    }
    getColor(){
        return this.String;
    }
    setColor(color){
        return this.String=color;
    }
    toString(){
        return `Circle[radius=${this.double},color=${this.String}]`;
    }
    getArea(){
        return Math.PI*this.double**2
    }
    getCircumference(){
        return 2*Math.PI*this.double
    }
}
//1
const firstCircle=new Circle();
console.log(firstCircle);
//2
const secondCircle=new Circle(2.0);
console.log(secondCircle);
//3
const thirdCircle=new Circle(3.0,'green');
console.log(thirdCircle);
//4
console.log(firstCircle.getRadius());
//5
console.log(firstCircle.setRadius(2.0));
//6
console.log(firstCircle.getColor());
//7
console.log(firstCircle.setColor());
//8
console.log(firstCircle.toString());
//9
console.log(firstCircle.getArea().toFixed(2));
//10
console.log(firstCircle.getCircumference().toFixed(2));