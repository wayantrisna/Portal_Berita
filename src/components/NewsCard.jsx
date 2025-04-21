// src/components/NewsCard.jsx
import React from "react";

function NewsCard({ title, summary }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "15px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ marginBottom: "8px" }}>{title}</h2>
      <p>{summary}</p>
    </div>
  );
}

export default NewsCard;
