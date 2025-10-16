import { useState } from "react";
import axios from "axios";

function App() {
  const [secret, setSecret] = useState("");
  const [link, setLink] = useState("");
  const [retrievedSecret, setRetrievedSecret] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE}/hide/`, { secret });
      console.log(res.data); // <--- así ves qué devuelve
      setLink(`http://scrt.link/${res.data.id}`);


      setSecret("");
    } catch (err) {
      console.error(err);
      alert("Error al generar el secreto");
    }
  };

  const handleRetrieve = async (id) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_BASE}/show/${id}/`);

      setRetrievedSecret(res.data.secret);
    } catch (err) {
      console.error(err);
      alert("Secreto no encontrado o ya fue visto");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Generador de secretos</h1>

      {!link && (
        <form onSubmit={handleSubmit}>
          <input
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Escribe tu secreto"
          />
          <button type="submit">Generar enlace secreto</button>
        </form>
      )}

      {link && (
        <div>
          <p>Tu enlace secreto: <a href={link}>{link}</a></p>
          <p>O ingresa el ID para ver un secreto:</p>
          <input
            placeholder="ID del secreto"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleRetrieve(e.target.value);
              }
            }}
          />
        </div>
      )}

      {retrievedSecret && (
        <div>
          <h2>Secreto:</h2>
          <p>{retrievedSecret}</p>
        </div>
      )}
    </div>
  );
}

export default App;
