
import Hero from "./components/hero";
import Education from "./components/education";
import Technical from "./components/techSkills";
import Certifications from "./components/certification";
import SoftSkills from "./components/softSkills";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home(){
  return(
    <main className="relative bg-black text-white min-h-screen p-2 overflow-hidden z-0">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-700 opacity-30 blur-[120px] animate-blob" />
        <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-violet-600 opacity-25 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-fuchsia-700 opacity-20 blur-[90px] animate-blob animation-delay-4000" />
        <div className="absolute bottom-[30%] left-[10%] w-[600px] h-[600px] rounded-full bg-purple-700 opacity-30 blur-[120px] animate-blob" />
        <div className="absolute bottom-[0%] left-[10%] w-[500px] h-[500px] rounded-full bg-violet-600 opacity-25 blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <Hero/> 
      <Education/>
      <Technical/>
      <Certifications/>
      <SoftSkills/>
      <Projects/>
      <Footer/>
    </main>
  )
}