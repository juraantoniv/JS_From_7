//
// class User{
//     constructor ( name,  username, email,street,suite,city,zipcode,lat,lng) {
//         this.name =name
//         this.username = username
//         this.email=email
//         this.adres ={
//             street: street,
//             suite: suite,
//             city: city,
//             zipcode: zipcode,
//             geo: {
//                 lat: lat,
//                 lng: lng
//             }
//         }
//     }
//
// }
//
// class Phone {
//     constructor(phone,  website,name,catchPhrase,bs) {
//         this.phone = phone
//         this.website = website
//         this.company ={
//             name: name,
//             catchPhrase:catchPhrase,
//             bs:bs
//         }
//     }
// }
//
//
// let user = new User('Sacha','saaaaa','fdfd@gmail.com','gdgdgdg','dgdgdgdgd','dgdgdgdg','dgdgdgdgd','22,1222','22,55888')
// let pho = new Phone(78952566,'www.empty.com','fgdfgdg','sfsdfsfsf','fsfsdfsfsfsd')
//
//
//
// let all= [ user,pho]
// console.log(all)
//



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




class User {
    constructor(balance, transactionLimit, historyLogs, key, operationType, credits, operationTime) {
        this.key = key
        this.balance = balance
        this.transactionLimit = transactionLimit
        this.historyLogs = {
            operationType: operationType,
            credits: credits,
            operationTime: operationTime
        }
    }


    putCredits(money, id) {
        if (id === this.key) {
            this.balance += money
            return this.balance
        }

    }

    takeCredits(money, id) {
        if (id === this.key && this.balance > 0) {
            this.balance -= money
            if (this.balance < 0) {
                console.log('balance is negative.Please add some money to your balance')
            }
            return this.balance
        }

    }

    setTransactionLimit(amount, id) {
        if (id === this.key) {
            this.transactionLimit += amount
            return this.transactionLimit


        }
    }

    transferCredits(amount,from_id,to_id) {
        if (this.balance<=0 || this.balance<amount) {
            this.balance -= amount * 1.05
            for (const amountElement of users) {
                if (to_id === amountElement.key) {
                    amountElement.balance += amount
                    break
                }

            }

        }
        else {
            console.log('balance is to small that transfer money')
        }
    }
}





let user = new User(100,500,'jhjkhkhkh',2)
let user1 = new User(100,500,'jhjkhkhkh',3)
let user2 = new User(100,500,'jhjkhkhkh',4)


let users = [user,user1,user2]

// user.setTransactionLimit(800,2)
// console.log(users)
// user2.putCredits(8000,4)
// console.log(users)
user1.transferCredits(75,2,4)
console.log(users);
user1.transferCredits(15,2,4)
console.log(users);
user1.transferCredits(15,2,4)