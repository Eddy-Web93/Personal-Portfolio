import React, { useRef, useEffect } from 'react';
import './Testimonials.css';
import TestCard from './TestCards/TestCard';

const Testimonials = () => {
  const scrollRef = useRef(null);

  // Function to handle scrolling with keyboard
  const handleKeyDown = (event) => {
    if (scrollRef.current) {
      switch (event.key) {
        case 'ArrowRight':  // Right arrow key
          scrollRef.current.scrollBy({
            left: 100,  // Adjust this value for the amount of scroll
            behavior: 'smooth'
          });
          break;
        case 'ArrowLeft':  // Left arrow key
          scrollRef.current.scrollBy({
            left: -100,  // Adjust this value for the amount of scroll
            behavior: 'smooth'
          });
          break;
        case ' ':  // Spacebar key
          event.preventDefault();  // Prevent default spacebar behavior (page scroll)
          scrollRef.current.scrollBy({
            left: 100,  // Adjust this value for the amount of scroll
            behavior: 'smooth'
          });
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  return (
    <div className='test'>
      <div className="test-heading">
        <h1>Testimonials</h1>
      </div>
      <div className="test-box">
        <div
          className='test-scroll'
          ref={scrollRef}
          tabIndex="0"  // Makes the div focusable
        >
          <TestCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;