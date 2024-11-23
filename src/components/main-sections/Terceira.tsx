import React from 'react'
import Image from 'next/image'

export default function Terceira() {
  return (
    <div className='h-screen flex flex-col gap-4 items-center justify-center bg-white'>
        <h1 className='text-[#212529] font-[Abel] text-5xl text-[2.5vw]'>Por que escolher a energia solar?</h1>
        <div className='bg-[#F4F4F4] flex justify-center py-2'>
            <div className='flex justify-between items-center w-10/12'>
                <div className='w-1/4'>
                    <Image src={'/img/Frame1.png'} alt={'teto com painéis solares'} width={1051} height={698}/>
                </div>
                <div className='w-3/5'>
                    <ul className='list-disc text-3xl text-[1.5vw] font-[Abel] text-[#424649]'>
                        <li>Com o uso dos aparelhos de alto consumo em uma casa padrão, uma conta de energia convencional pode facilmente alcançar R$ 500 a R$ 600 por mês. Com um sistema solar de 5 kW, você pode praticamente eliminar essa conta, reduzindo seus gastos mensais com energia para perto de zero.
                            <ul className='list-disc pl-8'>
                                <li>Economia Anual: R$ 6.000 a R$ 7.200</li>
                                <li>Economia em 10 anos: R$ 60.000 a R$ 72.000</li>
                            </ul>
                        </li>
                        <li>Sustentabilidade: Ao optar pela energia solar, você contribui para a redução da emissão de gases poluentes e ajuda na preservação do planeta.</li>
                        <li>Tecnologia acessível: A energia solar é mais acessível do que nunca. Com incentivos fiscais e financiamentos, a instalação de painéis solares se tornou viável para muitos brasileiros.</li>
                        <li>Durabilidade e baixo custo de manutenção: Os sistemas solares têm uma vida útil de mais de 25 anos e requerem pouca manutenção.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
