import React from 'react';

const AnimatedText = ({ text, className = '', ...props }) => {
  const letters = text.split('').map((char, index) => {
    const delay = (index * 0.00666667).toFixed(8);
    
    return (
      <div
        key={index}
        style={{
          position: 'relative',
          display: 'inline-block',
          transitionDelay: `${delay}s`,
          animationDelay: `${delay}s`
        }}
        className="single-letter"
      >
        {char === ' ' ? '\u00A0' : char}
      </div>
    );
  });

  return (
    <p 
      data-letters-delay=""
      data-split="letters"
      className={`nav-link-text ${className}`}
      split-ran="true"
      {...props}
    >
      <div style={{ position: 'relative', display: 'inline-block', overflow: 'hidden' }}>
        {letters}
      </div>
    </p>
  );
};

export default AnimatedText;