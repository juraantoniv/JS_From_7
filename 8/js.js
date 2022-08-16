
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
    // this.addDriver = function (newDriver){
    // }
    //  this.addDriver = function(owner) {
    //      this.['newDr']=owner
    // }
}







let driver1 = new Car ('fsdfsds',2008,190,2999)
console.log(driver1);
driver1.drive()
driver1.info()
driver1.incMax(100)
driver1.changeYear(2005)
// driver1.addDriver('New driver')
console.log(driver1)



// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone) {
       this.id = id;
       this.name = name;
       this.surname= surname;
       this.email= email;
       this.phone= phone;
   }


   let user1 = new User(25,'ivan','ivanov','vdss@gmail.com',+380977863287)
let user2 = new User(11, 'andrii', 'ivanov', 'adsdsd@gmail.com', +380977863557)
let user3 = new User(17, 'vitalii', 'ivanov', 'adsdsd@gmail.com', +380977863557)
let user4 = new User(18, 'andrii', 'ivanov', 'adsdsd@gmail.com', +380977863557)
let user5 = new User(5, 'stepan', 'ivanov', 'adsdsd@gmail.com', +380977855557)
let user6 = new User(15, 'petro', 'ivanov', 'adsdsd@gmail.com', +380977863557)
let user7 = new User(6, 'vasya', 'ivanov', 'adsdsd@gmail.com', +380987863897)

let users =[user1,user2,user3,user4,user5,user6,user7]

console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(value => value.id%2===0))

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a, b) => a.id-b.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone,...order) {
        this.id = id;
        this.name = name;
        this.surname= surname;
        this.email= email;
        this.phone= phone;
        this.order= order;
    }
}

let client1 = new Client(25,'Vasya','Pupkin', 'dsgss@gmail.com', +380977863872, 'jhjhggh,fsfsdf,sfsfs,fsfsdfsd,55555,hffgf')
let client2 = new Client(20,'Andrii','Pupkin', 'dsgss@gmail.com', +380977863872, 'dgsdgs,fsfsdf,fsfsfs,fsfsdfsd')
let client3 = new Client(15,'Vasya','Pupkin', 'dsgss@gmail.com', +380977863872, 'dgsdgs,fsfsdf,fsfsdfsd,2525252')
let client4 = new Client(10,'Vasya','Pupkin', 'dsgss@gmail.com', +380977863872, 'dgsdgs,fsfsdf,fsfsdfsd')
let client5 = new Client(10,'Vasya','Pupkin', 'dsgss@gmail.com', +380977863872, 'dgsdgs,fsfsdf')
let client6 = new Client(10,'Vasya','Pupkin', 'dsgss@gmail.com', +380977863872, 'dgsdgs,fsfsdf,fsfsdfsd,454545')
let client7 = new Client(10,'Vasya','Pupkin', 'dsgss@gmail.com', +380977863872, 'dgsdgs,fsfsdf,fsfsdfsd')
let client8 = new Client(10,'Vasya','Pupkin', 'dsgss@gmail.com', +380977863872, 'dgsdgs')
let client9 = new Client(10,'Vasya','Pupkin', 'dsgss@gmail.com', +380977863872, 'dgsdgs,fsfsdf,fsfsdfsd')
let client10 = new Client(10,'Vasya','Pupkin', 'dsgss@gmail.com', +380977863872, 'dgsdgs,fsfsdf,fsfsdfsd,54545,45454,1,454555556')


let clients =[client1,client2,client3,client4,client5,client6,client7,client8,client9,client10]

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => a.order.toString().length -b.order.toString().length));

