"use client";

import { useState } from "react";
import SearchHistory from "./components/SearchHistory";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const fetchSummary = async (searchQuery?: string) => {
    const searchTerm = searchQuery || query;
    if (!searchTerm) return;

    setQuery(searchTerm);
    setLoading(true);
    setSummary("");

    try {
      const response = await fetch(`/api/wiki?query=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();

      setSummary(data.summary || "No summary found.");

      // Add to history if it's a new search term
      if (!searchHistory.includes(searchTerm)) {
        setSearchHistory((prev) => [searchTerm, ...prev]);
      }
    } catch (error) {
      setSummary("Error fetching summary.");
    }

    setLoading(false);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Sidebar - Search History Component */}
      <SearchHistory searchHistory={searchHistory} onSelect={fetchSummary} />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", textAlign: "center", backgroundColor:"#1E201E"}}>
        <h1 className="text-[#ECDFCC] text-4xl font-bold mb-8 mt-10 ">Wikipedia Summary Fetcher</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a topic..."
          style={{ padding: "10px", width: "80%", marginBottom: "10px", backgroundColor:"#3C3D37", borderRadius:"8px", border:"none", color:"white" }}
        />
        <button onClick={() => fetchSummary()} style={{ padding: "10px", marginLeft: "10px", backgroundColor: "#697565", color: "white", borderRadius: "8px" }}>
          {loading ? "Loading..." : "Fetch Summary"}
        </button>
        {summary && <p style={{ marginTop: "30px", color:"offwhite", fontSize:"20px", marginLeft:"40px", marginRight:"40px", lineHeight:"30px" }}>{summary}</p>}
      </div>
    </div>
  );
}
