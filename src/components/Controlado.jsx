import { useState } from "react";


const Controlado = () => { 
    const[todo, setTodo] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[state, setState] = useState('pendiente')

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <form onSubmit={handleSubmit} >
            <input 
              type="text" 
              placeholder="Ingrese TODO" 
              className="form-control mb-2"
              name = "todo" 
              value={todo}
              onChange={(e) => setTodo(e.target.value)}/>
            
            <textarea
                className="form-control mb2" 
                placeholder="Ingrese Descripción"
                name="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}>
            </textarea>
            
            <select className="form-select mb-2" 
            name="state" 
            value={state} 
            onChange={(e)=> setState(e.target.value)}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" 
                className="btn btn-primary">Procesar</button>
           
        </form>
    )
};

export default Controlado;