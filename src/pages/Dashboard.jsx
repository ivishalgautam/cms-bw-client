import React, { useEffect, useState } from "react";
import { AiOutlineProject } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { getClients } from "../store/features/client/clientSlice";
Chart.register({
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
});

const Dashboard = () => {
  const { clients } = useSelector((store) => store.clients);
  const dispatch = useDispatch();
  console.log(clients?.map((client) => new Date(client.createdAt).getMonth()));

  const data = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    dispatch(getClients());
  }, []);

  return (
    <div className="rounded-lg bg-white px-10 py-5">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-10 grid grid-rows-2 gap-y-4">
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

        {/* row 2 */}
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <h2 className="text-xl font-bold ">Earnings</h2>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
