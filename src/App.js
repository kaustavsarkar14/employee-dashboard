import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>login</div>} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <h1>Dashborad</h1>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
