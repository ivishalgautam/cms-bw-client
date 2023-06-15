import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getManagers } from "../store/features/managerSlice";
import DataTable from "react-data-table-component";
import { FiEdit, FiExternalLink } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { publicRequest } from "../requesMethods";
import UpdateManagerModal from "../components/modals/UpdateManagerModal";

const ManagersPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [managerData, setManagerData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });
  const { managers } = useSelector((store) => store.managers);
  const dispatch = useDispatch();

  const deleteManager = useCallback(async (managerId) => {
    const resp = await publicRequest.delete(`/project-manager/${managerId}`);
    if (resp.status === 200) {
      toast("Manager deleted");
    }
  }, []);

  useEffect(() => {
    dispatch(getManagers());
  }, [managers]);

  function handleDeleteManager(managerId) {
    deleteManager(managerId);
  }

  const getManager = async (managerId) => {
    const resp = await publicRequest.get(`/project-manager/${managerId}`);
    if (resp.status === 200) {
      setIsOpened(true);
      setManagerData({
        // _id: resp.data._id,
        id: resp.data._id,
        name: resp.data.name,
        email: resp.data.email,
        phone: resp.data.phone,
      });
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
          <button onClick={() => handleDeleteManager(row._id)}>
            <AiOutlineDelete size={18} className="text-red-500" />
          </button>
          <button onClick={() => getManager(row._id)}>
            <FiEdit size={18} className="text-green-500" />
          </button>
          <Link to={`/project-manager/${row._id}`}>
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
        title="Our project managers"
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
          setManagerData={setManagerData}
        />
      )}
    </div>
  );
};

export default ManagersPage;
