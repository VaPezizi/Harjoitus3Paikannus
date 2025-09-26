import express, { json } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(json());

const data = require('./kuortane_db.json')
// Routes

// Get all locations
app.get('/api/locations', (req, res) => {
  res.json({
    success: true,
    data: locations,
    count: locations.length
  });
});


// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Location Data API',
    endpoints: [
      'GET /api/locations - Get all locations'
    ]
  });
});

// POST endpoint to add a new location
app.post('/api/locations', (req, res) => {
  const { latitude, longitude } = req.body;
  if (typeof latitude === 'number' &&
    typeof longitude === 'number')
  {
    const newLocation = {
      id: locations.length + 1,
      latitude,
      longitude
    };
    // Add new location to the array
    locations.push(newLocation);
    return res.status(201).json({
      success: true,
      data: newLocation
    });
  }
  res.status(400).json({
    success: false,
    message: 'Invalid location data'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;