"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSummary = async () => {
    if (!query) return;
    setLoading(true);
    setSummary("");

    try {
      const response = await fetch(`/api/wiki?query=${encodeURIComponent(query)}`);
      const data = await response.json();

      setSummary(data.summary || "No summary found.");
    } catch (error) {
      setSummary("Error fetching summary.");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      <h1>Wikipedia Summary Fetcher</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a topic..."
        style={{ padding: "10px", width: "80%", marginBottom: "10px" }}
      />
      <button onClick={fetchSummary} style={{ padding: "10px", marginLeft: "10px" }}>
        {loading ? "Loading..." : "Fetch Summary"}
      </button>
      {summary && <p style={{ marginTop: "20px" }}>{summary}</p>}
    </div>
  );
}
