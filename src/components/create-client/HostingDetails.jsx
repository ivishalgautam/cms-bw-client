import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";

import { setFieldValue } from "../../store/features/input/inputSlice";

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
        <div className="form-group input-container relative">
          <input
            type="text"
            id="hosting_name"
            name="hosting_name"
            className="form-input peer"
            placeholder="Enter hosting name"
            onChange={(e) => {
              dispatch(
                setFieldValue({
                  field: "hostingName",
                  value: e.target.value,
                })
              );
            }}
          />
          <label htmlFor="hosting_name" className="form-label">
            Hosting name
          </label>
        </div>

        {/* id */}
        <div className="form-group input-container relative">
          <input
            type="email"
            id="hosting_id"
            name="hosting_id"
            className="form-input peer"
            placeholder="Enter hosting id"
            onChange={(e) => {
              dispatch(
                setFieldValue({
                  field: "hostingId",
                  value: e.target.value,
                })
              );
            }}
          />
          <label htmlFor="hosting_id" className="form-label">
            Hosting ID
          </label>
        </div>

        {/* password */}
        <div className="form-group input-container relative">
          <input
            type="text"
            id="hosting_password"
            name="hosting_password"
            className="form-input peer"
            placeholder="Enter hosting password"
            onChange={(e) => {
              dispatch(
                setFieldValue({
                  field: "hostingPass",
                  value: e.target.value,
                })
              );
            }}
          />
          <label htmlFor="hosting_password" className="form-label">
            Hosting password
          </label>
        </div>

        {/* start date */}
        <div className="form-group input-container">
          <p>Hosting start date</p>
          <DatePicker
            selected={
              hostingStartDate !== "" ? new Date(hostingStartDate) : new Date()
            }
            onChange={(date) =>
              dispatch(
                setFieldValue({
                  field: "hostingStartDate",
                  value: date.toISOString(),
                })
              )
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
            onChange={(date) =>
              dispatch(
                setFieldValue({
                  field: "hostingEndDate",
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

export default HostingDetails;
