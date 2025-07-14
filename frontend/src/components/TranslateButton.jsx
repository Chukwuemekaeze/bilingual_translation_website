/**
 * TranslateButton.jsx
 * -----------------------------
 * A styled button component that triggers translation when clicked.
 *
 * Props:
 * - onClick (function): handler function called when the button is clicked
 * - disabled (boolean): disables the button when true (e.g., during loading or empty input)
 */

import React from "react";

export default function TranslateButton({ onClick, disabled }) {
  return (
    <div className="text-center">
      <button
        onClick={onClick}           // Trigger translation function
        disabled={disabled}         // Prevent click if loading or invalid input
        className={`px-6 py-2 rounded text-white transition ${
          disabled 
          ? "bg-gray-400 cursor-not-allowed"      // Style when disabled
          : "bg-blue-600 hover:bg-blue-700"     // Style when active
        }`}
      >
        Translate
      </button>
    </div>
  );
}
