import React from "react";

class Counter extends React.Component {
  // Menggunakan State dan Constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor")
  }
//   End State

// Belajar Lifecycle (Apapun yang ada di constructor akan ditimpa oleh DidMount) - Biasanya digunakan untuk pemanggilan API di mount
componentDidMount(){
  this.setState({count: 10})
  console.log("componentDidMount")
}

// Melihat perubahan yang terjadi di component
componentDidUpdate(prevProps, prevUpdate){
  console.log("componentDidUpdate")
  // Harus dipanggil dengan kondisi, diletakkan dahulu paramter di DidUpdate
  if(this.state.count === 10)
  this.setState({count: 0})


}

  render() {
    return (
      <div className="flex items-center justify-center">
        <h1 className="mr-5 text-xl">{this.state.count}</h1>
        {/* Set Up Tambah Data */}
        <button className="bg-blue-500 text-xl text-white p-2 rounded-lg" onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
