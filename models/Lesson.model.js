const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, required: true },
  videoUrl: { type: String },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

module.exports = mongoose.model('Lesson', LessonSchema);