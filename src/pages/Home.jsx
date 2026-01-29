import logo from '../assets/img/logo.png'
import star from '../assets/img/star.png'
import { Link } from 'react-router-dom'

const Home = function() {
    return (
        <div className=''>
            <Navbar />
            <Header />
            <AboutUsHome />
            <PopularFood />
        </div>
    )
}

export function Navbar() {
  return(
    <div className="flex justify-between py-5 px-10 bg-yellow-300">
      <img src={logo} alt="logo" />
      <div className='flex items-center'>
        <ul className="flex items-center gap-10 font-medium">
          <li><a href="/">Home</a></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

function Header() {
    return (
        <div className='flex justify-between gap-5 pt-20 px-10'>
            <div>
                <div className='flex items-center gap-2'>
                    <hr className='w-2' />
                    <p>Resdaurent</p>
                </div>
                <h1 className='w-120'>We Serve Delicious <span className='text-yellow-400'>Food</span></h1>
                <p className='w-120 pb-5'>Keep heady when if you are go the infeastion rejistung fitems. Made donts are impressive intapoistiod while guiffine for</p>
                <a href="#" className='bg-yellow-400 w-fit px-6 py-3 rounded-sm'>Get Started</a>
            </div>
            <div>
                <img src="https://placehold.co/500x400" alt="" />
            </div>
        </div>
    )
}

function AboutUsHome() {
    return (
        <div className='flex gap-10 pt-20 px-10'>
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

function PopularFood() {
    return (
        <div className='flex flex-col pt-20 px-10 gap-6'>
            <h2 className='self-center'>Most Popular <span className='text-yellow-400'>Food</span></h2>
            <div className='flex justify-evenly'>
                <div className='rounded-md shadow-md pb-2'>
                    <img className='rounded-t-md' src="https://placehold.co/250x250" alt="" />
                    <div className='flex justify-between items-center mt-2 px-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-lg font-medium'>Breakfast Food</p>
                            <div className='flex gap-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                        <div className='flex align-center'>
                            <a href="" className='h-fit bg-yellow-400 py-3 px-6 rounded-sm font-small'>Buy</a>
                        </div>
                    </div>
                </div>
                <div className='rounded-md shadow-md pb-2'>
                    <img className='rounded-t-md' src="https://placehold.co/250x250" alt="" />
                    <div className='flex justify-between items-center mt-2 px-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-lg font-medium'>Breakfast Food</p>
                            <div className='flex gap-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                        <div className='flex align-center'>
                            <a href="" className='h-fit bg-yellow-400 py-3 px-6 rounded-sm font-small'>Buy</a>
                        </div>
                    </div>
                </div>
                <div className='rounded-md shadow-md pb-2'>
                    <img className='rounded-t-md' src="https://placehold.co/250x250" alt="" />
                    <div className='flex justify-between items-center mt-2 px-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-lg font-medium'>Breakfast Food</p>
                            <div className='flex gap-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                        <div className='flex align-center'>
                            <a href="" className='h-fit bg-yellow-400 py-3 px-6 rounded-sm font-small'>Buy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='rounded-full padding'></div>
            </div>
        </div>
    )
}



export default Home