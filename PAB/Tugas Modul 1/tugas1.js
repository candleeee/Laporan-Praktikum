// Functional Component
const CounterFunctional = () => {
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Functional Component</h2>
            <p>Counter: {count}</p>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
        </div>
    );
};

// Render Functional Component
const functionalElement = <CounterFunctional />;
ReactDOM.createRoot(document.getElementById('app-functional')).render(functionalElement);
