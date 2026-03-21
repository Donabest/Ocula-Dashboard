import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";

function Layout() {
  return (
    <div className="font-montserrat container max-w-6xl mx-auto grid grid-cols-[26rem,1fr] grid-rows-[auto,1fr] h-screen pt-6">
      <div className="flex gap-10">
        <div>
          <Sidebar />
        </div>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default Layout;
