import Link from "next/link"

export default  function Home() {

  return (
   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' , flexDirection:'column',}}>
  
    <div className="divLink">
      <Link className="link" href="exemplo2">EXEMPLO SEM VALIDATE</Link>
    </div>

    <div className="divLink">
      <Link className="link" href="exemplo1">EXEMPLO COM VALIDATE</Link>
    </div>
    
    <div className="divLink">
      <Link className="link" href="exemplo3">EXEMPLO SEM CACHE</Link>
    </div>
   </div>
  )
}
