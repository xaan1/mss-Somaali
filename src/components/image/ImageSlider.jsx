import React, { useState } from 'react';
import './style.css'; // Import your CSS file


const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />

      <button onClick={handlePrevClick} className="prev-button">
        Prev
      </button>
      <button onClick={handleNextClick} className="next-button">
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
