import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

export default function ButtonReload() {
  const [loading, setLoading] = useState(false);

  const handleButtonReload = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div>
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
