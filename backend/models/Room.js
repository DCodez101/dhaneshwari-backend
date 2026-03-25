const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomType: { type: String, required: true }, // "Double Bed", "Triple Bed", "Four Bed"
  totalRooms: { type: Number, required: true }, // admin sets this
  bookedRooms: { type: Number, default: 0 },    // auto increases on booking
  pricePerNight: { type: Number, required: true },
  amenities: [String],
  images: [String],
}, { timestamps: true });

// Virtual field for remaining rooms
roomSchema.virtual('remainingRooms').get(function() {
  return this.totalRooms - this.bookedRooms;
});

roomSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Room', roomSchema);