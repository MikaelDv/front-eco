import React from 'react'
import Logo from '@/svg/Logo'
import Link from 'next/link'

interface HeaderProps {
  main?:boolean;
}

export default function Header({main}:HeaderProps) {
  return (
    <div className={`flex w-screen h-[10vh] items-center justify-between pl-12 pr-24 z-50 absolute`}>
        <div className='flex items-center gap-20'>
            <Logo width='6vh' height='6vh'/>
            <h1 className={`font-[500] text-4xl ${main?"text-white":"text-[#212529]"}`}>Eco Solaris</h1>
        </div>
        {main && (
        <ul className='flex items-center gap-14'>
            <Link href="#sobre"><li className='text-[#212529] text-xl transition-all ease-in-out hover:text-[#212529be]'>Sobre</li></Link>
            <Link href="#contato"><li className='text-[#212529] text-xl transition-all ease-in-out hover:text-[#212529be]'>Contato</li></Link>
            <Link href="/equipe"><li className='text-[#212529] text-xl transition-all ease-in-out hover:text-[#212529be]'>Equipe</li></Link>
            <Link href="/calculo" className='botao-calc px-8 py-4 rounded-full'><li className='text-[#212529] text-xl'>Cálculo</li></Link>
        </ul>)}
        {!main && (
          <ul className='flex items-center gap-14'>
            <Link href="/" className='botao-calc px-8 py-4 rounded-full bg-[#212529]'><li className='text-white text-xl'>Início</li></Link>
          </ul>
        )}
    </div>
  )
}
