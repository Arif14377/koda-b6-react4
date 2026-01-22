import logo from '../assets/img/logo.png'

function Home() {
    return (
        <Navbar />
    )
}

function Navbar() {
  return(
    <div className="flex justify-between p-10">
      <img src={logo} alt="logo" />
      <div className='flex items-center'>
        <ul className="flex items-center gap-6">
          <li><a Link to="/">Home</a></li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}



export default Home