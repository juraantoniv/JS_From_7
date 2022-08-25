
let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id');
console.log(id)

let allTh = document.createElement('div')
allTh.classList.add('allTh')
document.body.appendChild(allTh)


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(rens => rens.json())
    .then(value => { console.log(value)

            let name12 = document.createElement('div')
            name12.innerText = `${value.id}| ${value.name} `
            allTh.appendChild(name12)

            let name123 = document.createElement('div')
            name123.innerText =  `User Name: ${value.username}`
            allTh.appendChild(name123)


            let tel = document.createElement('h5')
            tel.innerText = `tel. ${value.phone}`
             allTh.appendChild(tel)

            let web = document.createElement('h4')
            web.innerText = ` ${value.website}`
            allTh.appendChild(web)


            let email = document.createElement('div')
            email.innerText = `${value.email}`
            allTh.appendChild(email)

             let adrBox = document.createElement('div')
            adrBox.classList.add('adrBox')
             allTh.appendChild(adrBox)

            let adr2 = document.createElement('div')
            adr2.innerText = `City: ${value.address.city}  Zipcode:${value.address.zipcode}`
             adrBox.appendChild(adr2)

            let adr = document.createElement('div')
            adr.innerText = `Suite: ${value.address.suite}`
            adrBox.appendChild(adr)

             let adr1 = document.createElement('div')
            adr1.innerText = `Street: ${value.address.street}`
            adrBox.appendChild(adr1)

            let button = document.createElement('button')
            button.classList.add('btn')
            button.innerText = 'Post of User'
            allTh.appendChild(button)



            button.onclick = function () {

                window.localStorage.setItem('post', JSON.stringify(value))
                location.href = `post.html?id=${value.id}`
            }

        }


    )