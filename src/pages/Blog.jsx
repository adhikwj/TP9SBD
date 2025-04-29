import GradientLayout from "../components/GradientLayout";

export default function Blog() {
    return (
        <GradientLayout>
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-4">Blog</h1>
                <p className="text-lg">Welcome to my blog! Here, I share my thoughts and experiences on web development, programming, and more.</p>
            </div>
        </GradientLayout>
    );
}