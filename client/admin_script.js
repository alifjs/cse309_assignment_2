let record=document.querySelector('.record')
// let clone=record.cloneNode(true)
let parent_node=document.querySelector('.container')

// console.log(clone.children[0].children[1].children[1].innerHTML)
// console.log(clone.children[1].children[1].innerHTML)
axios.get('http://localhost:3005/get_all_forms').then(response=>{
    response.data.map((row)=>{
        let clone=record.cloneNode(true)
        clone.children[0].children[0].children[1].innerHTML=row.name
        clone.children[0].children[1].children[1].innerHTML=row.email
        clone.children[0].children[2].children[1].innerHTML=row.phone
        clone.children[1].children[1].innerHTML=row.message
        clone.style.display='block'
        parent_node.appendChild(clone)
    })
})