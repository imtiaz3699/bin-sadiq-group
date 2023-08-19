'use client'
import { useEffect, useRef } from 'react';
import "./hero.css"
const Carousel: React.FC = () => {
  const carouselSliderRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<NodeListOf<HTMLLIElement> | null>(null);
  const cloneRef = useRef<HTMLUListElement | null>(null);

  const speed = 1;

  let width = 0;
  let x = 0;

  useEffect(() => {
    const carouselSlider = carouselSliderRef.current;
    const list = listRef.current;
    const items = itemRefs.current;
    const clone = cloneRef.current;

    if (carouselSlider && list && items && clone) {
      width = list.offsetWidth;

      const moveSlides = () => {
        x -= speed;

        if (width >= Math.abs(x)) {
          list.style.left = `${x}px`;
          clone.style.left = `${x + width}px`;
        } else {
          x = width;
        }
      };

      let intervalId = setInterval(moveSlides, 10);

      carouselSlider.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
      });

      carouselSlider.addEventListener('mouseleave', () => {
        intervalId = setInterval(moveSlides, 10);
      });

      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      if (x <= -width) {
        list.style.left = '0';
        x = 0;
      }
    }
  }, [x]);
  const logos = ['/bin-sadiq-group.png','/association.png','/heritage.png','/law-association.png','/foundation.png','/law-association.png','/law-association.png']
  return (
    <section className="carousel">
      <div ref={carouselSliderRef} className="carousel__slider">
        <div className="carousel__track">
          <ul ref={listRef} className="carousel__list">
            <li
              ref={el => {
                if (el) itemRefs.current = el.querySelectorAll('.carousel__item');
              }}
              className="carousel__item"
            >
              <span><img src="/bin-sadiq-group.png" alt="" /></span>
            </li>
            <li className="carousel__item">
              <span>
                <img src="/association.png" alt="" />
              </span>
            </li>
            <li className="carousel__item">
              <span><img src="/heritage.png" alt="" /></span>
            </li>
            <li className="carousel__item">
              <span><img src="/law-association.png" alt="" /></span>
            </li>
            <li className="carousel__item">
              <span><img src="/foundation.png" alt="" /></span>
            </li>
            <li className="carousel__item">
            <span><img src="/bin-sadiq-group.png" alt="" /></span>
            </li>
          </ul>
          <ul ref={cloneRef} className="carousel__list">
          <li className="carousel__item">
              <span>
                <img src="/association.png" alt="" />
              </span>
            </li>
            <li className="carousel__item">
              <span><img src="/heritage.png" alt="" /></span>
            </li>
            <li className="carousel__item">
              <span><img src="/law-association.png" alt="" /></span>
            </li>
            <li className="carousel__item">
              <span><img src="/foundation.png" alt="" /></span>
            </li>
            <li className="carousel__item">
            <span><img src="/bin-sadiq-group.png" alt="" /></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
