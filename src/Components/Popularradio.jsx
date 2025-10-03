import './Popularradio.css';
import { useRef, useState, useEffect } from 'react';
import RadioCard from './Radiocard';

function PopularRadio() {
  const radios = [
    { cover: '/images/instagram.webp', singer: 'Radio 1' },
    { cover: '/images/instagram.webp', singer: 'Radio 1' },
    { cover: '/images/instagram.webp', singer: 'Radio 1' },
    { cover: '/images/instagram.webp', singer: 'Radio 1' },
    { cover: '/images/instagram.webp', singer: 'Radio 1' },
    { cover: '/images/instagram.webp', singer: 'Radio 1' },
    { cover: '/images/instagram.webp', singer: 'Radio 1' },
    { cover: '/images/instagram.webp', singer: 'Radio 1' },
    { cover: '/images/instagram.webp', singer: 'Radio 1' },
    { cover: '/images/instagram.webp', singer: 'Radio 1' },
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
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <div className="popularradio-section">
      <div className="popularradio-header">
        <h2>Popular Radios</h2>
        <a href="#" className="show-all">Show all</a>
      </div>

      <div className="scroll-container">
        {showLeft && (
          <button className="scroll-btn left" onClick={scrollLeft}>
            &#8249;
          </button>
        )}

        <div className="popularradio-row" ref={scrollRef}>
          {radios.map((radio, index) => (
            <div className="radiocard-wrapper" key={index}>
              <RadioCard radio={radio} />
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

export default PopularRadio;
