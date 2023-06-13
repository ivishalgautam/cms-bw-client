import React from "react";
import { useDispatch } from "react-redux";
import {
  setClientEmail,
  setClientName,
  setClientPhone,
} from "../../store/features/inputSlice";

const ClientDetails = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">client details</h2>
      <div className="grid grid-cols-3 gap-5 mt-3">
        {/* client name */}
        <div className="form-group input-container">
          <label htmlFor="name">Client name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter name"
            onChange={(e) => {
              dispatch(setClientName(e.target.value));
            }}
          />
        </div>

        {/* client email */}
        <div className="form-group input-container">
          <label htmlFor="email">Client email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter email address"
            onChange={(e) => {
              dispatch(setClientEmail(e.target.value));
            }}
          />
        </div>

        {/* client phone */}
        <div className="form-group input-container">
          <label htmlFor="phone">Client phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="Enter phone number"
            onChange={(e) => {
              dispatch(setClientPhone(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
