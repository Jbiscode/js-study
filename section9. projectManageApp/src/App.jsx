import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    currentAction: "nothing-selected",
    selectedProjectId: undefined,
    projects: [],
  });

  let content;

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        currentAction: "add-project",
      };
    });
  }
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        currentAction: "nothing-selected",
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: (Math.random() * 100000000).toFixed(0),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        currentAction: "nothing-selected",
      };
    });
  }
  console.log(projectsState);

  if (projectsState.currentAction === "nothing-selected") {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.currentAction === "add-project") {
    content = <NewProject onAddClick={handleAddProject} onCancelClick={handleCancelAddProject} />;
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
        />
        {content}
      </main>
    </>
  );
}

export default App;
