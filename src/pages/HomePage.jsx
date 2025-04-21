import { useState } from "react";from "react";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";

const dummyNews = [
  { id: 1, title: "Berita A", summary: "Ringkasan A" },
  { id: 2, title: "Berita B", summary: "Ringkasan B" },
];

function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Portal Berita</h1>
      {dummyNews.map((news) => (
        <Link key={news.id} to={`/detail/${news.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <NewsCard title={news.title} summary={news.summary} />
        </Link>
      ))}
    </div>
  );
}

export default HomePage;

