
let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id');
console.log(id)

    let com = document.createElement('div')
    com.classList.add('com')
    document.body.appendChild(com)


fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(rens => rens.json())
    .then(postDet => {

        console.log(postDet)

            let htmlDivElement = document.createElement("div");

            htmlDivElement.classList.add('com1')
            com.appendChild(htmlDivElement)

        for (const info of postDet) {


            let  div =   document.createElement("div")
            div.classList.add('div')
            htmlDivElement.appendChild(div)

            let name_id = document.createElement('div')
            name_id.innerText = `Post ID ${info.postId} | ID: ${info.id}`
            name_id.classList.add('small')
            div.appendChild(name_id)


            let name_id1 = document.createElement('div')
            name_id1.innerText = `${info.name}`
            name_id1.classList.add('small')
            div.appendChild(name_id1)

            let name_id2 = document.createElement('div')
            name_id2.innerText = `${info.email}`
            name_id2.classList.add('small')
            div.appendChild(name_id2)

            let name_id3 = document.createElement('div')
            name_id3.innerText = `${info.body}`
            name_id3.classList.add('small1')
            div.appendChild(name_id3)


            }
        }


    )