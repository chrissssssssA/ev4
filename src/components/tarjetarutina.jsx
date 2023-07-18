import React from 'react';
import Card from 'react-bootstrap/Card';

export const TarjetaRutinas = React.forwardRef(
  ({ rutina, onSeleccionarRutina, rutinasCompletadas, marcarRutinaComoFavorita, desmarcarRutinaComoFavorita, esRutinaFavorita, onVerDetalles }, ref) => {
    const handleSeleccionarRutina = () => {
      onSeleccionarRutina(rutina);
    };

    const handleVerDetalles = () => {
      onVerDetalles(rutina);
    };

    const handleMarcarRutinaComoFavorita = () => {
      marcarRutinaComoFavorita(rutina);
    };

    const handleDesmarcarRutinaComoFavorita = () => {
      desmarcarRutinaComoFavorita(rutina);
    };

    const reset = () => {
      if (ref && ref.current) {
        ref.current.reset();
      }
    };

    return (
      <Card>
        <Card.Img variant="top" src={rutina.imagen} />
        <Card.Body>
          <Card.Title>{rutina.nombre}</Card.Title>
          <Card.Text>{rutina.descripcion}</Card.Text>
          <Card.Text>Duración: {rutina.duracion}</Card.Text>
          <Card.Text>Ejercicios: {rutina.ejercicios.join(', ')}</Card.Text>
          <Card.Text>Repeticiones: {rutina.repeticiones}</Card.Text>
          <Card.Text>Series: {rutina.series}</Card.Text>
          <Card.Text>Descanso: {rutina.descanso}</Card.Text>
          <input
            type="checkbox"
            checked={rutinasCompletadas[rutina.id] || false}
            onChange={handleSeleccionarRutina}
          />
          {esRutinaFavorita(rutina) ? (
            <button onClick={handleDesmarcarRutinaComoFavorita}>Quitar de favoritos</button>
          ) : (
            <button onClick={handleMarcarRutinaComoFavorita}>Marcar como favorita</button>
          )}
          <button onClick={handleVerDetalles}>Ver detalles</button>
          <button onClick={reset}>Reset</button>
        </Card.Body>
      </Card>
    );
  }
);

