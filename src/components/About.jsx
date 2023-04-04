import img from "../assets/Images/AboutUs.jpg"
import vc from "../assets/Images/Vice-chancellor.jpg"
const About = () => {
    return (
        <div name="about" className="h-screen w-full">
            <div className="w-full h-full flex">
                <div className="w-[50%] md:block hidden">
                    <img className="h-full w-[100%]" src={img} alt="" />
                </div>
                <div className="md:w-[50%] h-full flex flex-col justify-center items-center bg-other">
                    <h1 className="py-2 mb-5 text-primary font-lato text-3xl font-bold inline border-b-4 border-secondary">ABOUT US</h1>
                    <div>
                        <p className="p-5 text-center">
                        Our mission is to revolutionize the way you learn and work at university by leading the charge in innovative campus software solutions. We strive to improve efficiency and productivity across your university, streamlining campus technology for students, faculty, and staff. By doing so, we're creating a smarter, more connected campus environment. With our solutions, you'll experience a seamless integration of technology into your daily routine, making your academic and professional life easier and more enjoyable. Our commitment to innovation and excellence will help you succeed in all aspects of university life..
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="bg-primary flex rounded m-5">
                            <img src={vc} className="w-32 rounded" alt="" />
                            <p className="text-xs font-bold p-5 text-other">We have the full support of the University and even the VC of the scool Prof. E. Smaranda Olarinde says this about the Company "I think this Company could revolutionize the way we experince day to day life on Campus"
                                Call to action: Sign up to Our fee email news letter to stay on top of our product release dates and be the first to try them</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About