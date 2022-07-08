import mongoose from 'mongoose'
import config from './config/app.Config'
import App from './app'

const appConfig = config()

mongoose
  .connect(appConfig.db.mongoose.url, appConfig.db.mongoose.options)

App.listen(appConfig.port, () => {
  console.log(`App listening on port ${appConfig.port}`)
})
