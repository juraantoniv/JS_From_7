
class User{
    constructor ( name,  username, email) {
        this.name =name
        this.username = username
        this.email=email
    }

}
class Address{
    constructor ( street,  suite,   city,zipcode,) {
        this.street =street
        this.suite = suite
        this.city=city
        this.zipcode = zipcode
    }
}

class Geo {
    constructor(lat, lng) {
        this.lat = lat
        this.lng = lng
    }
}


class Phone {
    constructor(phone,  website) {
        this.phone = phone
        this.website = website
    }
}

class  Company{
    constructor(name,catchPhrase,bs) {
        this.name =name
        this.catchPhrase= catchPhrase
        this.bs =bs
    }
}


let user = new User('Sacha','saaaaa','fdfd@gmail.com')
let adr = new Address('nnnnn', 'fsfsfs str','Lviv','79000')
let geO = new Geo('55,66666','22,65584')
let pho = new Phone(78952566,'www.empty.com')
let company = new  Company('Romaguera-Crona','Multi-layered client-server neural-ne', 'harness real-time e-markets')


let arrAll = [user,{adr,geO},{pho,company}]

let arrAll1 = new User('Sacha','saaaaa','fdfd@gmail.com',
    new Address('nnnnn', 'fsfsfs str','Lviv','79000',
        new Geo('55,66666','22,65584'),
        new Phone(78952566,'www.empty.com',
            new  Company('Romaguera-Crona','Multi-layered client-server neural-ne', 'harness real-time e-markets'))))

console.log(arrAll)
console.log(arrAll1)

//--------------------------------------------------2 незнаю як користуватись http://htmlbook.ru/)

document.write(`<div class="box">`)

document.write(`<h4 class="text">${user.name}</h4>`)
document.write(`<p class="text" >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`)
document.write(`<div class="text" >Phone : ${pho.phone} | ${pho.website}</div>`)
document.write(`<div class="text" >Phone : ${adr.city} | ${adr.zipcode}</div>`)
document.write(`<div class="text" > ${geO.lat} | ${geO.lng}</div>`)

document.write(`</div>`)
