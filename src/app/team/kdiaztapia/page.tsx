"use client";

import "@/components/bannerBg.css";
import {
  Container,
  Title,
  Text,
  Button,
  Anchor,
  Box,
  Paper,
  Group,
  Avatar,
  Grid,
  SimpleGrid,
  Divider,
  Stack,
  ActionIcon,
  CopyButton,
  Tooltip
} from "@mantine/core";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { InfoContacto } from "@/components/kdiaztapia/InfoContacto";
import { DirectsAccess } from "@/components/kdiaztapia/DirectsAccess"; 
import ProjectCarousel from "@/components/ProjectCarousel";
import { IconBrandWhatsapp, IconCheck, IconCopy, IconMail, IconPhone } from "@tabler/icons-react";

export default function kDiazTapiaPage() {
type FeatureCard = { title: string; text: string; img: string };

const features = [
  {
    title: "Servicio1",
    text: "descripción.",
    img: "/participaciones/img1.webp",
  },
  {
    title: "Servicio2",
    text: "descripción.",
    img: "/participaciones/img2.webp",
  },
  {
    title: "Servicio3",
    text: "descripción.",
    img: "/participaciones/img3.webp",
  },
  {
    title: "Servicio4",
    text: "descripción.",
    img: "/participaciones/img4.webp",
  },
] satisfies FeatureCard[];

  return (
    <>
      {/* Skip link para accesibilidad */}
      <Anchor href="#content" style={{ position: "absolute", left: -9999 }}>
        Saltar al contenido
      </Anchor>

      {/* Header pegajoso con navegación por anclas */}
<Box
  component="header"
  display={{ base: "none", md: "block" }}   // <-- oculta en móvil y tablets chicas
  style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(8px)",
           background: "rgba(20,26,32,0.6)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
>

        <Container size="lg" py="sm">
          <Group justify="space-between" wrap="nowrap">
            <Anchor href="#hero" c="white" fw={700} underline="never">
              Katherinne Diaz Tapia
            </Anchor>
            <Group gap="md" visibleFrom="sm">
              <Anchor href="#participaciones" c="gray.2" underline="never">
                Servicios
              </Anchor>
              <Anchor href="#contacto" c="gray.2" underline="never">
                Contacto
              </Anchor>
            </Group>
          </Group>
        </Container>
      </Box>
      {/* Hero / Banner animado */}
      <Box
        id="hero"
        className="banner-wrapper"
        aria-label="Banner de presentación"
      >
        <Box className="animated-background">
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />

          <Container size="lg" py={{ base: 24, sm: 40 }}>
            <Grid columns={12} align="center">
              {/* Columna 1: avatar + resumen */}
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    src="/foto-perfil.webp"
                    alt="Foto de Katherine Diaz Tapia"
                    radius={80}
                    size={150}
                    styles={{
                      root: {
                        border: "3px solid rgba(97, 97, 97, 0.9)",
                        boxShadow: "0 18px 36px rgba(0, 0, 0, 0.45)",
                      },
                    }}
                  />
                </Box>
                <Title
                  order={1}
                  c="white"
                  ta="center"
                  mt="sm"
                  lh={1.1}
                  fz={{ base: 28, sm: 34 }}
                >
                  Katherinne Diaz Tapia
                </Title>
                <Text
                  c="teal.2"
                  ta="center"
                  mt={4}
                  fz={{ base: "sm", sm: "md" }}
                >
                  Descripción.
                </Text>
                <Group justify="center" mt="md">
                  <Button
                    component="a"
                    href="#contacto"
                    variant="white"
                    size="sm"
                  >
                    Hablemos
                  </Button>
                  <Button
                    component="a"
                    href="#participaciones"
                    variant="default"
                    size="sm"
                  >
                    Ver proyectos
                  </Button>
                </Group>
              </Grid.Col>

              {/* Columna 2: accesos directos */}
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Box role="navigation" aria-label="Accesos directos">
                  {DirectsAccess()}
                </Box>
              </Grid.Col>

              {/* Columna 3: contacto compacto */}
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Box id="contacto-resumen">{InfoContacto()}</Box>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* CONTENIDO */}
      <Container id="content" size={"95%"} py="xl">
        {/* Participaciones */}
        <section id="participaciones" aria-label="Participaciones">
  <Title
    order={2}
    c="gray.0"
    fw={800}
    lh={1.1}
    style={{ textShadow: "0 2px 6px rgba(0,0,0,.35)", position: "relative", display: "inline-block" }}
  >
    Servicios
    <span style={{
      position: "absolute", left: 0, bottom: -6, width: "42%", height: 3,
      background: "#00bfa5", borderRadius: 2, opacity: 0.9
    }} />
  </Title>

      {/* 2) Render en el grid */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md" mt="md">
        {features.map(({ title, text, img }) => (
          <Paper
            key={title}
            p="lg"
            radius="md"
            style={{
              position: "relative",
              minHeight: 180,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "var(--mantine-color-dark-6)", // fallback
              borderColor: "rgba(255,255,255,0.12)",
              overflow: "hidden",
            }}
            aria-label={title}
          >
            {/* overlay para contraste */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.55) 70%)",
              }}
            />

            {/* contenido por encima */}
            <div style={{ position: "relative" }}>
              <Title order={4} c="gray.0">
                {title}
              </Title>
              <Text c="gray.1" fz="sm" mt={4}>
                {text}
              </Text>
            </div>
          </Paper>
        ))}
      </SimpleGrid>
        </section>

        <Divider my="xl" variant="dashed" />

