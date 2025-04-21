import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Komponen Kartu Berita
const NewsCard = ({ title, summary }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginTop: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  );
};

// Halaman Utama
const HomePage = () => {
  const berita = [
    { title: "Berita 1", summary: "Ini adalah ringkasan berita pertama." },
    { title: "Berita 2", summary: "Ringkasan berita kedua yang menarik." },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Portal Berita</h1>
      {berita.map((item, index) => (
        <NewsCard key={index} title={item.title} summary={item.summary} />
      ))}
    </div>
  );
};

// Halaman Detail
const DetailPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Detail Berita</h2>
      <p>Konten detail berita akan ditampilkan di sini.</p>
    </div>
  );
};

// App Utama
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
