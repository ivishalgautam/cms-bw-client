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
      <div className="mt-3 grid grid-cols-3 gap-5">
        {/* base price */}
        <div className="form-group input-container relative">
          <input
            type="number"
            id="base_price"
            name="base_price"
            className="form-input peer"
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
          <label htmlFor="base_price" className="form-label">
            Base Price
          </label>
        </div>
        {/* additional cost */}
        <div className="form-group input-container relative">
          <input
            type="number"
            id="additional_cost"
            name="additional_cost"
            className="form-input peer"
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
          <label htmlFor="additional_cost" className="form-label">
            Additional cost
          </label>
        </div>
        {/* partial payment */}
        <div className="form-group input-container relative">
          <input
            type="number"
            id="partial_paid"
            name="partial_paid"
            className="form-input peer"
            placeholder="Enter partial payment"
            onChange={(e) => {
              dispatch(
                setFieldValue({
                  field: "partialPaid",
                  value: Number(e.target.value),
                })
              );
              dispatch(calculateTotalCost());
            }}
          />
          <label htmlFor="additional_cost" className="form-label">
            Partial payment
          </label>
        </div>
        {/* total cost */}
        <div className="form-group input-container relative col-span-3">
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
          <label htmlFor="total_cost" className="form-label">
            Total Cost
          </label>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
