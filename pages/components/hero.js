"use client";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 1 + 0.5,
    }));

    let animId;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0, 150, 255, 0.8)";
        ctx.fillStyle = "#00baff";
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-2 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none w-full h-full" />

      <a
        href="https://drive.google.com/file/d/1ODrI9c1uXVvlLuQySMF_Ss0ptIzcpWOZ/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-10 right-10 bg-purple-900 hover:bg-purple-700 hover:scale-105 transition-all duration-300 text-white font-bold py-3 px-6 rounded-xl z-10">
        Resume
      </a>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <h1 className="text-8xl font-bold neon-name glitch" 
        data-text="Bhoomika Chaudhary">
          Bhoomika Chaudhary
        </h1>
        <TypeAnimation
          sequence={[
            "AspiringGame Developer", 2000,
            "Machine Learning Enthusiast", 2000,
            "Dreaming Beyond Time", 2000,
          ]}
          repeat={Infinity}
          className="text-xl text-purple-400"
        />
        <p className="text-xl text-gray-300 max-w-2xl mt-2">
          BCA student passionate about Game Development and Machine Learning — building things that are both functional and fun.
        </p>
      </div>
    </section>
  );
}