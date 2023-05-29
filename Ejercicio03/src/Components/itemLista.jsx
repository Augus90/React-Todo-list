import './itemLista.css'

export default function ItemLista({tarea, completarTarea, borrarTarea}){

    return(
        <div className="card">
            <li className='row'>
                <div className='col-2'>
                    <input 
                        className='form-checkbox-input'
                        type="checkbox" 
                        name="completed"                
                        defaultChecked={tarea.completed} 
                        onClick={e => completarTarea(tarea, e.target.checked)}
                    />
                </div>
                <div className="col-8">
                    <p>{tarea.description}</p>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger" type='button' onClick={() => borrarTarea(tarea)}>✖</button>
                </div>
            </li>
        </div>
    )
}