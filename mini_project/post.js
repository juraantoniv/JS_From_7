
let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id');
console.log(id)


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(rens => rens.json())
    .then(value => {  console.log(value)

            let htmluListElement = document.createElement('ul');
            document.body.appendChild(htmluListElement)
        for (const valueElement of value) {



            let post1 = document.createElement('li')
            post1.innerText =`${valueElement.id}`
            htmluListElement.appendChild(post1)


            let post = document.createElement('li')
            post.innerText =`${valueElement.title}`
            htmluListElement.appendChild(post)



            let  but1 = document.createElement('button')
            but1.innerText = 'Post-details'
            htmluListElement.appendChild(but1)

            but1.onclick = function () {

                window.localStorage.setItem('post', JSON.stringify(value))
                location.href = `post-details.html?id=${valueElement.id}`
            }

        }
    })

