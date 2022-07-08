const appMiddleware = (req: any, res: any, next:any) => {
  console.log(`${req.originalUrl}`)
  console.log('Start :: appMiddleware')
  next()
  console.log('End :: appMiddleware')
}

export default appMiddleware
