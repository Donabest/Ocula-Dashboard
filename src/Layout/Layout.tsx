import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";

function Layout() {
  return (
    <div className="font-montserrat flex min-h-screen">
      <div className="flex bg-white/80 w-64 mx-auto">
        <Sidebar />
      </div>
      <section className="flex-1 bg-gray-100 p-6 rounded-tl-4xl">
        <Outlet />
      </section>
    </div>
  );
}

export default Layout;
