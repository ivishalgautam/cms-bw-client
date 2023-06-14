import React, { useRef, useState } from "react";
import ProjectDetails from "../components/create-client/ProjectDetails";
import DomainDetails from "../components/create-client/DomainDetails";
import HostingDetails from "../components/create-client/HostingDetails";
import ClientDetails from "../components/create-client/ClientDetails";
import SocialsDetails from "../components/create-client/SocialsDetails";
import FilesDetails from "../components/create-client/FilesDetails";
import { publicRequest } from "../requesMethods";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateClientPage = () => {
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
    filename,
    fileData,
    fileContentType,
  } = useSelector((store) => store.inputVal);

  const clientdata = {
    clientDetails: {
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
    },
    projectDetails: {
      projectName: proName,
      projectManagers: proManagers,
      projectStartDate: proStartDate,
      projectExpectedDeliveryDate: proExpDate,
      projectDeliveryDate: proEndDate,
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
    // files: {
    //   filename: filename,
    //   data: fileData,
    //   contentType: fileContentType,
    // },
  };
  const navigate = useNavigate();
  const formRef = useRef(null);
  async function handleFormSubmit(e) {
    e.preventDefault();
    const resp = await publicRequest.post("/client", clientdata);
    if (resp.statusText === "OK") {
      formRef.current.reset();
      alert("client created successfull");
      navigate("/clients");
    }
  }

  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-bold">Add new client</h1>
      <div className="mt-10">
        <form
          ref={formRef}
          className="flex flex-col items-start justify-center gap-5"
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
        >
          {/* client details */}
          <ClientDetails />

          {/* project details */}
          <ProjectDetails />

          {/* domain details */}
          <DomainDetails />

          {/* domain details */}
          <HostingDetails />

          {/* socials */}
          <SocialsDetails />

          {/* files */}
          {/* <FilesDetails /> */}
          <button className="w-full rounded-lg bg-primary py-3 text-white hover:bg-primary-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateClientPage;
