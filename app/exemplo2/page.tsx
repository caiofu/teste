import Link from "next/link"

type Time = {
  datetime: string
}

async function getTime(): Promise<Time> {
  const res = await fetch('http://www.worldtimeapi.org/api/timezone/America/Sao_Paulo')

  return  res.json()
  
}
export default async function Exemplo1() {
  const [time] = await Promise.all([getTime()])
  // Converte a string de data em um objeto Date
  const dateTime = new Date(time.datetime);
 //Formata a data e hora usando as opções de localização do Brasil
  let dataHoraFormatada = dateTime.toLocaleString('pt-BR');
  dataHoraFormatada = dataHoraFormatada.replace(/,/g, ' |');
  const refreshPage = () => {
    window.location.reload();
  };

  return (
   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection:'column' }}>
  
    <div>
      <p className="horaP">{dataHoraFormatada}</p>

      
    </div>
    <div className="divLink" style={{ }} >
        <Link className="link" href="/">Voltar</Link>
   
      </div>
   </div>
  )
}