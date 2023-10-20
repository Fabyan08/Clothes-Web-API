// import { Fragment } from "react";
import Button from "../Elements/Buttons";
import { Link } from "react-router-dom";
// Nested Components
const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border my-2 border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { images, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <img
        src={images}
        className="object-cover p-5 mx-auto my-5 rounded-lg h-60 w-full "
        alt=""
      />
    </Link>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="px-5 pb-5">
      <h5 className="text-xl font-semibold tracking-tight text-white">
        {name.substring(0, 20)}...
      </h5>
      <p className="text-base text-white">{children.substring(0, 40)}... </p>
    </div>
  );
};

const Footer = (props) => {
  const { harga, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <div className="text-xl font-bold text-white">
        ${" "}
        {harga.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </div>
      <Button variant="bg-blue-500" onClick={() => handleAddToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
};

// Panggil Components
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
