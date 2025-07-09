import UseCounter from "./use-counter";

function Counter() {

  const { increment, decrement, reset, count } = UseCounter(0, 2);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
    
}

export default Counter;
