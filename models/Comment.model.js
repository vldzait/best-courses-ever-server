const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
    text: { type: String },
    rating: { type: Number } // оценка, если необходимо
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);