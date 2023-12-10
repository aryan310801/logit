const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const AttendanceSchema = new Schema({
    email: {
        type: String,
        required: 'email is required'
    },

    attendate: {
        type: Date,
        required: true,
        default: Date
    },

});

const Attendance =  mongoose.model("Attendance",AttendanceSchema);
module.exports ={Attendance};