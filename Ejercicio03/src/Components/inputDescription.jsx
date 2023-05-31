import { useState } from "react";
import { Tarea } from "../Clases/Tarea";
import './inputDescription.css'

// eslint-disable-next-line react/prop-types
export default function InputDescription({Tareas, setTareas}){
    const [Descripcion, setDescripcion] = useState('');
    
    function addTarea(evento){

        evento.preventDefault();

        if(Descripcion){

            const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
            const nuevaTarea = new Tarea(uniqueId, Descripcion, false)
            setTareas([...Tareas, nuevaTarea]);
            setDescripcion('');
        }
    }

    return(
        <div className="formDetalle">
            <form onSubmit={addTarea()}>
                <input 
                    type="text" 
                    value={Descripcion} 
                    onChange={e => setDescripcion(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' ? addTarea() : null}
                    />
                <button type="submit">
                    Agregar
                </button>
            </form>
        </div>
    )
}