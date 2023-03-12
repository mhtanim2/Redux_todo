import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restart, theSum } from "../../redux/stateSlice/sum/sum";
function TodoCount() {
  const sumRef = useRef();
  const value = useSelector((state) => state.sum.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card" id="todo">
        <div className="card-header bg-secondary">
          <h2 className="text-white">This is Sum todo</h2>
        </div>
        <div className="card-body ">
          <div>
            <h4>{value}</h4>
            <input
              ref={sumRef}
              className="form-control w-50 my-2"
              type="number"
            ></input>
            <button
              onClick={() => {
                dispatch(theSum(parseInt(sumRef.current.value)));
              }}
              className="btn btn-primary my-2 w-50"
            >
              Add
            </button>
            <button
              onClick={() => {
                dispatch(restart());
              }}
              className="btn btn-success m-2 w-40"
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoCount;
