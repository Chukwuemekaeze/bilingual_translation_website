import React from "react";

export default function TextInput({ value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">Enter Text</label>
      <textarea
        value={value}
        onChange={onChange}
        rows={5}
        placeholder="Type something to translate..."
        className="w-full border rounded p-3 focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
}
