import { useDispatch } from "react-redux";
import { increment } from "../../redux/counterSlice";

const IncrementButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(increment())}
      className="
        w-12 h-12 flex items-center justify-center
        rounded-full text-xl font-bold
        bg-green-500 hover:bg-green-600
        active:scale-95 transition-all duration-200
        shadow-lg text-white
      "
    >
      +
    </button>
  );
};

export default IncrementButton;