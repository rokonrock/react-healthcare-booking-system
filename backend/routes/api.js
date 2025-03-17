const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Booking = require('../models/Booking');

// Get all doctors
router.get('/doctors', async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// Create a booking
router.post('/book', async (req, res) => {
  const { patientName, doctorId, timeSlot } = req.body;
  const booking = new Booking({ patientName, doctorId, timeSlot });
  await booking.save();
  res.json({ message: 'Booking successful' });
});

module.exports = router;
