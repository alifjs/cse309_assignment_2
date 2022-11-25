let button=document.getElementsByTagName('button')[0]

button.addEventListener('click',()=>{
    let name=document.querySelector('#name').value
    let email=document.querySelector('#email').value
    let phone=document.querySelector('#phone').value
    let message=document.querySelector('#message').value

    axios.post('http://localhost:3005/post_form_data',{
        name: name,
        email: email,
        phone:phone,
        message:message
    })
})