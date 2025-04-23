import { Link } from 'react-router-dom';

const CrewmateCard = ({ crewmate }) => (
  <div>
    <h3>{crewmate.name}</h3>
    <p>Speed: {crewmate.speed} mph</p>
    <p>Color: {crewmate.color}</p>
    <Link to={`/detail/${crewmate.id}`}>Details</Link>
    <Link to={`/edit/${crewmate.id}`}>Edit</Link>
  </div>
);

export default CrewmateCard;
