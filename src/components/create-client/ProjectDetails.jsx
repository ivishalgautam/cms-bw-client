import React from "react";
import ManagersDropdown from "../ManagersDropdown";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {
  setProEndDate,
  setProExpDate,
  setProName,
  setProStartDate,
} from "../../store/features/inputSlice";
import { useDispatch, useSelector } from "react-redux";

const ProjectDetails = () => {
  const { proStartDate, proExpDate, proEndDate } = useSelector(
    (store) => store.inputVal
  );

  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">project details</h2>
      <div className="mt-3 grid grid-cols-3 gap-5">
        {/* project name */}
        <div className="form-group input-container col-span-3">
          <label htmlFor="project_name">Project name</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            className="form-input"
            placeholder="Enter project name"
            onChange={(e) => {
              dispatch(setProName(e.target.value));
            }}
          />
        </div>
        {/* project start date */}
        <div className="form-group input-container">
          <p>Project start date</p>
          <DatePicker
            selected={proStartDate !== "" ? new Date(proStartDate) : new Date()}
            onChange={(date) => dispatch(setProStartDate(date.toISOString()))}
            className="form-input"
          />
        </div>
        {/* project expected delivery date */}
        <div className="form-group input-container">
          <p>Project expected date</p>
          <DatePicker
            selected={proExpDate !== "" ? new Date(proExpDate) : new Date()}
            onChange={(date) => dispatch(setProExpDate(date.toISOString()))}
            className="form-input"
          />
        </div>
        {/* project delivery date */}
        <div className="form-group input-container">
          <p>Project end date</p>
          <DatePicker
            selected={proEndDate !== "" ? new Date(proEndDate) : new Date()}
            onChange={(date) => dispatch(setProEndDate(date.toISOString()))}
            className="form-input"
          />
        </div>
        {/* project managers */}
        <div className="form-group input-container col-span-3">
          <p>Project managers</p>
          <div className="form-group input-container multi-select mt-3 w-full">
            <ManagersDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
