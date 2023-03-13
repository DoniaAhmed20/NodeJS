const mongoose = require("mongoose");
var DB_url = "mongodb://127.0.0.1:27017/School";
let CourseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hours: { type: Number, required: true },
});


module.exports = mongoose.model("Courses", CourseSchema);
