import React from "react";
import Button from "./components/Elements/Buttons";

function App() {
  return (
    <div className="App text-2xl flex min-h-screen p-6 bg-gradient-to-r from-purple-500 to-pink-500 justify-center items-center rounded-lg text-white font-sans font-bold mx-auto ">
      <div className="w-full max-w-xs bg-white bg-opacity-25 backdrop-blur-xl rounded-lg border border-slate-100">
        <h1 className="text-blue-600 text-center">Login</h1>
        <div className="m-10">
          {" "}
          <label htmlFor="email" className="block text-slate-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="email bg-none py-2 px-3 rounded-lg focus:ring active:border-blue-500 bg-white bg-opacity-25 backdrop-blur-xl text-base active-blue-200 text-blue-400"
            placeholder="@gmail.com"
          />
        </div>
        <div className="m-10">
          {" "}
          <label htmlFor="password" className="block text-slate-300">
            password
          </label>
          <input
            type="password"
            id="password"
            className="password bg-none py-2 px-3 rounded-lg focus:ring active:border-blue-500 bg-white bg-opacity-25 backdrop-blur-xl text-base active-blue-200 text-blue-400"
            placeholder="***"
          />
        </div>
        <Button children="Login" variant="bg-blue-500"></Button>
      </div>
    </div>
  );
}
export default App;
