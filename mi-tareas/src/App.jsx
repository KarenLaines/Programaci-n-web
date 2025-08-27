import { useState } from "react";

function App() {
  // Lista de tareas
  const [tareas, setTareas] = useState([
    { id: 1, nombre: "Aprender React", estado: "Pendiente" },
    { id: 2, nombre: "Hacer ejercicio", estado: "Pendiente" }
  ]);

  // Estado del input
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Estado del filtro
  const [filtro, setFiltro] = useState("Todas");

  // Agregar nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    const tarea = {
      id: Date.now(),
      nombre: nuevaTarea,
      estado: "Pendiente"
    };

    setTareas([...tareas, tarea]);
    setNuevaTarea("");
  };

  // Cambiar estado de una tarea
  const cambiarEstado = (id) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id
        ? {
            ...tarea,
            estado: tarea.estado === "Pendiente" ? "Completada" : "Pendiente"
          }
        : tarea
    );
    setTareas(nuevasTareas);
  };

  // Eliminar una tarea
  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(nuevasTareas);
  };

  // Filtrar tareas
  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "Pendientes") return tarea.estado === "Pendiente";
    if (filtro === "Completadas") return tarea.estado === "Completada";
    return true; // Todas
  });

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

      {/* Botones de filtro */}
      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setFiltro("Todas")}>Todas</button>
        <button onClick={() => setFiltro("Pendientes")}>Pendientes</button>
        <button onClick={() => setFiltro("Completadas")}>Completadas</button>
      </div>

      {/* Lista de tareas filtradas */}
      <ul>
        {tareasFiltradas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.nombre} - {tarea.estado}{" "}
            <button onClick={() => cambiarEstado(tarea.id)}>
              {tarea.estado === "Pendiente" ? "Completar " : "Reabrir "}
            </button>
            <button onClick={() => eliminarTarea(tarea.id)}> Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
