import { useEffect, useState } from 'react'
import './App.css'
import InputDescription from './Components/inputDescription';
import ItemLista from './Components/itemLista';

function App() {
  const [Tareas, setTareas] = useState(() => {
    const valorGuardado = localStorage.getItem("Tareas")
    if(valorGuardado == null) return []

    return JSON.parse(valorGuardado)
  });
  useEffect(() => {
    localStorage.setItem("Tareas", JSON.stringify(Tareas));
  }, [Tareas])
  

  const completarTarea = (indexTarea, completado) => {
    setTareas(tareaActual => {
        return tareaActual.map(tarea => {
        if(tarea.id === indexTarea.id){
            return {...tarea, completado}
        }
        return tarea
        })
    })
}

const borrarTarea = (idABorrar) => {
    const nuevaLista = Tareas.filter((tarea) => tarea.id != idABorrar.id);
    setTareas(nuevaLista);
}

  return (
    <>
      <h2>Lista de tareas</h2>
      <InputDescription Tareas={Tareas} setTareas={setTareas}/>
      <ul className=''>
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
