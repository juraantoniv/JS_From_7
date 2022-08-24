
let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id');
console.log(id)


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(rens => rens.json())
    .then(value => { console.log(value)

            let name12 = document.createElement('div')
            name12.innerText = `${value.id} ${value.name} ${value.username}`
            document.body.appendChild(name12)


            let tel = document.createElement('h5')
            tel.innerText = `tel. ${value.phone}`
            document.body.appendChild(tel)

            let web = document.createElement('h4')
            web.innerText = ` ${value.website}`
            document.body.appendChild(web)


            let email = document.createElement('div')
            email.innerText = `${value.email}`
            document.body.appendChild(email)

            let adr2 = document.createElement('div')
            adr2.innerText = `City: ${value.address.city} | Zipcode:${value.address.zipcode}`
             document.body.appendChild(adr2)

            let adr = document.createElement('div')
            adr.innerText = `Suite: ${value.address.suite}`
            document.body.appendChild(adr)

             let adr1 = document.createElement('div')
            adr1.innerText = `Street: ${value.address.street}`
            document.body.appendChild(adr1)

            let button = document.createElement('button')
            button.innerText = 'User Details'
            document.body.appendChild(button)



            button.onclick = function () {

                window.localStorage.setItem('post', JSON.stringify(value))
                location.href = `post.html?id=${value.id}`
            }

        }


    )