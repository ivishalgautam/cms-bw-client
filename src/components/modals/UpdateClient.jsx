import React from "react";
import { publicRequest } from "../../requesMethods";
import { useParams } from "react-router-dom";
import { closeModal } from "../../store/features/modal/updateModalSlice";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import ManagersDropdown from "../ManagersDropdown";
import {
  setClientEmail,
  setClientName,
  setClientPhone,
  setDomainEndDate,
  setDomainId,
  setDomainName,
  setDomainPass,
  setDomainStartDate,
  setFacebookPass,
  setFacebookUsername,
  setHostingEndDate,
  setHostingId,
  setHostingName,
  setHostingPass,
  setHostingStartDate,
  setInstagramPass,
  setInstagramUsername,
  setLinkedInPass,
  setLinkedInUsername,
  setProEndDate,
  setProExpDate,
  setProName,
  setProStartDate,
  setTwitterPass,
  setTwitterUsername,
} from "../../store/features/inputSlice";

const UpdateClient = () => {
  const { proStartDate, proEndDate, proExpDate, clientInput } = useSelector(
    (store) => store.inputVal
  );

  console.log(clientInput);

  const { clientId } = useParams();
  const dispatch = useDispatch();
  async function updateClient(clientId) {
    const resp = await publicRequest.put(`/client/${clientId}`);
    console.log(resp.data);
  }
  return (
    <div className="absolute left-0 top-0 z-50 min-h-screen w-screen bg-gray-900 bg-opacity-25 p-20">
      <form
        // ref={formRef}
        className="flex flex-col items-start justify-center gap-5 rounded-lg bg-white p-4"
        onSubmit={() => updateClient(clientId)}
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
                value={clientInput?.clientDetails?.name}
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
                value={clientInput?.clientDetails?.email}
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
                value={clientInput?.clientDetails?.phone}
                onChange={(e) => {
                  dispatch(setClientPhone(e.target.value));
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
                value={clientInput?.projectDetails?.projectName}
                onChange={(e) => {
                  dispatch(setProName(e.target.value));
                }}
              />
            </div>
            {/* project start date */}
            <div className="form-group input-container">
              <p>Project start date</p>
              <DatePicker
                selected={
                  proStartDate !== "" ? new Date(proStartDate) : new Date()
                }
                onChange={(date) =>
                  dispatch(setProStartDate(date.toISOString()))
                }
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
                value={clientInput?.domain?.name}
                onChange={(e) => {
                  disatch(setDomainName(e.target.value));
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
                value={clientInput?.domain?.id}
                onChange={(e) => {
                  disatch(setDomainId(e.target.value));
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
                value={clientInput?.domain?.password}
                onChange={(e) => {
                  disatch(setDomainPass(e.target.value));
                }}
              />
            </div>
            {/* start date */}
            <div className="form-group input-container">
              <label htmlFor="domain_start_date">Domain start date</label>
              <input
                type="text"
                id="domain_start_date"
                name="domain_start_date"
                className="form-input"
                placeholder="Enter start date"
                value={clientInput?.domain?.startDate}
                onChange={(e) => {
                  disatch(setDomainStartDate(e.target.value));
                }}
              />
            </div>
            {/* end date */}
            <div className="form-group input-container">
              <label htmlFor="domain_end_date">Domain end date</label>
              <input
                type="text"
                id="domain_end_date"
                name="domain_end_date"
                className="form-input"
                placeholder="Enter end date"
                value={clientInput?.domain?.endDate}
                onChange={(e) => {
                  disatch(setDomainEndDate(e.target.value));
                }}
              />
            </div>
          </div>
        </div>

        {/* domain details */}
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
                value={clientInput?.hosting?.name}
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
                value={clientInput?.hosting?.id}
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
                value={clientInput?.hosting?.password}
                onChange={(e) => {
                  dispatch(setHostingPass(e.target.value));
                }}
              />
            </div>

            {/* start date */}
            <div className="form-group input-container">
              <label htmlFor="hosting_start_date">Hosting start date</label>
              <input
                type="text"
                id="hosting_start_date"
                name="hosting_start_date"
                className="form-input"
                placeholder="Enter hosting date"
                value={clientInput?.hosting?.startDate}
                onChange={(e) => {
                  dispatch(setHostingStartDate(e.target.value));
                }}
              />
            </div>

            {/* end date */}
            <div className="form-group input-container">
              <label htmlFor="hosting_end_date">Hosting end date</label>
              <input
                type="text"
                id="hosting_end_date"
                name="hosting_end_date"
                className="form-input"
                placeholder="Enter hosting end date"
                value={clientInput?.hosting?.endDate}
                onChange={(e) => {
                  dispatch(setHostingEndDate(e.target.value));
                }}
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
                value={clientInput?.socials?.facebook?.id}
                onChange={(e) => dispatch(setFacebookUsername(e.target.value))}
              />
              <input
                type="text"
                id="facebook_pass"
                name="facebook_pass"
                className="form-input"
                placeholder="Password"
                value={clientInput?.socials?.facebook?.password}
                onChange={(e) => dispatch(setFacebookPass(e.target.value))}
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
                value={clientInput?.socials?.instagram?.id}
                onChange={(e) => dispatch(setInstagramUsername(e.target.value))}
              />
              <input
                type="text"
                id="instagram_pass"
                name="instagram_pass"
                className="form-input"
                placeholder="Password"
                value={clientInput?.socials?.instagram?.password}
                onChange={(e) => dispatch(setInstagramPass(e.target.value))}
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
                value={clientInput?.socials?.linkedin?.id}
                onChange={(e) => dispatch(setLinkedInUsername(e.target.value))}
              />
              <input
                type="text"
                id="linkedin_pass"
                name="linkedin_pass"
                className="form-input"
                placeholder="Password"
                value={clientInput?.socials?.linkedin?.password}
                onChange={(e) => dispatch(setLinkedInPass(e.target.value))}
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
                value={clientInput?.socials?.twitter?.id}
                onChange={(e) => dispatch(setTwitterUsername(e.target.value))}
              />
              <input
                type="text"
                id="twitter_pass"
                name="twitter_pass"
                className="form-input"
                placeholder="Password"
                value={clientInput?.socials?.twitter?.password}
                onChange={(e) => dispatch(setTwitterPass(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* files */}
        {/* <FilesDetails /> */}
        <div className="flex w-full items-center justify-end gap-4">
          <button className="form-btn">Submit</button>
          <button
            className="rounded-lg border border-primary bg-white px-5 py-2 text-primary hover:bg-gray-100"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClient;
