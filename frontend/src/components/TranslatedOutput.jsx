/**
 * TranslatedOutput.jsx
 * -----------------------------
 * Displays the translated text returned from the backend.
 * Handles loading state, fallback messaging, and conditional styling.
 *
 * Props:
 * - result (string): the translated text to display
 * - loading (boolean): indicates whether a translation request is in progress
 */

import React from "react";

export default function TranslatedOutput({ result, loading }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium text-gray-700 mb-2">Translated Output</h2>
      <div className="p-4 border rounded bg-gray-50 min-h-[100px]">
        {loading ? (
          // Show loading message while translation is in progress
          <p className="text-blue-500 italic">Translating...</p>
        ) : result ? (
          // Display the translated result
          <p className="text-gray-800">{result}</p>
        ) : (
          // Default placeholder when nothing has been translated yet
          <p className="text-gray-400 italic">Translation will appear here...</p>
        )}
      </div>
    </div>
  );
}
