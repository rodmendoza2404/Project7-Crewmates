import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const CrewmateDetail = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('Crewmates').select().eq('id', id).single();
      setCrewmate(data);
    };
    fetchData();
  }, [id]);

  if (!crewmate) return <div>Loading...</div>;

  return (
    <div>
      <h2>Crewmate: {crewmate.name}</h2>
      <p><strong>Color:</strong> {crewmate.color}</p>
      <p><strong>Speed:</strong> {crewmate.speed} mph</p>
      <Link to={`/edit/${crewmate.id}`}>Edit this Crewmate</Link>
    </div>
  );
};

export default CrewmateDetail;
