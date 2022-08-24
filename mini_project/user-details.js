
let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id');
console.log(id)


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(rens => rens.json())
    .then(value => {

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

            let button = document.createElement('button')
            button.innerText = 'User Details'
            document.body.appendChild(button)

            button.onclick = function () {

                window.localStorage.setItem('post', JSON.stringify(value))
                location.href = `post.html?id=${value.id}`
            }

        }


    )