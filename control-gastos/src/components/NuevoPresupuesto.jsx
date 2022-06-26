import React from "react";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  return (
    <div className="contenedor-presupuesto sombra">
      <form action="" className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuestos</label>
          <input
            type="text"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuestos"
            value={presupuesto}
            onChange={e => setPresupuesto(e.target.value)}
          />
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
