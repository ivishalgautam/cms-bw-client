import React, { useState } from "react";
import { publicRequest } from "../requesMethods";
import { ToastContainer, toast } from "react-toastify";

const CreateManagerPage = () => {
  const [isPending, setIsPending] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const addManager = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const resp = await publicRequest.post("/project-manager", {
        name: inputs.name,
        email: inputs.email,
        phone: inputs.phone,
      });
      if (resp.statusText === "OK") {
        toast("Manager added successfully");
        setIsPending(false);
      }
      return resp.data;
    } catch (error) {
      setIsPending(false);
      console.log(error.message);
    }
  };

  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-bold">Add new manager</h1>
      <div className="mt-10">
        <form onSubmit={addManager}>
          <div className="form-group">
            <label htmlFor="manager-name">Name</label>
            <input
              type="text"
              id="manager-name"
              name="name"
              className="form-input"
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group my-4">
            <label htmlFor="manager-email">Email</label>
            <input
              type="text"
              id="manager-email"
              name="email"
              className="form-input"
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="manager-phone">Phone</label>
            <input
              type="text"
              id="manager-phone"
              name="phone"
              className="form-input"
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>

          <button
            className={`${
              isPending ? "cursor-not-allowed" : ""
            } form-btn mt-5 transition-all`}
          >
            {isPending ? (
              <div
                className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] transition-all motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            ) : (
              "Add new manager"
            )}
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default CreateManagerPage;
