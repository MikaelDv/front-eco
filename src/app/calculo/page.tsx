"use client";

import Header from '@/components/header/Header'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Calculo() {
  const [qtdAr, setQtdAr] = useState(0);
  const [qtdGeladeira, setQtdGeladeira] = useState(0);
  const [qtdMaquina, setQtdMaquina] = useState(0);
  const [qtdChuveiro, setQtdChuveiro] = useState(0);
  const [qtdMicro, setQtdMicro] = useState(0);

  const [potAr, setPotAr] = useState(0);
  const [potGeladeira, setPotGeladeira] = useState(0);
  const [potMaquina, setPotMaquina] = useState(0);
  const [potChuveiro, setPotChuveiro] = useState(0);
  const [potMicro, setPotMicro] = useState(0);

  const [horaAr, setHoraAr] = useState(0);
  const [horaGeladeira, setHoraGeladeira] = useState(0);
  const [horaMaquina, setHoraMaquina] = useState(0);
  const [horaChuveiro, setHoraChuveiro] = useState(0);
  const [horaMicro, setHoraMicro] = useState(0);

  const [respConsumo, setRespConsumo] = useState(0);
  const [respCusto, setRespCusto] = useState(0);
  const [respCustoInstalar, setRespCustoInstalar] = useState(0);
  const [respTempoRetorno, setRespTempoRetorno] = useState(0);

  const url = "http://localhost:8080/Java-Global/api/simulacao";

  const enviarDados = async () => {
    const data = [
      {
        idAparelho: 1,
        quantidade: qtdAr,
        potenciaCustomizada: potAr,
        tempoDeUso: horaAr,
      },
      {
        idAparelho: 2,
        quantidade: qtdGeladeira,
        potenciaCustomizada: potGeladeira,
        tempoDeUso: horaGeladeira,
      },
      {
        idAparelho: 3,
        quantidade: qtdMaquina,
        potenciaCustomizada: potMaquina,
        tempoDeUso: horaMaquina,
      },
      {
        idAparelho: 4,
        quantidade: qtdChuveiro,
        potenciaCustomizada: potChuveiro,
        tempoDeUso: horaChuveiro,
      },
      {
        idAparelho: 5, 
        quantidade: qtdMicro,
        potenciaCustomizada: potMicro,
        tempoDeUso: horaMicro,
      },
    ];

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados");
      }

      const result = await response.json();
      toast.success("Sucesso ao calcular!")

      setRespConsumo(result.consumoDiarioTotal);
      setRespCusto(result.custoMensal);
      setRespCustoInstalar(result.custoSolar);
      setRespTempoRetorno(result.tempoRetornoInvestimento);
    } catch (error) {
        console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div>
        <Header/>
        <div className='pt-[10vh]'>
          <div className='w-full h-[40vh] bg-[#212529] mt-[20vh] mb-[30vh] flex flex-col justify-center p-[10vh] text-white gap-[2vh]'>
            <h1 className='text-[6vh] font-[Abel]'>Cálculo</h1>
            <h2 className='text-[4vh] font-[Abel]'>Vamos estruturar a sua mudança em etapas!</h2>
          </div>
          <div className='flex flex-col items-center gap-[6vh]'>
            <div className='flex flex-col w-full px-36 gap-2'>
              <h2 className='text-[2vw] font-[Abel] font-semibold mb-[3vh]'>Informe a quantidade que possui em casa de cada um a seguir:</h2>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="arcondicionado-qtd">Ar-Condicionado</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="arcondicionado-qtd" min={0} max={100} step={1} value={qtdAr} onChange={(e) => setQtdAr(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="geladeira-qtd">Geladeira</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="geladeira-qtd" min={0} max={100} step={1} value={qtdGeladeira} onChange={(e) => setQtdGeladeira(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="maquina-lavar-qtd">Máquina Lava e Seca</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="maquina-lavar-qtd" min={0} max={100} step={1} value={qtdMaquina} onChange={(e) => setQtdMaquina(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="chuveiro-qtd">Chuveiro</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="chuveiro-qtd" min={0} max={100} step={1} value={qtdChuveiro} onChange={(e) => setQtdChuveiro(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="micro-forno-qtd">Micro-Ondas e Forno Elétrico</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="micro-forno-qtd" min={0} max={100} step={1} value={qtdMicro} onChange={(e) => setQtdMicro(Number(e.target.value))}/>
              </div>
            </div>

            <div className='w-10/12 h-[1px] bg-[#2125295d]'></div>

            <div className='flex flex-col w-full px-36 gap-2'>
              <h2 className='font-[Abel] font-semibold text-[2vw] mb-[3vh]'>Potência em Watts</h2>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="arcondicionado-pot">Ar-Condicionado</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="arcondicionado-pot" min={0} step={50} value={potAr} onChange={(e) => setPotAr(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="geladeira-pot">Geladeira</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="geladeira-pot" min={0} step={50} value={potGeladeira} onChange={(e) => setPotGeladeira(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="maquina-lavar-pot">Máquina Lava e Seca</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="maquina-lavar-pot" min={0} step={50} value={potMaquina} onChange={(e) => setPotMaquina(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="chuveiro-pot">Chuveiro</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="chuveiro-pot" min={0} step={50} value={potChuveiro} onChange={(e) => setPotChuveiro(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="micro-forno-pot">Micro-Ondas e Forno Elétrico</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="micro-forno-pot" min={0} step={50} value={potMicro} onChange={(e) => setPotMicro(Number(e.target.value))}/>
              </div>
            </div>

            <div className='w-10/12 h-[1px] bg-[#2125295d]'></div>


            <div className='flex flex-col w-full px-36 gap-2'>
              <h2 className='text-[2vw] font-[Abel] font-semibold mb-[3vh]'>Tempo de uso em Horas por Dia</h2>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="arcondicionado-hora">Ar-Condicionado</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="arcondicionado-hora" min={0} max={100} step={1} value={horaAr} onChange={(e) => setHoraAr(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="geladeira-hora">Geladeira</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="geladeira-hora" min={0} max={100} step={1} value={horaGeladeira} onChange={(e) => setHoraGeladeira(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="maquina-lavar-hora">Máquina Lava e Seca</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="maquina-lavar-hora" min={0} max={100} step={1} value={horaMaquina} onChange={(e) => setHoraMaquina(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="chuveiro-hora">Chuveiro</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="chuveiro-hora" min={0} max={100} step={1} value={horaChuveiro} onChange={(e) => setHoraChuveiro(Number(e.target.value))}/>
              </div>
              <div>
                <label className='label text-[1.2vw] font-[Abel]' htmlFor="micro-forno-hora">Micro-Ondas e Forno Elétrico</label>
                <input className='input font-[Abel] text-[1.2vw]' type="number" name="micro-forno-hora" min={0} max={100} step={1} value={horaMicro} onChange={(e) => setHoraMicro(Number(e.target.value))}/>
              </div>
            </div>

            <button className="font-[Abel] p-2 bg-white w-1/12 self-center text-[1vw] font-semibold cursor-pointer hover:scale-110 transition-all ease rounded-md" onClick={enviarDados}>Consultar</button>
          </div>

          <div className='font-[Abel] flex flex-col items-center w-full p-36 gap-2'>
            <h2 className='text-[1.8vw]'>Em média, o seu consumo diário de energia elétrica é de: {respConsumo}kWh.</h2>
            <h2 className='text-[1.8vw]'>Portanto, o valor mensal gasto com energia é de aproximadamente: R${respCusto}</h2>
            <h2 className='text-[1.5vw] text-[#2125299d] mt-2'>Agora com Energia Solar:</h2>
            <p className='text-[1.5vw] text-[#2125299d] w-2/4'>O custo de instalação de um sistema solar de {respConsumo}kW é cerca de R${respCustoInstalar}. O sistema se pagará em aproximadamente {respTempoRetorno} meses. Após esse período, toda a energia gerada é lucro direto.</p>
          </div>
        </div>
    </div>
  )
}
