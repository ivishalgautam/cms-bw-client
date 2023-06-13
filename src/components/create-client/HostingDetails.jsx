import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";

import {
  setHostingEndDate,
  setHostingId,
  setHostingName,
  setHostingPass,
  setHostingStartDate,
} from "../../store/features/inputSlice";

const HostingDetails = () => {
  const { hostingStartDate, hostingEndDate } = useSelector(
    (store) => store.inputVal
  );
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">hosting details</h2>
      <div className="mt-3 grid grid-cols-3 gap-5">
        {/* name */}
        <div className="form-group input-container">
          <label htmlFor="hosting_name">Hosting name</label>
          <input
            type="text"
            id="hosting_name"
            name="hosting_name"
            className="form-input"
            placeholder="Enter hosting name"
            onChange={(e) => {
              dispatch(setHostingName(e.target.value));
            }}
          />
        </div>

        {/* id */}
        <div className="form-group input-container">
          <label htmlFor="hosting_id">Hosting ID</label>
          <input
            type="text"
            id="hosting_id"
            name="hosting_id"
            className="form-input"
            placeholder="Enter hosting id"
            onChange={(e) => {
              dispatch(setHostingId(e.target.value));
            }}
          />
        </div>

        {/* password */}
        <div className="form-group input-container">
          <label htmlFor="hosting_password">Hosting password</label>
          <input
            type="text"
            id="hosting_password"
            name="hosting_password"
            className="form-input"
            placeholder="Enter hosting password"
            onChange={(e) => {
              dispatch(setHostingPass(e.target.value));
            }}
          />
        </div>

        {/* start date */}
        <div className="form-group input-container">
          <p>Hosting start date</p>
          <DatePicker
            selected={
              hostingStartDate !== "" ? new Date(hostingStartDate) : new Date()
            }
            onChange={(date) =>
              dispatch(setHostingStartDate(date.toISOString()))
            }
            className="form-input"
          />
        </div>

        {/* end date */}
        <div className="form-group input-container">
          <label htmlFor="hosting_end_date">Hosting end date</label>
          <DatePicker
            selected={
              hostingEndDate !== "" ? new Date(hostingEndDate) : new Date()
            }
            onChange={(date) => dispatch(setHostingEndDate(date.toISOString()))}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default HostingDetails;
