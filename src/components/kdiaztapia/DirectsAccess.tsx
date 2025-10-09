import { ActionIcon, Button, Grid, Stack, Tooltip } from "@mantine/core";
import { IconWorldWww, IconBrandLinkedin, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
export function DirectsAccess() {
  return (
    <Stack gap="xl" mt="sm">
      <Grid columns={12} align="center" w={"100%"}>
        <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip label="LinkedIn">
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/katherinne-diaz-tapia-628334303/"
              target="_blank"
              size={80}
              color="teal.2"
              variant="subtle"
              radius="md"
            >
              <IconBrandLinkedin size={70} />
            </ActionIcon>
          </Tooltip>
        </Grid.Col>
        <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip label="Web">
            <ActionIcon
              component="a"
              href="https://www.acredia.cl"
              target="_blank"
              size={80}
              color="teal.2"
              variant="subtle"
              radius="md"
            >
              <IconWorldWww size={70} />
            </ActionIcon>
          </Tooltip>
        </Grid.Col>
      </Grid>
            <Grid columns={12} align="center" w={"100%"}>
        <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip label="Whatsapp">
            <ActionIcon
              component="a"
              href="https://wa.me/+569"
              target="_blank"
              size={80}
              color="teal.2"
              variant="subtle"
              radius="md"
            >
              <IconBrandWhatsapp size={70} />
            </ActionIcon>
          </Tooltip>
        </Grid.Col>
        <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip label="Mail">
            <ActionIcon
              component="a"
              href="mailto:mail@mail.com"
              target="_blank"
              size={80}
              color="teal.2"
              variant="subtle"
              radius="md"
            >
              <IconMail size={70} />
            </ActionIcon>
          </Tooltip>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
