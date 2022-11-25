const express=require('express')
const app=express()
const cors=require('cors')
const mysql=require('mysql2')
const db=mysql.createConnection({
    user : 'root',
    host:'localhost',
    password:'1234',
    database:'contact_form_assignment'
})

app.use(cors())
app.use(express.json())

app.post('/post_form_data',(request,response)=>{
    const name=request.body.name
    const email=request.body.email
    const phone=request.body.phone
    const message=request.body.message

    let sql='INSERT INTO messages VALUES (?,?,?,?)'
    db.query(sql,[name,email,phone,message],
    (error,results)=>{
        if(error){
            throw error
        }
    })
})
app.get('/check_login_credentials',(request,response)=>{
    let sql='SELECT * from admin'
    db.query(sql,(error,results)=>{
        if (error){
            throw error
        }else{
            response.send(results)
        }
    })
})
app.get('/get_all_forms',(request,response)=>{
    let sql='SELECT * from messages'
    db.query(sql,(error,results)=>{
        if (error){
            throw error
        }else{
            response.send(results)
        }
    })
})
app.listen(3005,()=>{
    console.log('hijdk')
})
app.get('/',(req,res)=>{
    res.send('Hello The server is running')
})