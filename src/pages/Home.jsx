import logo from '../assets/img/logo.png'

function Home() {
    return (
        <div className='px-10'>
            <Navbar />
            <Header />
            <AboutUsHome />
        </div>
    )
}

function Navbar() {
  return(
    <div className="flex justify-between py-10">
      <img src={logo} alt="logo" />
      <div className='flex items-center'>
        <ul className="flex items-center gap-6">
          <li><a href="/">Home</a></li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

function Header() {
    return (
        <div className='flex justify-between gap-5 pt-20'>
            <div>
                <div className='flex items-center gap-2'>
                    <hr className='w-2' />
                    <p>Resdaurent</p>
                </div>
                <h1 className='w-120'>We Serve Delicious <span className='text-yellow-400'>Food</span></h1>
                <p className='w-120 pb-5'>Keep heady when if you are go the infeastion rejistung fitems. Made donts are impressive intapoistiod while guiffine for</p>
                <a href="#" className='bg-yellow-400 w-fit px-6 py-3'>Get Started</a>
            </div>
            <div>
                <img src="https://placehold.co/500x400" alt="" />
            </div>
        </div>
    )
}

function AboutUsHome() {
    return (
        <div className='flex gap-10 pt-20'>
            <div>
                <img src="https://placehold.co/500x500" alt="" />
            </div>
            <div className='flex flex-col justify-evenly'>
                <h2>About <span className='text-yellow-400'>Us</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis quibusdam aspernatur repellat facere illo aliquid, iure aut voluptas cumque quas fuga eligendi ab maiores totam! Corporis est maxime eos!</p>
                <a href="#" className='py-2 px-5 w-fit border border-black rounded-full'>View</a>
            </div>
        </div>
    )
}



export default Home