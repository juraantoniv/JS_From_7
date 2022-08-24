
let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id');
console.log(id)

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(rens => rens.json())
    .then(postDet => {

        console.log(postDet)

            let htmlDivElement = document.createElement("div");
            document.body.appendChild(htmlDivElement)

        for (const info of postDet) {

            let name_id = document.createElement('div')
            name_id.innerText = `'Post ID' ${info.postId}  'ID:' ${info.id}`
            htmlDivElement.appendChild(name_id)


            let name_id1 = document.createElement('div')
            name_id1.innerText = `${info.name}`
            htmlDivElement.appendChild(name_id1)

            let name_id2 = document.createElement('div')
            name_id2.innerText = `${info.email}`
            htmlDivElement.appendChild(name_id2)

            let name_id3 = document.createElement('p')
            name_id3.innerText = `${info.body}`
            htmlDivElement.appendChild(name_id3)







            // button.onclick = function () {
            //
            //     window.localStorage.setItem('post', JSON.stringify(value))
            //     location.href = `post.html?id=${value.id}`
            // }
        }
        }


    )