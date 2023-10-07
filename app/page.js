"use client";

import { useCounter } from "./hooks/useCounter";

export default function Home() {
  const contador = useCounter(0);

  return (
    <div className="flex-col">
      <div>
        <h1>Ejemplo de Custom Hook en react</h1>
      </div>
      <div className="visualizador">{contador.counter}</div>
      <div className="text-center">
        <button onClick={contador.increment}>+</button>
        <button onClick={contador.decrement}>-</button>
        <button onClick={contador.reset}>0</button>
      </div>
    </div>
  );
}
