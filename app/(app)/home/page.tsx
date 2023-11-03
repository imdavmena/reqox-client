'use client';

import { Card, Group, Text, Badge } from '@mantine/core';
import Logo from '@/images/LOGO_REQOX.png';
import Image from 'next/image';

export default function Home() {
   return (
      <div className='relative p-6 h-full bg-gray-50'>

         <Image width={200} src={Logo} alt='logo' className='border' style={{ marginTop: -50, marginBottom: -10, marginLeft: -30 }} />
         <Card style={{}} shadow="sm" padding="lg" radius="md" withBorder className='my-4'>
            <Card.Section component="a" href="https://mantine.dev/">
               {/* <Image
                  src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  height={160}
                  alt="Norway"
               /> */}
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
               <Text weight={500}>Tareas Restantes de Hoy</Text>
               <Badge color="indigo" variant="light">
                  5 tareas restantes
               </Badge>
            </Group>
            <Text size="sm" color="dimmed">
               Esta es la cantidad de tareas restantes que puedes hacer por el día de hoy
            </Text>
            {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md">
               Book classic tour now
            </Button> */}
         </Card>
         <Card shadow="sm" padding="lg" radius="md" withBorder className='my-4'>
            <Card.Section component="a" href="https://mantine.dev/">
               {/* <Image
                  src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  height={160}
                  alt="Norway"
               /> */}
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
               <Text weight={500}>Vigencia de Mi Paquete</Text>
               <Badge color="pink" variant="light">
                  30 dias de vigencia
               </Badge>
            </Group>
            <Text size="sm" color="dimmed">
               Este es el tiempo que tienes de vigencia para tu paquete actual
            </Text>
            {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md">
               Book classic tour now
            </Button> */}
         </Card>
         <Card shadow="sm" radius="md" withBorder className='my-4'>
            <Card.Section component="a" href="https://mantine.dev/">
               {/* <Image
                  src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  height={160}
                  alt="Norway"
               /> */}
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
               <Text weight={500}>Ganacias</Text> <br />
               <Badge color="lime" variant="light">
                  $1 es ganancia por cada video
               </Badge>
               <Badge color="green" variant="light">
                  $5 es tu ganancia de hoy
               </Badge>
               <Badge color="grape" variant="light">
                  $1,205 es tu total de ganancias
               </Badge>

            </Group>
            {/* <Text size="sm" color="dimmed">
               Este es el tiempo que tienes de vigencia para tu paquete actual
            </Text> */}
            {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md">
               Book classic tour now
            </Button> */}
         </Card>
      </div >
   )
}