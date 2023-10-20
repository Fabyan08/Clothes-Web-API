// Perbedaan useState: Langsung render atau mengubah state, jika useRef: Data Disimpan, tpi ga ditampilkan
import Button from "../components/Elements/Buttons";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import { Fragment, useEffect, useRef, useState } from "react";
import { getProduct } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";

// Agar Tak Terlalu Panjang, Pakai Rendering Lists
// const products = [
//   {
//     id: 1,
//     name: "Sepatu Nike",
//     price: 3000000,
//     images: "/img/shoes.png",
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
//     doloribus similique!`,
//   },
//   {
//     id: 2,
//     name: "Sepatu Adidas",
//     price: 2000000,
//     images: "/img/shoes.png",
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
//     doloribus similique!`,
//   },
//   {
//     id: 3,
//     name: "Sepatu Nike",
//     price: 2000000,
//     images: "/img/shoes.png",
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
//     doloribus similique!`,
//   },
// ];

// Buat function tampilkan data dari local storage

const ProductsPage = () => {
  // State baru untuk panggil decoded jwt
  const username = useLogin();
  // const [username, setUsername] = useState("");

  // Set State / Functional Component | Use Sta te Harus Selalu berpasangan | Menampilkan nama item di cart
  const [cart, setCart] = useState([]);
  // Definisikan State baru untuk total price
  const [totalPrice, setTotalPrice] = useState(0);

  // State baru untuk product, 0 adalah nilai default dri array tersebut.
  const [product, setProducts] = useState([]);

  // Tangkap id dan qty | Wajib tambahkan dependency dengan , lalu kurung siku [] agar tidak terjadi looping terus
  // Ini adalah DidMount yang digunakan dalam component
  useEffect(() => {
    // Ambil data di local storage kalau ada, kalau tidak ada yaudah dikosongin pakai []
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // Dapatkan username dengan token jwt decode
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   // Cek apakah token ada ketika login
  //   if (token) {
  //     setUsername(getUsername(token));
  //   } else {
  //     window.location.href = "/login";
  //   }
  // });

  // useEffect diatas diganti dengan custom hooks, jadi tinggal dipanggil di syntax 42

  // Panggil API
  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  // Ini adalah DidUpdate yang digunakan dalam component | Update isi dari state totalprice
  useEffect(() => {
    // If digunakan untuk cek jika ada data > 0 maka lakukan, jika tidak ya gausah
    if (product.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        // Artinya adalah mengambil product berdasarkan id yang sama di array products.
        const productItem = product.find((product) => product.id === item.id);
        // acc adalah akumulator yang akan menjumlahkan
        return acc + productItem.price * item.qty;
        // Maksud 0 adalah dimulai dari array index 0
      }, 0);
      // Set total price
      setTotalPrice(sum);

      // Agar tak hilang, simpan data di localstorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Dependency melihat dri data cart
  }, [cart, product]);

  //Hande Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("password");
    window.location.href = "/login";
  };

  // Handle Add to Cart
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        // Cari yang sama id jika sama tambahkan qty +1, jika tidak itemnya tetap (kondisi setelah :)
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // Pemakaian useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    // Maksudnya adalah mengambil data sebelumnya dan menambahkan jika ada yg baru, jadi seperti ditimpa dgn yg baru (Itu perbedaan useState dan useRef)
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);
  // Untuk hilangkan total price jika tidak ada barang
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <div>
      <div className="flex justify-end p-10 bg-blue-500 text-white font-semibold h-10 items-center px-5">
        {username}
        <Button
          variant="bg-red-500"
          onClick={handleLogout}
          className="text-white font-semibold ml-5"
        >
          Logout
        </Button>
      </div>
      <div className="flex w-full py-5">
        <div className="w-4/6 flex flex-wrap">
          {product.length > 0 &&
            product.map((product) => (
              <CardProduct key={product.id}>
              {/* Kirimkan id di image agar di klik muncul id */}
                <CardProduct.Header images={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                {/* Tambahkan di footer agar bisa ditangkap di CardProduct.jsx */}
                <CardProduct.Footer
                  harga={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5">Cart</h1>
          {/* <ul>
            Panggil dengan cart
            {cart.map((item) => (
              <li key={item.id}>{item.id}</li>
            ))}
          </ul> */}
          <table className="border-separate border-spacing-x-5 text-left table-auto">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Penerapan UseRef  | Untuk Ambil datanya harus dengan current*/}
              {/* {cartRef.current.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "USD",
                      })}{" "}
                    </td>
                  </tr>
                );
              })} */}

              {/* Yang bawah ini untuk langsung keluar data cart */}
              {/* {Cari id array product } */}
              {product.length > 0 &&
                cart.map((item) => {
                  const productItem = product.find((p) => p.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{productItem.title.substring(0, 10)}...</td>
                      <td>{productItem.price}</td>
                      <td>{item.qty}</td>
                      <td>
                        ${" "}
                        {(item.qty * productItem.price).toLocaleString(
                          "id-ID",
                          {
                            style: "currency",
                            currency: "USD",
                          }
                        )}{" "}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    ${" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}{" "}
                  </b>
                </td>{" "}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Counter></Counter>
    </div>
  );
};
export default ProductsPage;
