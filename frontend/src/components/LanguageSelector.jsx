import React from "react";

export default function LanguageSelector({ sourceLang, targetLang, onSourceChange, onTargetChange }) {
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "yo", name: "Yoruba" },
    { code: "ha", name: "Hausa" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    // Add more if needed
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Source Language</label>
        <select value={sourceLang} onChange={onSourceChange} className="w-full border p-2 rounded">
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Target Language</label>
        <select value={targetLang} onChange={onTargetChange} className="w-full border p-2 rounded">
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
