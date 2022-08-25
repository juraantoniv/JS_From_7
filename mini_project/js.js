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
            name.innerText = `${user.id} | ${user.name} `
            div.appendChild(name)


            let name1 =document.createElement('div')
            name1.innerText = ` User name: ${user.username}`
            div.appendChild(name1)

            let tel = document.createElement('h5')
            tel.innerText=`tel. ${user.phone}`
            div.appendChild(tel)

            let web = document.createElement('h4')
            web.classList.add('web')
            web.innerHTML=` ${user.website}`
            div.appendChild(web)



            let email = document.createElement('div')
            email.innerText = `${user.email}`
            email.classList.add('aaa')
            div.appendChild(email)
            box.appendChild(div)

            let url = document.createElement('button')
            url.classList.add('button1')
            url.href =`user-details.html?id=${user.id}`
            url.innerText= 'Info of User'
            div.appendChild(url)


            url.onclick = function () {

                window.localStorage.setItem('post', JSON.stringify(users))
                location.href = `user-details.html?id=${user.id}`
            }

        }
    });

document.body.appendChild(box)