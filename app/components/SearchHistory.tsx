"use client";

import { Montserrat, Poppins } from "next/font/google";

interface SearchHistoryProps {
  searchHistory: string[];
  onSelect: (query: string) => void;
}

export default function SearchHistory({ searchHistory, onSelect }: SearchHistoryProps) {
  return (
    <div style={{
      width: "300px",
      background: "#3C3D37",
      padding: "20px",
      overflowY: "auto",
      borderRadius: "10px",
      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      marginTop: "5px",
      marginLeft: "5px",
      marginRight: "5px",
      marginBottom: "5px",
    }}>
      <h2 className="text-[#ECDFCC] text-2xl font-bold mb-4">Search History</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {searchHistory.length === 0 ? (
          <p>No recent searches</p>
        ) : (
          searchHistory.map((item, index) => (
            <li key={index} 
                style={{
                  cursor: "pointer",
                  padding: "8px",
                  borderBottom: "1px solid #ddd"
                }}
                onClick={() => onSelect(item)} // Calls fetchSummary when clicked
            >
              {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
