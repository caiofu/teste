import Link from "next/link"

type Time = {
  datetime: string
}

async function getTime(): Promise<Time> 
{
  const res = await fetch('http://www.worldtimeapi.org/api/timezone/America/Sao_Paulo', {next: {revalidate: 25}})
  return  res.json()
}
export default async function Exemplo1() 
{
  const [time] = await Promise.all([getTime()])
    // Converte a string de data em um objeto Date
    const dateTime = new Date(time.datetime);
    //Formata a data e hora usando as opções de localização do Brasil
    let dataHoraFormatada = dateTime.toLocaleString('pt-BR');
    dataHoraFormatada = dataHoraFormatada.replace(/,/g, ' |');
  
  return (
   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection:'column' }}>
      <p className="titulo">Exemplo sem validate</p>
    <div>
      <p className="horaP">{dataHoraFormatada}</p>
    </div>
    <div className="divLink" style={{ }} >
        <Link className="link" href="/">Voltar</Link>
      </div>
   </div>
  )
}
