import React, { useEffect, useState } from "react";

const Todolist = () => {

      //const [valor,setActualizador] = useState(inicializamos el estado)
      const [tarea,setTarea] = useState("")
      const [lista,setLista] = useState ([])


      const handlechange = (event) => {
      setTarea(event.target.value)
      }

      const saveitem = (event) => {
        event.preventDefault ()
        if (tarea.trim() !== "")
        setLista([...lista,tarea])
        setTarea("")
      } 
       
      const eliminarTarea = (indexAEliminar) => {
        setLista(lista.filter((_, index) => index !== indexAEliminar));
      };
      

    useEffect(()=>{
        console.log(lista);
    },[lista])
    return (
    <>
    <h1> Lista de tareas </h1>
    <form onSubmit={saveitem}>
        <input 
        type="text" 
        placeholder="Introduce la tarea"
        value={tarea}
        onChange={handlechange}
        />
        <button type="submit">Agregar</button>
    </form>

    <ul>
        {lista.map((item, index) => (
        <li key={index}>
            {item}
        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
        </li>
        ))}
       </ul>
       </>
    );
};    
        
export default Todolist;