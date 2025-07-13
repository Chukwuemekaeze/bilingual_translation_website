import { useEffect, useState } from "react";

export default function TestBackend() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/ping")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="mt-4 p-2 bg-green-100 rounded text-green-800 text-center">
      {msg || "Connecting to backend..."}
    </div>
  );
}