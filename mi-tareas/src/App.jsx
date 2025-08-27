import { useState } from "react";

function App() {
  // Estado para la lista de tareas
  const [tareas, setTareas] = useState([
    { id: 1, nombre: "Aprender React", estado: "Pendiente" },
    { id: 2, nombre: "Hacer ejercicio", estado: "Pendiente" }
  ]);

  // Estado para el input (lo que escribe el usuario)
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Función para manejar el agregado de una tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return; // Evita tareas vacías

    const tarea = {
      id: Date.now(), // genera un id único basado en el tiempo actual
      nombre: nuevaTarea,
      estado: "Pendiente"
    };

    setTareas([...tareas, tarea]); // añadimos la nueva tarea
    setNuevaTarea(""); // limpiamos el input
  };

  return (
    <div>
      <h1>Gestión de Tareas</h1>

      {/* Formulario para agregar tarea */}
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button onClick={agregarTarea}>Agregar</button>

      {/* Lista de tareas */}
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.nombre} - {tarea.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
