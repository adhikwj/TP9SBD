import GradientLayout from "../components/GradientLayout";

export default function Contact() {
    return (
        <GradientLayout>
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-4">Contact</h1>
                <p className="text-lg mb-4">If you'd like to get in touch, feel free to reach out via email or social media:</p>
                <ul className="list-disc pl-6 text-lg">
                    <li>Email: adhikananda.wira@ui.ac.id</li>
                    <li>Instagram: <a href="https://instagram.com/adhikwj" className="text-blue-400 hover:underline">instagram.com/adhikwj</a></li>
                    <li>GitHub: <a href="https://github.com/adhikwj" className="text-blue-400 hover:underline">github.com/adhikwj</a></li>
                </ul>
            </div>
        </GradientLayout>
    );
}