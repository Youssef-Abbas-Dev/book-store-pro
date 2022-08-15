import { Link } from "react-router-dom";
import Rating from "../book-slider/Rating";
import "./modal.css";
import {useState,useContext} from "react";
import BookStoreContext from "../../context/bookStorContext";

const Modal = ({ bookData, setOpenModal }) => {
  const { addToCart } = useContext(BookStoreContext);
  const [qty, setQty] = useState(1);

  const {
    title,
    image,
    author,
    price,
    rating,
    reviews,
    inStock,
    id,
  } = bookData;

  return (
    <div onClick={() => setOpenModal(false)} className="modal-container">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <i
          onClick={() => setOpenModal(false)}
          className="bi bi-x-circle-fill modal-icon"
        ></i>
        <div className="modal-content-img">
          <img src={`/books/${image}`} alt={title} />
        </div>
        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{title}</h5>
          <div className="modal-content-info-stock">
            <b>Status:</b> {inStock ? "in stock" : "not in stock"}
          </div>
          <Rating rating={rating} reviews={reviews} />
          <div className="modal-content-info-author">
            <b>Author: </b>
            {author}
          </div>
          <div className="modal-content-info-price">
            <b>Price: </b>${price}
          </div>
          <div className="modal-add-to-cart">
            <input
              className="modal-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />
            <button onClick={() => addToCart(bookData, qty)} className="modal-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <Link
            onClick={() => setOpenModal(false)}
            className="modal-content-info-link"
            to={`/book/${id}`}
          >
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
