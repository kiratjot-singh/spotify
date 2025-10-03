import './Trendingsong.css'
import Songcard from './Songcard.jsx'
import { useRef, useState, useEffect } from 'react';

function Trendingsongs() {
    const songsRowRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const songs = [
        { cover:'./images/instagram.webp', title:'song1', artist:'artist1' },
        { cover:'./images/instagram.webp', title:'song2', artist:'artist2' },
        { cover:'./images/instagram.webp', title:'song3', artist:'artist3' },
        { cover:'./images/instagram.webp', title:'song4', artist:'artist4' },
        { cover:'./images/instagram.webp', title:'song5', artist:'artist5' },
        { cover:'./images/instagram.webp', title:'song6', artist:'artist6' },
        { cover:'./images/instagram.webp', title:'song7', artist:'artist7' },
        { cover:'./images/instagram.webp', title:'song8', artist:'artist8' },
        { cover:'./images/instagram.webp', title:'song9', artist:'artist9' },
        { cover:'./images/instagram.webp', title:'song10', artist:'artist10' }
    ];

    const scrollLeft = () => {
        songsRowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        songsRowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const checkScroll = () => {
        const el = songsRowRef.current;
        if (!el) return;

        setShowLeft(el.scrollLeft > 0);
        setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    useEffect(() => {
        checkScroll();
        const el = songsRowRef.current;
        el.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);

        return () => {
            el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    return (
        <div className="trendingsongs-section">
            <div className="trendingsongs-header">
                <h2>Trending Songs</h2>
                <a href="#" className="show-all">Show all</a>
            </div>

            <div className="scroll-container">
                {showLeft && (
                    <button className="scroll-btn left" onClick={scrollLeft}>
                        &#8249;
                    </button>
                )}

                <div className="songs-row" ref={songsRowRef}>
                    {songs.map((song, index) => (
                        <div className="songcard-wrapper" key={index}>
                            <Songcard song={song} />
                        </div>
                    ))}
                </div>

                {showRight && (
                    <button className="scroll-btn right" onClick={scrollRight}>
                        &#8250;
                    </button>
                )}
            </div>
        </div>
    );
}

export default Trendingsongs;

