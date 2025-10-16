import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "http://127.0.0.1:8000/api";

function App() {
  const [secret, setSecret] = useState("");
  const [link, setLink] = useState("");
  const [key, setKey] = useState("");
  const [retrievedSecret, setRetrievedSecret] = useState("");
  const [error, setError] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${API_BASE}/create`, null, {
        params: { secret },
      });
      setLink(res.data.link);
      setSecret("");
    } catch (err) {
      console.error(err);
      setError("Error al generar el secreto o conectar con el backend.");
    }
  };

  const handleReveal = async (keyToReveal) => {
    setError("");
    setRetrievedSecret("");
    try {
      const res = await axios.get(`${API_BASE}/reveal/${keyToReveal}`);
      setRetrievedSecret(res.data.secret);
    } catch (err) {
      console.error(err);
      setError("Este secreto ya fue revelado o no existe.");
    }
  };

  // ✅ Detectar si hay una key en la URL (por ejemplo /reveal/<key>)
  useEffect(() => {
    const pathParts = window.location.pathname.split("/");
    if (pathParts[1] === "reveal" && pathParts[2]) {
      const keyFromUrl = pathParts[2];
      handleReveal(keyFromUrl);
    }
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🔒 Secure Link Generator</h1>

      {!retrievedSecret && (
        <>
          <section style={{ marginBottom: "2rem" }}>
            <h2>Ocultar mensaje</h2>
            <form onSubmit={handleCreate}>
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Escribe tu mensaje secreto"
                style={{
                  padding: "0.5rem",
                  width: "300px",
                  marginRight: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  background: "#007bff",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Crear enlace
              </button>
            </form>

            {link && (
              <p style={{ marginTop: "1rem" }}>
                Tu enlace secreto:{" "}
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              </p>
            )}
          </section>

          <section>
            <h2>Revelar mensaje</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleReveal(key);
              }}
            >
              <input
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Ingresa la key o el ID del secreto"
                style={{
                  padding: "0.5rem",
                  width: "300px",
                  marginRight: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  background: "#28a745",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Revelar
              </button>
            </form>
          </section>
        </>
      )}

      {retrievedSecret && (
        <div
          style={{
            marginTop: "1rem",
            background: "#f8f9fa",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2>Mensaje revelado:</h2>
          <p>{retrievedSecret}</p>
        </div>
      )}

      {error && (
        <p
          style={{
            marginTop: "1rem",
            color: "red",
            fontWeight: "bold",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default App;
