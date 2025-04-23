import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const EditCrewmate = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase.from('Crewmates').select().eq('id', id).single();
      setName(data.name);
      setSpeed(data.speed);
      setColor(data.color);
    };
    fetchCrewmate();
  }, [id]);

  const updateCrewmate = async () => {
    await supabase.from('Crewmates').update({ name, speed, color }).eq('id', id);
    window.location = "/";
  };

  const deleteCrewmate = async () => {
    await supabase.from('Crewmates').delete().eq('id', id);
    window.location = "/";
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={speed} type="number" onChange={e => setSpeed(e.target.value)} />
      <select value={color} onChange={e => setColor(e.target.value)}>
        {["Red", "Green", "Blue", "Purple", "Orange", "Yellow", "Pink", "Rainbow"].map(c => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <button onClick={updateCrewmate}>Update Crewmate</button>
      <button onClick={deleteCrewmate}>Delete Crewmate</button>
    </div>
  );
};

export default EditCrewmate;
