import { useState, useEffect } from 'react';

import Header from './components/Header';
import Filtros from './components/Filtros';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';

import { generarId } from './helpers';

import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem('gastos')) ?? []
  );

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  const handleNuevoGasto = () => {
    setModal(true);
    // Vaciar el contenido de gastoEditar al crear un nuevo gasto
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);

    setGastos(gastosActualizados);
  };

  const guardarGasto = (gasto) => {
    // Si hay un id, se escribe la lógica para editar el gasto con el id especificado
    if (gasto.id) {
      const gastosActualizado = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );

      setGastos(gastosActualizado);
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  // Guardar el presupuesto en LocalStorage
  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? '0');
  }, [presupuesto]);

  // Guardar los gastos en LS
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  // Validar el presupuesto al cargar la página
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto'));

    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  // Agregar el filtro cada que este valor cambie
  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );

      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono nuevo gasto"
              style={{ cursor: 'pointer' }}
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
