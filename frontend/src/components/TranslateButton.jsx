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
        className={`px-6 py-2 rounded-md font-medium text-white transition duration-200 ease-in-out
          ${disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md"
          }`} 
      >
        Translate
      </button>
    </div>
  );
}
