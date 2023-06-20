import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { setFieldValue } from "../../store/features/input/inputSlice";

const DomainDetails = () => {
  const { domainStartDate, domainEndDate } = useSelector(
    (store) => store.inputVal
  );
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">domain details</h2>
      <div className="mt-3 grid grid-cols-3 gap-5">
        {/* name */}
        <div className="form-group input-container relative">
          <input
            type="text"
            id="domain_name"
            name="domain_name"
            className="form-input peer"
            placeholder="Enter domain name"
            onChange={(e) => {
              dispatch(
                setFieldValue({
                  field: "domainName",
                  value: e.target.value,
                })
              );
            }}
          />
          <label htmlFor="domain_name" className="form-label">
            Domain name
          </label>
        </div>
        {/* id */}
        <div className="form-group input-container relative">
          <input
            type="email"
            id="domain_id"
            name="domain_id"
            className="form-input peer"
            placeholder="Enter domain id"
            onChange={(e) => {
              dispatch(
                setFieldValue({
                  field: "domainId",
                  value: e.target.value,
                })
              );
            }}
          />
          <label htmlFor="domain_id" className="form-label">
            Domain ID
          </label>
        </div>
        {/* password */}
        <div className="form-group input-container relative">
          <input
            type="text"
            id="domain_password"
            name="domain_password"
            className="form-input peer"
            placeholder="Enter domain password"
            onChange={(e) => {
              dispatch(
                setFieldValue({
                  field: "domainPass",
                  value: e.target.value,
                })
              );
            }}
          />
          <label htmlFor="domain_password" className="form-label">
            Domain password
          </label>
        </div>
        {/* start date */}
        <div className="form-group input-container">
          <label>Domain start date</label>
          <DatePicker
            selected={
              domainStartDate !== "" ? new Date(domainStartDate) : new Date()
            }
            onChange={(date) =>
              dispatch(
                setFieldValue({
                  field: "domainStartDate",
                  value: date.toISOString(),
                })
              )
            }
            className="form-input"
          />
        </div>
        {/* end date */}
        <div className="form-group input-container">
          <label>Domain end date</label>
          <DatePicker
            selected={
              domainEndDate !== "" ? new Date(domainEndDate) : new Date()
            }
            onChange={(date) =>
              dispatch(
                setFieldValue({
                  field: "domainEndDate",
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

export default DomainDetails;
