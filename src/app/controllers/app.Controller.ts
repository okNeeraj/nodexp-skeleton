import AppModel from '../models/app.Model'

const getUser = async (req: any, res: any) => {
  res.send('All user list')
}

const addUser = async (req: any, res: any) => {
  const newUser = new AppModel({
    name: 'Neeraj Singh',
    email: 'okneerajsingh@gmail.com',
    phone: 7400000740,
    password: '324234csd430sjldk4'
  })
  newUser.save().then(() => console.log('New use added successfully.'))

  res.send(`New user ${newUser.name} added successfully.`)
}

export {
  getUser,
  addUser
}
