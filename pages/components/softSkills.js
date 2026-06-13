"use client";
import {useState} from "react";

export default function SoftSkills(){
    const [openSkills, setOpenSkills] = useState([]);

    function handleClick(index){
        if(openSkills.includes(index)){
            setOpenSkills(openSkills.filter(item => item !== index));
        } else {    
            setOpenSkills([...openSkills, index]);
        }
    }

    return(
        <section className="py-20 px-6"> 
            <h2 className="text-6xl text-center font-bold mb-4">
                Soft Skills
            </h2>
            <div className="bg-zinc-800 border border-purple-500 p-6 text-center rounded-lg shadow-md shadow-purple-900/50">
                {softSkills.map((softSkill,index) => (
                    <div key={index} className="bg-zinc-700 border border-purple-400 p-4 rounded mb-4 hover:bg-zinc-600 hover:scale-101 cursor-pointer"
                    onClick={() => handleClick(index)}>
                        <h3 
                            className="text-xl font-semibold ">
                                {softSkill.title}
                        </h3>
                        {openSkills.includes(index) && (
                            <p className="mt-2 text-lg text-zinc-300">{softSkill.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export const softSkills = [
    
    {
        title: "Leadership and Teamwork",
        description: "Served as a captain in the school cricket team for 3 years, demonstrating leadership and the ability to work collaboratively towards common goals."
    },
    {
        title: "Active learning",
        description: "Earned certifications from NPTEL and Kaggle, showcasing a commitment to continuous learning and staying updated with industry trends."
    },
    {
        title: "Persistence and Resilience",
        description: "I keep asking, testing, fixing, and improving until I get the desired output, demonstrating persistence and resilience in the face of challenges."
    }
]

