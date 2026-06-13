export default function Certifications(){
    return(
        <section className="py-20 px-6">
            <h2 className="text-6xl text-center font-bold mb-4">Training & Certifications</h2>
            <div className="bg-zinc-800 border border-purple-500 p-6 rounded-lg shadow-lg shadow-purple-900/50">
                <ul className="list-disc list-inside text-lg text-gray-300">
                    {certifications.map((certification, index) => (
                        <li key={index} className="mb-2">{certification}</li>
                    ))}
                </ul>
            </div>     
        </section>
    )
}

const certifications = [
    "CDC Maestro (for consistent efforts in Professional Development)",
    "Deep Learning (NPTEL)",
    "Introduction to Machine Learning (Kaggle)",
    "Business Analytics for Management Decisions (NPTEL)",
    "E-Business (NPTEL)"
]