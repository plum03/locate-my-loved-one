const mongoose = require('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;


const UserSchema = new Schema ({

email: {
    type: String,
    required: true,
    index: {unique: true}
},
password: {
    type: String,
    required: true
},
firstName: {
    type: String,
    required: true
},
lastName: {
    type: String,
    required: true
},
city: {
    type: String,
    required: true
},
state: {
    type: String,
    required: true
},
comment: String
}, {timestamps: {createdAt: 'created_at'}})

UserSchema.pre('save', function(next) {
var user = this
if (!user.isModified('password')) return next()

bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt)  {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err)

        user.password = hash
        next()
    })
})
})

UserSchema.methods.comparePassword = function (candidatePassword, cb)  {
bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err)
    cb(null, isMatch)
})
}

UserSchema.methods.removePassword = function() {
const user = this.toObject()
delete user.password
return user
}

module.exports = mongoose.model("User", UserSchema)