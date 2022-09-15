import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-Us', {
      style: 'currency',
      currency: 'USD',
    });
  };

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total, // Operación
      0 // Valor inicial del acumulador
    );

    const totalDisponible = presupuesto - totalGastado;
    const porcentajeGastado = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);
    setTimeout(() => {
      setPorcentaje(porcentajeGastado);
    }, 600);
  }, [gastos]);

  const handleReset = () => {
    const confirmacion = confirm(
      '¿Seguro que desea reiniciar los gastos y el presupuesto?'
    );

    if (confirmacion) {
      setGastos([]);
      setPresupuesto(0);
      setIsValidPresupuesto(false);
    } else {
      console.log('No reiniciar');
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: `${disponible < 0 ? '#dc2626' : '#3B82F6'}`,
            trailColor: '#F5F5F5',
            textColor: `${disponible < 0 ? '#dc2626' : '#3B82F6'}`,
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleReset}>
          Resetear App
        </button>

        <p>
          <span>Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>

        <p className={disponible < 0 ? 'negativo' : ''}>
          <span>Disponible: </span>
          {formatearCantidad(disponible)}
        </p>

        <p>
          <span>Gastado: </span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
