import GradientLayout from "../components/GradientLayout";

export default function Projects() {
    return (
        <GradientLayout>
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-4">Projects</h1>
                <p className="text-lg mb-4">Here are some of the projects I've worked on:</p>
                <ul className="list-disc pl-6 text-lg">
                    <li>
                        Project 1: <a href="https://tp8sbd-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">A website for FTUI's Netlab</a>.
                    </li>
                    <li>
                        Project 2: <a href="https://cs8-adhikananda.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">A revamped version of Vercel's website</a>.
                    </li>
                </ul>
            </div>
        </GradientLayout>
    );
}