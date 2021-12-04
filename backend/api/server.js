// import packages
const express = require('express')

// import db
const db = require('../db/index')

// create server
const server = express()
// configure server
server.use(express.json())

// configure routing

// base route
server.get('/', async(req,res) => {
  console.log('React Query Demo Server Running')
  res.json({ status: "SUCCESS", message: "React Query Demo Server Running" })
})

server.get('/users', async (req, res) => {
  console.log('TRYING TO GET USERS')
  const users = await db
    .select().from('users')
  res.json(users)
})

server.post('/users', async (req, res) => {
  console.log('THE BODY NAME', req.body)
  const user = await db('users')
    .insert({ name: req.body.name })
    .returning('*')
  res.json(user)
})

server.delete('/users', async (req, res) => {
  console.log('THE BODY NAME', req.body)
  const user = await db('users')
    .where('name', req.body.name)
    .del()
  res.json("success")
})

// exports
module.exports = server