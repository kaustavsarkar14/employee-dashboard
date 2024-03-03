import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Employee from "./components/Employee/Employee";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>login</div>} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/employee"
          element={
            <Layout>
              <Employee />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
