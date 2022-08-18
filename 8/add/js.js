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



//----------------------------------------


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
        if (typeof money==="number" && id === this.key && money!==0) {
            this.balance += money
            this.historyLogs.credits =money
            this.historyLogs.operationType = 'putCredits'
            // this.historyLogs.operationTime =(`${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}|${new Date().getHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()}`)
            this.historyLogs.operationTime = new Date().toUTCString()
            return this.balance
        }

    }

    takeCredits(money, id) {
        if (typeof money==="number" && id === this.key && this.balance > 0) {
            this.historyLogs.credits = money
            this.historyLogs.operationType = ' takeCredits'
            //this.historyLogs.operationTime =(`${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}|${new Date().getHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()}`)
            this.historyLogs.operationTime = new Date().toUTCString()
            this.balance -= money
            if (this.balance < 0) {
                console.log('balance is negative.Please add some money to your balance')
            }
            return this.balance
        }

    }

    setTransactionLimit(amount, id) {
        if (typeof amount==="number" && id === this.key && amount!==0) {
            this.transactionLimit += amount
           // this.historyLogs.operationTime =(`${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}|${new Date().getHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()}`)
            this.historyLogs.operationTime = new Date().getTimezoneOffset()
            this.historyLogs.credits =amount
            this.historyLogs.operationType = 'setTransactionLimit'
            return this.transactionLimit


        }
        else {
            console.log("Error you want to apply limit 0 or less")
        }
    }

    transferCredits(amount,to_id) {
        if (typeof amount==="number" && this.balance>0 && amount<this.transactionLimit) {
            this.balance -= amount * 1.05
            //this.historyLogs.operationTime =(`${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}|${new Date().getHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()}`)
            this.historyLogs.operationTime = new Date().toUTCString()
            this.historyLogs.credits =amount
            this.historyLogs.operationType = 'transferCredits'
            for (const amountElement of users) {
                if (to_id === amountElement.key) {
                    amountElement.balance += amount
                    this.historyLogs.credits =amount
                    //amountElement.historyLogs.operationTime =(`${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}|${new Date().getHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()}`)
                    amountElement.historyLogs.operationTime = new Date().toUTCString()
                    amountElement.historyLogs.operationType = 'transferCredits'
                    amountElement.historyLogs.credits =amount
                    break
                }

            }

        }
        else {
            console.log('Balance is to small that to transfer money or limit is to small for this transaction')
        }
    }
}





let user = new User(100,500,'jhjkhkhkh',1)
let user1 = new User(100,500,'jhjkhkhkh',2)
let user2 = new User(100,500,'jhjkhkhkh',3)


let users = [user,user1,user2]

// user.putCredits(500,1)
// console.log(users)
user.takeCredits(100,1)
// console.log(user)
user.transferCredits(100,1,3)
// console.log(users);
// user.transferCredits(100,3)
// console.log(users);
// user.transferCredits(100,3)
// console.log(users);
// user.transferCredits(100,3)
// console.log(users);
// user.transferCredits(600,3)

user.putCredits(500,1)
// console.log(users);
// user.putCredits(500,1)
// user.transferCredits(150,3)
// console.log(users);
// user.transferCredits(150,3)
// console.log(users);
// user.takeCredits(150,1)
// console.log(user);
user.transferCredits(150,2)
// console.log(users);
user.transferCredits(150,2)
// console.log(users);
user.transferCredits(150,2)
user.putCredits(150,1)
user.putCredits(150,1)
// console.log(user);
user.transferCredits(150,3)
// console.log(users);
user2.transferCredits(100,1)
// console.log(users);
user.putCredits(150,1)
//console.log(user);
user.putCredits(150,1)
console.log(user);
