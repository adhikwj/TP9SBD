export default function GradientLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative w-full bg-gradient-to-r from-green-600 via-teal-700 to-blue-800 text-white overflow-hidden">
            <div
                className="absolute inset-0 z-0 animate-grid"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 2px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 2px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />
            <div className="relative z-10 p-6 pt-20 w-full max-w-4xl">{children}</div>
        </div>
    );
}