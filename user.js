const {Schema, model} = require("mongoose")

const UserSchema =  new Schema({
    Name: {type: String, reuired: true, min:5},
    Email: {type: String, required: true, trime: true},
    Password: {type: String, required: true},
    Role: { type: String, default: "admin" ,enum :["owner","Enduser","admin"] },
    accessToken: {type: String}
},baseOptions,);

const EnduserSchema =  new Schema({
    // fees: {},
    attendance_status: {
        type: String,
        default: "A",
        enum: ["P","A"]
    }
});

const User =  model("User", UserSchema);

const Enduser = User.discriminator('Enduser', EnduserSchema);
module.exports = {User, Enduser};