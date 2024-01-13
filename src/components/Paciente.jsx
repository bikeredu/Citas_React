const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = ()=> {
        const respuesta = confirm('Deseas eliminar este paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }
  return (
    <div className=" mx-5 my-5 bg-white shadow-md px-5 py-5 rounded-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="mt-5">
            <button 
                type="button"
                className="text-xs py-1 px-5 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md"
                onClick={()=> setPaciente(paciente)}
            >Editar</button>
            <button 
                type="button"
                className="text-xs py-1 px-5 bg-red-500 hover:bg-red-800 text-white font-bold uppercase rounded-md ml-3"
                onClick={handleEliminar}
            >Eliminar</button>
        </div>
      </div>
  )
}

export default Paciente