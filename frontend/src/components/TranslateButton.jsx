import React from "react";

export default function TranslateButton({ onClick, disabled }) {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-2 rounded text-white transition ${
          disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Translate
      </button>
    </div>
  );
}
