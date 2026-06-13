"use client";
import {useState} from "react";

export default function Technical(){
    const [openSkills, setOpenSkills] = useState([]);

    function handleClick(index){     
        if(openSkills.includes(index)){
            setOpenSkills(openSkills.filter(item => item !== index));
        } else{
            setOpenSkills([...openSkills, index]);
        }
    }

    return(
        <section className="py-20 px-6"> 
            <h2 className="text-6xl text-center font-bold mb-4">
                Technical Skills
            </h2>

            <div className="bg-zinc-800 border border-purple-500 p-6 text-center rounded-lg shadow-md shadow-purple-900/50">
                {skills.map((skill, index) =>(
                    <div key={index} className="bg-zinc-700 border border-purple-400 p-4 rounded mb-4 hover:bg-zinc-600 hover:scale-101 cursor-pointer"
                    onClick={() => handleClick(index)}>
                        <h3 
                            className="text-xl font-semibold">
                            {skill.title}
                        </h3>
                        {openSkills.includes(index) && (
                            <p className="text-lg text-gray-300 mt-2">
                                {skill.description}
                                </p>
                        )}
                    </div> 
                ))}
            </div>
        </section>
    )
}

export const skills =[
    {
        title: "C",
        description: "Proficient in C programming language, with experience in developing efficient algorithms and data structures."
    },
    {
        title: "Java",
        description: "Skilled in Java programming, with a strong understanding of object-oriented programming principles and experience in building applications."
    },
    {
        title: "Python",
        description: "Proficient in Python programming with hands-on experience in web development and machine learning"
    },
    {
        title: "Web Development",
        description: "Skilled in HTML, CSS, JavaScript, and Next.js, with experience developing responsive web applications, reusable components, and intuitive user interfaces."
    },
    {
        title: "Database Management",
        description: "Experience with SQL and database management systems, including designing and optimizing databases for efficient data storage and retrieval."
    },
    {
        title: "Game Development",
        description: "Learning game development using Unity, with a passion for creating immersive gaming experiences and innovative solutions in the world of technology."
    }
]