import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ButtonReload() {
  const [loading, setLoading] = useState(false);

  const handleButtonReload = () => {
    setLoading(true);
    toast.success("Item Ditambahkan Silahkan cek keranjang");

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div>
      <ToastContainer />
      <button
        className="btn btn-primary w-80 m-auto d-block p-3 mt-2"
        onClick={handleButtonReload}
        disabled={loading}
      >
        {loading ? (
          <Spinner animation="border" size="lg" role="status" />
        ) : (
          "Tambah Ke Keranjang"
        )}
      </button>
    </div>
  );
}
