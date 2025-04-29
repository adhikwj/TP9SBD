import { useState, useEffect } from "react";
import GradientLayout from "../components/GradientLayout";

export default function Counter() {
    const [count, setCount] = useState(0);

    // useEffect to display an alert when the count is divisible by 10
    useEffect(() => {
        if (count !== 0 && count % 10 === 0) {
            alert(`The number ${count} is divisible by 10!`);
        }
    }, [count]);

    return (
        <GradientLayout>
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-4">Counter Demo</h1>
                <p className="text-lg mb-6">Current Count: <span className="font-bold">{count}</span></p>
                <div className="flex space-x-4">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                    >
                        +
                    </button>
                    <button
                        onClick={() => setCount(count - 1)}
                        className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                    >
                        -
                    </button>
                    <button
                        onClick={() => setCount(0)}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </GradientLayout>
    );
}