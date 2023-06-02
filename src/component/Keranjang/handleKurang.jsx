import Swal from "sweetalert2";
import axios from "axios";
export const KurangItemCart = async (itemId, cartItems, fetchCartItems) => {
  try {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const newJumlah = item.jumlah - 1;
        if (newJumlah < 1) {
          return axios
            .delete(
              `https://646f8bf209ff19b120877364.mockapi.io/login/cart/${itemId}`
            )
            .then(() => {
              Swal.fire(
                "Berhasil",
                "Makanan berhasil dihapus dari keranjang",
                "success"
              );
            });
        }
        return {
          ...item,
          jumlah: newJumlah,
        };
      }
      return item;
    });

    await axios.put(
      `https://646f8bf209ff19b120877364.mockapi.io/login/cart/${itemId}`,
      updatedItems.find((item) => item.id === itemId)
    );

    await fetchCartItems(); // Ambil kembali data terbaru dari API
  } catch (error) {
    console.error("Error updating item quantity:", error);
  }
};
