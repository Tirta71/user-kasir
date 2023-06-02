import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import "../css/CartDropDown.css";

import { updateNomorMeja } from "./Keranjang/updateNomor";
import { tambahItemCart } from "./Keranjang/handleTambah";
import { KurangItemCart } from "./Keranjang/handleKurang";

export default function CartDropdown() {
  const [cartItems, setCartItems] = useState([]);
  const [nomorMeja, setNomorMeja] = useState("");

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "https://646f8bf209ff19b120877364.mockapi.io/login/cart"
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleKurang = async (itemId) => {
    await KurangItemCart(itemId, cartItems, fetchCartItems);
  };

  const handleTambah = async (itemId) => {
    await tambahItemCart(itemId, cartItems, fetchCartItems);
  };

  const handleUpdateNomorMeja = async () => {
    await updateNomorMeja(nomorMeja, cartItems, fetchCartItems);
  };

  return (
    <div className="mobile-cart-dropdown">
      <Dropdown className="my-dropdown">
        <Dropdown.Toggle
          id="dropdown-basic"
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
          className="togle-drop"
        >
          Keranjang ({cartItems.length})
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-dropdown-menu">
          {cartItems.length > 0 && (
            <div className="button-input">
              <input
                type="text"
                placeholder="Masukan Nomor Meja"
                className="text-center"
                value={nomorMeja}
                onChange={(e) => setNomorMeja(e.target.value)}
              />
              <button
                className="btn btn-primary mt-2"
                onClick={handleUpdateNomorMeja}
              >
                Update
              </button>
            </div>
          )}
          {cartItems.length > 0 && <h1 className="mt-2">Keranjang</h1>}
          {cartItems.map((item) => (
            <div className="my-itemDrop" key={item.id}>
              <img src={item.gambar} alt={item.nama} className="item-image" />
              <div className="container-item-drop">
                <div className="nama-makanan">
                  <h6>{item.nama}</h6>
                  <p>Harga: {item.harga}</p>
                </div>
                <div className="font-item">
                  <button
                    onClick={() => handleKurang(item.id)}
                    className="btn btn-danger w-100 delete-button"
                  >
                    -
                  </button>
                  <p>{item.jumlah}</p>
                  <button
                    onClick={() => handleTambah(item.id)}
                    className="btn btn-primary tambah-button"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