{/* carrousel plantilla*/}
<ProjectCarousel
  id="carrousel"
  title="Carrusel1"
  description="Descripción."
  items={[
    { image: "/carrousel1/img1.webp", title: "titulo1", category: "categoria" },
    { image: "/carrousel1/img2.webp", title: "titulo2", category: "categoria" },
    { image: "/carrousel1/img3.webp", title: "titulo3", category: "categoria" }
  ]}
/>

        <Divider my="xl" variant="dashed" />

        
{/* Contacto */}
<section id="contacto" aria-label="Contacto">
  <Title
    order={2}
    c="gray.0"
    fw={800}
    lh={1.1}
    style={{ textShadow: "0 2px 6px rgba(0,0,0,.35)", position: "relative", display: "inline-block" }}
  >
    Contacto
    <span style={{
      position: "absolute", left: 0, bottom: -6, width: "42%", height: 3,
      background: "#00bfa5", borderRadius: 2, opacity: 0.9
    }} />
  </Title>

  <Text c="gray.3" mt="xs">
    ¿Tienes un proyecto o idea? Conversemos.
  </Text>

  <Paper
    mt="md"
    p={{ base: "md", sm: "lg" }}
    radius="md"
    withBorder
    // Fondo sutil + blur, ancho contenido
    bg="rgba(255,255,255,0.04)"
    style={{
      backdropFilter: "blur(6px)",
      borderColor: "rgba(255,255,255,0.12)",
      maxWidth: 680,
      width: "100%",
      marginInline: "auto",
    }}
  >
    <Stack gap="md">
      {/* Row: Email */}
      <Group justify="space-between" wrap="nowrap" align="center">
        <Group gap="sm" wrap="nowrap" align="center">
          <ActionIcon variant="filled" color="teal" radius="md" size={34} aria-label="Email">
            <IconMail size={18} />
          </ActionIcon>
          <div>
            <Text c="gray.4" fz="xs" fw={700} tt="uppercase" lts={0.5}>
              Email
            </Text>
            <Anchor href="mailto:marcelo.urra.s@gmail.com" c="teal.2" fw={600}>
              mail@mail.com
            </Anchor>
          </div>
        </Group>

        <CopyButton value="mmail@mail.com" timeout={1500}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? "Copiado" : "Copiar"} withArrow>
              <ActionIcon onClick={copy} variant="subtle" aria-label="Copiar email">
                {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>

      <Divider variant="dashed" opacity={0.35} />
{/* Row: Teléfono */}
<Group justify="space-between" wrap="nowrap" align="center">
  <Group gap="sm" wrap="nowrap" align="center" style={{ flex: 1 }}>
    <ActionIcon variant="filled" color="teal" radius="md" size={34} aria-label="Teléfono">
      <IconPhone size={18} />
    </ActionIcon>

    <div style={{ flex: 1 }}>
      <Text c="gray.4" fz="xs" fw={700} tt="uppercase" lts={0.5}>
        Teléfono
      </Text>
      <Anchor href="tel:+569" c="teal.2" fw={600}>
        +56 9 
      </Anchor>
    </div>
  </Group>

  {/* Acciones: SIEMPRE icono de copiar; WhatsApp solo en desktop */}
  <Group gap="xs" wrap="nowrap">
    <CopyButton value="+569" timeout={1500}>
      {({ copied, copy }) => (
        <ActionIcon onClick={copy} variant="subtle" aria-label="Copiar teléfono">
          {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
        </ActionIcon>
      )}
    </CopyButton>

    <Button
      component="a"
      href="https://wa.me/569"
      size="xs"
      variant="default"
      leftSection={<IconBrandWhatsapp size={16} />}
      visibleFrom="sm"
      rel="noopener noreferrer"
      target="_blank"
    >
      WhatsApp
    </Button>
  </Group>
</Group>

{/* Móvil: solo WhatsApp full width (el icono de copiar ya está arriba) */}
<Button
  component="a"
  href="https://wa.me/569"
  size="sm"
  variant="default"
  leftSection={<IconBrandWhatsapp size={16} />}
  fullWidth
  hiddenFrom="sm"
  rel="noopener noreferrer"
  target="_blank"
>
  WhatsApp
</Button>
    </Stack>
  </Paper>
</section>
      </Container>

      {/* Footer simple */}
      <Box
        component="footer"
        mt="xl"
        py="lg"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <Container size="lg">
          <Text c="gray.5" fz="sm">
            © {new Date().getFullYear()} Katherine Diaz Tapia — Acredia
          </Text>
        </Container>
      </Box>

      {/* CSS mínimo específico de esta página para scroll suave */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
        :root {
          --header-h: 64px;
        }
        /* sm por defecto en Mantine = 48em (~768px) */
        @media (max-width: 48em) {
          :root {
            --header-h: 0px;
          }
        }

        section[id],
        #hero {
          scroll-margin-top: calc(var(--header-h) + 12px);
        }
      `}</style>
    </>
  );
}
