import React from 'react';
import '../styles/PhotoCarousel.css';

const PhotoCarousel = () => {
  const photos = [
    '/assets/img/me-quebec-city.jpeg',
    '/assets/img/me-with-jack.JPEG',
    '/assets/img/me-in-snow.JPG',
    '/assets/img/me-with-Susan-Holt.png',
    '/assets/img/me-lbr.JPG',
    '/assets/img/me-with-emily.jpeg',
    '/assets/img/me-with-bunthong.jpeg',
    '/assets/img/me-cycle-CN-tower.jpeg',
    '/assets/img/me-in-goofy-polaroid.jpeg',
    '/assets/img/me-in-quebec-hike.jpeg',
    '/assets/img/me-mountains.jpeg',
    '/assets/img/me-on-quebec-city-trip.jpeg',
    '/assets/img/me-in-street-snowy.jpeg',
    '/assets/img/me-bbq-friends.jpeg',
    '/assets/img/me-canada-day.jpeg',
    '/assets/img/me-with-dog-liz.png',
    '/assets/img/me-in-quebec.jpg',
  ];

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent right-click menu
  };

  const handleDragStart = (e) => {
    e.preventDefault(); // Prevent dragging
  };

  return (
    <div className="photo-carousel">
      <div className="photo-carousel__container">
        {/* First set of photos */}
        {photos.map((photo, index) => (
          <div key={`first-${index}`} className="photo-carousel__item">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="photo-carousel__image"
              loading="lazy"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              draggable="false"
            />
          </div>
        ))}
        {photos.map((photo, index) => (
          <div key={`second-${index}`} className="photo-carousel__item">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="photo-carousel__image"
              loading="lazy"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;