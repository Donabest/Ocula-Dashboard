import DashboardCard1 from "../../ui/DashboardCard1";
import DashboardCard2 from "../../ui/DashboardCard2";
import DashboardCard3 from "../../ui/DashboardCard3";
import DashboardCard4 from "../../ui/DashboardCard4";
import DashboardCard5 from "../../ui/DashboardCard5";

function DashboardBox() {
  return (
    <section className="grid grid-cols-2 gap-8 px-8">
      <main className="flex flex-col ">
        <DashboardCard1 />
        <DashboardCard2 />
      </main>

      <main className="flex flex-col">
        <DashboardCard3 />
        <DashboardCard4 />
        <DashboardCard5 />
      </main>
    </section>
  );
}

export default DashboardBox;
