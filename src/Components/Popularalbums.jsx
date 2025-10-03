
import './Popularalbums.css'
import { useRef, useState, useEffect } from 'react'
import Albumcard from './Albumcard'

function Popularalbums() {
    const albums = [
        { cover:'/images/twitter.png', name:'album1', singer:'singer1,singer2' },
        { cover:'/images/twitter.png', name:'album2', singer:'singer1,singer2' },
        { cover:'/images/twitter.png', name:'album3', singer:'singer1,singer2' },
        { cover:'/images/twitter.png', name:'album4', singer:'singer1,singer2' },
        { cover:'/images/twitter.png', name:'album5', singer:'singer1,singer2' },
        { cover:'/images/twitter.png', name:'album6', singer:'singer1,singer2' },
        { cover:'/images/twitter.png', name:'album7', singer:'singer1,singer2' },
        { cover:'/images/twitter.png', name:'album8', singer:'singer1,singer2' },
        { cover:'/images/twitter.png', name:'album9', singer:'singer1,singer2' },
        { cover:'/images/twitter.png', name:'album10', singer:'singer1,singer2' },
    ];

    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        setShowLeft(el.scrollLeft > 0);
        setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    useEffect(() => {
        checkScroll(); 
        const el = scrollRef.current;
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    return (
        <div className="popularalbums-section">
            <div className="popularalbums-header">
                <h2>Popular Albums</h2>
                <a href="#" className="show-all">Show all</a>
            </div>

            <div className="scroll-container">
                {showLeft && (
                    <button className="scroll-btn left" onClick={scrollLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18L9 12L15 6" />
                        </svg>
                    </button>
                )}

                <div className="popularalbums" ref={scrollRef}>
                    {albums.map((album, index) => (
                        <div className="albumrow" key={index}>
                            <Albumcard album={album} />
                        </div>
                    ))}
                </div>

                {showRight && (
                    <button className="scroll-btn right" onClick={scrollRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 6L15 12L9 18" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Popularalbums;
