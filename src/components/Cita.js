import React from 'react';

const Cita = ({cita,eliminarCita}) => ( //DEBEMOS EXTRAER LA CITA //IMPORTANTE SE PUEDE CREAR TAMBIEN UN DIV EN VEZ DE FRAGMENT CUALQUIERA DE LOS DOS ES VALIDO
    <div className="cita"> 
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button 
            className="button eliminar u-full-width"
            // onClick={eliminarCita} si paso toda la funcion asi esto llamando todo el objeto por lo cual se pasa es el arrow function
            onClick ={() => eliminarCita(cita.id)} //Recordemos que este es el id
        >Eliminar</button>


    </div>

);
 
export default Cita;