import React from 'react'

export const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  //console.log(paciente);
  const {nombre,propietario,email,alta,sintomas,id} =paciente;

  const handleEliminar=()=>{
    const respuesta=confirm("Deseas Eliminar")
    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className=' mx-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
              <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
              <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
              <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha: {''}
              <span className='font-normal normal-case'>{alta}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
              <span className='font-normal normal-case'>{sintomas}</span>
            </p>
            <div className=' flex justify-between'>
                <button onClick={()=>setPaciente(paciente)}  type='button' className='py-2 px-10 mt-1 mx-2 bg-green-700 text-white hover:bg-green-900 rounded-md cursor-pointer'>Editar</button>
                <button type='button' className='py-2 px-10 mt-1 mx-2  bg-red-700 text-white hover:bg-red-900 rounded-md cursor-pointer'
                onClick={handleEliminar} >Eliminar</button>
            </div>
        </div>
  )
}

