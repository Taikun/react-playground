import { useState } from "react";


const Controlado = () => { 

    const [todo, setTodo] = useState({
        title: "Todo #01",
        descripcion: " Descripción #01",
        state: "pendiente",
        priority: false
    });

    const { title, descripcion, state, priority } = todo;

    const handleChange = (e) => {
        
        const { name, value, type, checked } = e.target;

        console.log(name);
        if (type === "checkbox") {
            console.log(checked);      
        } else {
            console.log(value);
        }
        setTodo({...todo, [name]: type === "checkbox" ? checked : value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       console.log(title, descripcion, state, priority);
    };

    return (
        <form onSubmit={handleSubmit} >
            <input 
              type="text" 
              placeholder="Ingrese TODO" 
              className="form-control mb-2"
              name = "title" 
              value={title}
              onChange={handleChange}/>
            
            <div className="form-check">
              <input type="checkbox" name="priority" className="form-check-input mb-2" id="inputcheck" checked={priority} 
             onChange={handleChange }/>
              <label htmlFor="inputCheck">Dar Prioridad</label>
            </div>

            <textarea
                className="form-control mb2" 
                placeholder="Ingrese Descripción"
                name="descripcion"
                value={descripcion}
                onChange={handleChange}>
            </textarea>
            
            <select className="form-select mb-2" 
            name="state" 
            value={state} 
            onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" 
                className="btn btn-primary">Procesar</button>
           
        </form>
    )
};

export default Controlado;