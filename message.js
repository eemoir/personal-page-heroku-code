const mongoose = require('mongoose')

const user = process.env.DB_USER
const password = process.env.DB_PASS

mongoose.connect(`mongodb://${user}:${password}@ds263988.mlab.com:63988/personal-page-contact-form`)

const Schema = mongoose.Schema

const messageSchema = new Schema({
	name: {type: String, required: true},
	phone: {type: String},
	email: {type: String, required: true},
	message: {type: String, required: true}
})

module.exports = mongoose.model('message', messageSchema)