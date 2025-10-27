import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 mt-10 text-center border-t border-gray-300 dark:border-gray-700 dark:text-gray-50">
      <p>© {new Date().getFullYear()} MoodJournal — Crafted with ❤️ by GPT-5</p>
    </footer>
  );
};

export default Footer;
