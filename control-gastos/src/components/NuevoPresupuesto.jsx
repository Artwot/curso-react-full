import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje('No es un presupuesto valido');
    } else {
      setMensaje('Si es un presupuesto valido');
    }
  };

  return (
    <div className='contenedor-presupuesto sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
          <label htmlFor=''>Definir Presupuestos</label>
          <input
            type='text'
            className='nuevo-presupuesto'
            placeholder='Añade tu presupuestos'
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
        </div>

        <input type='submit' value='Añadir' />

        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
