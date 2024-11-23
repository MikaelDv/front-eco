import Header from '@/components/header/Header'
import Image from 'next/image'
import React from 'react'

export default function Equipe() {
  return (
    <div>
        <Header/>
        <div className='pt-[10vh] font-[Abel] text-white flex items-center h-screen'>
            <div className='w-screen bg-[#212529] flex flex-col gap-6 items-center p-[2vw]'>
                <div>
                    <h1 className='font-bold text-[2vw]'>Sobre</h1>
                    <p className='text-[1.2vw] text-gray-200'>Conheça mais sobre os alunos da FIAP, turma 1TDSPM responsáveis por esse site.</p>
                </div>
                <div className='flex w-1/2 gap-[2vw]  text-gray-200'>
                    <div className='flex flex-col gap-1 p-[1vw] border-2 border-gray-200 rounded-2xl'>
                        <Image className="rounded-xl" src={'/img/CardMurilo.png'} alt={'imagem desenvolvedor'} width={299} height={299}/>
                        <h1>Murilo Capristo</h1>
                        <h1>RM - 556794</h1>
                    </div>
                    <div className='flex flex-col gap-1 p-[1vw] border-2 border-gray-200 rounded-2xl'>
                        <Image className="rounded-xl" src={'/img/CardMikael.png'} alt={'imagem desenvolvedor'} width={299} height={299}/>
                        <h1>Enzo Mikael Sanches</h1>
                        <h1>RM - 558887</h1>
                    </div>
                    <div className='flex flex-col gap-1 p-[1vw] border-2 border-gray-200 rounded-2xl'>
                        <Image className="rounded-xl" src={'/img/CardPaula.png'} alt={'imagem desenvolvedor'} width={299} height={299}/>
                        <h1>Paula Blesa</h1>
                        <h1>RM - 558277</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
