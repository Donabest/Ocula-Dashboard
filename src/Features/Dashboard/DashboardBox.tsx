import DashboardCard1 from "../../ui/DashboardCard1";

function DashboardBox() {
  return (
    <section className="grid grid-cols-2  px-8">
      <main className="flex flex-col ">
        <DashboardCard1 />

        {/* <div className="flex justify-between"> */}

        {/* <div>
          <div>
            <h1>
              <TbTargetArrow />
              My Goals
            </h1>
          </div>
        </div> */}
      </main>

      <div></div>
    </section>
  );
}

export default DashboardBox;
