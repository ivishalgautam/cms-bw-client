import React from "react";
import { publicRequest } from "../../requesMethods";

const UpdateManagerModal = ({ setIsOpened, managerData }) => {
  console.log(managerData);
  async function updateManager(managerId) {
    const resp = await publicRequest.put(`/project-manager/${managerId}`, {
      name: managerData.name,
      email: managerData.email,
      phone: managerData.phone,
    });
    console.log(resp.data);
  }
  return (
    <div className="absolute left-0 top-0 z-50 flex min-h-screen w-screen items-center justify-center bg-gray-900 bg-opacity-90">
      <form
        // ref={formRef}
        className="flex w-[35rem] flex-col items-start justify-center gap-5 rounded-lg bg-white p-10"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-primary">Update Manager</h2>
        <div className="form-group input-container w-full">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter name"
            value={managerData?.name}
            onChange={(e) => {}}
          />
        </div>
        <div className="form-group input-container w-full">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter email"
            value={managerData?.email}
            onChange={(e) => {}}
          />
        </div>
        <div className="form-group input-container w-full">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="Enter phone"
            value={managerData?.phone}
            onChange={(e) => {}}
          />
        </div>
        <div className="mt-2 flex w-full gap-2">
          <button
            className="form-btn form-btn-primary w-1/2"
            onClick={updateManager}
          >
            Update
          </button>
          <button
            className="form-btn form-btn-secondary w-1/2"
            onClick={() => setIsOpened(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateManagerModal;
