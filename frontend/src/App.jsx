import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import TextInput from "./components/TextInput";
import TranslateButton from "./components/TranslateButton";
import TranslatedOutput from "./components/TranslatedOutput";



export default function App() {
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("fr");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const handleTranslate = async () => {
    if (!inputText.trim()) return;
  
    setLoading(true);
    setTranslatedText(""); // clear previous output
  
    try {
      const res = await fetch("https://bilingual-backend-eca.onrender.com/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_lang: sourceLang,
          target_lang: targetLang,
          text: inputText,
        }),
      });
  
      const data = await res.json();
      setTranslatedText(data.translated_text || "No result");
    } catch (err) {
      console.error(err);
      setTranslatedText("Translation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-2xl font-bold text-center mb-4">🌍 Bilingual Translator</header>
      <main className="max-w-xl mx-auto bg-white p-6 shadow rounded">
        <LanguageSelector
          sourceLang={sourceLang}
          targetLang={targetLang}
          onSourceChange={(e) => setSourceLang(e.target.value)}
          onTargetChange={(e) => setTargetLang(e.target.value)}
        />
        <TextInput value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <TranslateButton
          onClick={handleTranslate}
          disabled={loading || !inputText.trim()}
        />
        <TranslatedOutput result={translatedText} loading={loading} />


      </main>
    </div>
  );
}
