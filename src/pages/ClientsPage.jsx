import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../store/features/client/clientSlice";
import DataTable, { createTheme } from "react-data-table-component";
import { Link } from "react-router-dom";
import { FiEdit, FiExternalLink } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { publicRequest } from "../requesMethods";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { openModal } from "../store/features/modal/updateModalSlice";
import UpdateClient from "../components/modals/UpdateClient";
import { setFieldValue } from "../store/features/input/inputSlice";
import { setSelectedManagers } from "../store/features/manager/managerSlice";

const ClientsPage = () => {
  const dispatch = useDispatch();
  const { clients } = useSelector((store) => store.clients);
  const { isOpened } = useSelector((store) => store.updateModal);
  const [clientId, setClientId] = useState("");

  // console.log(clients);

  useEffect(() => {
    dispatch(getClients());
  }, [isOpened]);

  const handleDelete = useCallback(
    async (clientId) => {
      await deleteClient(clientId);
      dispatch(getClients());
    },
    [deleteClient]
  );

  async function deleteClient(clientId) {
    const confirmation = confirm(
      "Are you sure you want to delete this client?"
    );
    if (confirmation) {
      const resp = await publicRequest.delete(`/client/${clientId}`);
      console.log(resp.data);
      toast("Client deleted successfully!");
    }
  }

  async function getClientData(clientId) {
    const resp = await publicRequest.get(`/client/${clientId}`);
    console.log(resp.data);
    const {
      clientDetails: { name, email, phone },
      projectDetails: {
        projectName,
        projectManagers,
        projectStartDate,
        projectExpectedDeliveryDate,
        projectDeliveryDate,
      },
      domain,
      hosting,
      socials: { facebook, instagram, linkedin, twitter },
      pricing: { basePrice, additionalCosts, partialPaid, totalCost },
      AMC,
    } = resp.data;
    dispatch(setSelectedManagers(projectManagers));
    // console.log(projectManagers.map((manager) => manager._id));
    dispatch(setFieldValue({ field: "clientName", value: name }));
    dispatch(setFieldValue({ field: "clientEmail", value: email }));
    dispatch(setFieldValue({ field: "clientPhone", value: phone }));
    dispatch(setFieldValue({ field: "proName", value: projectName }));
    dispatch(
      setFieldValue({
        field: "proManagers",
        value: projectManagers.map((manager) => manager._id),
      })
    );
    dispatch(
      setFieldValue({
        field: "proStartDate",
        value: new Date(projectStartDate).toISOString(),
      })
    );
    dispatch(
      setFieldValue({
        field: "proEndDate",
        value: new Date(projectDeliveryDate).toISOString(),
      })
    );
    dispatch(
      setFieldValue({
        field: "proExpDate",
        value: new Date(projectExpectedDeliveryDate).toISOString(),
      })
    );
    // dispatch
    dispatch(setFieldValue({ field: "domainName", value: domain?.name }));
    dispatch(setFieldValue({ field: "domainId", value: domain?.id }));
    dispatch(setFieldValue({ field: "domainPass", value: domain?.password }));
    dispatch(
      setFieldValue({
        field: "domainStartDate",
        value: new Date(domain?.startDate).toISOString(),
      })
    );
    dispatch(
      setFieldValue({
        field: "domainEndDate",
        value: new Date(domain?.endDate).toISOString(),
      })
    );
    dispatch(setFieldValue({ field: "hostingName", value: hosting?.name }));
    dispatch(setFieldValue({ field: "hostingId", value: hosting?.id }));
    dispatch(setFieldValue({ field: "hostingPass", value: hosting?.password }));
    dispatch(
      setFieldValue({
        field: "hostingStartDate",
        value: new Date(hosting?.startDate).toISOString(),
      })
    );
    dispatch(
      setFieldValue({
        field: "hostingEndDate",
        value: new Date(hosting?.endDate).toISOString(),
      })
    );
    dispatch(setFieldValue({ field: "facebookUsername", value: facebook?.id }));
    dispatch(
      setFieldValue({ field: "facebookPass", value: facebook?.password })
    );
    dispatch(setFieldValue({ field: "facebookPath", value: facebook?.url }));
    dispatch(setFieldValue({ field: "instaUsername", value: instagram?.id }));
    dispatch(setFieldValue({ field: "instaPass", value: instagram?.password }));
    dispatch(setFieldValue({ field: "instaPath", value: instagram?.url }));
    dispatch(setFieldValue({ field: "linkedInUsername", value: linkedin?.id }));
    dispatch(
      setFieldValue({ field: "linkedInPass", value: linkedin?.password })
    );
    dispatch(setFieldValue({ field: "linkedInPath", value: linkedin?.url }));
    dispatch(setFieldValue({ field: "twitterUsername", value: twitter?.id }));
    dispatch(setFieldValue({ field: "twitterPass", value: twitter?.password }));
    dispatch(setFieldValue({ field: "twitterPath", value: twitter?.url }));
    dispatch(setFieldValue({ field: "basePrice", value: basePrice }));
    dispatch(
      setFieldValue({
        field: "additionalCosts",
        value: !additionalCosts ? 0 : additionalCosts,
      })
    );
    dispatch(
      setFieldValue({
        field: "partialPaid",
        value: !partialPaid ? 0 : partialPaid,
      })
    );
    dispatch(
      setFieldValue({ field: "totalCost", value: !totalCost ? 0 : totalCost })
    );
    dispatch(
      setFieldValue({
        field: "amcStartDate",
        value: new Date(AMC?.startDate).toISOString(),
      })
    );
    dispatch(
      setFieldValue({
        field: "amcEndDate",
        value: new Date(AMC?.endDate).toISOString(),
      })
    );
  }

  const columns = [
    {
      name: "Name",
      selector: (row) => row.clientDetails.name,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.clientDetails.phone,
      sortable: true,
    },
    {
      name: "Project Name",
      selector: (row) => row.projectDetails.projectName,
      sortable: true,
    },
    {
      name: "Start date",
      selector: (row) =>
        new Date(row.projectDetails.projectStartDate).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Delivery date",
      selector: (row) =>
        new Date(row.projectDetails.projectDeliveryDate).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => (
        <div className="flex items-center justify-center gap-1">
          <button onClick={() => handleDelete(row._id)}>
            <AiOutlineDelete size={18} className="text-red-500" />
          </button>
          <button
            onClick={() => {
              getClientData(row._id);
              dispatch(openModal());
              setClientId(row._id);
            }}
          >
            <FiEdit size={18} className="text-green-500" />
          </button>
          <Link to={`/client/${row._id}`}>
            <FiExternalLink size={18} className="text-blue-500" />
          </Link>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Payment",
      selector: (row) => {
        return (
          <button
            className={`${
              row?.payment === "Received"
                ? "bg-emerald-500"
                : row?.payment === "Partial Paid"
                ? "bg-orange-500"
                : "bg-red-500"
            } rounded-full px-2 py-1 text-white`}
          >
            {row?.payment === "Received"
              ? "Paid"
              : row?.payment === "Partial Paid"
              ? "Partial paid"
              : "Pending"}
          </button>
        );
      },
    },
  ];

  const customStyles = {
    title: {
      style: {
        fontSize: "32px",
        fontWeight: 700,
      },
    },
    rows: {
      style: {
        fontSize: "12px",
        fontWeight: 500,
        minHeight: "50px",
      },
    },
  };

  return (
    <div className="overflow-hidden rounded-lg bg-white px-8 py-4">
      <DataTable
        title="Our clients"
        columns={columns}
        data={clients}
        pagination
        selectableRows
        customStyles={customStyles}
      />
      {isOpened && <UpdateClient id={clientId} />}
    </div>
  );
};

export default ClientsPage;
