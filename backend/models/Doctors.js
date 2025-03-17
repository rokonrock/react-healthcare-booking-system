const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  availableSlots: [String], // Example: ["10:00 AM", "11:00 AM"]
});

module.exports = mongoose.model('Doctor', DoctorSchema);
