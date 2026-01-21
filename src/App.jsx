import { useState } from "react";
import { demoApplications } from "./Data/demoData";
import Dashboard from "./components/Dashboard";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import Insights from "./components/Insights";



export default function App() {
  const [applications, setApplications] = useState(demoApplications);

  const addApplication = (app) => {
    setApplications([...applications, app]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-gray-600 mb-6">Track job applications. Learn what works. Get hired faster🚀</h1>

      <Dashboard applications={applications} />
      <Insights applications={applications} />

      <ApplicationForm addApplication={addApplication} />

      <ApplicationList applications={applications} />
    </div>
  );
}

