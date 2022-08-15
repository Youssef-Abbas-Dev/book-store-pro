import { useState,useContext } from "react";
import BookStoreContext from "../../context/bookStorContext";
import Modal from "../modal/Modal";
import "./book-slider.css";
import Rating from "./Rating";

const BookSlider = ({data}) => {
  const { addToCart } = useContext(BookStoreContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  // Handle Modal
  const handleOpenModal = (item) => {
    setOpenModal(true);
    setBookData(item);
  }


  return (
    <div className="book-slider-container">
      {slideIndex >= 0 && <i
        onClick={() => handleClick("left")}
        className="bi bi-chevron-left book-slider-arrow-left"
      ></i>}
      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h3 className="book-slide-item-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slider-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
              <i onClick={() => handleOpenModal(item)} className="bi bi-eye-fill"></i>
              <i onClick={() => addToCart(item, 1)} className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
      {slideIndex <= data.length - 1 && <i
        onClick={() => handleClick("right")}
        className="bi bi-chevron-right book-slider-arrow-right"
      ></i>}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default BookSlider;
