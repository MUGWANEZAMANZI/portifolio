
import './App.css'

function App() {

  return (
    <div className='flex md:flex-row flex-col justify-center items-center h-screen'>
      <div className='w-1/2 flex justify-center'>
       <img src={"manzi.jpg"} alt="logo" className='w-1/2 rounded-full' />
      </div>
      <div className="w-1/2 flex-auto" >
       <p>MUGWANEZA MANZI Audace 
        <br/>
        <small>Game Developer</small><br/>
        <small>SOC Analyst</small>
        <br/>
        I have worked at P1 games as a game developer<br/>
        I have worked at Trusterlabs as a SOC Analyst<br/>
       </p>
       <p className='my-12 border bg-slate-500'>Website under maintanaince</p>
      </div>
    
    </div>
  )
}

export default App
