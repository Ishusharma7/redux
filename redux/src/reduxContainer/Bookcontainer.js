import React from "react";
import { useSelector, useDispatch } from "react-redux";
import purchase_book from "./Bookaction";
import { purchase_pen } from "./Bookaction";

function Bookcontainer() {
  const noofbooks = useSelector((state) => state.NumberOfBooks);
  console.log(noofbooks);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container1"><h2>Bookcontainer</h2>
      <h2>No of Books - {noofbooks}</h2>
      <button onClick={() => dispatch(purchase_book())}>Buy Book</button>
      </div>
    </>
  );
}
export default Bookcontainer;

function Pencontainer() {
  const noofpens = useSelector((state) => state.NumberOfPens);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container2"><h1>Pencontainer</h1>
      <h2>No of Pens - {noofpens}</h2>
      <button onClick={() => dispatch(purchase_pen())}>Buy Pen</button>
      </div>
    </>
  );
}
export { Pencontainer };
