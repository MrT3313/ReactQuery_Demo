const db = require('../index')

;(async () => {
  try {
    await db.schema.dropTableIfExists('users')
    await db.schema.createTable('users', (table) => {
      table.increments('id')
      table.string('name')
    })
    console.log('Created users table!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()