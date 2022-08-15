import "./slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import { useState } from "react";
import Arrow from "./Arrow";

const Slider = () => {
 
  const [slideIndex, setSlideIndex] = useState(0);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <div className="slider-container">
      {slideIndex !== 0 && (
        <Arrow
          handleClick={() => handleClick("left")}
          className="bi bi-chevron-double-left arrow-left"
        />
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-image-wrapper">
            <img src={FirstBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. it's living the adventure
            </p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-image-wrapper">
            <img src={SecondBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books For Everyone</h1>
            <p className="slide-info-desc">
              You can read at the bookstore or at home
            </p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-image-wrapper">
            <img src={ThirdBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check Out The New Titles</h1>
            <p className="slide-info-desc">
              We send you the book you want at home
            </p>
          </div>
        </div>
      </div>
      {slideIndex !== 2 && (
        <Arrow
          handleClick={() => handleClick("right")}
          className="bi bi-chevron-double-right arrow-right"
        />
      )}
    </div>
  );
};

export default Slider;
