const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config');
const authRoutes = require('./routes/auth');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
