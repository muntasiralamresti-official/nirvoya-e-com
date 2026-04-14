import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../redux/counterSlice";

const DecrementButton = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <button
      onClick={() => dispatch(decrement())}
      disabled={count === 1}
      className={`
        w-12 h-12 flex items-center justify-center
        rounded-full text-xl font-bold
        transition-all duration-200
        ${
          count === 1
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 active:scale-95 shadow-lg"
        }
        text-white
      `}
    >
      −
    </button>
  );
};

export default DecrementButton;