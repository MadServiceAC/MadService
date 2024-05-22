
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>MadaLoka</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#courses">About</a></li>
                    <li><a href="#tutors">Service</a></li>
                    <li><a href="#partners">Shop</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="" className="tbl-biru">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
