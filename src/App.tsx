import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import OculaAi from "./pages/OculaAi.tsx";
import MyTasks from "./pages/MyTasks.tsx";
import Calender from "./pages/Calender.tsx";
import Analytics from "./pages/Analytics.tsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="OculaAi" element={<OculaAi />} />
          <Route path="MyTasks" element={<MyTasks />} />
          <Route path="Calender" element={<Calender />} />
          <Route path="Analytics" element={<Analytics />} />
        </Route>
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
