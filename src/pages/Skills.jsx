import GradientLayout from "../components/GradientLayout";

export default function Skills() {
    return (
        <GradientLayout>
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-4">Skills</h1>
                <p className="text-lg mb-4">Here are some of the skills I have:</p>
                <ul className="list-disc pl-6 text-lg">
                    <li>Procrastinating</li>
                    <li>Being lazy</li>
                    <li>Oversleeping</li>
                </ul>
            </div>
        </GradientLayout>
    );
}