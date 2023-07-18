import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
import { TarjetaRutinas } from './components/tarjetarutina';

SwiperCore.use([Navigation]);

export const CarouselCardSwiper = ({ rutinas, onSeleccionarRutina, rutinasCompletadas, onVerDetalles }) => {
  return (
    <Swiper slidesPerView={4} spaceBetween={10} navigation>
      {rutinas.map((rutina) => (
        <SwiperSlide key={rutina.id}>
          <TarjetaRutinas
            rutina={rutina}
            onSeleccionarRutina={onSeleccionarRutina}
            rutinasCompletadas={rutinasCompletadas}
            onVerDetalles={onVerDetalles}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

