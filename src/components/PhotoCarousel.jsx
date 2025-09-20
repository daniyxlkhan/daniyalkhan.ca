import React from 'react';
import '../styles/PhotoCarousel.css';

const PhotoCarousel = () => {
  const photos = [
    '/assets/img/me-quebec-city.jpeg',
    '/assets/img/me-with-jack.JPEG',
    '/assets/img/me-in-snow.JPG',
    '/assets/img/me-lbr.JPG',
    '/assets/img/me-with-emily.jpeg',
    '/assets/img/me-with-bunthong.jpeg',
    '/assets/img/me-cycle-CN-tower.jpeg',
    '/assets/img/me-in-street-snowy.jpeg',
    '/assets/img/me-with-dog-liz.png',
    '/assets/img/me-in-quebec.jpg',
  ];

  return (
    <div className="photo-carousel">
      <div className="photo-carousel__container">
        {[...photos].map((photo, index) => (
          <div key={index} className="photo-carousel__item">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="photo-carousel__image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;