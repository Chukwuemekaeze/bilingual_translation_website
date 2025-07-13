import React from "react";

export default function TranslatedOutput({ result, loading }) {
  return (
    <div className="mt-6">
      <h2 className="text-md font-medium text-gray-700 mb-2">Translated Output</h2>
      <div className="p-4 border rounded bg-gray-50 min-h-[100px]">
        {loading ? (
          <p className="text-blue-500 italic">Translating...</p>
        ) : result ? (
          <p className="text-gray-800">{result}</p>
        ) : (
          <p className="text-gray-400 italic">Translation will appear here...</p>
        )}
      </div>
    </div>
  );
}
