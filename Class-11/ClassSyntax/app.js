// Learn about prototypes
class Car{
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
    }

    // Class methods
    printCar() {
        console.log(`Name : ${this.name} and Price : ${this.price}`);
    }

    // getter and setter

    get getName() {
        return this.name;
    }

    set setPrice(newPrice) {
        if (newPrice >= 0) {
            this.price = newPrice;
        }
    }

}

const bmw = new Car('BMW', 10000, 'Black');
const ferrari = new Car('Ferrari', 20000, 'Red');

// console.log(bmw);
// console.log(ferrari);

// bmw.printCar();
// ferrari.printCar();


class RacingCar extends Car{
    constructor(name, price, topSpeed, isDiscBrake) {
        super(name, price);
        this.topSpeed = topSpeed;
        this.isDiscBrake = isDiscBrake;
    }

    printRacingCar() {
        console.log(`
            Name: ${this.name}
            Price: ${this.price}
            Top Speed : ${this.topSpeed}
            Is DiscBrake : ${this.isDiscBrake}
        `)
    }
}


const rc1 = new RacingCar('Ferrari', 3000, 500, true);

console.log(rc1);

rc1.printRacingCar();


class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(p) {
        const dx = this.x - p.x;
        const dy = this.y - p.y;
        return Math.hypot(dx, dy);
    }

    static euclidianDist(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.hypot(dx, dy);
    }

    // H.W
    // write a method to compute centroid of triangle represented by 3 points - p1, p2, p3
}

const p1 = new Point(3, 4);
const p2 = new Point(5, 8);

const distanceBetweenP1AndP2 = p1.distance(p2);

console.log(distanceBetweenP1AndP2);
console.log(Point.euclidianDist(p1, p2));



