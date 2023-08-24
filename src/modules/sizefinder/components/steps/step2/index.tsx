//@ts-nocheck
import { useState, useEffect } from 'react';
// import saveMeasurements from '@lib/api/measurements/saveMeasurements'; 
import { medusaClient } from "@lib/config"

interface MeasurementFormData {
  gender: string;
  height: number;
  weight: number;
  chest: number;
  waist: number;
  hip: number;
  ankle: number;
  calf: number;
  knee: number;
}

const MeasureInputStep = () => {
  const [formData, setFormData] = useState<MeasurementFormData>({
    gender: 'male',
    height: '',
    weight: '',
    chest: '',
    waist: '',
    hip: '',
    ankle: '',
    calf: '',
    knee: ''
  });

  const [showAdditionalMeasurements, setShowAdditionalMeasurements] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9000/store/submitMeasurement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log(response)
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle fetch error
    }
  };




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const toggleAdditionalMeasurements = () => {
    setShowAdditionalMeasurements((prevShow) => !prevShow);
  };

  return (
    <div id="step-2" className="step step2 py-10">
      <h2 className="text-2xl font-bold mb-4">Measurement Input</h2>
      <p className="mb-6">
        Please provide your measurements using the form below to receive personalized size recommendations:
      </p>

      <form className='form' onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="gender" className="block mb-1">
            Clothing that you usually buy:
          </label>
          <select
            className="border rounded px-3 py-2 w-full"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Height */}
        <div className="mb-6">
          <label htmlFor="height" className="block mb-1">
            Height (cm):
          </label>
          <input
            type="number"
            className="form__input"
            id="height"
            name="height"
            min={140}
            max={220}
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>

        {/* Weight */}
        <div className="mb-6">
          <label htmlFor="weight" className="block mb-1">
            Weight (kg):
          </label>
          <input
            type="number"
            className="form__input"
            id="weight"
            name="weight"
            min={40}
            max={150}
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        {/* Chest */}
        <div className="mb-6">
          <label htmlFor="chest" className="block mb-1">
            Chest (cm):
          </label>
          <input
            type="number"
            className="form__input"
            id="chest"
            name="chest"
            min={70}
            max={155}
            value={formData.chest}
            onChange={handleChange}
            required
          />
        </div>

        {/* Waist */}
        <div className="mb-6">
          <label htmlFor="waist" className="block mb-1">
            Waist (cm):
          </label>
          <input
            type="number"
            className="form__input"
            id="waist"
            name="waist"
            min={55}
            max={150}
            value={formData.waist}
            onChange={handleChange}
            required
          />
        </div>

        {/* Hip */}
        <div className="mb-6">
          <label htmlFor="hip" className="block mb-1">
            Hip (cm):
          </label>
          <input
            type="number"
            className="form__input"
            id="hip"
            name="hip"
            min={80}
            max={155}
            value={formData.hip}
            onChange={handleChange}
            required
          />
        </div>

        {/* Ankle */}
        <div className="mb-6">
          <label htmlFor="ankle" className="block mb-1">
            Ankle (cm):
          </label>
          <input
            type="number"
            id="ankle"
            className="form__input"
            name="ankle"
            value={formData.ankle}
            onChange={handleChange}
          />
        </div>

        {/* ... Add other measurement fields here ... */}

        <div className="mb-6">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
            onClick={toggleAdditionalMeasurements}
          >
            {showAdditionalMeasurements ? 'Hide Additional Measurements' : 'Show Additional Measurements'}
          </button>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        </div>

        {/* Additional Measurements */}
        {showAdditionalMeasurements && (
          <div id="additional-measurements">
            {/* Calf */}
            <div className="mb-6">
              <label htmlFor="calf" className="block mb-1">
                Calf (cm):
              </label>
              <input
                type="number"
                className="form__input"
                id="calf"
                name="calf"
                value={formData.calf}
                onChange={handleChange}
              />
            </div>

            {/* Knee */}
            <div className="mb-6">
              <label htmlFor="knee" className="block mb-1">
                Knee (cm):
              </label>
              <input
                type="number"
                className="form__input"
                id="knee"
                name="knee"
                value={formData.knee}
                onChange={handleChange}
              />
            </div>

            {/* ... Add the rest of the additional measurement fields here ... */}
          </div>
        )}
      </form>
    </div>
  );
};

export default MeasureInputStep;
