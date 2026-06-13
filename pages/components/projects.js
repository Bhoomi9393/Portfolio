"use client";
export default function Projects(){
    return(
        <section className="py-8 px-6">
            <h2 className="text-6xl font-bold text-center mb-12">Projects</h2>
            <div className="mt-4 flex flex-col items-center gap-1">
                <a 
                    href="https://github.com/Bhoomi9393/GlitchBorn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-lg bg-purple-800 hover:bg-purple-600 hover:scale-110 transition-all duration-300 text-black font-bold py-3 px-6  rounded-xl mb-4">
                    GlitchBorn - A 2D Platformer Game
                </a>
                <a 
                    href="https://bhoomi9393.github.io/Old-Web-Development/Landing%20Page/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-lg bg-purple-800 hover:bg-purple-600 hover:scale-110 transition-all duration-300 text-black font-bold py-3 px-6 rounded-xl mb-4">
                    Responsive Landing Page
                </a>
                <a
                    href="https://github.com/Bhoomi9393/NPC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-lg bg-purple-800 hover:bg-purple-600 hover:scale-110 transition-all duration-300 text-black font-bold py-3 px-6 rounded-xl mb-4">
                    AI enabled NPC(WIP)
                </a>
            </div>
        </section>
    )
}