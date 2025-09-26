import express, { json } from 'express';
import cors from 'cors';

import db from './kuortane_db.json' with {type: "json"}

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(json());

const locations = db.Kuortane
//console.log(data)
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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;