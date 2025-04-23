import { useState } from 'react';
import { supabase } from '../client';

const CreateCrewmate = () => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');

  const createCrewmate = async () => {
    const { data, error } = await supabase
      .from('Crewmates')
      .insert([
        {
          name: name,
          speed: Number(speed), // Ensures numeric type for speed
          color: color,
        }
      ]);

    if (error) {
      console.error("Error inserting:", error);
    } else {
      console.log("Inserted successfully:", data);
      window.location = "/gallery";
    }
  };

  return (
    <div>
      <h2>Create a New Crewmate</h2>
      <input 
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)} 
      />
      <input 
        placeholder="Speed (mph)" 
        type="number"
        value={speed}
        onChange={e => setSpeed(e.target.value)} 
      />

      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="">Select Color</option>
        {["Red", "Green", "Blue", "Purple", "Orange", "Yellow", "Pink", "Rainbow"].map(c => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <button onClick={createCrewmate}>Create Crewmate</button>
    </div>
  );
};

export default CreateCrewmate;
