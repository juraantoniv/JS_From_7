let box = document.createElement('div')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name} ${user.username}`;
            div.classList.add('user_all')
            document.body.appendChild(div);
            let div1 = document.createElement('div')
            div1.classList.add('user_name')
            div1.innerText = `${user.email}`
            div.appendChild(div1)
            box.appendChild(div)
        }

    });

