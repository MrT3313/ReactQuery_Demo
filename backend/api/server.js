// import packages
const express = require('express')
const cors = require('cors')

// import db
const db = require('../db/index')

// create server
const server = express()
// configure server
server.use(express.json())
server.use(cors())

// configure routing

// base route
server.get('/', async(req,res) => {
  console.log('React Query Demo Server Running')
  res.json({ status: "SUCCESS", message: "React Query Demo Server Running" })
})

// GET
server.get('/users', async (req, res) => {
  try {
    const users = await db
      .select().from('users')
    res.json(users)
  } catch (err) {
    res.json({"error": err}) 
  }
})
server.get('/userById', async (req, res) => {
  const userId = req.query.userId
  try {
    const user = await db('users')
      .select()
      .from('users')
      .where('id', userId)
    res.json(user[0])
  } catch (err) {
    res.json({"error": err}) 
  }
})

// POST
server.post('/users', async (req, res) => {
  try {
    const user = await db('users')
      .insert({ name: req.body.name })
      .returning('*')
    res.json(user)
  } catch (err) {
    res.json({"error": err}) 
  }
})

// DELETE
server.delete('/user', async (req, res) => {
  try {
    await db('users')
      .where('id', req.body.userId)
      .del()
    res.json("success")
  } catch (err) {
    res.json({"error": err}) 
  }
})

// exports
module.exports = server