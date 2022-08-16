
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(nameProd, year, maxSpeed, value) {
    this.nameProd = nameProd
    this.year = year
    this.maxSpeed = maxSpeed
    this.value = value
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину'` );
    }
    this.info = function (){
        console.log(`nameProd: ${this.nameProd} year: ${this.year} maxSpeed: ${this.maxSpeed} value${this.value} ` )

    }
    this.incMax=function (newSped){
            this.maxSpeed+=newSped
            console.log(`Нова максималка = ${this.maxSpeed}`);

        }

    this.changeYear= function (newYear){
        this.year=newYear
        console.log(`Рік змінено на ${this.year}`);

    }

}







let driver1 = new Car ('fsdfsds',2008,190,2999)
console.log(driver1);
driver1.drive()
driver1.info()
driver1.incMax(100)
driver1.changeYear(2005)
console.log(driver1);


//
// class Customer extends Car {
//     constructor(nameProd, year, maxSpeed, value,newSped) {
//         super(nameProd, year, maxSpeed, value);
//         this.newSped = newSped;
//         // this.increeMax=function (newSped){
//         //     maxSpeed+=newSped
//         //     console.log(`${maxSpeed}`);
//         //
//         // }
//     }
// }



//
// function User(name, age, status, wifeName, wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge}
//     this.greeting = function () {
//         console.log('hi');
//     };
// }
//
// let user = new User('asd', 123, true, 'anna', 28);
// console.log(user);