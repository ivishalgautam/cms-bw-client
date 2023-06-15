import React, { useRef, useState } from "react";
import { publicRequest } from "../requesMethods";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateManagerPage = () => {
  const [isPending, setIsPending] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const formRef = useRef(null);
  const navigate = useNavigate();
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
      formRef.current.reset();
      navigate("/project-managers");
      return resp.data;
    } catch (error) {
      setIsPending(false);
      console.log(error.message);
    }
  };

  return (
    <div className="rounded-lg bg-white px-10 py-5">
      <h1 className="text-3xl font-bold">Add new manager</h1>
      <div className="mt-10">
        <form ref={formRef} onSubmit={addManager}>
          <div className="form-group">
            <label htmlFor="manager-name">Name</label>
            <input
              type="text"
              id="manager-name"
              name="name"
              className="form-input"
              placeholder="Enter name"
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
              placeholder="Enter email"
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
              placeholder="Enter phone no."
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
            } form-btn form-btn-primary mt-5 transition-all`}
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
    </div>
  );
};

export default CreateManagerPage;
