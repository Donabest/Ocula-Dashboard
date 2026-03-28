import { motion } from "motion/react";
import DashboardCard1 from "../../ui/DashboardCard1";
import DashboardCard2 from "../../ui/DashboardCard2";
import DashboardCard3 from "../../ui/DashboardCard3";
import DashboardCard4 from "../../ui/DashboardCard4";
import DashboardCard5 from "../../ui/DashboardCard5";

function DashboardBox() {
  return (
    <section className="grid grid-cols-2 gap-8 px-8">
      <motion.main
        className="flex flex-col "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
      >
        <DashboardCard1 />
        <DashboardCard2 />
      </motion.main>

      <motion.main
        className="flex flex-col"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
      >
        <DashboardCard3 />
        <DashboardCard4 />
        <DashboardCard5 />
      </motion.main>
    </section>
  );
}

export default DashboardBox;
