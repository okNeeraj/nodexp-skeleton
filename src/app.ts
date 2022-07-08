import Express from 'express'
import Config from './config/app.Config'
import Path from 'path'
import Routes from './routes/v1/app.Route'

const App = Express()
const appConfig = Config()

App.set('view engine', 'ejs')
  .set('views', Path.join(__dirname, './views'))
  .use(`/${appConfig.apiVersion}`, Routes)

export default App
