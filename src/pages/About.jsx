import GradientLayout from "../components/GradientLayout";

export default function About() {
    return (
        <GradientLayout>
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg mb-4">Hello! My name is Adhikananda Wira Januar. Welcome!</p>
                <p className="text-lg">I am currently an undergraduate student majoring in Computer Engineering in University of Indonesia.</p>
            </div>
        </GradientLayout>
    );
}