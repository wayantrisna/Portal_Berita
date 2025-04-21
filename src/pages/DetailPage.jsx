import React from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();

  // Simulasi detail berita, nanti bisa diganti dengan data asli/API
  const detail = {
    1: { title: "Berita A", content: "Ini adalah isi lengkap dari berita A." },
    2: { title: "Berita B", content: "Ini adalah isi lengkap dari berita B." },
  };

  const berita = detail[id];

  if (!berita) return <p>Berita tidak ditemukan.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{berita.title}</h1>
      <p>{berita.content}</p>
    </div>
  );
}

export default DetailPage;
