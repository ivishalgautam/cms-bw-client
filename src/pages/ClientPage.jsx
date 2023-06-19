import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../store/features/client/getClientSlice";
import { useParams } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import twitter from "../assets/icons/twitter.png";
import { FiDownload } from "react-icons/fi";

const ClientPage = () => {
  const { client } = useSelector((store) => store.client);
  let filePath;
  client?.files?.map((file) => {
    filePath = file.path.split("/").slice(1).join("/");
  });
  console.log(filePath);
  const dispatch = useDispatch();
  const { clientId } = useParams();
  useEffect(() => {
    dispatch(getClient(clientId));
  }, []);

  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-extrabold capitalize text-primary">
        {client?.projectDetails?.projectName}
      </h1>
      <div className="mt-6 grid grid-cols-4 gap-4">
        {/* client details */}
        <div className="col-span-4 grid grid-cols-4 gap-4 rounded-lg bg-white p-4 shadow-md">
          <div className="col-span-3">
            <h2 className="text-2xl font-bold text-gray-700">Client</h2>
            <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
              <span>Name :</span>
              <h2 className="capitalize">{client?.clientDetails?.name}</h2>
            </div>
            <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
              <span>Email :</span>
              <h2>{client?.clientDetails?.email}</h2>
            </div>
            <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
              <span>Phone :</span>
              <h2>{client?.clientDetails?.phone}</h2>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-2 place-items-center">
            {client?.socials?.facebook && <img src={facebook} alt="" />}
            {client?.socials?.instagram && <img src={instagram} alt="" />}
            {client?.socials?.linkedin && <img src={linkedin} alt="" />}
            {client?.socials?.twitter && <img src={twitter} alt="" />}
          </div>
        </div>

        {/* project details */}
        <div className="col-span-4 rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-2xl font-bold text-gray-700">Project</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
                <span>Name :</span>
                <h2 className="capitalize">
                  {client?.projectDetails?.projectName}
                </h2>
              </div>
              <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
                <span>Project start date :</span>
                <h2 className="capitalize">
                  {new Date(
                    client?.projectDetails?.projectStartDate
                  ).toDateString()}
                </h2>
              </div>
              <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
                <span>Project expected completion date :</span>
                <h2 className="capitalize">
                  {new Date(
                    client?.projectDetails?.projectExpectedDeliveryDate
                  ).toDateString()}
                </h2>
              </div>
              <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
                <span>Project end date :</span>
                <h2 className="capitalize">
                  {new Date(
                    client?.projectDetails?.projectDeliveryDate
                  ).toDateString()}
                </h2>
              </div>
            </div>

            {/* managers */}
            <div className="col-span-1 grid grid-cols-2 gap-4">
              {client?.projectDetails?.projectManagers?.map((manager) => {
                return (
                  <div
                    key={manager._id}
                    className="rounded-lg bg-primary p-4 text-white"
                  >
                    <h3 className="text-xl font-bold capitalize">
                      {manager.name}
                    </h3>
                    <div className="my-2 text-lg">
                      <span>Email: </span>
                      <p className="break-words font-bold">{manager.email}</p>
                    </div>
                    <div className="text-lg">
                      <span>Phone: </span>
                      <p className="font-bold">{manager.phone}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* domain details */}
        <div className="col-span-2 rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-2xl font-bold text-gray-700">Domain</h2>
          <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
            <span>Name :</span>
            <h2 className="capitalize">{client?.domain?.name}</h2>
          </div>
          <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
            <span>Id :</span>
            <h2 className="capitalize">{client?.domain?.id}</h2>
          </div>
          <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
            <span>Password :</span>
            <h2 className="capitalize">{client?.domain?.password}</h2>
          </div>
          <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
            <span>Start date :</span>
            <h2>{new Date(client?.domain?.startDate).toDateString()}</h2>
          </div>
          <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
            <span>Renewal :</span>
            <h2>{new Date(client?.domain?.endDate).toDateString()}</h2>
          </div>
        </div>

        {/* hosting details */}
        <div className="col-span-2 rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-2xl font-bold text-gray-700">Hosting</h2>
          <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
            <span>Name :</span>
            <h2 className="capitalize">{client?.hosting?.name}</h2>
          </div>
          <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
            <span>Id :</span>
            <h2 className="capitalize">{client?.hosting?.id}</h2>
          </div>
          <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
            <span>Password :</span>
            <h2 className="capitalize">{client?.hosting?.password}</h2>
          </div>
          <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
            <span>Start date :</span>
            <h2>{new Date(client?.hosting?.startDate).toDateString()}</h2>
          </div>
          <div className="mt-2 flex items-center justify-start gap-4 rounded bg-primary p-2 text-sm font-bold text-white shadow-md">
            <span>Renewal :</span>
            <h2>{new Date(client?.hosting?.endDate).toDateString()}</h2>
          </div>
        </div>

        {/* files */}
        <div className="col-span-4 w-full p-4">
          <ul className="flex-center w-full gap-3">
            {client?.files?.map((file) => {
              return (
                <li className="flex-center gap-2 rounded bg-white px-4 py-2 shadow-md">
                  <a
                    href={`https://cms-bw-production-646c.up.railway.app/${file.path
                      .split("/")
                      .slice(1)
                      .join("/")}`}
                    download
                  >
                    {file.filename}
                  </a>
                  <FiDownload className="text-primary" size={20} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
