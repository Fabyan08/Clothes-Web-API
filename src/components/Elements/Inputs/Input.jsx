import { forwardRef } from "react";

// Pakai forwardRef  yang akan ditangkap di form
// Implementasi useRef untuk komponen atau props dengan menggunakan forwardRef
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name} = props;
  return (
    <input
      type={type}
      id={name}
      className="email bg-none py-2 px-3 rounded-lg focus:ring active:border-blue-500 bg-white bg-opacity-25 backdrop-blur-xl text-base active-blue-200 text-blue-400"
      placeholder={placeholder}
      name={name}
      ref={ref}
    />
  );
});
export default Input;
