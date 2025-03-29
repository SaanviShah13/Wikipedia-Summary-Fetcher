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
      <div style={{ flex: 1, padding: "20px", textAlign: "center" }}>
        <h1>Wikipedia Summary Fetcher</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a topic..."
          style={{ padding: "10px", width: "80%", marginBottom: "10px" }}
        />
        <button onClick={() => fetchSummary()} style={{ padding: "10px", marginLeft: "10px" }}>
          {loading ? "Loading..." : "Fetch Summary"}
        </button>
        {summary && <p style={{ marginTop: "20px" }}>{summary}</p>}
      </div>
    </div>
  );
}
