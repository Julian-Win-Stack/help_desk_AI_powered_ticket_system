import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState<string>("Connecting...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Server unreachable"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Helpdesk</h1>
      <p>
        API status: <strong>{status}</strong>
      </p>
    </div>
  );
}
