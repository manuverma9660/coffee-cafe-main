import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [rCounter,setRCounter] = useState(10);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <h1>R Counter:{rCounter}</h1>

            <button onClick={() => setCount(count + 1)}>
                Update Counter
            </button>

            <button onClick={() => setRCounter(rCounter - 1)}>
                R Counter
            </button>
 
        </div>
    );
}

function Practice2() {

    const [fruit, setFruit] = useState("Apple");

    const handleFruit = () => {
        setFruit("Banana");
    };

    return (
        <div>
            <h1>State in React JS</h1>

            <h1>{fruit}</h1>

            <button onClick={handleFruit}>
                Change Fruit Name
            </button>

            <Counter />
        </div>
    );
}

export default Practice2;