import React from 'react';
import style from './style.module.css'
import Image from 'next/image'
const imageList = [
  'https://www.carpetim.co.il/wp-content/uploads/2020/03/WhatsApp-Image-2023-04-30-at-22.08.41-300x300.jpeg.webp',
  'https://www.carpetim.co.il/wp-content/uploads/2020/03/%D7%93%D7%92%D7%9D-%D7%A1%D7%A0%D7%98%D7%99%D7%99%D7%92%D7%95-300x300.jpg.webp',
  'https://www.carpetim.co.il/wp-content/uploads/2020/03/%D7%91%D7%9E%D7%91%D7%95-2153-300x300.jpg.webp',
  'https://www.carpetim.co.il/wp-content/uploads/2020/03/%D7%93%D7%92%D7%9D-%D7%A1%D7%A0%D7%98%D7%99%D7%99%D7%92%D7%95-300x300.jpg.webp',
];

export async function getStaticProps() {
  // Simulate fetching image data (replace with your API call if needed)
  const imageData = imageList.map((url) => ({ url }));

  return {
    props: { imageData },
  };
}

const Carousel = ({ imageData }) => {
    
  return (
    <div className={style.carouselContainer}>
      <ul className={style.carouselTrack}>
        {imageList.map((image, index) => (
          <li key={index} className={style.carouselSlide}>
            <Image src={image} alt={`Image ${index + 1}`} width={600} height={400} />
          </li>
        ))}
      </ul>
      <div className={style.carouselButtons}>
        <button aria-label="Previous image" className={`${style.carouselButton} ${style.prev}`}>&lt;</button>
        <button aria-label="Next image" className={`${style.carouselButton} ${style.next}`}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;