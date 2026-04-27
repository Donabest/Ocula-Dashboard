import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Navbar from "../ui/Navbar";

function Layout() {
  return (
    <div className="font-montserrat flex bg-gray-100  h-screen  ">
      <div className=" bg-white/80 w-66 mx-auto  dark:bg-[#18212f] dark:text-white">
        <Sidebar />
      </div>
      <section className=" flex-1 bg-gray-100  overflow-auto">
        <Navbar />
        <main className=" dark:bg-[#111827] min-h-screen">
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default Layout;
