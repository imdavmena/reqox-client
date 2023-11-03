'use client';
import { Title, Text, TextInput } from '@mantine/core'

export default function Referrals() {


   return (
      <div className='py-3 px-3'>
         <Title order={4}>REFERIDOS</Title>
         <Text className='mt-5'>
            Este es tu código de invitación
         </Text>
         <div className='bg-blue-400 p-4 rounded-md text-white font-semibold mt-1'>
            <Text className='text-center'>ASDC22132</Text>
         </div>
         <div className='mt-5'>
            {/* <Text>Introduce el código de la persona a la cual quieres referirte</Text> */}
            <TextInput label='Introduce un código de invitación' />
         </div>
      </div>
   )
}