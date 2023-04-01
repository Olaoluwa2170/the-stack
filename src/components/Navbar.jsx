import logo from "../assets/Images/logo.jpeg"
import home from "../assets/Images/home.svg"
import about from "../assets/Images/about.svg"
import product from "../assets/images/product-service-campaign-item.svg"
import social from "../assets/images/certification-diploma-proof.svg"

const NavBar = () =>{
    return (
        // Navbar
        <div className="h-16 w-full bg-other">

            <div className="flex justify-between ">
                {/* Logo */}
                <div className="mt-2 ml-3">
                    <img src={logo} className="w-12" alt="" />
                </div>

                {/* menu for mobile */}
                <div>
                    <ul className="flex md:hidden gap-10 items-center h-full mr-10 mt-1">
                        <li className="w-6 cursor-pointer"><img src={home} alt="home" /> <span className="text-xs font-bold text-primary flex justify-center">home</span></li>
                        <li className="w-6 cursor-pointer"><img src={about} alt="about us" /> <span className="text-xs font-bold text-primary flex justify-center">about</span></li>
                        <li className="w-6 cursor-pointer"><img src={product} alt="product" /> <span className="text-xs font-bold text-primary flex justify-center">product</span></li>
                        <li className="w-6 cursor-pointer"><img src={social} alt="social proof" /> <span className="text-xs font-bold text-primary flex justify-center">proof</span></li>
                        
                    </ul>
                </div>

                {/* menu for large screen */}
                <div className="md:block hidden mt-4 mr-5">
                    <ul className="flex gap-5">
                        <li>
                            Home
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Products
                        </li>
                        <li>
                            Social Proof
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar