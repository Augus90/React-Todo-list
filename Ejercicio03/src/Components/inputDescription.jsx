import { useState } from "react";
import { Tarea } from "../Clases/Tarea";
import './inputDescription.css'

// eslint-disable-next-line react/prop-types
export default function InputDescription({Tareas, setTareas}){
    const [Descripcion, setDescripcion] = useState('');
    
    const addTarea = () => {
        if(Descripcion){

            const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
            const nuevaTarea = new Tarea(uniqueId, Descripcion, false)
            setTareas([...Tareas, nuevaTarea]);
            setDescripcion('');
        }
    }

    return(
        <div className="form-group row">
            <div className="col-10">
                <input 
                    className="form-control"
                    type="text" 
                    value={Descripcion} 
                    onChange={e => setDescripcion(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' ? addTarea() : null}
                />
            </div>
            <div className="col-2">
                <button className="btn btn-primary" onClick={() => addTarea()}>
                    Agregar
                </button>
            </div>
        </div>
    )
}