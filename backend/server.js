require('dotenv').config(); // Load environment variables

const cors = require("cors");

const express = require('express'); 
const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json()); // Middleware to parse JSON
app.use(cors());
const connectDB = require('./config/database'); // Import the function
connectDB(); // Call the function to connect to MongoDB

const eventRoutes = require('./routes/eventRoutes');  
const userRoutes = require('./routes/userRoutes');

app.use('/api/events', eventRoutes); // For event-related endpoints
app.use('/api/users', userRoutes); // For user-related endpoints

// Example route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
