import axios from "axios";
import Swal from "sweetalert2";

export const updateNomorMeja = async (nomorMeja, cartItems, fetchCartItems) => {
  if (nomorMeja === "") {
    Swal.fire("Nomor meja kosong", "Nomor meja tidak boleh kosong", "warning");
  } else {
    try {
      const existingMeja = await axios.get(
        "https://646f8bf209ff19b120877364.mockapi.io/login/meja"
      );
      const existingMejaData = existingMeja.data;
      const existingMejaIndex = existingMejaData.findIndex(
        (meja) => meja.nomorMeja === nomorMeja
      );

      if (existingMejaIndex !== -1) {
        const existingMejaId = existingMejaData[existingMejaIndex].id;
        const existingKeranjang = existingMejaData[existingMejaIndex].keranjang;

        let updatedKeranjang = [...existingKeranjang];

        cartItems.forEach((item) => {
          const existingItem = updatedKeranjang.find(
            (existingItem) => existingItem.kode === item.kode
          );

          if (existingItem) {
            // Item sudah ada di keranjang, tambahkan jumlahnya
            existingItem.jumlah += item.jumlah;
          } else {
            // Item belum ada di keranjang, tambahkan item baru
            updatedKeranjang.push({
              ...item,
              jumlah: item.jumlah,
            });
          }
        });

        await axios.put(
          `https://646f8bf209ff19b120877364.mockapi.io/login/meja/${existingMejaId}`,
          {
            nomorMeja,
            keranjang: updatedKeranjang,
          }
        );
      } else {
        const newMejaData = {
          nomorMeja,
          keranjang: cartItems.map((item) => ({
            ...item,
            jumlah: item.jumlah,
          })),
        };

        await axios.post(
          "https://646f8bf209ff19b120877364.mockapi.io/login/meja",
          newMejaData
        );
      }

      console.log("Nomor meja dan keranjang berhasil diperbarui");
      // Hapus semua item di keranjang
      for (const item of cartItems) {
        axios.delete(
          `https://646f8bf209ff19b120877364.mockapi.io/login/cart/${item.id}`
        );
      }

      Swal.fire({
        title: "Berhasil",
        text: "Nomor meja dan keranjang berhasil diperbarui",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Error updating nomor meja dan keranjang:", error);
    }
  }
};
