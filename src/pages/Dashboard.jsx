import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="rounded-lg bg-white px-10 py-5">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-10 grid grid-rows-2">
        {/* row 1 */}
        <div className="grid grid-cols-3 gap-6">
          {/* earnings */}
          <div className="rounded-lg bg-primary p-4 text-white shadow-md">
            <h2 className="text-center text-2xl font-bold">Earnings</h2>
            <div className="flex-center">
              <div>
                <BsCurrencyRupee size={50} />
              </div>
              <div className="text-xl font-bold">2999</div>
            </div>
          </div>
          {/* projects */}
          <div className="rounded-lg shadow-md">
            <h2 className="text-center text-2xl font-bold">Projects</h2>
            <div className="flex-center">
              <div>
                <AiOutlineProject size={50} />
              </div>
              <div>20</div>
            </div>
          </div>
          <div className="p-2">
            <p className="mb-3 text-sm font-bold">Your projects</p>
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <div className="p-2">
                <h6 className="text-sm font-bold">Project 1</h6>
                <p className="text-xs font-bold text-gray-400">
                  5 days remaining
                </p>
              </div>
              <div className="p-2">
                <h6 className="text-sm font-bold">Project 1</h6>
                <p className="text-xs font-bold text-gray-400">
                  5 days remaining
                </p>
              </div>
              <button className="w-full text-end text-sm font-bold text-primary">
                <Link to="/clients">See all projects</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
