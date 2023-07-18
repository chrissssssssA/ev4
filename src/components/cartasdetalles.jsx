import React from 'react';

export const DetalleEjercicio = ({ rutinas, onVolverLista }) => {
  return (
    <div>
      <h2>{rutinas.nombre}</h2>
      <p>{rutinas.descripcion}</p>
      <p>Duración: {rutinas.duracion}</p>
      <p>Ejercicios: {rutinas.ejercicios.join(', ')}</p>
      <p>Repeticiones: {rutinas.repeticiones}</p>
      <p>Series: {rutinas.series}</p>
      <p>Descanso: {rutinas.descanso}</p>
      <button onClick={onVolverLista}>Volver a la lista</button>
    </div>
  );
};
