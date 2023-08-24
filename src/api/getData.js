// pages/api/getData.js
import pool from '../lib/utills/db';

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM user_measurement');
    const data = result.rows;
    console.log(data)

    client.release();

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
