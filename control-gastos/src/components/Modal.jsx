import { useState, useEffect } from 'react';

import Mensaje from './Mensaje';

import CerrarBtn from '../img/cerrar.svg';

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    // Si gastoEditar no es nulo, asignar los valores a las variables del state
    setNombre(gastoEditar.nombre);
    setCantidad(gastoEditar.cantidad);
    setCategoria(gastoEditar.categoria);
    setId(gastoEditar.id);
    console.info(gastoEditar.nombre);
  }, []);

  const ocultarModal = () => {
    setModal(false);

    // Limpiar el state de gastoEditar, para vaciarlo cuando ya no se utilice
    setGastoEditar({});

    // Ejecuta la función después de 5 segundos
    setTimeout(() => {
      setAnimarModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios');
      // Mostrar el mensaje de error solo por tres segundos con setTimeout
      setTimeout(() => {
        setMensaje('');
      }, 3000);

      return;
    }

    guardarGasto({ nombre, cantidad, categoria, id });

    // Limpiar el state de gastoEditar, para vaciarlo cuando ya no se utilice
    setGastoEditar({});

    setModal(false);

    // Ejecuta la función después de 5 segundos
    setTimeout(() => {
      setAnimarModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre</label>

          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input
            id="cantidad"
            type="text"
            placeholder="Añade la cantidad del gasto: ej. 300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoría</label>

          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro"> Ahorro</option>
            <option value="comida"> Comida</option>
            <option value="casa"> Casa</option>
            <option value="gastos"> Gastos varios</option>
            <option value="ocio"> Ocio</option>
            <option value="salud"> Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input
          type="submit"
          value={gastoEditar.nombre ? 'Editar Gasto' : 'Añadir Gasto'}
        />
      </form>
    </div>
  );
};

export default Modal;
