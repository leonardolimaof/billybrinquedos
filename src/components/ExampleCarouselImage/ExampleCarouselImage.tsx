// components/ExampleCarouselImage.tsx
import React from 'react';

interface ExampleCarouselImageProps {
  text: string;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({ text }) => {
  const imageUrl = getImageUrl(text);

  return (
    <img
      className="d-block w-100"
      src={imageUrl}
      alt={text}
    />
  );
};

function getImageUrl(text: string): string {
  switch(text) {
    case 'Diversão para todas as idades':
      return 'https://via.placeholder.com/800x400.png?text=Divers%C3%A3o+para+todas+as+idades';
    case 'Brinquedos educativos':
      return 'https://via.placeholder.com/800x400.png?text=Brinquedos+educativos';
    case 'As melhores marcas':
      return 'https://via.placeholder.com/800x400.png?text=As+melhores+marcas';
    default:
      return 'https://via.placeholder.com/800x400.png?text=Default+image';
  }
}

export default ExampleCarouselImage;
