import React, { useEffect } from 'react'

export default function CategorieButton({item,categoria,setCategoria}) {
  useEffect(() => {
    console.log(categoria)
    console.log(item!==categoria)
  }, [categoria])
  
  return (
    <button 
    className={item!==categoria?'flex justify-center items-center px-2 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200':'flex justify-center items-center px-2 rounded-md bg-black text-white'}
    onClick={()=>setCategoria(item)}
    >
    {item}
    </button>
  )
}
