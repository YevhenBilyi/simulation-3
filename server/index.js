require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const session=require('express-session');
const controller=require('./controller');
const massive=require('massive');
const cors=require('cors');
const app=express();

const{
    PORT,
    SESSION_SECRET
}=process.env;

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db)
})
app.use(session({
    secret:SESSION_SECRET,
    resave:false,
    saveUninitialized:true
}))

app.post('/api/auth/register', controller.register);
app.post('/api/auth/login', controller.login);
app.post('/api/auth/logout', controller.logout);
app.get('/api/posts', controller.getAll)
app.get('/api/post/:id', controller.getOne)


app.listen(PORT, ()=>console.log('Listening on port:'+PORT));








