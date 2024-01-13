import { useState, useEffect } from "react";
import ErrorF from "./ErrorF";


const Formulario = ({pacientes,setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(()=>{
        if(Object.keys(paciente).length >0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    

    const generarId = () =>{
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        //Validación del formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log('Hay al menos un campo vacio')
            setError(true);
            return
        }
        setError(false)
        //Objeto de paciente

        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id){
            //editando el registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            //Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente])
        }
        
        //Reiniciar formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <div className=" md:w-1/2 lg:w-2/5 mx-3">
            <h2 className=" font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className=" text-lg mt-2 text-center mb-7">
                Añade Pacientes {''}
                <span className=" text-indigo-600 font-bold">Administralos</span>
            </p>
            <form 
                onSubmit={handleSubmit}
                className=" bg-white shadow-md rounded-md py-5 px-5">
                {error &&  <ErrorF> 
                            <p>Todos los campos son obligatorios</p>
                            </ErrorF>}
                <div className=" mb-7">
                    <label htmlFor="nameMascota" className=" block text-gray-700 uppercase font-bold text-sm">
                        Nombre Mascota
                    </label>
                    <input
                        id="nameMascota"
                        type="text" 
                        placeholder="Nombre Mascota"
                        className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md"
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                    />
                </div>
                <div className=" mb-7">
                    <label htmlFor="propietario" className=" block text-gray-700 uppercase font-bold text-sm">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text" 
                        placeholder="Nombre del Propietario"
                        className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md"
                        value={propietario}
                        onChange={(e)=> setPropietario(e.target.value)}
                    />
                </div>
                <div className=" mb-7">
                    <label htmlFor="email" className=" block text-gray-700 uppercase font-bold text-sm">
                        Correo Electrónico
                    </label>
                    <input
                        id="email"
                        type="email" 
                        placeholder="Correo contacto propietario"
                        className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className=" mb-7">
                    <label htmlFor="alta" className=" block text-gray-700 uppercase font-bold text-sm">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date" 
                        className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md"
                        value={fecha}
                        onChange={(e)=> setFecha(e.target.value)}
                    />
                </div>
                <div className=" mb-7">
                    <label htmlFor="sintomas" className=" block text-gray-700 uppercase font-bold text-sm">
                        Sintomas
                    </label>
                    <textarea 
                        id="sintomas"
                        placeholder="Escribe los sintomas"
                        className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md"
                        value={sintomas}
                        onChange={(e)=> setSintomas(e.target.value)}
                    />
                </div>
                <input 
                    type="submit" 
                    className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>  
    )
}

export default Formulario