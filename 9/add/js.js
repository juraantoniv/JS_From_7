let emptyArrOFHTML =[]
function recurs(htmlElement){
console.log(htmlElement)
    emptyArrOFHTML.push(htmlElement)
    let children= htmlElement.children.classList
    if(htmlElement.children.length!==0){
        for (const htmlElementElement of htmlElement.children) {
            recurs(htmlElementElement)
        }
    }
}


recurs(document.body)
console.log(emptyArrOFHTML)