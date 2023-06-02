import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { MenuCard } from "./Menu/MenuCard";
import "../css/menu.css";
import CartDropdown from "./CartDropdown";
const MenuList = ({ jenis }) => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await axios.get(
        `https://646f8bf209ff19b120877364.mockapi.io/login/menus?jenis=${jenis}`
      );
      setMenuData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching menu data:", error);
    }
  };

  const handleTambahMenu = async (item) => {
    try {
      const existingItem = await axios.get(
        `https://646f8bf209ff19b120877364.mockapi.io/login/cart?nama=${item.nama}`
      );

      if (existingItem.data.length > 0) {
        const updatedItem = {
          ...existingItem.data[0],
          jumlah: existingItem.data[0].jumlah + 1,
        };

        await axios.put(
          `https://646f8bf209ff19b120877364.mockapi.io/login/cart/${existingItem.data[0].id}`,
          updatedItem
        );

        console.log("Data keranjang berhasil diperbarui");
        Swal.fire("Success", "Data keranjang berhasil diperbarui", "success");
      } else {
        const newItem = {
          ...item,
          jumlah: 1,
        };

        await axios.post(
          "https://646f8bf209ff19b120877364.mockapi.io/login/cart",
          newItem
        );

        console.log("Menu berhasil ditambahkan ke cart");
        Swal.fire(
          "Success!",
          "Menu berhasil ditambahkan ke cart",
          "success"
        ).then(() => {
          // test
        });
      }
    } catch (error) {
      console.error("Error menambahkan data ke cart:", error);
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="card-container">
      {menuData.map((item) => (
        <MenuCard
          item={item}
          handleTambahMenu={handleTambahMenu}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default function Menu() {
  return (
    <div>
      <div className="container-drop">
        <CartDropdown />
      </div>
      <h1 className="text-center">Daftar Menu</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Makanan</Accordion.Header>
          <Accordion.Body>
            <MenuList jenis="makanan" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Minuman</Accordion.Header>
          <Accordion.Body>
            <MenuList jenis="minuman" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Cemilan</Accordion.Header>
          <Accordion.Body>
            <MenuList jenis="cemilan" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
