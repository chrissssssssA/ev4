import React, { useState } from 'react';

export const BusquedaRutinas = ({ rutinas, setRutinas }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (event) => {
    const valorBusqueda = event.target.value;
    setBusqueda(valorBusqueda);
    filtrarRutinas(valorBusqueda);
  };

  const filtrarRutinas = (busqueda) => {
    const rutinasFiltradas = rutinas.filter((rutina) => {
      const nombreRutina = rutina.nombre.toLowerCase();
      return nombreRutina.includes(busqueda.toLowerCase());
    });
    setRutinas(rutinasFiltradas);
  };
  
  return (
    <input
      type='text'
      placeholder='Buscar rutina...'
      value={busqueda}
      onChange={handleInputChange}
    />
  );
};


