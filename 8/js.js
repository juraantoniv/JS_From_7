
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
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину'` );
    };
}

let driver1 = new Car ('fsdfsds',2005,190,2999)

console.log(driver1);


