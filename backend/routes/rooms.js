const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// Get all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single room
router.get('/:id', async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ error: 'Room not found' });
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create room (admin)
router.post('/', async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update room (admin)
router.put('/:id', async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete room (admin)
router.delete('/:id', async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: 'Room deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post('/:id/calculate-price', async (req, res) => {
  try {
    const { checkIn, checkOut, adults } = req.body;
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ error: 'Room not found' });

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    // Check date-wise pricing
    const dateOverride = room.datePricing.find(dp =>
      start >= new Date(dp.startDate) && end <= new Date(dp.endDate)
    );
    const basePrice = dateOverride ? dateOverride.price : room.pricePerNight;

    // Extra adult pricing
    const extraAdults = Math.max(0, (adults || room.baseOccupancy) - room.baseOccupancy);
    const maxExtra = room.maxOccupancy - room.baseOccupancy;
    if (extraAdults > maxExtra) {
      return res.status(400).json({ error: `Max occupancy is ${room.maxOccupancy} adults` });
    }

    const total = (basePrice + (extraAdults * room.extraAdultPrice)) * nights;
    res.json({ nights, basePrice, extraAdults, extraAdultPrice: room.extraAdultPrice, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;