
let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id');
console.log(id)


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(rens => rens.json())
    .then(value => {  console.log(value)

            let htmluListElement = document.createElement('div');
        htmluListElement.classList.add('ones')
            document.body.appendChild(htmluListElement)
        for (const valueElement of value) {
            let one = document.createElement('div')
            one.classList.add('ones1')
            htmluListElement.appendChild(one)


            // let post1 = document.createElement('div')
            // post1.innerText =`${valueElement.id}`
            // one.appendChild(post1)


            let post = document.createElement('div')
            post.innerText =`${valueElement.title}`
            one.appendChild(post)



            let  but1 = document.createElement('button')
            but1.classList.add('but')
            but1.innerText = 'Post details'
            one.appendChild(but1)

            but1.onclick = function () {

                window.localStorage.setItem('post', JSON.stringify(value))
                location.href = `post-details.html?id=${valueElement.id}`
            }

        }
    })

