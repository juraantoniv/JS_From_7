let box = document.createElement('div')
box.classList.add('box_all')

fetch('https://jsonplaceholder.typicode.com/users/')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            localStorage.setItem('id',JSON.stringify(users))
            let div = document.createElement('div');
            div.classList.add('user_all')

            let name =document.createElement('div')
            name.innerText = `${user.id} ${user.name} ${user.username}`
            div.appendChild(name)


            let tel = document.createElement('h5')
            tel.innerText=`tel. ${user.phone}`
            div.appendChild(tel)

            let web = document.createElement('h4')
            web.innerText=` ${user.website}`
            div.appendChild(web)



            let email = document.createElement('div')
            email.innerText = `${user.email}`
            div.appendChild(email)
                box.appendChild(div)

            let url = document.createElement('a')
            url.href =`user-details.html?id=${user.id}`
            url.innerText= 'Ifo of user'
            div.appendChild(url)
        }
    });

document.body.appendChild(box)