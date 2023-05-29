import './itemLista.css'

export default function ItemLista({tarea, completarTarea, borrarTarea}){

    return(
        <li>
            <input 
                className='completado'
                type="checkbox" 
                name="completed"                
                defaultChecked={tarea.completed} 
                onClick={e => completarTarea(tarea, e.target.checked)}
                />
            <p>{tarea.description}</p>
            <button className="btnDelete" type='button' onClick={() => borrarTarea(tarea)}>✖</button>
        </li>
    )
}