/*
Used for local testing and debugging, for some reason the application wouldn't connect to my local mongodb service
I tried running it both as a network user and my local admin user, it would never connect, although MongoDB Compass was working fine
Turns out mongodb://localhost:27017/ was not getting a reponse while mongodb://127.0.0.1:27017/ was
Even after explicitly adding localhost to my hosts file in system32, it doesn't work 
*/
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/product'


mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})
