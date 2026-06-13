"use client";
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="text-gray-400 py-6 ">
            <div className="container mx-auto flex flex-col items-center gap-4">
                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/bhoomika-chaudhary-04308934b" target="_blank" className="text-purple-800 text-gray-400 hover:text-white hover:scale-110 transition-colors duration-300">
                        <FaLinkedin size={32}/>
                    </a>
                    <a href="https://github.com/Bhoomi9393" target="_blank" className="text-purple-800 text-gray-400 hover:text-white hover:scale-110 transition-colors duration-300"> 
                        <FaGithub size={32}/>    
                    </a>
                    <a href="mailto:bhoomi.init@gmail.com" className="text-purple-800 text-gray-400 hover:text-white hover:scale-110 transition-colors duration-300">
                        <FaEnvelope size={32}/> 
                    </a>
                </div>
                <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()} Bhoomika Chaudhary. All rights reserved.
                </p>
            </div>
        </footer>
    )
}