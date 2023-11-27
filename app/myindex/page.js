'use client'
import Image from 'next/image'
import { RxHamburgerMenu, RxPerson } from "react-icons/rx";
import { FaMicrophone, FaPersonBooth, FaSearch } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from 'react';
import CategorieButton from '@/components/categorieButton';
import { IoIosNotificationsOutline } from "react-icons/io"
import { TbVideoPlus } from "react-icons/tb";
import VideoContainer from '@/components/VideoContainer';
export default function Home() {
  const menu=Array.from({length:100}, (x, i) => i);
  const [categoria, setCategoria] = useState("Home")
  const categoriasDeVideos = [
    "Home",
    "Acción",
    "Aventura",
    "Animación",
    "Biografía",
    "Comedia",
    "Crimen",
    "Documental",
    "Drama",
    "Familia",
    "Fantasía",
    "Historia",
    "Horror",
    "Música",
    "Misterio",
    "Romance",
    "SciFi",
    "Deportes",
    "Thriller",
    "Guerra",
    "Western"
];
const Videos=[
{
  image:"/img/Miniatura.png",
  duration:"10:00",
  name:"Titulo de prueba en el video",
  channel:"Channel01",
  views:"173K",
  age:"1 año",
  avatar:"/img/avatar.jpg"
},
{
  image:"/img/Miniatura2.jpg",
  duration:"10:00",
  name:"Titulo de prueba en el video",
  channel:"Channel01",
  views:"173K",
  age:"1 año",
  avatar:"/img/avatar.jpg"
},
{
  image:"/img/Miniatura3.jpg",
  duration:"10:00",
  name:"Titulo de prueba en el video",
  channel:"Channel01",
  views:"173K",
  age:"1 año",
  avatar:"/img/avatar.jpg"
},
{
  image:"/img/Miniatura3.jpg",
  duration:"10:00",
  name:"Titulo de prueba en el video",
  channel:"Channel01",
  views:"173K",
  age:"1 año",
  avatar:"/img/avatar.jpg"
},
{
  image:"/img/Miniatura3.jpg",
  duration:"10:00",
  name:"Titulo de prueba en el video",
  channel:"Channel01",
  views:"173K",
  age:"1 año",
  avatar:"/img/avatar.jpg"
},
{
  image:"/img/Miniatura3.jpg",
  duration:"10:00",
  name:"Titulo de prueba en el video",
  channel:"Channel01",
  views:"173K",
  age:"1 año",
  avatar:"/img/avatar.jpg"
},
  ]
  return (
    <div className='min-h-screen w-full bg-white'>
      <header className='w-full h-16 flex flex-row gap-4 justify-between'>
        <div className='w-3/12 flex gap-4 items-center mx-4'>
          <RxHamburgerMenu className='text-2xl font-extralight' />
          <Image src="/img/logo.png" width={100} height={150} alt="logo" />
        
        </div>
        <div className='w-6/12 gap-2 h-full flex justify-center items-center'>
          <div className='flex rounded-full w-9/12 border border-neutral-300'>
            <input className='bg-white shadow-inner shadow-black/10 w-11/12 rounded-l-full px-6 py-2 placeholder:text-neutral-500 placeholder:font-medium outline-none' placeholder='Buscar' ></input>
            <button className='bg-neutral-100 hover:bg-neutral-300 duration-100 flex justify-center items-center text-black rounded-r-full w-1/12'><TfiSearch/></button>
          </div>
          <button className='bg-neutral-100 hover:bg-neutral-300 duration-100 text-black flex justify-center items-center rounded-full w-9 h-9 my-2'><FaMicrophone/></button> 
        </div>
        <div className='w-3/12 flex justify-end items-center gap-6 px-4'>
          <TbVideoPlus className='text-2xl'/>
          <IoIosNotificationsOutline className='text-2xl'/>
          <div className='p-2 text-xl bg-blue-500 rounded-full'><IoPersonSharp/></div>
        </div>
      </header>
      <div className='flex flex-row w-full justify-between gap-2'>
        <div className='flex flex-col max-h-[90vh] w-2/12 overflow-y-hidden hover:overflow-y-auto duration-100'>
          {menu.map((item)=>(
            <div className='w-full flex px-2 py-4' key={item}>{item}</div>
          ))}
        </div>
        <div className='flex flex-col w-10/12 gap-4'>
            <div className='flex flex-row gap-6 overflow-x-hidden hover:overflow-x-scroll'>
              {categoriasDeVideos.map((item)=>(
                <CategorieButton item={item} key={"Cat"+item}categoria={categoria} setCategoria={setCategoria}/>
              ))}
            </div>
            <div className='flex flex-row flex-wrap w-full justify-center gap-3'>
                {Videos.map((item)=>(<VideoContainer image={item.image} duration={item.duration} name={item.name} channel={item.channel} views={item.views} age={item.age} avatar={item.avatar} />))}
            </div>
        </div>
      </div>
    </div>
  )
}
