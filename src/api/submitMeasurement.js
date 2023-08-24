const db = require('../lib/utills/db');

export default async function handler(req, res) {
  console.log(req.body)
  if (req.method === 'POST') {
    const userMeasurementData = req.body;
    console.log(userMeasurementData)
    try {
      const queryText = `
        INSERT INTO measurements (gender, height, weight, chest, waist, hip, ankle, calf, knee)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `;

      const queryParams = [
        userMeasurementData.gender,
        userMeasurementData.height,
        userMeasurementData.weight,
        userMeasurementData.chest,
        userMeasurementData.waist,
        userMeasurementData.hip,
        userMeasurementData.ankle,
        userMeasurementData.calf,
        userMeasurementData.knee,
      ];

      await db.query(queryText, queryParams);

      res.status(201).json({ message: 'Measurement data submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting measurement data', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}



// // pages/api/submitMeasurement.js

// import { medusaClient } from "@lib/config";

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const userMeasurementData = req.body;

//     try {
//       // Assuming you have a Medusa model for measurements
//       const response = await medusaClient.user_measurement.create(userMeasurementData);

//       res.status(200).json({ message: 'Measurement data submitted successfully', data: response });
//     } catch (error) {
//       res.status(500).json({ message: 'Error submitting measurement data', error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
