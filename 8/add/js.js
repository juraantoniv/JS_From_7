
class User{
    constructor ( name,  username, email,street,suite,city,zipcode,lat,lng) {
        this.name =name
        this.username = username
        this.email=email
        this.adres ={
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        }
    }

}

class Phone {
    constructor(phone,  website,name,catchPhrase,bs) {
        this.phone = phone
        this.website = website
        this.company ={
            name: name,
            catchPhrase:catchPhrase,
            bs:bs
        }
    }
}


let user = new User('Sacha','saaaaa','fdfd@gmail.com','gdgdgdg','dgdgdgdgd','dgdgdgdg','dgdgdgdgd','22,1222','22,55888')
let pho = new Phone(78952566,'www.empty.com','fgdfgdg','sfsdfsfsf','fsfsdfsfsfsd')



let all= [ user,pho]
console.log(all)




// //--------------------------------------------------2 незнаю як користуватись http://htmlbook.ru/)
//
// document.write(`<div class="box">`)
//
// document.write(`<h4 class="text">${user.name}</h4>`)
// document.write(`<p class="text" >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`)
// document.write(`<div class="text" >Phone : ${pho.phone} | ${pho.website}</div>`)
// document.write(`<div class="text" >Phone : ${adr.city} | ${adr.zipcode}</div>`)
// document.write(`<div class="text" >GPS:  ${geO.lat} | ${geO.lng}</div>`)
//
// document.write(`</div>`)