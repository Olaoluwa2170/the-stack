import logo from "../assets/Images/logo.jpeg"
import home from "../assets/Images/home.svg"
import about from "../assets/Images/about.svg"
import product from "../assets/images/product-service-campaign-item.svg"
import social from "../assets/images/certification-diploma-proof.svg"
import { Link } from "react-scroll"

const NavBar = () =>{
    return (
        // Navbar
        <div className="h-16 w-full bg-gradient-to-br from-teal-800 via-teal-500 to-teal-200">

            <div className="flex justify-between ">
                {/* Logo */}
                <div className="mt-2 ml-3">
                    <img src={logo} className="w-12" alt="" />
                </div>

                {/* menu for mobile */}
                <div>
                    <ul className="flex md:hidden gap-10 items-center h-full mr-10 mt-1">
                        <li className="w-6 cursor-pointer"><Link  to="home" smooth={true} duration={500} ><img src={home} alt="home" /> <span className="text-xs font-bold text-primary flex justify-center">home</span></Link></li>
                        <li className="w-6 cursor-pointer"><Link to="about" smooth={true} duration={500}><img src={about} alt="about us" /> <span className="text-xs font-bold text-primary flex justify-center">about</span></Link></li>
                        <li className="w-6 cursor-pointer"><Link to="product" smooth={true} duration={500} ><img src={product} alt="product" /> <span className="text-xs font-bold text-primary flex justify-center"></span></Link></li>
                        <li className="w-6 cursor-pointer"><Link to="contact" smooth={true} duration={500} ><img src={social} alt="social proof" /> <span className="text-xs font-bold text-primary flex justify-center">proof</span></Link></li>
                        
                    </ul>
                </div>

                {/* menu for large screen */}
                <div className="md:block hidden mt-4 mr-5">
                    <ul className="flex gap-20 text-lg font-bold text-primary">
                        
                        <li className="cursor-pointer" >
                            <Link  to="home" smooth={true} duration={500} >
                                Home
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link to="about" smooth={true} duration={500}>
                                About Us
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link to="product" smooth={true} duration={500} >Products</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar