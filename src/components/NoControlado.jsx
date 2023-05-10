import { useRef, useState } from "react";


const NoControlado = () => { 
    const form = useRef(null);
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // limpiar el error

        // capturar los datos del formulario
        const data = new FormData(form.current);
        //console.log(data.get("todo"));
        //console.log(data.get("descripcion"));
        //console.log(data.get("state"));

        console.log(...data.entries());
 
        const dataObj = Object.fromEntries([...data.entries()]);

        console.log(dataObj);

        const {todo, descripcion, state}= Object.fromEntries([...data.entries()]);

        console.log(todo, descripcion, state);
       
        // validar los datos
        if (todo.trim() === "" || descripcion.trim() === "" || state.trim() === "") {
            console.log("Datos incompletos");
            return setError("Datos incompletos");
        }
        // enviar los datos
    };

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input 
              type="text" 
              placeholder="Ingrese TODO" 
              className="form-control mb-2"
              name = "todo"
              defaultValue="todo #01"/>
            
            <textarea
                className="form-control mb2" 
                placeholder="Ingrese Descripción"
                name="descripcion"
                defaultValue="descripción #01">
            </textarea>
            
            <select className="form-select mb-2" name="state" defaultValue="completado">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" 
                className="btn btn-primary">Procesar</button>
            {
                error ? <div className="alert alert-danger mt-2">{error}</div> : null
            }
        </form>
    )
};

export default NoControlado;