import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  customActionState,
  decrement,
  increment
} from "../../redux/stateSlice/counter/counter";

function HomeCounter({name}) {
  let inputRef = useRef();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-header bg-secondary">
        <h4 className="text-white">Hello {name} this is Counter App</h4>
      </div>
      <div className="card-body">
        <h4>{count}</h4>
        <div className="my-4">
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="btn btn-success"
          >
            Increase
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="btn btn-danger mx-2"
          >
            Decrease
          </button>
          <div>
            <input
              ref={inputRef}
              className="form-control w-50 my-2"
              type="number"
            ></input>
            <button
              onClick={() => {
                dispatch(customActionState(inputRef.current.value));
              }}
              className="btn btn-primary my-2 w-50"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCounter;
