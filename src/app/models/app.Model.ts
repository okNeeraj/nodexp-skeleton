import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    default: ''
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'guest'
  },
  date: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('User', userSchema)
