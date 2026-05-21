import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import OculaAi from "./pages/OculaAi.tsx";
import MyTasks from "./pages/MyTasks.tsx";
import Calender from "./pages/Calender.tsx";
import Analytics from "./pages/Analytics.tsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CalenderProvider } from "./Context/useCalender.tsx";
import Projects from "./pages/Projects.tsx";
import Settings from "./pages/Settings.tsx";
import LogIn from "./pages/LogIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import ProtectedRouteLayout from "./Layout/ProtectedRouteLayout.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CalenderProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRouteLayout>
                  <Layout />
                </ProtectedRouteLayout>
              }
            >
              <Route index element={<Navigate replace to="Dashboard" />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="OculaAi" element={<OculaAi />} />
              <Route path="MyTasks" element={<MyTasks />} />
              <Route path="Calender" element={<Calender />} />
              <Route path="Analytics" element={<Analytics />} />
              <Route path="project/:projectId" element={<Projects />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="Login" element={<LogIn />} />
            <Route path="SignUp" element={<SignUp />} />
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
      </CalenderProvider>
    </QueryClientProvider>
  );
}

export default App;
