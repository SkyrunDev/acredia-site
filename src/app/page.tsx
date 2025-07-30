'use client';

import { Carousel } from '@mantine/carousel';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Title, Paper } from '@mantine/core';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <Title order={2} mb="md">
        Bienvenido a Acredia
      </Title>

      <Carousel
        withIndicators
        height={300}
        slideGap="md"
        emblaOptions={{ 
          loop: true, 
          align: 'center'
        }}
      >
        <Carousel.Slide>
          <Paper shadow="md" radius="md" p="xl" style={{ backgroundColor: '#f0f0f0', height: '100%' }}>
            <Title order={3}>Diagnóstico y Evaluación de Cumplimiento</Title>
            <p>Evaluación inicial de la situación de la empresa frente a los requisitos exigidos por entidades como SICEP, ISO 9001, ISO 14001, ISO 45001, entre otros.</p>
          </Paper>
        </Carousel.Slide>

        <Carousel.Slide>
          <Paper shadow="md" radius="md" p="xl" style={{ backgroundColor: '#e0e0e0', height: '100%' }}>
            <Title order={3}>Implementación de Sistemas de Gestión</Title>
            <p>Asesoría para diseñar, documentar e implementar sistemas de gestión (calidad, medio ambiente, seguridad, etc.) conforme a normativas ISO u otros estándares exigidos por plataformas como SICEP.</p>
          </Paper>
        </Carousel.Slide>

        <Carousel.Slide>
          <Paper shadow="md" radius="md" p="xl" style={{ backgroundColor: '#d0d0d0', height: '100%' }}>
            <Title order={3}>Gestión de Acreditaciones y Postulación en Plataformas</Title>
            <p>Acompañamiento en la postulación, carga de documentación y mantenimiento de la acreditación en plataformas como SICEP, Achilles, RePro, entre otras.</p>
          </Paper>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
