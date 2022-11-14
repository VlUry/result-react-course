const Counter = (props) => {
  const { id, value, name, onDelete, onIncrement, onDecrement } = props;

  const formatCount = () => {
    return value === 0 ? "empty" : value;
  };

  let bgColor = value === 0 ? "bg-warning" : "bg-primary";

  return (
    <div>
      <span>{name}</span>
      <span className={`${bgColor} badge m-2`}>{formatCount()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onIncrement(id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => {
          if (value > 0) onDecrement(id);
        }}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default Counter;
