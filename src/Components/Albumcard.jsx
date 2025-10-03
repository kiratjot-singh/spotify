import './AlbumCard.css';
import { FaPlay } from 'react-icons/fa';

function AlbumCard({ album }) {
  return (
    <div className="albumcard">
      <div className="imagewrapper">
        <img src={album.cover} alt={album.name} className="albumimage" />
        <button className="playbutton">
          <FaPlay />
        </button>
      </div>
      <h3 className="albumname">{album.name}</h3>
      <p className="singername">{album.singer}</p>
    </div>
  );
}

export default AlbumCard;


