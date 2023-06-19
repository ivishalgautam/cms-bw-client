import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotalCost,
  setFieldValue,
} from "../../store/features/input/inputSlice";
import { twMerge } from "tailwind-merge";

const Pricing = () => {
  const { totalCost } = useSelector((store) => store.inputVal);
  // console.log(totalCost);
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">Pricing</h2>
      <div className="mt-3 grid grid-cols-2 gap-5">
        <div className="form-group input-container">
          <label htmlFor="base_price">Base Price</label>
          <input
            type="number"
            id="base_price"
            name="base_price"
            className="form-input"
            placeholder="Enter base price"
            onChange={(e) => {
              dispatch(
                setFieldValue({
                  field: "basePrice",
                  value: Number(e.target.value),
                })
              );
              dispatch(calculateTotalCost());
            }}
          />
        </div>
        <div className="form-group input-container">
          <label htmlFor="additional_cost">Additional cost</label>
          <input
            type="number"
            id="additional_cost"
            name="additional_cost"
            className="form-input"
            placeholder="Enter additional cost"
            onChange={(e) => {
              dispatch(
                setFieldValue({
                  field: "additionalCosts",
                  value: Number(e.target.value),
                })
              );
              dispatch(calculateTotalCost());
            }}
          />
        </div>
        <div className="form-group input-container col-span-2">
          <label htmlFor="total_cost">Total Cost</label>
          <input
            // disabled
            type="number"
            id="total_cost"
            name="total_cost"
            className={twMerge("form-input", "bg-gray-300")}
            placeholder="Total"
            value={totalCost}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
