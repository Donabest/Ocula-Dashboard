import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Navbar from "../ui/Navbar";

function Layout() {
  return (
    <div className="font-montserrat flex h-screen">
      <div className="flex bg-white/80 w-66 mx-auto dark:bg-black/80 dark:text-white">
        <Sidebar />
      </div>
      <section className="flex-1 bg-gray-100 dark:bg-black/70">
        <Navbar />
        <Outlet />
      </section>
    </div>
  );
}

export default Layout;
