import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { setFieldValue } from "../../store/features/input/inputSlice";

const AMC = () => {
  const { amcStartDate, amcEndDate } = useSelector((store) => store.inputVal);
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">AMC</h2>
      <div className="mt-3 grid grid-cols-2 gap-5">
        {/* start date */}
        <div className="form-group input-container">
          <label>AMC start date</label>
          <DatePicker
            selected={amcStartDate !== "" ? new Date(amcStartDate) : new Date()}
            onChange={(date) =>
              dispatch(
                setFieldValue({
                  field: "amcStartDate",
                  value: date.toISOString(),
                })
              )
            }
            className="form-input"
          />
        </div>
        {/* end date */}
        <div className="form-group input-container">
          <label>AMC end date</label>
          <DatePicker
            selected={amcEndDate !== "" ? new Date(amcEndDate) : new Date()}
            onChange={(date) =>
              dispatch(
                setFieldValue({
                  field: "amcEndDate",
                  value: date.toISOString(),
                })
              )
            }
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default AMC;
