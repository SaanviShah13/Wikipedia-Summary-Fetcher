"use client";

interface SearchHistoryProps {
  searchHistory: string[];
  onSelect: (query: string) => void;
}

export default function SearchHistory({ searchHistory, onSelect }: SearchHistoryProps) {
  return (
    <div style={{
      width: "250px",
      background: "#f4f4f4",
      padding: "20px",
      overflowY: "auto"
    }}>
      <h2>Search History</h2>
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
