'use client';

import { Title, Text, Avatar, Button, AspectRatio } from '@mantine/core';
import { MdAttachMoney } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function Video() {
   const [isPlaying, setIsPlaying] = useState(false);
   const [_, setCurrentTime] = useState([0, 0]); // current time of the video in array. The first value represents the minute and the second represents seconds.
   // const [currentTimeSec, setCurrentTimeSec] = useState(); //current time of the video in seconds
   const [duration, setDuration] = useState([0, 0]); // // total duration of the video in the array. The first value represents the minute and the second represents seconds.
   const [remain, setRemain] = useState([0, 0]);
   const [videoCompleted, setVideoCompleted] = useState(false);
   // const [durationSec, setDurationSec] = useState();

   const title = 'Super Carro 4';
   const link = '' // here you have to put a hosted video
   const videoRef: any = useRef(null);

   const sec2Min = (sec: number) => {
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      return {
         min: min,
         sec: secRemain,
      };
   };

   const handlePlay = () => {
      if (isPlaying) {
         videoRef.current.pause();
         setIsPlaying(false);
      } else {
         videoRef.current.play();
         setIsPlaying(true);
      }
   }

   const onCompleteVideo = () => {
      toast('Buen trabajo, ya completaste el video!', {
         icon: '👏',
      })
      setVideoCompleted(true);
   }

   useEffect(() => {
      const { min: durationMin, sec: durationSec } = sec2Min(videoRef.current.duration);
      // setDurationSec(videoRef.current.duration);
      setDuration([durationMin, durationSec]);

      // console.log({ duration: videoRef.current.duration });
      const interval = setInterval(() => {
         const { min: currentMin, sec: currentSec } = sec2Min(videoRef.current.currentTime);
         // setCurrentTimeSec(videoRef.current.currentTime);
         setCurrentTime([currentMin, currentSec]);
         setRemain([durationMin - currentMin, durationSec - currentSec]);
      }, 1000);

      return () => clearInterval(interval);
   }, [isPlaying]);

   // console.log({ remain: remain })
   return (
      <div className='relative'>
         <div>
            <AspectRatio ratio={16 / 9} mx="auto">
               <video className="w-full" ref={videoRef} onEnded={onCompleteVideo}>
                  <source src={link} type="video/webm" />
                  <source src={link} type="video/mp4" />
                  Tu dispositivo no soporta la reproducción de videos
               </video>
            </AspectRatio>
         </div>
         <div className='px-2 border h-full flex flex-col gap-2'>
            <div className='flex justify-between items-center mt-3'>
               <Title order={3} className=''>{title}</Title>
               {(isPlaying ? AiFillPauseCircle : AiFillPlayCircle)
                  ({ size: 40, className: 'cursor-pointer', onClick: handlePlay })}
            </div>
            <div className='flex justify-between'>
               <Text fw={400}>Comisión</Text>
               <Avatar color={'green'}>
                  <MdAttachMoney />
                  {'1'}
               </Avatar>
            </div>
            <div className='flex justify-between'>
               <Text fw={400}>Duración del Video</Text>
               <div className='flex gap-1 bg-[#E7F5FF] rounded-md px-2 py-1 items-center justify-center'>
                  <BiTimeFive className='' color='blue' />
                  <Text color={'blue'} className='font-bold'>
                     {`${duration[0]}m ${duration[1]}s`}
                  </Text>
               </div>
            </div>
            <div className='flex justify-between'>
               <Text fw={400}>Tiempo Restante de Visualización</Text>
               <div className='flex gap-1 bg-blue-300 rounded-md px-2 py-1 items-center justify-center'>
                  <BiTimeFive className='' color='blue' />
                  <Text color={'blue'} className='font-bold'>
                     {`${remain[0]}m ${remain[1]}s`}
                  </Text>
               </div>
            </div>

            {/* <div className="duration">
               {currentTime[0]}:{currentTime[1]} / {duration[0]}:{duration[1]}
            </div>
            <div>
               {JSON.stringify(remain)}
            </div> */}
            <Button disabled={!videoCompleted} fullWidth className='mt-4'>Siguiente Video</Button>
         </div>
      </div>
   )
}