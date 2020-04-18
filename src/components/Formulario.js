import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ crearCita }) => {

    //PUEDO CREAR MULTIPLES STATES
    //Crear State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //State para validar errores
    const [error, actualizaError] = useState(false) // se puede como un booleano tambien el state

    // Función que se ejecuta cada que el suario escribe en un input
    const actualizarState = e => {
        //console.log(e.target.value); // (e.target.name) sirve para identificar en que campo esta escribiendo y (e.target.value) el valor que le estoy ingresando
        actualizarCita({
            //Le paso el el use state el original cita ... spray operator
            ...cita,
            //Utilizo array destructurin
            [e.target.name]: e.target.value
        })
    }
    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault(); // es para evitar enviar por query string ya que por defecto toma el metodo GET

        //1-VALIDAR Lo primero que debo hacer antes de enviar los datos de un formulario es VALIDAR
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            // console.log('Hay un error');
            actualizaError(true); //En caso de que falle el state original es decir la variable error pasa a ser true
            return; //Siempre debo colocar un return para que no siga validando codigo
        }
        //2-Actualizar el state a False una vez halla pasado las validaciones
        actualizaError(false)

        //3-Asignar un ID Instamos la libreria npm i uuid y lo importo import uuid from 'uuid/v4';
        cita.id = uuidv4();

        //4-Crear la cita
        crearCita(cita); //esta funcion se la estamos pasando en el props

        //5-Reinciar el form => SENCILLO SOLO DEBEMOS PASARLE actualizarCita DE STATE 
        actualizarCita({ ///SIEMPRE SIEMPRE MODIFICANDO CON EL MODIFICADOR DEL STATE
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''//TAMBIEN HAY QUE RECORDAR QUE EL STATE SE REINICIA POR QUE LE COLOCAMOS LOS value={mascota} EN LOS INPUT Y REACT RECARGA ESA PARTE DEL COMPONENTE
            //Y RENINCIA EL FORMULARIO
        })



    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {
                error // Si hay un error muestra todos los campos son obligatorios
                    ?
                    <p className="alerta-error">Todos los campos son obligatorios</p>
                    :
                    null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-widht"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-widht"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-widht"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-widht"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;