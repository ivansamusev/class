// const arr = [1, 2, 3, 4, 5];

// Array.prototype.mnoz = function (n) {
//   return this.map(function (number) {
//     return number * n;
//   });
// };

// console.log(arr.mnoz(2));

// 1

class Car {
    #engine
  constructor(brand, model, price, engine) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.#engine = engine;

  }
  getPrice(){
    return this.price
  }
  setPrice(pr){
    this.price = pr
  }

  get modelCar(){
    return this.model
  }

  set modelCar(value){
this.model = value
  }

}
let cars = new Car('BMW' ,'BMW X6 M' , 20000 + '$', '4.4-liter V-8' );
console.log("cars :>> ", cars);

console.log('cars.getPrice() :>> ', cars.getPrice());


console.log('cars.modelCar :>> ', cars.modelCar);
cars.modelCar = 'BMW m8'
console.log('object :>> ',  cars.modelCar);
