
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
            let post = document.createElement('li')
            post.innerText =`${valueElement.title}`
            htmluListElement.appendChild(post)


        }
    })