"use server"

const { Pool } = require("pg");

// Create a pool connection to the database
const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "mysizer",
});

// Function to insert measurements into the user_measurement table
export async function insertMeasurements(formData) {
  try {
    const client = await pool.connect();

    // Extract measurement data from the formData object
    const measurementData = {
      ankle: formData.ankle || null,
      calf: formData.calf || null,
      chest: formData.chest || null,
      gender: formData.gender || null,
      height: formData.height || null,
      hip: formData.hip || null,
      knee: formData.knee || null,
      waist: formData.waist || null,
      weight: formData.weight || null,
      user_id: formData.user_id || "", // Fill in the user ID
    };

    // SQL query to insert measurements into the user_measurement table
    const query = `
      INSERT INTO user_measurement (ankle, calf, chest, gender, height, hip, knee, waist, weight, user_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id;`;

    // Array of values to be inserted in the query
    const values = [
      measurementData.ankle,
      measurementData.calf,
      measurementData.chest,
      measurementData.gender,
      measurementData.height,
      measurementData.hip,
      measurementData.knee,
      measurementData.waist,
      measurementData.weight,
      measurementData.user_id,
    ];

    // Execute the query and get the result
    const result = await client.query(query, values);

    // Log the ID of the inserted measurement
    console.log("Measurement inserted with ID:", result.rows[0].id);

    // Release the database connection
    client.release();
  } catch (error) {
    console.error("Error inserting measurement:", error);
  } finally {
    // Close the pool when done (you might not want to do this immediately after one insert)
    pool.end();
  }
}

// // Example formData object
// const formData = {
//   ankle: 80,
//   calf: null,
//   chest: 107,
//   gender: "female",
//   height: 160,
//   hip: 136,
//   knee: null,
//   waist: 64,
//   weight: 85,
//   user_id: "your_user_id_here",
//   // Add other formData properties here
// };

// Call the function to insert measurements
insertMeasurements();
