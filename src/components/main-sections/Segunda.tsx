import Image from 'next/image'
import React from 'react'

export default function Segunda() {
  return (
    <div className='bg-white flex justify-center h-screen' id='sobre'>
        <div className='flex flex-col justify-center items-center w-[73%] gap-8'>
            <h1 className='segunda-tela text-[#212529] text-4xl text-left w-full'>Energia Renovável</h1>
            <p className='segunda-tela text-[#424649] text-[1.4rem]'>A energia verde é aquela proveniente de fontes naturais e renováveis, como o sol, o vento, a água e a biomassa. Ao contrário das fontes de energia tradicionais, como o petróleo, carvão e gás natural, que emitem grandes quantidades de poluentes e contribuem para as mudanças climáticas, a energia verde é limpa, sustentável e praticamente inesgotável.</p>
            <div className='flex w-full justify-between'>
                <Image className='rounded-xl transition-all ease hover:scale-105 w-[23%] h-full' src='/img/Frame11.png' alt='Energia eólica' width={323} height={361}></Image>
                <Image className='rounded-xl transition-all ease hover:scale-105 w-[23%] h-full' src='/img/Frame12.png' alt='luzes led' width={323} height={361}></Image>
                <Image className='rounded-xl transition-all ease hover:scale-105 w-[23%] h-full' src='/img/Frame13.png' alt='placas solares' width={323} height={361}></Image>
                <Image className='rounded-xl transition-all ease hover:scale-105 w-[23%] h-full' src='/img/Frame14.png' alt='carro elétrico' width={323} height={361}></Image>
            </div>
            <p className='segunda-tela text-[#424649] text-[1.4rem] w-1/2 self-end'>Essas fontes renováveis ajudam a reduzir a dependência de recursos fósseis, diminuindo a emissão de gases de efeito estufa e os impactos negativos no meio ambiente.</p>
        </div>
    </div>
  )
}
