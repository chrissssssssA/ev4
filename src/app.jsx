import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { DetalleEjercicio } from './components/cartasdetalles';
import { TarjetaRutinas } from './components/tarjetarutina';
import axios from 'axios';
import { BusquedaRutinas } from './components/BusquedaRutinas';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const App = forwardRef((props, ref) => {
  const [rutinas, setRutinas] = useState([]);
  const [rutinaSeleccionada, setRutinaSeleccionada] = useState(null);
  const [rutinasCompletadas, setRutinasCompletadas] = useState({});
  const [rutinasFavoritas, setRutinasFavoritas] = useState([]);

  useEffect(() => {
    const rutinasGuardadas = localStorage.getItem('rutinas');
    if (rutinasGuardadas) {
      setRutinas(JSON.parse(rutinasGuardadas));
    } else {
      const rutinasObtenidas = [
        {
          id: 1,
          nombre: 'Equilibrio y Estabilidad',
          descripcion: 'Esta rutina está diseñada para principiantes que desean mejorar su equilibrio y estabilidad .Los ejercicios son de baja dificultad y se centran en fortalecer los músculos estabilizadores y mejorar la coordinación.',
          duracion: '15 minutos',
          imagen: 'cardio.jpg',
          ejercicios: [
            '1 minuto de marcha en el lugar ',
             'levantando las rodillas al nivel de la cadera ',
              'Equilibrio en una pierna: Mantén el equilibrio sobre una pierna durante 30 segundos para cada pierna',
              ' Plank lateral: Realiza 3 series de 30 segundos de plank lateral para cada lado. ',
              'Sentadilla con salto lateral: Realiza 2 series de 10 repeticiones de sentadilla con salto lateral.'],
          descanso: ' 15 segundos entre cada ejercicio',
          nivel:'princiante'
          

          
        },{
            id: 2,
          nombre: 'Equilibrio y Estabilidad 2',
          descripcion: 'Esta rutina es adecuada para personas con un nivel intermedio de condición física que desean desafiar su equilibrio y estabilidad. Los ejercicios implican movimientos más avanzados y requieren mayor control corporal.',
          duracion: '30 minutos',
          imagen: 'cardio.jpg',
          ejercicios: [
            'Salto de caja',
            'Equilibrio en tabla de equilibrio',
            'Sentadilla unilateral con salto',
            'Equilibrio en posición de media luna'],
          descanso: ' 30 segundos entre cada ejercicio',
            nivel:'intermedio'
          },{
            id: 3,
          nombre: 'Equilibrio y Estabilidad 3',
          descripcion: 'Esta rutina está diseñada para personas con un nivel avanzado de condición física que desean poner a prueba su equilibrio y estabilidad al máximo. Los ejercicios son desafiantes y requieren un mayor control y fuerza en los músculos estabilizadores.',
          duracion: '45 minutos',
          imagen: 'cardio.jpg',
          ejercicios: [
            'Sentadilla pistol',
            'Equilibrio en bola suiza',
            'Plank con elevación de pierna',
            'Salto en una pierna sobre plataforma'],
          descanso: ' 45 segundos entre cada ejercicio',
          nivel:'avanzado'
            
          },{
            id: 4,
            nombre: 'Equilibrio y Estabilidad (Nivel Avanzado)',
            descripcion: 'Esta rutina es ideal para aquellos con un nivel avanzado de condición física que desean llevar su equilibrio y estabilidad al límite. Los ejercicios implican movimientos complejos y requieren un excelente control corporal y fuerza en los músculos estabilizadores.',
            duracion: '60 minutos',
            imagen: 'cardio.jpg',
            ejercicios: ['Salto en caja con giro', 'Equilibrio en posición de bailarina', 'Plank con apoyo de antebrazos y pies en bola suiza','Sentadilla búlgara con salto'],
            descanso: '1 min por ejercicio',
            nivel:'avanzado'
            
          },{
            id: 5,
            nombre: 'Equilibrio y Estabilidad',
            descripcion: 'Esta rutina está diseñada para principiantes que desean mejorar su equilibrio y estabilidad. Los ejercicios son de baja dificultad y se enfocan en desarrollar la conciencia corporal y la estabilidad básica.',
            duracion: '20 minutos',
            imagen: 'cardio.jpg',
            ejercicios: ['Marcha del talón a los dedos', ' Equilibrio en una pierna con los ojos cerrados', 'Plank frontal','Elevación de talones en una pierna'],
            descanso: '20 segundos',
            nivel:'princiante'
            
          },
          {
            id: 6,
            nombre: 'Cardio para principiantes',
            descripcion: 'Esta rutina está diseñada para principiantes que desean mejorar su resistencia cardiovascular y quemar calorías. Los ejercicios son de baja intensidad y enfocados en movimientos simples.',
            duracion: '20 minutos',
            imagen: 'cardio.jpg',
            ejercicios: ['Caminata rápida: Camina a paso rápido durante 5 minutos', ' Saltos de tijera: Realiza 3 series de 10 repeticiones.', 'Burpees modificados: Realiza 2 series de 8 repeticiones'],
            repeticiones:'2-3series',
            descanso: '30 segundos',
            nivel:'princiante'
            
          },{
            id: 7,
            nombre: 'Cardio de intensidad moderada',
            descripcion: 'Descripción: Esta rutina es ideal para aquellos que desean aumentar su resistencia cardiovascular y quemar calorías de manera efectiva. Los ejercicios son de intensidad moderada y se enfocan en movimientos que elevan la frecuencia cardíaca.',
            duracion: '30 minutos',
            imagen: 'cardio.jpg',
            ejercicios: ['Saltos de cuerda: Realiza 3 series de 1 minuto.','Burpees: Realiza 3 series de 10 repeticiones.','Correr en el lugar con rodillas altas: Realiza 2 series de 30 segundos.'],
            descanso: '30 - 60 segundos',
            repeticiones:'2-3 series',
            nivel:'intermedio'
            
          },{
            id: 8,
            nombre: 'Cardio de alta intensidad (HIIT)',
            descripcion: 'Descripción: Esta rutina de alta intensidad (HIIT) es perfecta para quienes buscan mejorar su resistencia cardiovascular y quemar calorías en poco tiempo. Los ejercicios se realizan a máxima intensidad durante intervalos cortos de tiempo.',
            duracion: '20 minutos',
            imagen: 'cardio.jpg',
            ejercicios: ['Burpees: Realiza 3 series de 10 repeticiones.', 'Mountain climbers: Realiza 3 series de 20 repeticiones','Saltos en cuclillas (jump squats): Realiza 3 series de 10 repeticiones.'],
            descanso: '15-30 segundos',
            repeticiones:'3 series',
            nivel:'avanzado'
            
          },{
            id: 9,
            nombre: 'Equilibrio y Estabilidad',
            descripcion: 'Esta rutina está diseñada para mejorar la resistencia cardiovascular y muscular. Los ejercicios son de intensidad moderada a alta y se realizan durante períodos más largos..',
            duracion: '45 minutos',
            imagen: 'cardio.jpg',
            ejercicios: ['Ciclismo: Realiza 30 minutos de ciclismo a un ritmo moderado.', 'Saltos de cuerda: Realiza 3 series de 1 minuto.','Correr en el lugar con rodillas altas: Realiza 3 series de 30 segundos.'],
            descanso: '30-60 segundos entre cada ejercicio',
            nivel:'avanzado',
            repeticiones:'2-3 series'
            
          },{
            id: 10,
            nombre: 'Cardio de alta intensidad y resistencia',
            descripcion: 'Esta rutina combina ejercicios de alta intensidad con intervalos de resistencia para un entrenamiento completo. Es ideal para quienes desean mejorar su resistencia cardiovascular y quemar calorías de manera eficiente.',
            duracion: '60 minutos',
            imagen: 'cardio.jpg',
            ejercicios: ['Burpees: Realiza 3 series de 10 repeticiones.', 'Sprints: Realiza 10 sprints de 100 metros cada uno.','Saltos en cuclillas (jump squats): Realiza 3 series de 10 repeticiones.'],
            descanso: '30-60 segundos entre cada ejercicio',
            repeticiones:'3 series',
            nivel:'avanzado'
            
          },
        // ... Otras rutinas
      ];

      setRutinas(rutinasObtenidas);
      localStorage.setItem('rutinas', JSON.stringify(rutinasObtenidas));
    }
  }, []);

  useEffect(() => {
    const rutinasCompletadasGuardadas = localStorage.getItem('rutinasCompletadas');
    if (rutinasCompletadasGuardadas) {
      setRutinasCompletadas(JSON.parse(rutinasCompletadasGuardadas));
    }
  }, []);

  const peticionGet = async () => {
    try {
      const response = await axios.get('/rutinasObtenidas');
      setRutinas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    peticionGet();
  }, []);

  const manejarSeleccionRutina = (rutina) => {
    setRutinaSeleccionada(rutina);

    setRutinasCompletadas((prevRutinasCompletadas) => ({
      ...prevRutinasCompletadas,
      [rutina.id]: !prevRutinasCompletadas[rutina.id],
    }));
  };

  const manejarLimpiarSeleccion = () => {
    setRutinaSeleccionada(null);
    setRutinas(JSON.parse(localStorage.getItem('rutinas')));
  };

  const guardarAvanceRutinas = () => {
    localStorage.setItem('rutinasCompletadas', JSON.stringify(rutinasCompletadas));
  };

  const manejarDetalles = (rutina) => {
    setRutinaSeleccionada(rutina);
  };

  const guardarRutinasFavoritas = (rutinasFavoritas) => {
    localStorage.setItem('rutinasFavoritas', JSON.stringify(rutinasFavoritas));
  };

  const cargarRutinasFavoritas = () => {
    const rutinasFavoritasGuardadas = localStorage.getItem('rutinasFavoritas');
    return rutinasFavoritasGuardadas ? JSON.parse(rutinasFavoritasGuardadas) : [];
  };

  const marcarRutinaComoFavorita = (rutina) => {
    const rutinasFavoritas = cargarRutinasFavoritas();
    rutinasFavoritas.push(rutina);
    guardarRutinasFavoritas(rutinasFavoritas);
  };

  const desmarcarRutinaComoFavorita = (rutina) => {
    const rutinasFavoritas = cargarRutinasFavoritas();
    const index = rutinasFavoritas.findIndex((favRutina) => favRutina.id === rutina.id);
    if (index !== -1) {
      rutinasFavoritas.splice(index, 1);
      guardarRutinasFavoritas(rutinasFavoritas);
    }
  };

  const esRutinaFavorita = (rutina) => {
    const rutinasFavoritas = cargarRutinasFavoritas();
    return rutinasFavoritas.some((favRutina) => favRutina.id === rutina.id);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  useImperativeHandle(ref, () => ({
    reset: () => {
      setRutinaSeleccionada(null);
      setRutinasCompletadas({});
    },
  }));

  return (
    <Container>
      <h1>Rutinas de Entrenamiento en Línea</h1>
      <Col className="col-lg-6">
        <Form>
          <BusquedaRutinas rutinas={rutinas} setRutinas={setRutinas} />
        </Form>
      </Col>
      <Row>
        <h1 className="display-5 mt-5">Cardio</h1>
      </Row>
      <Slider {...settings}>
        {rutinas.map((rutina) => (
          <div key={rutina.id}>
            <TarjetaRutinas
              ref={ref}
              rutina={rutina}
              onSeleccionarRutina={manejarSeleccionRutina}
              rutinasCompletadas={rutinasCompletadas}
              marcarRutinaComoFavorita={marcarRutinaComoFavorita}
              desmarcarRutinaComoFavorita={desmarcarRutinaComoFavorita}
              esRutinaFavorita={esRutinaFavorita}
              onVerDetalles={manejarDetalles}
            />
          </div>
        ))}
      </Slider>
      {rutinaSeleccionada ? (
        <DetalleEjercicio rutinas={rutinaSeleccionada} onVolverLista={manejarLimpiarSeleccion} />
      ) : (
        <p>Selecciona una rutina para ver los detalles.</p>
      )}
      <button onClick={guardarAvanceRutinas}>Guardar Avance</button>
      <Row>
        <h1 className="display-5">Equilibrio y Estabilidad</h1>
        <Slider {...settings}>
        {rutinas.map((rutina) => (
          <div key={rutina.id}>
            <TarjetaRutinas
              ref={ref}
              rutina={rutina}
              onSeleccionarRutina={manejarSeleccionRutina}
              rutinasCompletadas={rutinasCompletadas}
              marcarRutinaComoFavorita={marcarRutinaComoFavorita}
              desmarcarRutinaComoFavorita={desmarcarRutinaComoFavorita}
              esRutinaFavorita={esRutinaFavorita}
              onVerDetalles={manejarDetalles}
            />
          </div>
        ))}
      </Slider>
      {rutinaSeleccionada ? (
        <DetalleEjercicio rutinas={rutinaSeleccionada} onVolverLista={manejarLimpiarSeleccion} />
      ) : (
        <p>Selecciona una rutina para ver los detalles.</p>
      )}
      <button onClick={guardarAvanceRutinas}>Guardar Avance</button>
      </Row>
      
    </Container>
  );
});
