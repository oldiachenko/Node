const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const usersDB = require('./static/usersDB')

const app = express();
app.listen(5000);

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
  defaultLayout: false
}));
app.set('views', path.join(__dirname, 'static'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//**********register*************

app.get('/register', (req, res) => {
  res.render('register')
})

app.post('/register', (req, res) => {
  const {email} = req.body
  const isRegistered = usersDB.users.find((users) => users.email === email)

  if (!isRegistered) {
    usersDB.addUser(req.body);
    res.redirect('/users')
    return
  }
  res.render('error', {email})
})

//**********login*************

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  const {email, password} = req.body
  const isRegistered = usersDB.users.find((users) => users.email === email)

  if (isRegistered && isRegistered.password === password) {
    const id = usersDB.users.indexOf(isRegistered)
    res.redirect(`/users/${id}`)
    return
  }
  res.send('Need to register or invalid password')
})

//**********users*************

app.get('/users', (req, res) => {
  const {users} = usersDB
  res.render('users', {users})
})

app.get('/users/:id', (req, res) => {
  const {users} = usersDB
  const {id} = req.params
  const {name, email} = users[id]
  res.render('user', {name, email})
})

