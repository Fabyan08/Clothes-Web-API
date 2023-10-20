/* eslint-disable react/prop-types */

const Button = (props) => {
  // Tambahkan default jika tidak kirimkan variant atau properties
  const {
    children = "...",
    variant,
    onClick = () => {},
    type = "button",
  } = props;
2
  return (
    <button
      className={`w-fit p-4 mb-2 ${variant} rounded-lg ml-10 text-white`}
      type={type}
      // Definisikan onClick lebih dulu
      onClick={onClick}
    >
      {/* Untuk ambil dari atas dengan .children */}
      {children}
    </button>
  );
};

export default Button;
