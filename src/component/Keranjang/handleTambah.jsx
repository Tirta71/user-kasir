import axios from "axios";

export const tambahItemCart = async (itemId, cartItems, fetchCartItems) => {
  try {
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        jumlah: existingItem.jumlah + 1,
      };

      await axios.put(
        `https://646f8bf209ff19b120877364.mockapi.io/login/cart/${itemId}`,
        updatedItem
      );

      await fetchCartItems(); // Ambil kembali data terbaru dari API
      console.log("Data keranjang berhasil diperbarui");
    } else {
      const response = await axios.get(
        `https://646f8bf209ff19b120877364.mockapi.io/login/menu/${itemId}`
      );

      const newItem = {
        ...response.data,
        jumlah: 1,
      };

      await axios.post(
        "https://646f8bf209ff19b120877364.mockapi.io/login/cart",
        newItem
      );

      await fetchCartItems(); // Ambil kembali data terbaru dari API
    }
  } catch (error) {
    console.error("Error updating item quantity:", error);
  }
};
