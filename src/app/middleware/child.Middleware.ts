const childMiddleware = (req: any, res: any, next:any) => {
  console.log('Start :: childMiddleware')
  next()
  console.log('End :: childMiddleware')
}

export default childMiddleware
