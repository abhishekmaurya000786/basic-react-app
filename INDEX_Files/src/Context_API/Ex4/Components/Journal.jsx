import { useState, useEffect } from "react";

const Journal = () => {
  const [entry, setEntry] = useState(localStorage.getItem("journal") || "");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("journal", entry);
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [entry]);

  return (
    <div
      onClickCapture={() => console.log("📡 Capturing Phase")}
      onClick={() => console.log("🎯 Bubbling Phase")}
      className="w-full max-w-lg p-6 bg-white shadow-xl dark:bg-gray-900 dark:text-white rounded-xl"
    >
      <h2 className="mb-4 text-xl font-bold">📝 Your Journal</h2>
      <textarea
        className="w-full p-3 text-black border rounded-lg"
        rows="5"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Start writing your thoughts..."
      />
      {saved && (
        <p className="mt-2 text-green-500 transition-all">
          ✅ Auto-saved successfully!
        </p>
      )}
    </div>
  );
};

export default Journal;
