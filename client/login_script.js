let button=document.getElementsByTagName('button')[0]

button.addEventListener('click',()=>{
    let username=document.querySelector('#username').value
    let password=document.querySelector('#password').value
    let admin_username=''
    let admin_password=''
    axios.get('http://localhost:3005/check_login_credentials').then(response=>{
        admin_username=response.data[0].username
        admin_password=response.data[0].password
        if(admin_username==username && admin_password==password){
            window.location.href = "admin_page.html"
        }else{
            alert('Wrong username or password.')
        }
    })

})