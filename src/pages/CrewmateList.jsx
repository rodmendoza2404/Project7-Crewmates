import { useEffect, useState } from 'react';
import { supabase } from '../client';
import CrewmateCard from '../components/CrewmateCard';

const CrewmateList = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('Crewmates')
        .select()
        .order('created_at', { ascending: false });

      console.log("Fetched data:", data);
      console.log("Error fetching data:", error);

      setCrewmates(data || []);
    };

    fetchCrewmates();
  }, []);

  return (
    <div>
      {crewmates.map(crewmate => (
        <CrewmateCard key={crewmate.id} crewmate={crewmate} />
      ))}
    </div>
  );
};

export default CrewmateList;
