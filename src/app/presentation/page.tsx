// src/app/presentation/page.tsx
'use client';

import { Container, Title, Text, Button, Stack} from '@mantine/core';

export default function PresentationPage() {
  return (
    <Container size="xs" py="xl">
      <Stack align="center" gap="md">
        <Title order={2}>Acredia</Title>
        <Text c="dimmed">Asesorías, Acreditación e Innovación</Text>
        <Text>Email: k.diaz@acredia.cl</Text>
        <Text>Teléfono: +56 9 1234 5678</Text>
        <Button component="a" href="/" variant="light">
          Ir al sitio completo
        </Button>
      </Stack>
    </Container>
  );
}
