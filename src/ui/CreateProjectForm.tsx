import { useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import { useCreateProject } from "../Features/Project/useCreateProject";
import type { projectType } from "../utilities/type";
import { useEditProject } from "../Features/Project/useEditProject";
import { useUser } from "../Features/Authentication/useUser";

function CreateProjectForm({
  handler,
  projectToEdit,
}: {
  handler: () => void;
  projectToEdit?: projectType;
}) {
  const { createProject, isCreating } = useCreateProject();
  const { editProject, isProjectEditing } = useEditProject();
  const { user } = useUser();

  const [projectName, setProjectName] = useState<string>(
    projectToEdit?.projectName ?? "",
  );

  function handleClick() {
    if (!projectName.trim()) return;

    if (!projectToEdit) {
      createProject(
        { projectName, userId: user?.id },
        {
          onSuccess: () => {
            handler();
          },
        },
      );
    }

    // Edit
    if (projectToEdit) {
      editProject(
        { newProjectName: projectName, id: projectToEdit.id },
        {
          onSuccess: () => {
            handler();
          },
        },
      );
    }
  }

  const { ref } = useClickOutSide(handler);

  const isWorking = isProjectEditing || isCreating;
  return (
    <div className="absolute top-13 z-999" ref={ref}>
      <div className="bg-white/2 backdrop-blur-lg border border-black/5 px-4 py-2 space-y-2 rounded-lg dark:bg-black/10 dark:border-white/10">
        <h1 className="text-sm text-black/40 bg-black/5 px-3 mt-1 border border-black/3 w-fit rounded-sm shadow-lg dark:text-gray-300 dark:border-white/2 dark:bg-white/8">
          Create project
        </h1>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          className="border border-gray-300 px-2 py-0.5 mt-0.5 rounded-lg outline-0 "
          onChange={(e) => setProjectName(e.target.value)}
        />

        <div className="flex justify-end items-center gap-1.5 mt-2">
          <button
            className="bg-blue-600 text-white text-sm px-2 py-0.5 rounded-lg cursor-pointer"
            onClick={handleClick}
            disabled={isWorking}
          >
            {isCreating ? "..." : !projectToEdit && "save"}
            {isProjectEditing ? "..." : projectToEdit && "Edit"}
          </button>
          <button
            className="bg-transparent text-sm px-2 py-0.5 border border-gray-300 rounded-lg cursor-pointer"
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
