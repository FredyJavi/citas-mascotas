import React, { useEffect } from 'react'
import { Paciente } from './Paciente'

export const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen overflow-y' >
      {pacientes && pacientes.length ? (
        <>
      <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Administra {''} Administrarlos 
        <span>Pacientes y citas</span>
        </p>
        
        { pacientes.map((paciente) =>(
          <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente}  eliminarPaciente={eliminarPaciente}/>
        ))}
        
      </>
  ) : (
    <>
    <h2 className='font-black text-3xl text-center'>no hay pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Agrega pacientes {''} 
        <span>lista de pacientes agregados</span>
        </p>

    </>
    )}

  </div>

)}
