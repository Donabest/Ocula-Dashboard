interface schedule {
  date: number;
  title: string;
  priority: string;
  meet: string;
  start: string;
  end: string;
}
interface taskProp {
  task: schedule;
}
function CalendarTaskBlock({ task }: taskProp) {
  const hh = 60;
  const [s, m] = task.start.split(":").map(Number);
  const [e, em] = task.end.split(":").map(Number);

  const siM = s * 60 + m;
  const eiM = e * 60 + em;

  const t = (siM / 60) * hh;
  const h = ((eiM - siM) / 60) * hh;

  const left = `${task.date * 20}%`;

  return (
    <div
      className="absolute"
      style={{ top: `${t}px`, height: `${h}px`, left, width: "20%" }}
    >
      {task.title}
    </div>
  );
}

export default CalendarTaskBlock;
