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
import { clearAllFields } from "../store/features/input/inputSlice";
import Pricing from "../components/create-client/Pricing";
import AMC from "../components/create-client/AMC";
import { setSelectedManagers } from "../store/features/manager/managerSlice";

const CreateClientPage = () => {
  const [isCreating, setIsCreating] = useState(false);
  const formData = new FormData();
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
    amcStartDate,
    amcEndDate,
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
    basePrice,
    additionalCosts,
    totalCost,
    partialPaid,
  } = useSelector((store) => store.inputVal);
  const dispatch = useDispatch();

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
    AMC: {
      startDate: amcStartDate,
      endDate: amcEndDate,
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
    pricing: {
      basePrice,
      additionalCosts,
      totalCost,
      partialPaid,
    },
  };

  formData.append("clientData", JSON.stringify(clientdata));
  const navigate = useNavigate();
  const formRef = useRef(null);
  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      setIsCreating(true);
      const resp = await publicRequest.post("/client", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(resp.data);
      if (resp.statusText === "OK") {
        setIsCreating(false);
        dispatch(clearAllFields());
        dispatch(setSelectedManagers([]));
        alert("client created successfull");
        navigate("/clients");
      }
    } catch (error) {
      setIsCreating(false);
      console.log(error.response.data.error);
    }
  }

  return (
    <div className="rounded-lg bg-white px-10 py-5">
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

          {/* AMC */}
          <AMC />

          {/* socials */}
          <SocialsDetails />

          {/* files */}
          <FilesDetails formData={formData} />

          {/* pricing */}
          <Pricing />

          {/* cta */}
          <button className="w-full rounded-lg bg-primary py-3 text-white hover:bg-primary-dark">
            {isCreating ? "Creating..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateClientPage;
