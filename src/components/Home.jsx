import lamp from "../assets/Images/Light.png"
import img1 from "../assets/images/scrum-svgrepo-com.svg"
import img2 from "../assets/images/product-shelf-svgrepo-com.svg"
import img3 from "../assets/Images/lab-medical-test.svg"
import img4 from "../assets/Images/school-bus.svg"
import img5 from "../assets/Images/school.svg"
import {Link} from "react-scroll"


const Home = () => {
return(
    <div name="home" className="h-screen w-full">
        <div className="w-full h-full flex">
            <div className="h-full md:w-[50%] w-full bg-secondary">
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center p-8 h-full'>
                    
                <img className="absolute w-16 top-28 left-10" src={img5} alt="" />
                
                        <div className='md:col-span-2 font-lato'>
                            <p className='text-[#FF79C6] font-bold'>Welcome to the,</p>
                            <h1 className='text-4xl text-primary font-bold py-2'>The Stack Lab</h1>
                            <h2 className='text-3xl text-primary font-bold'>Transforming Campus Technology:</h2>
                            <p className='text-primary text-2xl max-w-[700px] py-4'>Introducing The-Stack-Digital
                            </p>
                        </div>  
                        <Button/>              
            </div>
        </div>
            <div className="h-full md:block hidden w-[50%] bg-primary relative">
                <img src={lamp} alt="lamp" className="transform scale-x-[-1]"/>
                <img className="absolute w-16 top-28 left-10" src={img1} alt="" />
                <img className="absolute w-16 top-28 right-10" src={img2} alt="" />
                <img className="absolute w-16 bottom-44 right-10" src={img3} alt="" />
                <img src={img4} className="absolute w-16 bottom-44 left-10" alt="" />
            </div>
            

        </div>
    </div>
)
}

// button
const Button = () => {
    return(
        <a href="#_" className="relative w-80 mt-10 rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative font-bold ml-5"><Link to="contact" smooth={true} duration={500} >Suscribe To Our Newsletter</Link></span>
        </a>
)
}

export default Home