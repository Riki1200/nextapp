const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
    server.use(express.json())
    server.use(express.urlencoded({extended: true}))
  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/photos', (req, res) => {
    return app.render(req, res, '/photos', req.query)
  })
  server.get('/post', (req, res) => {
    return app.render(req, res, '/post', req.query)
  })
  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})