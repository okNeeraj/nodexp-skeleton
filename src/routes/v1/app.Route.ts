import Express from 'express'
import ChildRoute from './child.Route'
import AppMiddleware from '../../app/middleware/app.Middleware'

const Router = Express.Router()

Router
  .use(AppMiddleware)
  .get('/', (req: any, res: any) => {
    res.render('index', { message: 'Hi Iam rendering from ejs engine!' })
  })

  .use('/child', ChildRoute)

export default Router
