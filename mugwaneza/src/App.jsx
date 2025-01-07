
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
        I have worked at P1 games as a game developer: 
        <table border={1} className='table-auto border-collapse border border-gray-400 w-full'>
          <tr className='border' ><th>Game</th><th>Role</th><th>Link</th></tr>
          <tr className='border'><td>BugsVsBuniies</td><td>Level Designer</td><td><a href='https://nizitowns.itch.io/bugs-vs-bunnies-td'>BugsVsBunnies</a></td></tr>
          <tr className='border'><td>RunesVsRobots</td><td>Lead Game Designer</td><td><a href='https://nizitowns.itch.io/bugs-vs-bunnies-td'>RunesVsRobots</a></td></tr>
          <tr className='border'><td>Lecinse master</td><td>Team Leader/Designer</td><td><a href='https://mugwanezamanzi.itch.io/license-master'>License master</a></td></tr>  
          </table><br/>
        I have worked at Trusterlabs as a SOC Analyst<br/>
       </p>
       <p className='my-12 border bg-slate-500'>Website under maintanaince</p>
      </div>
    
    </div>
  )
}

export default App
