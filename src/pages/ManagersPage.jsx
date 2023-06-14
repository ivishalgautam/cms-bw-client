import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getManagers } from "../store/features/managerSlice";
import DataTable from "react-data-table-component";
import { FiEdit, FiExternalLink } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { publicRequest } from "../requesMethods";
import UpdateManagerModal from "../components/modals/UpdateManagerModal";

const ManagersPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [managerData, setManagerData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { managers } = useSelector((store) => store.managers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManagers());
    console.log(managers);
  }, []);

  const deleteManager = async (managerId) => {
    const resp = await publicRequest.delete(`/project-manager/${managerId}`);
    if (resp.status === 200) {
      toast("Manager deleted");
      console.log(resp);
    }
  };

  const getManager = async (managerId) => {
    const resp = await publicRequest.get(`/project-manager/${managerId}`);
    if (resp.status === 200) {
      setIsOpened(true);
      setManagerData(resp.data);
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => (
        <div className="flex items-center justify-center gap-1">
          <button onClick={() => deleteManager(row._id)}>
            <AiOutlineDelete size={18} className="text-red-500" />
          </button>
          <button onClick={() => getManager(row._id)}>
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
    <div>
      <DataTable
        title="Our clients"
        columns={columns}
        data={managers}
        pagination
        selectableRows
        customStyles={customStyles}
      />
      {isOpened && (
        <UpdateManagerModal
          setIsOpened={setIsOpened}
          managerData={managerData}
        />
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ManagersPage;
