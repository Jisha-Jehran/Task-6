//Uber Price calculation
class UberPrice{
    constructor(distance,price=60){  //setting Rs.60 as default uberCar charge per km
        this.distance=distance;
        this.price=price;
    }
    getUberPrice(){
        return this.distance*this.price
    }
}
//creating a instance for a man who travelled 5 kilometer in UberCar 

const customer1=new UberPrice(5);
console.log(customer1.getUberPrice());

//creating a instance for another man who travelled 5 kilometer in UberCar and the driver charges Rs.50 per km.

const customer2=new UberPrice(5,50);
console.log(customer2.getUberPrice());
