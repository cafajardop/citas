import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {
  // Arreglo de citas para irla agregando en el arreglo principal
  const [citas, guardarCitas] = useState([]);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {  ///como solo le paso un parametro elimino los parentesis tener en cuenta es un arrow function
    //Debemos comunicar esta funcion con el componente <Formulario/>
    //Ahora como ya comunicamos esta funcion y la pasamos por props mediante destructurin tomamos del state la copia es decir el guardarCitas
    guardarCitas([ //es un arreglos
      ...citas, //SIEMPRE DEBO TOMAR UNA COPIA DE MI STATE
      cita //esta es la nueva cita
    ])
  }

  //Funcion de eliminar una cita por su id
  const eliminarCita = id => {
      //Creamos un arreglo para eliminar
      const nuevasCitas = citas.filter(cita => cita.id !==id ); //es diferente por que queremos que traiga los diferente al id mira clase 59 minuto 3:40
      guardarCitas(nuevasCitas); //como crea un arreglo nuevo no necesita los corchetes
  }


  //ESTOY USANDO UNA LIBRERIA QUE SE LLAMA SQUELETON 
  return (
    <Fragment>
      <h1>Aministrador Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}//No necesito pasarle los parentesis react sabe que es una funcion crearCita()
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita => (
              <Cita //LO PRIMERO ES TRAER ES CITAS DEL STATE Y LO RECORRO CON UN MAP LUEGO CREO ESTE COMPONENTE Cita y lo CREO Cita.js
                //DEBEMOS PASAR LA INFORMACION DE LA CITA
                key={cita.id}
                cita={cita} //Es igual a la cita del map y cuando itero de esta forma siempre debo pasarle un key
                eliminarCita = {eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
