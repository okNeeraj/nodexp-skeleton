import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../../.env') })

const appConfig: Function = () => {
  const envConfig: Object = {
    appName: process.env.APP_NAME,
    apiVersion: process.env.API_VERSION,
    port: process.env.PORT,
    db: {
      mongoose: {
        url: process.env.MONGODB_URL,
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      }
    }
  }
  return envConfig
}

export default appConfig
