import './Artistcard.css';
import { FaPlay } from 'react-icons/fa';

function Artistcard({ artist }) {
  return (
    <div className="artistcard">
      <div className="imagewrapper">
        <img src={artist.cover} className="artistimage" alt={artist.name} />
        <button className="playbutton">
          <FaPlay className="playicon" />
        </button>
      </div>
      <h2 className="artistname">{artist.name}</h2>
    </div>
  );
}

export default Artistcard;



