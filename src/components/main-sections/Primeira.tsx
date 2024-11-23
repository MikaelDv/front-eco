import Link from 'next/link'
import React from 'react'

export default function Primeira() {
  return (
    <div className='flex'>
        <div className="w-1/2 bg-gray-400 h-screen flex items-center justify-center">
            <div className="w-[600px] text-left mt-16">
                <h1 className="titulo-energia text-white">Transforme Sua Energia.<br/>Transforme o Mundo</h1>
                <h3 className="titulo-energia subtitulo-energia max-w-lg text-[#212529]">Faça o Cálculo de quanto você gastaria para migrar para a energia solar.</h3>
                <Link href={'/calculo'} ><button className="mt-16 text-2xl font-medium px-10 py-4 rounded-full bg-white border-white border-[3px] text-[#212529] hover:bg-transparent hover:text-white transition-all ease-in-out">Calcular</button></Link>
            </div>
            </div>
        <div className="image h-screen w-1/2 blur-[4px]"></div>
    </div>
  )
}
