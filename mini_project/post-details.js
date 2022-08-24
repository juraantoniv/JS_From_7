
let url = new URL(location.href);
let userId = url.searchParams.get('userId');


fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then(rens => rens.json())
    .then(value => {

            let post = document.createElement('h3')
            post.innerText =`${value.title}`
            document.body.appendChild(post)



    })