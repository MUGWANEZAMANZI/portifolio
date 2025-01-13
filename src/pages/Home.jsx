
const Home = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center h-screen'>
    <div className='w-1/2 flex justify-center'>
     <img src={"manzi1.png"} alt="logo" className='w-full object-cover' />
    </div>
    <div className="w-1/2 flex-auto" >
     <p>MUGWANEZA MANZI Audace 
      <br/>
      <small>Game Development</small> | <small>SOC Analyst</small>
      
      <br/><br/>
      
      <table border={1} className='table-auto border-collapse border border-gray-400 w-full'>
        <tr className='border' ><th>Game</th><th>Role</th><th>Link</th></tr>
        <tr className='border'><td>BugsVsBuniies</td><td>Level Designer</td><td className="text-blue-800"><a href='https://nizitowns.itch.io/bugs-vs-bunnies-td'>BugsVsBunnies</a></td></tr>
        <tr className='border'><td>RunesVsRobots</td><td>Lead Game Designer</td><td className="text-blue-800"><a href='https://nizitowns.itch.io/bugs-vs-bunnies-td'>RunesVsRobots</a></td></tr>
        <tr className='border'><td>Lecinse master</td><td>Team Leader/Designer</td><td className="text-blue-800"><a href='https://mugwanezamanzi.itch.io/license-master'>License master</a></td></tr>  
        </table><br/>
       <div>
          <img src="job.png" className="w-10"/><pre>P1 Games | Trusterlabs</pre> 
       </div>
     </p>
     <p className='my-12 border bg-slate-500'>Website under maintanaince</p>
    </div>
  
  </div>
  );
};

export default Home;