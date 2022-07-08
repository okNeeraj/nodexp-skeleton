import Express from 'express'
import childMiddleware from '../../app/middleware/child.Middleware'
import {
  getUser,
  addUser
} from '../../app/controllers/app.Controller'

const Router = Express.Router()

Router
  .get('/', childMiddleware, getUser)
  .post('/new', childMiddleware, addUser)
  .route('/:userId')
  .get((req, res) => {
    res.send(`Get user with id ${req.params.userId}`)
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.userId}`)
  })
  .delete((req, res) => {
    res.send(`Deleted user with id ${req.params.userId}`)
  })

export default Router
