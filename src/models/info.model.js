const mongoose = require('mongoose')

const modelName = 'info'

const infoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    /*add special caracters*/
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    unique: false
  },
  infoTextArea: {
    type: String,
    value: '',
    required: false
  }
})

module.exports = mongoose.model(modelName, infoSchema)
