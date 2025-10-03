
import './SongCard.css';
import { FaPlay } from 'react-icons/fa';

function SongCard({ song }) {
  return (
    <div className="songcard">
      <div className="imagewrapper">
        <img src={song.cover} className="songimage" alt={song.name} />
        <button className="playbutton">
          <FaPlay className="playicon" />
        </button>
      </div>
      <h3 className="songname">{song.title}</h3>
      <p className="singername">{song.artist}</p>
    </div>
  );
}

export default SongCard;

