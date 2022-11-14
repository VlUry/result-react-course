import { useState } from "react";
import Counter from "./Counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };

  const handleIncrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        return { ...counter, value: counter.value + 1 };
      } else {
        return counter;
      }
    });
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        return { ...counter, value: counter.value - 1 };
      } else {
        return counter;
      }
    });
    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
