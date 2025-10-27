import React, { useEffect, useState } from "react";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // const res = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random");

        const apiUrl = "https://zenquotes.io/api/random";
        const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURI(apiUrl)}`);

        if (!res.ok) throw new Error("API fetch failed");
        const data = await res.json();
        setQuote(data[0].q + " — " + data[0].a);
      } catch (err) {
        setError("Failed to load quote 🥲");
      } finally {
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  const addEntry = () => {
    const text = prompt("Write your thought:");
    if (text) {
      const newEntry = { id: Date.now(), text };
      setEntries((prev) => [...prev, newEntry]);
      localStorage.setItem("entries", JSON.stringify([...entries, newEntry]));
      setTimeout(() => alert("Journal saved successfully ✅"), 500);
    }
  };

  return (
    <section className="p-6 text-center">
      <h2 className="mb-3 text-2xl font-semibold dark:text-gray-50">
        Today's Inspiration 🌞
      </h2>
      {loading ? (
        <p className="text-gray-500">Fetching quote...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <blockquote className="mb-4 text-lg italic dark:text-gray-200">
          {quote}
        </blockquote>
      )}

      <button
        onClick={addEntry}
        className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
      >
        ✍️ Add Journal
      </button>

      <div className="mt-6 space-y-3">
        {entries.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No entries yet... start journaling!
          </p>
        ) : (
          entries.map((e) => (
            <div
              key={e.id}
              className="p-3 border rounded dark:border-gray-700 dark:bg-gray-800"
            >
              {e.text}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Journal;
