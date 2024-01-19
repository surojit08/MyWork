const mongoose = require('mongoose');
const {generateSequentialId} = require("../Utils/MongoSerial");



const WorkSchema = new mongoose.Schema({
    todoId: {
        type: String,
        required: [true, 'Please add a todoId'],
        unique: true,
        set : ()=> generateSequentialId()
    },
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        trim: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const WorkModel = mongoose.model('Work', WorkSchema);

module.exports = {
    WorkModel: WorkModel
}