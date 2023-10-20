import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="App text-2xl flex min-h-screen p-6 bg-gradient-to-r from-purple-500 to-pink-500 justify-center items-center rounded-lg text-white font-sans font-bold mx-auto ">
      <div className="w-full max-w-xs bg-white bg-opacity-25 backdrop-blur-xl rounded-lg border border-slate-100">
        <h1 className="text-blue-600 text-center">{title}</h1>
        {children}
        <Navigation type={type}></Navigation>

        {/* Conditional Rendering */}
        {/* <div className="text-center text-sm text-pink-200 mb-10"> */}
        {/* Conditional Rendering */}
        {/* <p> */}
        {/* Jika hanya 2 kondisi pakai ternary ini */}
        {/* {type === "login"
              ? "Don't Have an Account? "
              : "Already Have an Account? "} */}

        {/* Jika lebih dari 2 kondisi pakai && atau if */}
        {/* {type === "login" && (
              <Link className="text-blue-500" to="/registrasi">
                Register Here.
              </Link>
            )}

            {type === "register" && (
              <Link className="text-blue-500" to="/login">
                Login Here.
              </Link>
            )}
          </p>
        </div> */}
      </div>
    </div>
  );
};

// Contoh Pakai If | Buat Komponen Baru Dulu {type} bisa langsung didefiniskan props tanpa buat variabel baru

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <div className="text-center text-sm text-pink-200 mb-10">
        <p>
          Already Have an Account?{" "}
          <Link className="text-blue-500" to="/registrasi">
            Register Here.
          </Link>
        </p>
      </div>
    );
  } else {
    return (
      <div className="text-center text-sm text-pink-200 mb-10">
        <p>
          Don't Have an Account?{" "}
          <Link className="text-blue-500" to="/login">
            Login Here.
          </Link>
        </p>
      </div>
    );
  }
};

export default AuthLayout;
