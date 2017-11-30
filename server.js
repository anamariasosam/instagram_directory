const db = require('./db/db')
const app = require('./app')

db.then(() => {
  // eslint-disable-next-line
  console.log('Connected to mongo')
})

app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => {
  // eslint-disable-next-line
  console.log('\nStarts at:', server.address(), server.address().port)
})
