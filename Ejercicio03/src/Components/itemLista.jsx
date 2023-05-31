import './itemLista.css'
import can from '../assets/trash-can.webp'

export default function ItemLista({tarea, completarTarea, borrarTarea}){

    return(
        <li>
            <input 
                className='completado'
                type="checkbox" 
                name="completed"                
                defaultChecked={tarea.completed} 
                onClick={completarTarea(tarea)}
                />
            <p>{tarea.description}</p>
            <button className="btnDelete" type='button' onClick={() => borrarTarea(tarea)}><img src={can} className='trashCan' alt=""/></button>
        </li>
    )
}