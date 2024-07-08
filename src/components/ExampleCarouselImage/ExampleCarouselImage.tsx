// components/ExampleCarouselImage.tsx
import React from 'react';
import imagem1 from '../ExampleCarouselImage/img/Imagem1.jpg';
import imagem2 from '../ExampleCarouselImage/img/Imagem2.jpg';
import imagem3 from '../ExampleCarouselImage/img/1.jpg';

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
  switch (text.trim()) {
    case 'First slide':
      return imagem1;
    case 'Second slide':
      return imagem2;
    case 'Third slide':
      return imagem3;
    default:
      return 'https://via.placeholder.com/800x400.png?text=Default+image';
  }
}

export default ExampleCarouselImage;
