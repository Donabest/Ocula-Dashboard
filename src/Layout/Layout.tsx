import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Sidebar from "../ui/Sidebar";
import Navbar from "../ui/Navbar";
import { useState } from "react";

function Layout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="font-montserrat flex bg-gray-100 min-h-screen ">
      <div className="hidden lg:block bg-white/80 w-66 mx-auto dark:bg-[#18212f] dark:text-white">
        <Sidebar />
      </div>
      <section className="flex-1 min-w-0 bg-gray-100 overflow-auto">
        <Navbar onMenuClick={() => setIsMobileNavOpen(true)} />
        <main className=" dark:bg-[#111827] min-h-screen overflow-x-hidden">
          <Outlet />
        </main>
      </section>

      <AnimatePresence>
        {isMobileNavOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              aria-label="Close navigation"
              onClick={() => setIsMobileNavOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] overflow-y-auto hide-scrollbar bg-white shadow-2xl dark:bg-[#18212f] dark:text-white lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <Sidebar isDrawer onNavigate={() => setIsMobileNavOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Layout;
