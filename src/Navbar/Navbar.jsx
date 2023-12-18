import { useState } from "react";
import Logo from "./Logo/Logo";
import './Navbar.css'
import { FiAlignJustify, FiXCircle } from "react-icons/fi";




const Navbar = () => {
    const [click, setclick] = useState(false)

    const hendelClick =()=>{
        setclick(!click)
    }
    return (
        <div className="flex justify-between items-center bg-[#1b2430] py-5 px-20  shadow-xl">
            <Logo></Logo>
            <nav>
                {/* <ul className="rrr flex flex-col lg:flex-row pt-4 lg:pt-0 gap-4 lg:gap-8"> */}
                <ul className={click?  ("active flex flex-col lg:flex-row pt-4 lg:pt-0 gap-4 lg:gap-8 "):("rrr flex flex-col lg:flex-row pt-4 lg:pt-0 gap-4 lg:gap-8")}>
                    <li className="text-[#fff] hover:text-[#17cf97] duration-300 ease-out font-bold hover:underline">Home</li>
                    <li className="text-[#fff] hover:text-[#17cf97] duration-300 ease-out font-bold hover:underline">About</li>
                    <li className="text-[#fff] hover:text-[#17cf97] duration-300 ease-out font-bold hover:underline">Blogs</li>
                    <li className="text-[#fff] hover:text-[#17cf97] duration-300 ease-out font-bold hover:underline">Contact</li>
                    <li className="text-[#fff] hover:text-[#17cf97] duration-300 ease-out font-bold hover:underline">Service</li>
                </ul>
            </nav>
 
            
<div className=" lg:hidden" onClick={hendelClick}>
{
    click ? <button><FiXCircle className="text-white w-8 h-8"/></button> : <button><FiAlignJustify className="text-white w-8 h-8"/></button>
}
</div>


        </div>
    );
};

export default Navbar;