
const users = [
  {name: 'Dima', email: 'dima@gmail.com', password: '123'},
  {name: 'Ira', email: 'ira@gmail.com', password: '123'},
  {name: 'Oleg', email: 'oleg@gmail.com', password: '123'},
  {name: 'Kate', email: 'kate@gmail.com', password: '123'},
  {name: 'Igor', email: 'igor@gmail.com', password: '123'},
]

function addUser (user) {
  users.push(user)
}

module.exports = {
  users,
  addUser
}
