const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  patientName: String,
  doctorId: mongoose.Schema.Types.ObjectId,
  timeSlot: String,
});

module.exports = mongoose.model('Booking', BookingSchema);
