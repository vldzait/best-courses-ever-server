const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  difficulty: { 
    type: String, 
    enum: ['easy', 'medium', 'hard'],
    required: true
  },
  tags: [{ type: String }],
  additionalMaterial: [{ type: String }], 
  allowedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });


module.exports = mongoose.model('Course', CourseSchema);