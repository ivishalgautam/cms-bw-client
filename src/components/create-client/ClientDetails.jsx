import React from "react";
import { useDispatch } from "react-redux";
import { setFieldValue } from "../../store/features/input/inputSlice";

const ClientDetails = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">client details</h2>
      <div className="mt-3 grid grid-cols-3 gap-5">
        {/* client name */}
        <div className="form-group input-container relative">
          <input
            type="text"
            id="name"
            name="name"
            className="form-input peer"
            placeholder="Enter name"
            onChange={(e) => {
              dispatch(
                setFieldValue({ field: "clientName", value: e.target.value })
              );
            }}
          />
          <label htmlFor="name" className="form-label">
            Client name
          </label>
        </div>

        {/* client email */}
        <div className="form-group input-container relative">
          <input
            type="text"
            id="email"
            name="email"
            className="form-input peer"
            placeholder="Enter email address"
            onChange={(e) => {
              dispatch(
                setFieldValue({ field: "clientEmail", value: e.target.value })
              );
            }}
          />
          <label htmlFor="email" className="form-label">
            Client email
          </label>
        </div>

        {/* client phone */}
        <div className="form-group input-container relative">
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-input peer"
            placeholder="Enter phone number"
            onChange={(e) => {
              dispatch(
                setFieldValue({ field: "clientPhone", value: e.target.value })
              );
            }}
          />
          <label htmlFor="phone" className="form-label">
            Client phone
          </label>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
