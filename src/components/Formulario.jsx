import React, { useState,useEffect } from 'react';
import {Error} from './Error'


const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");
    //para los errores de los inputs
    const [error,setError]=useState(false);
  
    //useEfect para llenar los campos cuando se ejecute el editar
    useEffect(() => {
      if(Object.keys(paciente).length>0){
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setAlta(paciente.alta);
        setSintomas(paciente.sintomas);

      }
    }, [paciente])
    
    //generando Id
    const generarId=()=>{
        const randon=Math.random().toString(36).substr(2);
        const fecha=Date.now().toString(36)
        return fecha+randon
    }

    //limpiar
    const limpiar=()=>{
        setNombre("");
        setAlta("");
        setEmail("");
        setPropietario("");
        setSintomas("");
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       // console.log("enviando formulario")
       //validando formulario
       if([nombre,propietario,email,alta,sintomas].includes('')){
        //alert("posibles campos vacios")
        setError(true)
        return;
       }
       setError(false)
       //construir un objeto de pacientes para ser enviado al otro componente
       const objetoPaciente={
            nombre,
            propietario,
            email,
            alta,
            sintomas,
           
        }
        //editar registro
        if(paciente.id){
            objetoPaciente.id=paciente.id
            const pacientesActualizados=pacientes.map(pacienteState=>pacienteState.id===paciente.id ? objetoPaciente:pacienteState)
            setPacientes(pacientesActualizados);
            setPaciente({});
        }//nuevo registro
        else{
            objetoPaciente.id=generarId(); //genera el id
            //copia a pacientes para que se guarde en el objeto y luego a pacientes
       setPacientes([...pacientes,objetoPaciente]); 
        }
      
       //reiniciar el formulario
        limpiar();
    }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
            {paciente.id? 'Editar Paciente': 'Añadir Paciente'}
        </p>

        <form onSubmit={handleSubmit}   className='bg-white shadow-md rounded-lg py-10 px-10 mb-10 mx-5'>
            <div className='mb-5'>
                <label className='block text-gray-500 uppercase font-bold'>{nombre} Mascota</label>
                {error && <Error><h2>Verifica los datos </h2>Todos los campos son obligatorios</Error>}
                <input value={nombre}  onChange={(e)=>{setNombre(e.target.value)}}  id='mascota' type="text" placeholder='Nombre Mascota' className='bottom-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'></input>
            </div>
            <div className='mb-5'>
                <label className='block text-gray-500 uppercase font-bold'>Nombre Propietario</label>
                <input value={propietario}  onChange={(e)=>{setPropietario(e.target.value)}}   id='propietario' type="text" placeholder='Nombre propietario' className='bottom-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'></input>
            </div>
            <div className='mb-5'>
                <label className='block text-gray-500 uppercase font-bold'>Correo</label>
                <input value={email}  onChange={(e)=>{setEmail(e.target.value)}}   id='email' type="email" placeholder='email@' className='bottom-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'></input>
            </div>
            <div className='mb-5'>
                <label className='block text-gray-500 uppercase font-bold'>Alta</label>
                <input value={alta}  onChange={(e)=>{setAlta(e.target.value)}}  id='alta' type="date"  className='bottom-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'></input>
            </div>
            <div className='mb-5'>
                <label className='block text-gray-500 uppercase font-bold'>Sintomas</label>
                <textarea value={sintomas}  onChange={(e)=>{setSintomas(e.target.value)}} id='sintomas' placeholder='Describe los Sintomas' className='bottom-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
            </div>
            <input type='submit' 
              className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-800 transition-all' 
                 value={paciente.id? 'Editar Paciente': 'guardar Paciente'}/>
        </form>
      </div>

  )
}

export default Formulario
