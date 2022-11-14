const Counter = (props) => {
  const { id, value, name, onDelete } = props;

  const formatCount = () => {
    return value === 0 ? "empty" : value;
  };

  let bgColor = value === 0 ? "bg-warning" : "bg-primary";

  return (
    <div>
      <span>{name}</span>
      <span className={`${bgColor} badge m-2`}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2">+</button>
      <button className="btn btn-primary btn-sm m-2">-</button>
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
