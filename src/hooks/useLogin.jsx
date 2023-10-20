import { useState, useEffect } from "react";
// Ini adalah custom hooks, penamaan file aturannya menggunakan use
import { getUsername } from "../services/auth.service";
export const useLogin = () => {
  // Buat state kosong
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    // Cek apakah token ada ketika login
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  });
  //   Kembalikan nilai/data username
  return username;
};

// Dengan adanya custom hooks, kita bisa memanggilnya di sembarang pages
