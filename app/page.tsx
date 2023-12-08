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
//https://onedrive.live.com/edit?id=903D34BE48F93BFC!sc1b982881e5c482a9046184c61d811d5&resid=903D34BE48F93BFC!sc1b982881e5c482a9046184c61d811d5&cid=903d34be48f93bfc&ithint=file%2Cpptx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy85MDNkMzRiZTQ4ZjkzYmZjL0VZaUN1Y0ZjSGlwSWtFWVlUR0hZRWRVQjM5YXZkQThDZkI5QkRLT1NJRHhacmc&migratedtospo=true&wdo=2