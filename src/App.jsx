import { Route, Routes } from "react-router-dom";
import ClientTable from "./components/ClientTable";
import Sidebar from "./components/Sidebar";
import ClientsPage from "./pages/ClientsPage";
import CreateClientPage from "./pages/CreateClientPage";
import ClientPage from "./pages/ClientPage";
import CreateManagerPage from "./pages/CreateManagerPage";
import ManagersPage from "./pages/ManagersPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <ClientTable /> */}
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/client/edit/:clientId" element={<ClientsPage />} />
          <Route path="/client/add" element={<CreateClientPage />} />
          <Route path="/client/:clientId" element={<ClientPage />} />
          <Route path="/project-managers/add" element={<CreateManagerPage />} />
          <Route path="/project-managers" element={<ManagersPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
