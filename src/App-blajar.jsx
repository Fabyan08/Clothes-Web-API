import React from "react";

// Terapkan fungsi OOP mempeprsingkat
class Button extends React.Component {
  render() {
    return (
      <button className="h-20 px-6 bg-blue-500 rounded-lg text-white">
        Button
      </button>
    );
  }
}

//Panggil functional
function ButtonBlack() {
  return (
    <button className="h-20 px-6 bg-black rounded-lg text-white">
      Button
    </button>
  );
}

const ButtonRed = () => {
  return (
    <button className="h-20 px-6 bg-red-500 rounded-lg text-white">
      Button
    </button>
  );
};

function App() {
  return (
    <div className="App text-2xl bg-cyan-300 flex min-h-screen p-6 justify-center items-center rounded-lg text-white font-sans font-bold mx-auto text-center">
      <div className="flex gap-3">
        {/* Panggil Tombol */}
        <Button></Button>
        <Button></Button>
        <Button></Button>

        {/* Panggil dri OOP */}
        <ButtonBlack></ButtonBlack>

        {/* Panggil dri arrow  function pakai const (=>) */}
        <ButtonRed></ButtonRed>
      </div>
    </div>
  );
}
import {} from "module";
export default App;
