import useClickOutSide from "../hooks/useClickOutSide";

function CreateProjectForm({ handler }: { handler: () => void }) {
  const { ref } = useClickOutSide(handler);
  return (
    <div className="absolute top-13 z-999" ref={ref}>
      <div className="bg-white/2 backdrop-blur-lg border border-black/5 px-4 py-2 space-y-2 rounded-lg">
        <h1 className="text-sm text-black/40 bg-black/5 px-3 mt-1 border border-black/3 w-fit rounded-sm shadow-lg">
          Create project
        </h1>
        <input
          type="text"
          placeholder="Project Name"
          className="border border-gray-300 px-2 py-0.5 mt-0.5 rounded-lg outline-0 "
        />

        <div className="flex justify-end items-center gap-1.5 mt-0.5">
          <button className="bg-blue-600 text-white px-3 py-0.5 rounded-lg cursor-pointer">
            Save
          </button>
          <button
            className="bg-transparent px-3 py-0.5 border border-gray-300 rounded-lg cursor-pointer"
            onClick={handler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProjectForm;
