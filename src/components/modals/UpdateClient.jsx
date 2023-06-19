import React, { useState } from "react";
import { publicRequest } from "../../requesMethods";
import { useParams } from "react-router-dom";
import { closeModal } from "../../store/features/modal/updateModalSlice";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import ManagersDropdown from "../ManagersDropdown";
import {
  clearAllFields,
  setFieldValue,
} from "../../store/features/input/inputSlice";

const UpdateClient = ({ id }) => {
  const {
    clientName,
    clientEmail,
    clientPhone,
    proName,
    proStartDate,
    proExpDate,
    proEndDate,
    proManagers,
    domainName,
    domainId,
    domainPass,
    domainStartDate,
    domainEndDate,
    hostingName,
    hostingId,
    hostingPass,
    hostingStartDate,
    hostingEndDate,
    facebookUsername,
    facebookPass,
    facebookPath,
    instaUsername,
    instaPass,
    instaPath,
    linkedInUsername,
    linkedInPass,
    linkedInPath,
    twitterUsername,
    twitterPass,
    twitterPath,
  } = useSelector((store) => store.inputVal);
  // console.log(id);

  const dispatch = useDispatch();
  async function updateClient(e, clientId) {
    e.preventDefault();
    const resp = await publicRequest.put(`/client/${clientId}`, {
      clientDetails: {
        name: clientName,
        email: clientEmail,
        phone: clientPhone,
      },
      projectDetails: {
        projectName: proName,
        projectStartDate: proStartDate,
        projectExpectedDeliveryDate: proExpDate,
        projectDeliveryDate: proEndDate,
        projectManagers: proManagers,
      },
      domain: {
        name: domainName,
        id: domainId,
        password: domainPass,
        startDate: domainStartDate,
        endDate: domainEndDate,
      },
      hosting: {
        name: hostingName,
        id: hostingId,
        password: hostingPass,
        startDate: hostingStartDate,
        endDate: hostingEndDate,
      },
      socials: {
        facebook: {
          id: facebookUsername,
          password: facebookPass,
          url: facebookPath,
        },
        instagram: {
          id: instaUsername,
          password: instaPass,
          url: instaPath,
        },
        linkedin: {
          id: linkedInUsername,
          password: linkedInPass,
          url: linkedInPath,
        },
        twitter: {
          id: twitterUsername,
          password: twitterPass,
          url: twitterPath,
        },
      },
    });
    // console.log(resp.data);
    if (resp.status === 200) {
      dispatch(closeModal());
      dispatch(clearAllFields());
    }
  }
  return (
    <div className="absolute left-0 top-0 z-50 min-h-screen w-screen bg-gray-900 bg-opacity-25 p-20">
      <form
        // ref={formRef}
        className="flex flex-col items-start justify-center gap-5 rounded-lg bg-white p-4"
        onSubmit={(e) => updateClient(e, id)}
        encType="multipart/form-data"
      >
        {/* client details */}
        <div className="w-full">
          <h2 className="text-2xl capitalize">client details</h2>
          <div className="mt-3 grid grid-cols-3 gap-5">
            {/* client name */}
            <div className="form-group input-container">
              <label htmlFor="name">Client name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter name"
                value={clientName}
                onChange={(e) => {
                  dispatch(
                    setFieldValue({
                      field: "clientName",
                      value: e.target.value,
                    })
                  );
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
                value={clientEmail}
                onChange={(e) => {
                  dispatch(
                    setFieldValue({
                      field: "clientEmail",
                      value: e.target.value,
                    })
                  );
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
                value={clientPhone}
                onChange={(e) => {
                  dispatch(
                    setFieldValue({
                      field: "clientPhone",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </div>
          </div>
        </div>

        {/* project details */}
        <div className="w-full">
          <h2 className="text-2xl capitalize">project details</h2>
          <div className="mt-3 grid grid-cols-3 gap-5">
            {/* project name */}
            <div className="form-group input-container col-span-3">
              <label htmlFor="project_name">Client name</label>
              <input
                type="text"
                id="project_name"
                name="project_name"
                className="form-input"
                placeholder="Enter project name"
                value={proName}
                onChange={(e) => {
                  dispatch(
                    setFieldValue({
                      field: "proName",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </div>
            {/* project start date */}
            <div className="form-group input-container">
              <label>Project start date</label>
              <DatePicker
                selected={
                  proStartDate !== "" ? new Date(proStartDate) : new Date()
                }
                onChange={(date) =>
                  dispatch(
                    setFieldValue({
                      field: "proStartDate",
                      value: date.toISOString(),
                    })
                  )
                }
                className="form-input"
              />
            </div>
            {/* project expected delivery date */}
            <div className="form-group input-container">
              <label>Project expected date</label>
              <DatePicker
                selected={proExpDate !== "" ? new Date(proExpDate) : new Date()}
                onChange={(date) =>
                  dispatch(
                    setFieldValue({
                      field: "proExpDate",
                      value: date.toISOString(),
                    })
                  )
                }
                className="form-input"
              />
            </div>
            {/* project delivery date */}
            <div className="form-group input-container">
              <label>Project end date</label>
              <DatePicker
                selected={proEndDate !== "" ? new Date(proEndDate) : new Date()}
                onChange={(date) =>
                  dispatch(
                    setFieldValue({
                      field: "proEndDate",
                      value: date.toISOString(),
                    })
                  )
                }
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

        {/* domain details */}
        <div className="w-full">
          <h2 className="text-2xl capitalize">domain details</h2>
          <div className="mt-3 grid grid-cols-3 gap-5">
            {/* name */}
            <div className="form-group input-container">
              <label htmlFor="domain_name">Domain name</label>
              <input
                type="text"
                id="domain_name"
                name="domain_name"
                className="form-input"
                placeholder="Enter domain name"
                value={domainName}
                onChange={(e) => {
                  dispatch(
                    setFieldValue({
                      field: "domainName",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </div>
            {/* id */}
            <div className="form-group input-container">
              <label htmlFor="domain_id">Domain ID</label>
              <input
                type="text"
                id="domain_id"
                name="domain_id"
                className="form-input"
                placeholder="Enter domain id"
                value={domainId}
                onChange={(e) => {
                  dispatch(
                    setFieldValue({
                      field: "domainId",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </div>
            {/* password */}
            <div className="form-group input-container">
              <label htmlFor="domain_password">Domain password</label>
              <input
                type="text"
                id="domain_password"
                name="domain_password"
                className="form-input"
                placeholder="Enter domain password"
                value={domainPass}
                onChange={(e) => {
                  dispatch(
                    setFieldValue({
                      field: "domainPass",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </div>
            {/* start date */}
            <div className="form-group input-container">
              <label>Domain start date</label>
              <DatePicker
                selected={
                  domainStartDate !== ""
                    ? new Date(domainStartDate)
                    : new Date()
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

        {/* hosting details */}
        <div className="w-full">
          <h2 className="text-2xl capitalize">hosting details</h2>
          <div className="mt-3 grid grid-cols-3 gap-5">
            {/* name */}
            <div className="form-group input-container">
              <label>Hosting name</label>
              <input
                type="text"
                id="hosting_name"
                name="hosting_name"
                className="form-input"
                placeholder="Enter hosting name"
                value={hostingName}
                onChange={(e) => {
                  dispatch(
                    setFieldValue({
                      field: "hostingName",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </div>

            {/* id */}
            <div className="form-group input-container">
              <label>Hosting ID</label>
              <input
                type="text"
                id="hosting_id"
                name="hosting_id"
                className="form-input"
                placeholder="Enter hosting id"
                value={hostingId}
                onChange={(e) => {
                  dispatch(
                    setFieldValue({
                      field: "hostingId",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </div>

            {/* password */}
            <div className="form-group input-container">
              <label>Hosting password</label>
              <input
                type="text"
                id="hosting_pass"
                name="hosting_pass"
                className="form-input"
                placeholder="Enter hosting password"
                value={hostingPass}
                onChange={(e) => {
                  dispatch(
                    setFieldValue({
                      field: "hostingPass",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </div>

            {/* start date */}
            <div className="form-group input-container">
              <label>Hosting start date</label>
              <DatePicker
                selected={
                  hostingStartDate !== ""
                    ? new Date(hostingStartDate)
                    : new Date()
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
              <label>Hosting end date</label>
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

        {/* socials */}
        <div className="w-full">
          <h2 className="text-2xl capitalize">client details</h2>
          <div className="mt-3 grid grid-cols-2 gap-5">
            {/* facebook */}
            <div className="form-group input-container">
              <p>Facebook</p>
              <input
                type="text"
                id="facebook_username"
                name="facebook_username"
                className="form-input"
                placeholder="Username"
                value={facebookUsername}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "facebookUsername",
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                id="facebook_pass"
                name="facebook_pass"
                className="form-input"
                placeholder="Password"
                value={facebookPass}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "facebookPass",
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                id="facebook_path"
                name="facebook_path"
                className="form-input"
                placeholder="Enter profile url"
                value={facebookPath}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "facebookPath",
                      value: e.target.value,
                    })
                  )
                }
              />
            </div>

            {/* instagram */}
            <div className="form-group input-container">
              <p>Instagram</p>
              <input
                type="text"
                id="instagram_username"
                name="instagram_username"
                className="form-input"
                placeholder="Username"
                value={instaUsername}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "instaUsername",
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                id="instagram_pass"
                name="instagram_pass"
                className="form-input"
                placeholder="Password"
                value={instaPass}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "instaPass",
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                id="instagram_path"
                name="instagram_path"
                className="form-input"
                placeholder="Enter profile url"
                value={instaPath}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "instaPath",
                      value: e.target.value,
                    })
                  )
                }
              />
            </div>

            {/* lnkedin */}
            <div className="form-group input-container">
              <p>LinkedIn</p>
              <input
                type="text"
                id="linkedin_username"
                name="linkedin_username"
                className="form-input"
                placeholder="Username"
                value={linkedInUsername}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "linkedInUsername",
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                id="linkedin_pass"
                name="linkedin_pass"
                className="form-input"
                placeholder="Password"
                value={linkedInPass}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "linkedInPass",
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                id="linkedin_path"
                name="linkedin_path"
                className="form-input"
                placeholder="Enter profile url"
                value={linkedInPath}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "linkedInPath",
                      value: e.target.value,
                    })
                  )
                }
              />
            </div>
            {/* twitter */}
            <div className="form-group input-container">
              <p>Twitter</p>
              <input
                type="text"
                id="twitter_username"
                name="twitter_username"
                className="form-input"
                placeholder="Username"
                value={twitterUsername}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "twitterUsername",
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                id="twitter_pass"
                name="twitter_pass"
                className="form-input"
                placeholder="Password"
                value={twitterPass}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "twitterPass",
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                id="twitter_path"
                name="twitter_path"
                className="form-input"
                placeholder="Enter profile url"
                value={twitterPath}
                onChange={(e) =>
                  dispatch(
                    setFieldValue({
                      field: "twitterPath",
                      value: e.target.value,
                    })
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* files */}
        {/* <FilesDetails /> */}
        <div className="flex w-full items-center justify-end gap-4">
          <button className="form-btn form-btn-primary">Submit</button>
          <button
            className="form-btn form-btn-secodary"
            onClick={() => {
              dispatch(closeModal());
              dispatch(clearAllFields());
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClient;
