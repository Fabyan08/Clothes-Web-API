import InputForm from "../Elements/Inputs/Index";
import Button from "../Elements/Buttons";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service.js";
const FormLogin = () => {
  // Handle data error login
  const [loginFailed, setLoginFailed] = useState("");

  // Buat Function | Jika tidak ingin halaman refresh pakai prevent default
  const handleLogin = (event) => {
    event.preventDefault(event);
    // Simpan ke Local Storage
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);

    // Setelah di storage, redirect ke halaman product
    // window.location.href = "/product";

    // Untuk post data API | Definisikan dahulu
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    // Panggil dengan event login
    login(data, (status, res) => {
      // Buat if jika benar maka isinya token dari hasil res (singkatan response)
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";

        // Isi kondisi jika error, errornya karena apa?
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });

    //Munculkan input email, dapat email dari name di inputan
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    console.log("login");
  };

  // Penggunaan useRef agar auto focus ke email
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && (
        <p className="text-red-500 text-center text-sm">{loginFailed}</p>
      )}
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="namamu"
        // Ini panggilannya
        ref={usernameRef}
      ></InputForm>

      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="***"
      ></InputForm>
      <Button variant="bg-blue-500" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
