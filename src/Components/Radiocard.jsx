import './RadioCard.css';
import { FaPlay } from 'react-icons/fa';

function RadioCard({ radio }) {
  return (
    <div className="radiocard">
      <div className="imagewrapper">
        <img src={radio.cover} className="radioimage" alt={radio.singer} />
        <button className="playbutton">
          <FaPlay className="playicon" />
        </button>
      </div>
      <p className="singername">{radio.singer}</p>
    </div>
  );
}

export default RadioCard;