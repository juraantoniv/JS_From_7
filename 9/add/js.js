let emptyArrOFHTML =[]
function recurs(htmlElement){
console.log(htmlElement)
    let children= htmlElement.children
    if(htmlElement.children.length!==0){
        for (const htmlElementElement of children) {
            emptyArrOFHTML.push(htmlElementElement)
            recurs(htmlElementElement)
        }
    }




}


recurs(document.body)
console.log(emptyArrOFHTML)