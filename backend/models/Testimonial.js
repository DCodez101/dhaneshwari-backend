const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);