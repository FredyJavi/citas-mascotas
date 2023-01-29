import { useState,useEffect } from "react";
import Formulario from "./components/Formulario";
import Headers from "./components/Headers";
import { ListadoPacientes } from "./components/ListadoPacientes";


function App() {
  //const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ??[]);
  //para editar
  const [paciente,setPaciente]=useState({});


  useEffect(() => {
    //console.log("componente listo o usuarios cambio de estado")
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  }, [pacientes])
  
  
   const eliminarPaciente=(id)=>{
    const pacientesActualizados=pacientes.filter(paciente=>paciente.id !=id);
    setPacientes(pacientesActualizados);
   }
   
  

  return (
    <div className="container mx-auto mt-20">
      <Headers/>
      <div className="mt-16 flex md:flex">
     <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente}/>
      <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      </div>
      
    </div> 
  )
}

export default App
