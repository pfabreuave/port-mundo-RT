import React from 'react';
import './Slider.css';

const slidesInfo = [
  {
    src: '../pexels-josh-sorenson-1714208.jpg', 
    alt: 'Projeto 1',
    desc: "consulta Github",
    href: 'https://pfabreuave.github.io/api-github-javascript/?user=pfabreuave'
  },
  {
    src: '../pexels-energepiccom-159888.jpg',
    alt: 'Projeto 2',
    desc: 'Simulacion stone',
    href: 'https://pfabreuave.github.io/STONE_simulacion/'
  },
  {
    src: '../pexels-miguel-á-padriñán-3785935.jpg',
    alt: 'Projeto 3',
    desc: 'Local Storage',
    href: 'https://pfabreuave.github.io/Loc_storage_RT/'
  },
 
  {
    src: '../cocinando.jpg',
    alt: 'Projeto 4',
    desc: 'Receta Arepas',
    href: 'https://pfabreuave.github.io/Receta-arepas/'
  },
  
];

const slides = slidesInfo.map((slide) => (
  <div className='slide-container'>
      <a href={slide.href} target='_blank' rel='noreferrer'>
         <img src={slide.src} alt={slide.alt} />    
      </a>
      <div className='slide-desc'>
          <span>{slide.desc}</span>
      </div>
  </div>
));

export default slides;
