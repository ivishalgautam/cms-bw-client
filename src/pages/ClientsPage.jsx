import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../store/clientSlice";
import DataTable, { createTheme } from "react-data-table-component";
import { Link } from "react-router-dom";
import { FiEdit, FiExternalLink } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { publicRequest } from "../requesMethods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { openModal } from "../store/features/modal/updateModalSlice";
import UpdateClient from "../components/modals/UpdateClient";
import { getInputValues } from "../store/features/inputSlice";

const ClientsPage = () => {
  const dispatch = useDispatch();
  const { clients, isPending } = useSelector((store) => store.clients);
  const { isOpened } = useSelector((store) => store.updateModal);
  console.log(clients);

  useEffect(() => {
    dispatch(getClients());
  }, []);

  const deleteClient = async (clientId) => {
    const confirmation = confirm(
      "Are you sure you want to delete this client?"
    );
    if (confirmation) {
      const resp = await publicRequest.delete(`/client/${clientId}`);
      console.log(resp.data);
      toast("Client deleted successfully!");
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.clientDetails.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.clientDetails.email,
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
          <button onClick={() => deleteClient(row._id)}>
            <AiOutlineDelete size={18} className="text-red-500" />
          </button>
          <button
            onClick={() => {
              dispatch(openModal());
              dispatch(getInputValues(row._id));
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
      <ToastContainer position="bottom-right" />
      {isOpened && <UpdateClient />}
    </div>
  );
};

export default ClientsPage;
