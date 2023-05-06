const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')

const oneday = 1000 * 60 * 60 * 24

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extented: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
    secret: 'xyz@#123//',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: oneday
    }
}))

app.use('/auth',authRouter)
app.use('/user',userRouter)



app.listen(3000, () => {
    console.log("Server Started...")
});
// express-session
//cookie-parser