import { useEffect, useRef } from 'react';

const Carousel: React.FC = () => {
  const carouselSliderRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<NodeListOf<HTMLLIElement>>(null);
  let list2Ref = useRef<HTMLUListElement>(null);

  const speed = 1;

  let width: number;
  let x = 0;
  let x2 = width;

  useEffect(() => {
    const carouselSlider = carouselSliderRef.current;
    const list = listRef.current;
    const items = itemRefs.current;

    if (carouselSlider && list && items) {
      width = list.offsetWidth;

      function clone() {
        const list2 = list.cloneNode(true) as HTMLUListElement;
        list2Ref.current = list2;
        carouselSlider.appendChild(list2);
        list2.style.left = `${width}px`;
      }

      function moveFirst() {
        x -= speed;

        if (width >= Math.abs(x)) {
          list.style.left = `${x}px`;
        } else {
          x = width;
        }
      }

      function moveSecond() {
        x2 -= speed;

        if (list2Ref.current && list2Ref.current.offsetWidth >= Math.abs(x2)) {
          list2Ref.current.style.left = `${x2}px`;
        } else {
          x2 = width;
        }
      }

      function hover() {
        clearInterval(a);
        clearInterval(b);
      }

      function unhover() {
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
      }

      clone();

      let a = setInterval(moveFirst, 10);
      let b = setInterval(moveSecond, 10);

      carouselSlider.addEventListener('mouseenter', hover);
      carouselSlider.addEventListener('mouseleave', unhover);
    }
  }, []);

  return (
    <section className="carousel">
      <div ref={carouselSliderRef} className="carousel__slider">
        <ul ref={listRef} className="carousel__list">
          <li ref={el => (itemRefs.current = document.querySelectorAll('.carousel__item'))} className="carousel__item">
            <span>1</span>
          </li>
          <li className="carousel__item">
            <span>2</span>
          </li>
          <li className="carousel__item">
            <span>3</span>
          </li>
          <li className="carousel__item">
            <span>4</span>
          </li>
          <li className="carousel__item">
            <span>5</span>
          </li>
          <li className="carousel__item">
            <span>6</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Carousel;
