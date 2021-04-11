const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema({
    username: {
        type: String
},
namalengkap:{
    type: String
},
email:{
    type: String
},
password: {
    type: String
}
})

module.exports =mongoose.model('user',UserSchema)