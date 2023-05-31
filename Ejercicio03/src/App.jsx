import { useEffect, useState } from 'react'
import './App.css'
import InputDescription from './Components/inputDescription';
import ItemLista from './Components/itemLista';

function App() {
  const [Tareas, setTareas] = useState( JSON.parse( localStorage.getItem('tareas') ) || []);
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(Tareas));
  }, [Tareas])

  const completarTarea = (idTarea) => {

    setTareas(Tareas.map(tarea => (
           tarea.id === idTarea.id ? {...tarea, completed: !tarea.completed} : tarea 
    )))
}

const borrarTarea = (idABorrar) => {
    const nuevaLista = Tareas.filter((tarea) => tarea.id != idABorrar.id);
    setTareas(nuevaLista);
}

  return (
    <>
      <h2>Lista de tareas</h2>
      <InputDescription Tareas={Tareas} setTareas={setTareas}/>
      <ul>
        {Tareas.length === 0 && "No Tienes Tareas Pendientes"}
        {
          Tareas.map((tarea) => (
            <ItemLista 
              key={tarea.id} 
              tarea={tarea} 
              completarTarea={completarTarea} 
              borrarTarea={borrarTarea} />
          ))
        }
      </ul>
    </>
  )
}

export default App
